import { useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

function getInitialTheme(): boolean {
  if (typeof window === 'undefined') return true;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'dark') return true;
  if (stored === 'light') return false;
  // No stored preference: follow the OS, defaulting to dark.
  return window.matchMedia('(prefers-color-scheme: dark)').matches || stored === null;
}

/**
 * Theme controller. Persists the choice to localStorage and reflects it by
 * toggling the `dark` class on <html> (see the anti-flash script in index.html
 * which applies the same class before first paint).
 */
export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
    localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggle = () => setIsDark((prev) => !prev);

  return { isDark, toggle };
}
