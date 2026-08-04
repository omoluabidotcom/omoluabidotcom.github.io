import { useEffect, useState } from 'react';
import { ArrowUpRight, Clock, Calendar, BookOpen, Rss } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import type { BlogPost } from '../types';
import { MEDIUM_PROFILE_URL } from '../config';

type LoadState = 'loading' | 'ready' | 'error';

function formatDate(iso: string | null): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [state, setState] = useState<LoadState>('loading');

  useEffect(() => {
    let cancelled = false;
    const url = `${import.meta.env.BASE_URL}blog-posts.json`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: BlogPost[]) => {
        if (cancelled) return;
        setPosts(Array.isArray(data) ? data : []);
        setState('ready');
      })
      .catch(() => {
        if (!cancelled) setState('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="blog" className="py-24 bg-canvas-light dark:bg-canvas-dark">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <SectionHeading
            index="06"
            title="Writings & Articles"
            subtitle="Notes on backend engineering, systems design, and lessons from production — synced from Medium."
          />
          {MEDIUM_PROFILE_URL && (
            <a
              href={MEDIUM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent-600 dark:text-accent-400 hover:gap-3 transition-all mb-12 shrink-0"
            >
              <Rss size={16} />
              View all on Medium
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>

        {state === 'loading' && <BlogSkeleton />}

        {state === 'error' && (
          <EmptyState
            title="Couldn't load articles"
            body="The article feed is temporarily unavailable. Please check back shortly."
          />
        )}

        {state === 'ready' && posts.length === 0 && (
          <EmptyState
            title="Articles coming soon"
            body="New writing will appear here automatically as it's published on Medium."
          />
        )}

        {state === 'ready' && posts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Reveal as="article" key={post.id} delay={(i % 3) * 80} className="h-full">
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card group flex flex-col h-full overflow-hidden hover:-translate-y-1 hover:shadow-xl"
      aria-label={`Read "${post.title}" on Medium`}
    >
      {post.cover ? (
        <div className="aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-white/5">
          <img
            src={post.cover}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] flex items-center justify-center bg-gradient-to-br from-accent-500/10 to-accent-500/5">
          <BookOpen className="text-accent-500/40" size={40} />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
          {post.date && (
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={12} />
              {formatDate(post.date)}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <Clock size={12} />
            {post.readingTime} min read
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
          {post.title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-accent-600 dark:text-accent-400">
          Read on Medium
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </a>
  );
}

function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="card p-12 text-center">
      <BookOpen className="mx-auto text-accent-500/50 mb-4" size={40} />
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">{body}</p>
    </div>
  );
}

function BlogSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" aria-hidden="true">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="card overflow-hidden animate-pulse">
          <div className="aspect-[16/9] bg-slate-200 dark:bg-white/5" />
          <div className="p-6 space-y-3">
            <div className="h-3 w-24 bg-slate-200 dark:bg-white/10 rounded" />
            <div className="h-5 w-3/4 bg-slate-200 dark:bg-white/10 rounded" />
            <div className="h-3 w-full bg-slate-200 dark:bg-white/10 rounded" />
            <div className="h-3 w-5/6 bg-slate-200 dark:bg-white/10 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
