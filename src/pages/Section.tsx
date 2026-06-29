import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-12 py-12 md:py-16 border-t border-border first:border-t-0 transition-spring-slow">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground font-display mb-8">
        {title}
      </h2>
      <div className="relative">
        {children}
      </div>
    </section>
  );
}
