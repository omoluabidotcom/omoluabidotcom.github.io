/** Normalized blog post shape shared by the fetch script output + Blog UI. */
export interface BlogPost {
  id: string;
  title: string;
  link: string;
  date: string | null;
  tags: string[];
  excerpt: string;
  cover: string | null;
  readingTime: number;
  /** Where the post originated. Local authoring can add 'local' later. */
  source: 'medium' | 'local';
}
