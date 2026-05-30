import SectionWrapper from "./SectionWrapper";
import { Zap, Target, Shield, Clock, Star, AlertCircle } from "lucide-react";

const GuideSection = () => {
  const strategies = [
    {
      icon: Target,
      title: "Quest Selection",
      content: [
        "Always choose quests that match your hive color (Red/Blue/White/etc)",
        "Avoid 'Convert at Hive' quests as they are inefficient in Robo Bear Challenge",
        "Pollen collection and honey quests are generally faster and more rewarding due to round speed bonus cogs",
        "Save your free Quest Reroll for the endgame or for emergencies or even bad quest combos",
        "Choose quests wisely as time bonuses are crucial for progressing through rounds",
      ],
    },
    {
      icon: Zap,
      title: "Upgrade Priorities",
      content: [
        "Early rounds: Focus on bonus cog upgrades (take every single one of them, even if they are bad for you)",
        "Mid rounds: Stack attack upgrades for mob clearing (Sharpen, Equalize, Nullify, Inject, etc)",
        "Late rounds: Focus on dodge upgrades and overral pollen/critical power/bee gather pollen",
        "Use the Lock feature to save upgrades you need but can't afford yet or to abuse the rerrol feature",
      ],
    },
    {
      icon: Star,
      title: "Bee Selection",
      content: [
        "Round 1: Prioritize getting Digital Bee if you have it, if not, try getting 1 of each bee for their hive bonuses and beequips",
        "Prioritize Pollen collecting bees early on for the speed bonuses and later on switch to atack/support bees",
        "Bees such as Basic Bee, Bear Bee, Tabby Bee, Digital Bee, Windy Bee and many others are fundamental por balance between pollen and atack",
        "Remember to always take support bees for their team buffs like boost tokens, focus, marks, etc",
      ],
    },
    {
      icon: Shield,
      title: "Survival Tactics",
      content: [
        "Keep moving to avoid Mechsquito projectiles, jumping will stun them briefly",
        "Prioritize Cogturrets - their rolling cogs can cover entire fields",
        "Use Star Saw (if available) to clear Cogmowers quickly as they get to a point where they can kill you with 1 hit...",
        "Don't let Mechsquito Toxin stack - it severely reduces pollen and speed",
      ],
    },
    {
      icon: Clock,
      title: "Speed Optimization",
      content: [
        "Completing rounds within 3:45 for the Speed Bonus Cogs",
        "Prepare yourself before the round starts, getting coconut shield and keeping buffs are essential for a good start",
        "Use consumables like Super Smoothies and loaded dices for difficult rounds",
        "Field boosts, winds, clouds, fuzzy helpers, gumdrops can be abused during rounds to maximize pollen capabilities",
      ],
    },
  ];

  const itemUsage = [
    {
      item: "Super Smoothie",
      description: "Provides massive pollen and conversion buffs. Save for the last rounds.",
    },
    {
      item: "Purple Potion",
      description: "Good for extending your pollen collection. Use on longer runs.",
    },
    {
      item: "Field Boosters",
      description: "Can be activated during rounds. Time them for quest fields.",
    },
    {
      item: "Drives",
      description: "Use colored Drives matching your quest field. Glitched Drives work everywhere.",
    },
    {
      item: "Robo Pass",
      description: "Required to start each challenge. Obtain from quests, Beesmas events, RBC dispenser, Mobs or present boxes.",
    },
    {
      item: "Field Dices",
      description: "Make quests easier for yourself. Increse speed.",
    },
  ];

  return (
    <SectionWrapper
      id="guide"
      title="General Guide"
      subtitle="Strategies and techniques for efficient Robo Bear Challenge runs"
    >
      {/* Strategy Cards */}
      <div className="grid lg:grid-cols-2 gap-6 mb-12">
        {strategies.map((strategy) => (
          <div
            key={strategy.title}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg gradient-cog">
                <strategy.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                {strategy.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {strategy.content.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    {index + 1}
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Round-by-Round Approach */}
      <div className="bg-card border border-border rounded-xl p-6 lg:p-8 mb-12">
        <h3 className="font-display text-xl font-bold text-primary mb-6">
          Round-by-Round Approach
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-secondary/30 rounded-lg border border-border">
            <h4 className="font-display font-bold text-foreground mb-2">Rounds 1-5</h4>
            <p className="text-sm text-muted-foreground">
              Build Cog economy. Mechsquitos are weak. Focus on speed and Cog generation upgrades.
            </p>
          </div>
          <div className="p-4 bg-secondary/30 rounded-lg border border-border">
            <h4 className="font-display font-bold text-foreground mb-2">Rounds 6-10</h4>
            <p className="text-sm text-muted-foreground">
              Cogmowers appear. Start stacking attack upgrades. Round 10 requires defeating 10 Cogmowers.
            </p>
          </div>
          <div className="p-4 bg-secondary/30 rounded-lg border border-border">
            <h4 className="font-display font-bold text-foreground mb-2">Rounds 11-15</h4>
            <p className="text-sm text-muted-foreground">
              Mega Mechsquitos spawn. Cogturrets appear. Prioritize pollen and crowd control bees. Round 15 requires killing 10 Mega Mechsquitos.
            </p>
          </div>
          <div className="p-4 bg-secondary/30 rounded-lg border border-border">
            <h4 className="font-display font-bold text-foreground mb-2">Rounds 16-25</h4>
            <p className="text-sm text-muted-foreground">
              Maximum difficulty. Use consumables freely. Round 20 needs 20 Cogmowers. Round 25 is the final test.
            </p>
          </div>
        </div>
      </div>

      {/* Item Usage */}
      <div className="bg-card border border-border rounded-xl p-6 lg:p-8 mb-12">
        <h3 className="font-display text-xl font-bold text-primary mb-6">
          Item & Power-Up Usage
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {itemUsage.map((item) => (
            <div key={item.item} className="p-4 bg-secondary/30 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">{item.item}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Golden Cogmower Section */}
      <div className="bg-gradient-to-r from-primary/10 to-yellow-500/10 border border-primary/30 rounded-xl p-6 lg:p-8">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg gradient-cog flex-shrink-0">
            <Star className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-primary mb-3">
              Golden Cogmower 
            </h3>
            <p className="text-foreground/90 mb-4">
              Golden Cogmowers spawn randomly in fields (pumpking, clover, mountain top, pineaple patch) during rounds (2-6, 12-16, 21-25). They are friendly mobs that grant 
              bonus cogs when defeated:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-primary" />
                12 cogs from rounds 2-6
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-primary" />
                16 cogs from rounds 12-16
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-primary" />
                24 cogs from rounds 21-25
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default GuideSection;
