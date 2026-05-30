import SectionWrapper from "./SectionWrapper";
import { Award, Star } from "lucide-react";

const AmuletsSection = () => {
  const amulets = [
    {
      name: "Bronze Cog Amulet",
      requirement: "Complete Round 5",
      color: "from-amber-700 to-amber-900",
      borderColor: "border-amber-700",
      stats: [
        { stat: "Capacity", range: "+22,500 to +27,500", guaranteed: true },
        { stat: "Bee Attack", range: "+3% to +6%", guaranteed: true },
        { stat: "Colored Pollen (choose one)", range: "+5% to +10% White/Red/Blue Pollen", guaranteed: false },
        { stat: "Ability Pollen (choose one)", range: "+4% to +8% Flame/Bubble Pollen OR +3% to +10% Bee Gather OR +3% to +5% Event Bee Pollen", guaranteed: false },
        { stat: "Instant Conversion (choose one)", range: "+1% to +2% Instant White/Red/Blue Conversion", guaranteed: false },
      ],
    },
    {
      name: "Silver Cog Amulet",
      requirement: "Complete Round 10",
      color: "from-gray-400 to-gray-600",
      borderColor: "border-gray-400",
      stats: [
        { stat: "Capacity", range: "+45,000 to +55,000", guaranteed: true },
        { stat: "Bee Attack", range: "+5% to +8%", guaranteed: true },
        { stat: "Pollen (choose one)", range: "+1% to +2% Pollen OR +10% to +15% White/Red/Blue Pollen", guaranteed: false },
        { stat: "Ability Pollen (choose one)", range: "+6% to +10% Event Bee OR +10% to +15% Flame/Bubble/Bee Gather Pollen", guaranteed: false },
        { stat: "Instant Conversion (choose one)", range: "+2% to +3% Instant White/Red/Blue Conversion", guaranteed: false },
      ],
    },
    {
      name: "Gold Cog Amulet",
      requirement: "Complete Round 15",
      unlocks: "Glitched Drive purchasing",
      color: "from-yellow-500 to-yellow-700",
      borderColor: "border-yellow-500",
      stats: [
        { stat: "Capacity", range: "+90,000 to +110,000", guaranteed: true },
        { stat: "Attack (choose one)", range: "+8% to +10% Bee Attack OR +1 Red/Blue/Colorless Bee Attack", guaranteed: false },
        { stat: "Pollen (choose one)", range: "+2% to +3% Pollen OR +15% to +20% White/Red/Blue Pollen", guaranteed: false },
        { stat: "Ability Pollen (choose one)", range: "+8% to +10% Event Bee/Mark Pollen OR +15% to +20% Flame/Bubble Pollen OR +8% to +9% Bee Gather", guaranteed: false },
        { stat: "Instant Conversion (choose one)", range: "+3% to +4% Instant White/Red/Blue Conversion", guaranteed: false },
      ],
    },
    {
      name: "Diamond Cog Amulet",
      requirement: "Complete Round 20",
      unlocks: "Digital Bee purchasing",
      color: "from-cyan-400 to-blue-600",
      borderColor: "border-cyan-400",
      stats: [
        { stat: "Capacity", range: "+125,000 to +175,000", guaranteed: true },
        { stat: "Attack (choose one)", range: "+9% to +12% Bee Attack OR +1 Red/Blue/Colorless Bee Attack", guaranteed: false },
        { stat: "Pollen (choose one)", range: "+3% to +5% Pollen OR +20% to +25% White/Red/Blue Pollen", guaranteed: false },
        { stat: "Ability Pollen (choose one)", range: "+10% to +15% Event Bee/Mark Pollen OR +10% to +25% Flame/Bubble/Bee Gather Pollen", guaranteed: false },
        { stat: "Bonus (choose one)", range: "+5% Ability Token Lifespan OR +10% to +15% Super-Crit Power OR +5% Nectar OR +25% to +50% Honey From Tokens", guaranteed: false },
        { stat: "Instant Conversion (choose one)", range: "+4% to +5% Instant White/Red/Blue Conversion", guaranteed: false },
      ],
    },
    {
      name: "Supreme Cog Amulet",
      requirement: "Complete Round 25",
      unlocks: "Robo Bear Cub Buddy (first completion)",
      color: "from-purple-500 via-pink-500 to-orange-500",
      borderColor: "border-purple-500",
      stats: [
        { stat: "Capacity", range: "+200,000 to +250,000", guaranteed: true },
        { stat: "Attack (choose one)", range: "+10% to +15% Bee Attack OR +1 to +2 Red/Blue/Colorless Bee Attack", guaranteed: false },
        { stat: "Pollen (choose one)", range: "+6% to +10% Pollen OR +25% to +30% White/Red/Blue Pollen", guaranteed: false },
        { stat: "Ability Pollen (choose one)", range: "+15% to +20% Event Bee/Mark Pollen OR +25% to +30% Flame/Bubble/Bee Gather Pollen", guaranteed: false },
        { stat: "Bonus (choose one)", range: "+5% to +10% Ability Token Lifespan OR +50% to +75% Honey From Tokens OR +15% to +25% Super-Crit Power OR +5% Nectar", guaranteed: false },
        { stat: "Instant Conversion (choose one)", range: "+4% to +5% Instant White/Red/Blue Conversion", guaranteed: false },
      ],
    },
  ];

  return (
    <SectionWrapper
      id="amulets"
      title="Cog Amulets"
      subtitle="All 5 amulet tiers and their possible stats"
    >
      {/* Amulet Info */}
      <div className="bg-card border border-border rounded-xl p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg gradient-cog flex-shrink-0">
            <Award className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              Understanding Cog Amulets
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cog Amulets are obtained by completing milestone rounds in the Robo Bear Challenge. 
              The stats on each amulet scale based on your total Cog score—higher cogs mean better 
              stat rolls! Each amulet has guaranteed stats plus random selections from stat pools.
            </p>
          </div>
        </div>
      </div>

      {/* Amulet Cards */}
      <div className="space-y-6">
        {amulets.map((amulet) => (
          <div
            key={amulet.name}
            className={`border-2 ${amulet.borderColor} rounded-xl overflow-hidden`}
          >
            {/* Header */}
            <div className={`p-4 bg-gradient-to-r ${amulet.color}`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-display text-xl font-bold text-white">
                  {amulet.name}
                </h3>
                <span className="text-sm text-white/80 bg-black/20 px-3 py-1 rounded-full">
                  {amulet.requirement}
                </span>
              </div>
              {amulet.unlocks && (
                <p className="text-sm text-white/90 mt-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Unlocks: {amulet.unlocks}
                </p>
              )}
            </div>

            {/* Stats */}
            <div className="p-6 bg-card">
              <h4 className="text-sm font-semibold text-primary uppercase mb-4">
                Possible Stats
              </h4>
              <div className="space-y-3">
                {amulet.stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      stat.guaranteed
                        ? "bg-primary/10 border-primary/30"
                        : "bg-secondary/30 border-border"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {stat.guaranteed && (
                          <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded font-semibold">
                            GUARANTEED
                          </span>
                        )}
                        <span className="font-semibold text-foreground text-sm">
                          {stat.stat}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono">
                        {stat.range}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-xl p-6">
        <h3 className="font-display text-lg font-bold text-foreground mb-4">
          Amulet Grinding Tips
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <h4 className="font-semibold text-foreground mb-1">Maximize Cog Score</h4>
            <p>Higher cog totals = better stat rolls. Use speed bonus and Cog generation upgrades.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Match Your Hive Color</h4>
            <p>Aim for stats that match your hive type (Blue Pollen for Blue Hives, etc.).</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Don't Skip Tiers</h4>
            <p>Even if you can reach Round 25, getting good lower-tier amulets helps progression.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Unique Bonuses</h4>
            <p>Cog Amulets are the only source of Nectar, Super-Crit Power, and Flame/Bubble Pollen boosts.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AmuletsSection;
