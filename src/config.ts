/**
 * Central site configuration.
 *
 * MEDIUM_HANDLE drives the blog. Set it to your Medium username WITHOUT the "@"
 * (e.g. for https://medium.com/@yahayayusuf use "yahayayusuf").
 * If you publish under a Medium *publication*, use the publication slug instead
 * (e.g. "my-publication") and set MEDIUM_IS_PUBLICATION to true.
 *
 * The build-time script (scripts/fetch-medium.mjs) reads this value, fetches the
 * matching RSS feed, and writes public/blog-posts.json. Leave it blank and the
 * blog simply shows an empty state — nothing breaks.
 */
export const MEDIUM_HANDLE = 'yahayayusuf';
export const MEDIUM_IS_PUBLICATION = false;

/** Resolved Medium profile URL (used for links + JSON-LD). Empty if unset. */
export const MEDIUM_PROFILE_URL = MEDIUM_HANDLE
  ? MEDIUM_IS_PUBLICATION
    ? `https://medium.com/${MEDIUM_HANDLE}`
    : `https://medium.com/@${MEDIUM_HANDLE}`
  : '';

/** Social + contact links, referenced across Hero, Nav, Contact. */
export const SOCIAL = {
  github: 'https://github.com/omoluabidotcom',
  linkedin: 'https://linkedin.com/in/yahaya-yusuf',
  email: 'yyahaya222@gmail.com',
} as const;

export const SITE = {
  name: 'Yahaya Yusuf',
  role: 'Software Engineer',
  tagline: 'Spring Boot · Microservices · Enterprise Backend Systems',
} as const;

/** Ordered nav targets — id must match each section's DOM id. */
export const NAV_SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'work-projects', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const;
