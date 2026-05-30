import SectionWrapper from "./SectionWrapper";
import { Skull, Shield, Zap, Target } from "lucide-react";

const MobsSection = () => {
  const mobs = [
    {
      name: "Mechsquito",
      description: "The basic flying enemy that appears from Round 1. Shoots toxic projectiles at players.",
      behavior: "Spawns far away and flies toward the player. Hovers away when close but not attacking. Becomes immobile when aiming, then fires an exploding projectile.",
      difficulty: "Low to Medium",
      levels: "1-24",
      healthRange: "60 (Lv1) - 4,800 (Lv24)",
      special: "Projectiles apply Mechsquito Toxin debuff that stacks up to 10 times, reducing Pollen and Movespeed.",
      strategy: "Keep moving in circles. Mechsquitos aim where you ARE, not where you'll be. Stay close for your bees to attack them.",
      color: "bg-green-500/20 border-green-500",
    },
    {
      name: "Mega Mechsquito",
      description: "Larger, stronger version of Mechsquito. Appears from Round 11 onwards.",
      behavior: "Similar to Mechsquito but deals more damage and has significantly more health. Required target in Round 15.",
      difficulty: "Medium to High",
      levels: "11-22",
      healthRange: "15,000+ depending on level",
      special: "Stronger toxin effect. More dangerous projectiles with larger explosion radius.",
      strategy: "Prioritize with Vicious Bee Impale and Digital Bee Mind Hack. Use crowd control abilities.",
      color: "bg-emerald-500/20 border-emerald-500",
    },
    {
      name: "Cogmower",
      description: "Ground-based enemy that destroys flowers. Appears from Round 5 onwards.",
      behavior: "Rises from the field and moves in straight lines, bouncing off borders. Follows player between fields. Destroys flower layers on contact.",
      difficulty: "Medium",
      levels: "6-22",
      healthRange: "5,400 (Lv6) - 34,000 (Lv22)",
      special: "Takes only HALF damage from Critical Hits. Higher levels drain more pollen per flower destroyed.",
      strategy: "Stand inside the Cogmower hitbox (directly in front) so your bees target it. Use Star Saw for efficient clearing.",
      color: "bg-orange-500/20 border-orange-500",
    },
    {
      name: "Cogturret",
      description: "Stationary turret that shoots rolling cogs. Appears from Round 11 onwards.",
      behavior: "Immobile turret that periodically fires rolling cogs in four directions (forward, back, left, right).",
      difficulty: "High",
      levels: "11-20+",
      healthRange: "Scales with rounds, typically 20,000+",
      special: "Rolling cogs cover large field areas and deal damage on contact. Can quickly make fields dangerous.",
      strategy: "PRIORITIZE these! Stay near them for bees to attack. Learn cog directions to navigate safely.",
      color: "bg-red-500/20 border-red-500",
    },
    {
      name: "Golden Cogmower",
      description: "Rare, friendly mob that grants powerful buffs when defeated.",
      behavior: "Spawns randomly in fields during rounds. Moves similarly to regular Cogmowers but is golden-colored.",
      difficulty: "N/A (Friendly)",
      levels: "Varies",
      healthRange: "from 3k to around 20k depending on round",
      special: "Grants bonus cogs upon defeating.",
      strategy: "ALWAYS defeat Golden Cogmowers when they appear! Their bonus cogs buffs are extremely valuable for progression.",
      color: "bg-yellow-500/20 border-yellow-500",
    },
  ];

  const mobHealthTable = {
    mechsquito: [
      { level: 1, health: 60 }, { level: 5, health: 400 }, { level: 10, health: 1500 },
      { level: 15, health: 2800 }, { level: 20, health: 4000 }, { level: 24, health: 4800 },
    ],
    cogmower: [
      { level: 6, health: 5400 }, { level: 10, health: 9400 }, { level: 15, health: 17000 },
      { level: 20, health: 30000 }, { level: 22, health: 34000 },
    ],
  };

  return (
    <SectionWrapper
      id="mobs"
      title="The Mobs"
      subtitle="Detailed information on every enemy in the Robo Bear Challenge"
    >
      {/* Mob Overview */}
      <div className="bg-card border border-border rounded-xl p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-destructive/20 flex-shrink-0">
            <Skull className="w-6 h-6 text-destructive" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              Enemy Overview
            </h3>
            <p className="text-muted-foreground text-sm">
              The Robo Bear Challenge features 5 unique mobs. Enemy levels and health scale with round number. 
              Understanding each mob's behavior is crucial for survival in later rounds.
            </p>
          </div>
        </div>
      </div>

      {/* Mob Cards */}
      <div className="space-y-6 mb-12">
        {mobs.map((mob) => (
          <div
            key={mob.name}
            className={`border-2 ${mob.color} rounded-xl overflow-hidden`}
          >
            <div className={`p-4 ${mob.color.replace('border', 'bg').replace('/20', '/10')}`}>
              <h3 className="font-display text-xl font-bold text-foreground">
                {mob.name}
              </h3>
              <p className="text-muted-foreground mt-1">{mob.description}</p>
            </div>
            <div className="p-6 bg-card">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary uppercase mb-1 flex items-center gap-2">
                      <Target className="w-4 h-4" /> Behavior
                    </h4>
                    <p className="text-sm text-muted-foreground">{mob.behavior}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary uppercase mb-1 flex items-center gap-2">
                      <Zap className="w-4 h-4" /> Special Ability
                    </h4>
                    <p className="text-sm text-muted-foreground">{mob.special}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-secondary/30 rounded-lg">
                      <span className="text-xs text-muted-foreground">Difficulty</span>
                      <p className="font-semibold text-foreground">{mob.difficulty}</p>
                    </div>
                    <div className="p-3 bg-secondary/30 rounded-lg">
                      <span className="text-xs text-muted-foreground">Levels</span>
                      <p className="font-semibold text-foreground">{mob.levels}</p>
                    </div>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <span className="text-xs text-muted-foreground">Health Range</span>
                    <p className="font-semibold text-foreground">{mob.healthRange}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-accent uppercase mb-1 flex items-center gap-2">
                      <Shield className="w-4 h-4" /> Strategy
                    </h4>
                    <p className="text-sm text-foreground/80">{mob.strategy}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Health Tables */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-display text-lg font-bold text-foreground mb-4">
            Mechsquito Health by Level
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 text-muted-foreground">Level</th>
                  <th className="text-right py-2 text-muted-foreground">Health</th>
                </tr>
              </thead>
              <tbody>
                {mobHealthTable.mechsquito.map((row) => (
                  <tr key={row.level} className="border-b border-border/50">
                    <td className="py-2 text-foreground">{row.level}</td>
                    <td className="text-right py-2 text-primary font-mono">{row.health.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-display text-lg font-bold text-foreground mb-4">
            Cogmower Health by Level
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 text-muted-foreground">Level</th>
                  <th className="text-right py-2 text-muted-foreground">Health</th>
                </tr>
              </thead>
              <tbody>
                {mobHealthTable.cogmower.map((row) => (
                  <tr key={row.level} className="border-b border-border/50">
                    <td className="py-2 text-foreground">{row.level}</td>
                    <td className="text-right py-2 text-primary font-mono">{row.health.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MobsSection;
