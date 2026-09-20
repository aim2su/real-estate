import Link from "next/link";
import { Container } from "./Container";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHero({ eyebrow, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="bg-primary-dark text-white">
      <Container className="py-16 lg:py-20">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
            {breadcrumbs.map((crumb, i) => (
              <span key={`${crumb.label}-${i}`} className="flex items-center gap-3">
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <span>/</span>}
              </span>
            ))}
          </div>
        )}

        {eyebrow && (
          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-accent">
            {eyebrow}
          </p>
        )}

        <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-2xl text-base text-white/75 leading-relaxed sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
