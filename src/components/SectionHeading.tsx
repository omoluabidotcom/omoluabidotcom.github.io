interface SectionHeadingProps {
  /** Two-digit section number, e.g. "01". */
  index: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

/**
 * Consistent section header: a mono numbered eyebrow, a display title, and an
 * accent rule. Replaces the repeated <h2> + divider block in each section.
 */
export default function SectionHeading({
  index,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <div
        className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}
      >
        <span className="eyebrow">{`// ${index}`}</span>
        <span className="h-px w-8 bg-accent-500/60" aria-hidden="true" />
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 ${
            centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
