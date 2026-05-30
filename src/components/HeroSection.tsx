import { Cog, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-robo-bear.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Robo Bear Challenge"
          className="w-full h-full object-cover opacity-40 translate-y-[80px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      {/* Animated Cogs */}
      <div className="absolute bottom-32 right-16 opacity-15">
        <Cog className="w-48 h-48 text-primary animate-cog-reverse" />
      </div>
      <div className="absolute top-40 right-20 opacity-10">
        <Cog className="w-24 h-24 text-accent animate-cog" />
      </div>
      <div className="absolute bottom-48 left-20 opacity-10">
        <Cog className="w-20 h-20 text-accent animate-cog-reverse" />
      </div>

      {/* Scan Line Effect */}
      <div className="scan-line" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            <span className="text-gradient-cog">ROBO BEAR</span>
            <br />
            <span className="text-foreground">CHALLENGE</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 font-body">
            The Complete Guide for Bee Swarm Simulator
          </p>

          <div className="h-1 w-32 mx-auto gradient-cog rounded-full mb-8" />

          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            Master the Robo Bear Challenge with this comprehensive guide covering mechanics, 
            strategies, upgrades, bees, enemies, scoring systems, and everything you need to 
            earn the Supreme Cog Amulet and unlock Digital Bee.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#basics"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-display font-bold text-lg gradient-cog text-primary-foreground hover:opacity-90 transition-all duration-200 glow-cog"
            >
              <Cog className="w-5 h-5" />
              Start Learning
            </a>
            <a
              href="#upgrades"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-display font-bold text-lg border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-200"
            >
              View All Upgrades
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Rounds", value: "25" },
              { label: "Round Duration", value: "5 min" },
              { label: "Amulet Tiers", value: "5" },
              { label: "Unique Mobs", value: "5" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4"
              >
                <div className="font-display text-2xl sm:text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#basics"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
