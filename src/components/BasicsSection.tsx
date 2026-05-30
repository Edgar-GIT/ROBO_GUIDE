import SectionWrapper from "./SectionWrapper";
import { Clock, Target, Trophy, Cog, Zap, Shield, Users, AlertTriangle } from "lucide-react";

const BasicsSection = () => {
  const features = [
    {
      icon: Target,
      title: "25 Rounds Challenge",
      description:
        "The challenge consists of 25 rounds, with every 5th round being a special milestone round that grants a Cog Amulet.",
    },
    {
      icon: Clock,
      title: "5 Minutes Per Round",
      description:
        "Each round lasts exactly 5 minutes. Complete your quest before time runs out or the challenge ends.",
    },
    {
      icon: Trophy,
      title: "Quest-Based Objectives",
      description:
        "At the start of each round, you receive two quests to choose from. Pick the one that suits your hive better or simply go for the highest cog rewarding one if your looking to get a leaderboard worthy run.",
    },
    {
      icon: Cog,
      title: "Cog Currency System",
      description:
        "Earn Cogs by completing rounds quickly. Use Cogs to purchase upgrades, reroll bees and upgrades, and buy drives from Robo Bear's Shop.",
    },
    {
      icon: Zap,
      title: "Upgrade Selection",
      description:
        "Before each round, choose from 3 available upgrades. You can lock desired upgrades or reroll for different options.",
    },
    {
      icon: Users,
      title: "Bee Selection System",
      description:
        "Select 3 bees in round 1, then 2 additional bees in subsequent rounds. All unselected bees are locked during the challenge.",
    },
  ];

  const milestones = [
    { round: 5, reward: "Bronze Cog Amulet", quest: "Defeat 25 Mechsquitos + Collect 1.6M colored pollen" },
    { round: 10, reward: "Silver Cog Amulet", quest: "Defeat 10 Cogmowers + Collect 60M colored pollen" },
    { round: 15, reward: "Gold Cog Amulet", quest: "Defeat 10 Mega Mechsquitos + Collect 2B colored pollen" },
    { round: 20, reward: "Diamond Cog Amulet", quest: "Defeat 20 Cogmowers + Collect 60B colored pollen" },
    { round: 25, reward: "Supreme Cog Amulet + Robo Bear Cub Buddy (first time only) + ingame items", quest: "Collect from 2 to 3 trillion pollen, depending on the quest" },
  ];

  return (
    <SectionWrapper
      id="basics"
      title="Challenge Basics"
      subtitle="Understanding the fundamental mechanics of the Robo Bear Challenge"
    >
      {/* Introduction */}
      <div className="bg-card border border-border rounded-xl p-6 lg:p-8 mb-12">
        <h3 className="font-display text-xl lg:text-2xl font-bold text-primary mb-4">
          What is the Robo Bear Challenge?
        </h3>
        <p className="text-foreground/90 leading-relaxed mb-4">
          The Robo Bear Challenge is an elite challenge in Bee Swarm Simulator that tests the player's 
          hive strength, skill, and understanding of game mechanics. It was introduced with the Robo Bear 
          update in 2022 and offers some of the most powerful rewards in the game, including the coveted Digital Bee, Super Smothies, Turpentines, Mythic Eggs, 
          and the Supreme Cog Amulet.
        </p>
        <p className="text-foreground/90 leading-relaxed">
          To start the challenge, you need a <span className="text-primary font-semibold">Robo Pass</span>, which can be obtained from the dispenser back at the 30 bee zone or can be dropped from mobs. 
          Upon entering, you receive 10 free Cogs and one Quest Reroll. The challenge continues until you 
          fail a round, quit, or complete all 25 rounds.
        </p>
      </div>

      {/* Core Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg gradient-cog flex items-center justify-center mb-4 group-hover:glow-cog transition-all">
              <feature.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h4 className="font-display text-lg font-bold text-foreground mb-2">
              {feature.title}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Milestone Rounds */}
      <div className="bg-card border border-border rounded-xl p-6 lg:p-8 mb-12">
        <h3 className="font-display text-xl lg:text-2xl font-bold text-primary mb-6 flex items-center gap-3">
          <Trophy className="w-6 h-6" />
          Milestone Rounds & Rewards
        </h3>
        <div className="space-y-4">
          {milestones.map((milestone) => (
            <div
              key={milestone.round}
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-secondary/30 rounded-lg border border-border"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-lg gradient-cog flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-primary-foreground">
                  {milestone.round}
                </span>
              </div>
              <div className="flex-grow">
                <h5 className="font-display font-bold text-foreground">
                  {milestone.reward}
                </h5>
                <p className="text-sm text-muted-foreground">{milestone.quest}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Debuff System */}
      <div className="bg-card border border-border rounded-xl p-6 lg:p-8 mb-12">
        <h3 className="font-display text-xl lg:text-2xl font-bold text-destructive mb-4 flex items-center gap-3">
          <AlertTriangle className="w-6 h-6" />
          Robo Bear Challenge Debuff
        </h3>
        <p className="text-foreground/90 leading-relaxed mb-4">
          During each round, players receive the Robo Bear Challenge Debuff which affects:
        </p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {[
            "Capacity",
            "Pollen from Tools",
            "Pollen from Movement Collection",
            "Pollen from Coconuts",
          ].map((debuff) => (
            <li
              key={debuff}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <Shield className="w-4 h-4 text-destructive" />
              <span>{debuff}</span>
            </li>
          ))}
        </ul>
        <p className="text-foreground/90 leading-relaxed mt-4">
          Additionally, you cannot harvest planters or use Beesmas Decorations during the challenge. 
          All Cogs are removed when the challenge ends.
        </p>
      </div>

      {/* Scoring System */}
      <div className="bg-card border border-border rounded-xl p-6 lg:p-8">
        <h3 className="font-display text-xl lg:text-2xl font-bold text-accent mb-4 flex items-center gap-3">
          <Zap className="w-6 h-6" />
          Scoring & Cog Earning
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-foreground mb-2">How Cogs are Earned:</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Cog className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Base Cogs from completing the quest</span>
              </li>
              <li className="flex items-start gap-2">
                <Cog className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Speed Bonus if completed within 3:45 minutes, you lose 1 extra cog per minute; The maximum bonus is 12 extra cogs</span>
              </li>
              <li className="flex items-start gap-2">
                <Cog className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Upgrade bonuses from Cogs Per Round upgrades</span>
              </li>
              <li className="flex items-start gap-2">
                <Cog className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Cogs dropped from Golden cogmowers (from 12 to 24)</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Score Affects:</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Trophy className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Quantity and quality of rewards</span>
              </li>
              <li className="flex items-start gap-2">
                <Trophy className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Amulet stat rolls (higher cogs = better stats)</span>
              </li>
              <li className="flex items-start gap-2">
                <Trophy className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Chance for Drive drops (1 coloured drive is guaranteed after round 15 and 1 glitched drive is guaranteed after round 20)</span>
              </li>
              <li className="flex items-start gap-2">
                <Trophy className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Leaderboard placement and rewards such as tickets or even a cub buddy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BasicsSection;
