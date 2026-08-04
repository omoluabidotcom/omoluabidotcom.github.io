/**
 * Build-time Medium fetcher.
 *
 * Reads MEDIUM_HANDLE from src/config.ts, pulls the matching Medium RSS feed,
 * normalizes each article, and writes public/blog-posts.json (which the Blog
 * component fetches at runtime). Runs in CI on every deploy + a daily cron, and
 * locally via `npm run fetch:blog` / the `prebuild` hook.
 *
 * Fail-soft by design: any missing handle, network error, or parse failure
 * leaves the existing JSON untouched (or writes []) and exits 0, so a build is
 * never blocked by Medium being unreachable.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { XMLParser } from 'fast-xml-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT = resolve(ROOT, 'public', 'blog-posts.json');

/** Read MEDIUM_HANDLE / MEDIUM_IS_PUBLICATION out of src/config.ts without importing TS. */
function readConfig() {
  const src = readFileSync(resolve(ROOT, 'src', 'config.ts'), 'utf8');
  const handle = src.match(/MEDIUM_HANDLE\s*=\s*['"]([^'"]*)['"]/)?.[1] ?? '';
  const isPub = /MEDIUM_IS_PUBLICATION\s*=\s*true/.test(src);
  return { handle, isPub };
}

function feedUrl(handle, isPub) {
  return isPub
    ? `https://medium.com/feed/${handle}`
    : `https://medium.com/feed/@${handle}`;
}

function stripHtml(html = '') {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function firstImage(html = '') {
  return html.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1] ?? null;
}

function toArray(v) {
  if (v === undefined || v === null) return [];
  return Array.isArray(v) ? v : [v];
}

function normalize(item) {
  const content = item['content:encoded'] || item.description || '';
  const text = stripHtml(content);
  const words = text ? text.split(/\s+/).length : 0;
  return {
    id: String(item.guid?.['#text'] ?? item.guid ?? item.link ?? item.title),
    title: String(item.title ?? 'Untitled').trim(),
    link: String(item.link ?? ''),
    date: item.pubDate ? new Date(item.pubDate).toISOString() : null,
    tags: toArray(item.category).map((c) => String(c?.['#text'] ?? c)).slice(0, 4),
    excerpt: text.slice(0, 200).trim() + (text.length > 200 ? '…' : ''),
    cover: firstImage(content),
    readingTime: Math.max(1, Math.round(words / 200)),
    source: 'medium',
  };
}

function writeOut(posts) {
  writeFileSync(OUT, JSON.stringify(posts, null, 2) + '\n', 'utf8');
}

function keepExistingOrEmpty(reason) {
  console.warn(`[fetch-medium] ${reason} — keeping existing blog-posts.json.`);
  if (!existsSync(OUT)) writeOut([]);
}

async function main() {
  const { handle, isPub } = readConfig();

  if (!handle) {
    keepExistingOrEmpty('MEDIUM_HANDLE is empty');
    return;
  }

  const url = feedUrl(handle, isPub);
  console.log(`[fetch-medium] Fetching ${url}`);

  let xml;
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'yahayayusuf-portfolio/1.0 (+https://github.com/omoluabidotcom)' },
    });
    if (!res.ok) {
      keepExistingOrEmpty(`feed responded ${res.status}`);
      return;
    }
    xml = await res.text();
  } catch (err) {
    keepExistingOrEmpty(`network error: ${err.message}`);
    return;
  }

  try {
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
    const parsed = parser.parse(xml);
    const items = toArray(parsed?.rss?.channel?.item);
    const posts = items
      .map(normalize)
      .filter((p) => p.link && p.title)
      .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
    writeOut(posts);
    console.log(`[fetch-medium] Wrote ${posts.length} post(s) to public/blog-posts.json`);
  } catch (err) {
    keepExistingOrEmpty(`parse error: ${err.message}`);
  }
}

main();
