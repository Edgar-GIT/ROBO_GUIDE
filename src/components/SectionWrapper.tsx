import { ReactNode } from "react";
import { Cog } from "lucide-react";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionWrapperProps) => {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Cog className="w-6 h-6 text-primary animate-cog" />
            <span className="text-sm font-mono text-primary uppercase tracking-wider">
              {id.replace("-", " ")}
            </span>
            <Cog className="w-6 h-6 text-primary animate-cog-reverse" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            {title}
          </h2>

          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

          <div className="section-divider w-48 mx-auto mt-6" />
        </div>

        {/* Section Content */}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
