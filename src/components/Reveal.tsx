import { useReveal } from '../hooks/useReveal';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in ms, applied as inline transition-delay. */
  delay?: number;
  as?: 'div' | 'article' | 'li' | 'section';
}

/**
 * Wraps children in a reveal-on-scroll container. Uses the `.reveal` /
 * `.is-visible` utilities so motion is CSS-driven and reduced-motion aware.
 */
export default function Reveal({ children, className = '', delay = 0, as = 'div' }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = as as 'div';

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
