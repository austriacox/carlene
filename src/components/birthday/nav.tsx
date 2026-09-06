const links = [
  { href: "#letter", label: "Letter" },
  { href: "#memories", label: "Us" },
  { href: "#reasons", label: "18 things" },
  { href: "#balloons", label: "Balloons" },
  { href: "#cake", label: "Cake" },
];

export function SiteNav() {
  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-30 border-b border-blush/80 bg-paper/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-1 px-3 py-2">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="rounded-full px-3 py-2 text-sm font-medium text-ink transition-colors duration-150 hover:bg-blush hover:text-wine"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
