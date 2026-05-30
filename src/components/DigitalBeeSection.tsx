import SectionWrapper from "./SectionWrapper";
import { Star, Zap, Target, Shield, Sparkles } from "lucide-react";

const DigitalBeeSection = () => {
  const drives = [
    {
      name: "White Drive",
      color: "bg-gray-400",
      bgColor: "bg-gray-400/10 border-gray-400",
      roundBoost: "x1.25 White Pollen, x1.25 White Field Capacity, +1 Colorless Bee Attack",
      digitalBoost: "+0.25 Gather Amount per drive",
      maxBoost: "+125 Gather Amount (500 drives)",
      obtainMethods: ["Robo Bear's Shop (50 Cogs + Honey)", "RBC rewards", "Science Bear quest"],
    },
    {
      name: "Red Drive",
      color: "bg-red-500",
      bgColor: "bg-red-500/10 border-red-500",
      roundBoost: "x1.25 Red Pollen, x1.25 Red Field Capacity, +1 Red Bee Attack",
      digitalBoost: "+0.03 Attack per drive",
      maxBoost: "+15 Attack (500 drives)",
      obtainMethods: ["Robo Bear's Shop (50 Cogs + Honey)", "RBC rewards", "Panda Bear quest"],
    },
    {
      name: "Blue Drive",
      color: "bg-blue-500",
      bgColor: "bg-blue-500/10 border-blue-500",
      roundBoost: "x1.25 Blue Pollen, x1.25 Blue Field Capacity, +1 Blue Bee Attack",
      digitalBoost: "+2 Convert Amount per drive",
      maxBoost: "+1000 Convert Amount (500 drives)",
      obtainMethods: ["Robo Bear's Shop (50 Cogs + Honey)", "RBC rewards", "Dapper Bear quest"],
    },
    {
      name: "Glitched Drive",
      color: "bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500",
      bgColor: "bg-purple-500/10 border-purple-500",
      roundBoost: "x1.25 Pollen, x1.25 Field Capacity, +1 Bee Attack (all types)",
      digitalBoost: "+0.05% Ability Rate per drive, +0.03% Ability Duplication Chance per 10 drives",
      maxBoost: "+25% Ability Rate, +1.5% Ability Duplication Chance (500 drives)",
      obtainMethods: ["Robo Bear's Shop (100 Cogs + 5 each colored drive + Honey)", "RBC Round 20+ rewards", "Science Bear quest"],
    },
  ];

  const abilities = [
    {
      name: "Glitch",
      description: "Corrupts the field you're in for 20s (+1s per level), granting collected Ability Tokens a chance to be duplicated.",
      details: [
        "Duped Tokens hover over the field for 2x the original token's lifespan",
        "Standing beneath a Duped Token for 1s activates it",
        "Corruption level affects duplication chance (8%-20%) and pollen bonus (x1.1-x3)",
        "Colored Drives increase corruption in matching fields; Glitched Drives work everywhere",
        "Spawns ☺ Tokens that boost corruption and instantly collect all Duped Tokens. Smileys last for an undefined period of time and collect pollen upon activation.",
        "The pollen a smiley can collect is highly affected by the gather amount of your Digital Bee, the amount of tokens activated by the smiley (+50% per token) and the number of Glitched and White Drives equipped (+0.5% per glitched drive).",
      ],
    },
    {
      name: "Mind Hack",
      description: "Hacks the minds of up to 3 nearby enemies (+1 per every 3 levels), stunning them for 3s (+0.1s per level).",
      details: [
        "Hacked enemies take 25% more damage (+0.1% per Glitched Drive)",
        "Hacking is only half as effective against bosses",
        "Also spawns a ☺ Token if used in a field",
        "Essential for crowd control in later rounds",
      ],
    },
    {
      name: "Map Corruption (Gifted)",
      description: "Corrupts a random field by a small amount for ALL players for 3 minutes (+15s per level).",
      details: [
        "Amount of corruption scales with number of Drives equipped",
        "Fields matching the color of your most recent Drive are more likely to be selected",
        "Glitched Drives make selection random but grant 25% more corruption",
        "Other players receive 1/3 of the corruption amount",
      ],
    },
    {
      name: "Drive Expansion (Passive)",
      description: "Using a Drive during RBC corrupts your current field and permanently enhances Digital Bee.",
      details: [
        "Corruption proportional to matching flower count (Glitched affects all equally)",
        "Each drive type grants different permanent stat boosts",
        "Digital Bee can be enhanced with up to 500 of each drive type (2000 total)",
        "At max drives: +10 Movespeed and +0.5% Ability Duplication Chance hive bonus",
      ],
    },
  ];

  return (
    <SectionWrapper
      id="digital-bee"
      title="Digital Bee & Drives"
      subtitle="The ultimate reward from the Robo Bear Challenge"
    >
      {/* Digital Bee Overview */}
      <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-xl p-6 lg:p-8 mb-12">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center animate-pulse-glow">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Why Digital Bee is Essential
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Digital Bee is a Colorless Event Bee that many players consider one of the best bees in the game. 
              Its unique abilities corrupt fields, duplicate ability tokens, collect pollen and double pollen collection in a certain area for a short period of time and stun enemies—making it invaluable 
              for both regular gameplay and the Robo Bear Challenge itself.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-3 bg-secondary/50 rounded-lg">
                <h4 className="font-semibold text-primary text-sm">Requirements</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Diamond Cog Amulet (Round 20+) + 5 each colored Drive + 5 Glitched Drives + 7,777,777 Honey
                </p>
              </div>
              <div className="p-3 bg-secondary/50 rounded-lg">
                <h4 className="font-semibold text-primary text-sm">Gifted Hive Bonus</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  +1% Ability Duplication Chance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Abilities */}
      <div className="mb-12">
        <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Zap className="w-6 h-6 text-primary" />
          Digital Bee Abilities
        </h3>
        <div className="grid lg:grid-cols-2 gap-6">
          {abilities.map((ability) => (
            <div key={ability.name} className="bg-card border border-border rounded-xl p-6">
              <h4 className="font-display text-lg font-bold text-primary mb-2">
                {ability.name}
              </h4>
              <p className="text-foreground/90 text-sm mb-4">{ability.description}</p>
              <ul className="space-y-2">
                {ability.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Star className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Drives Section */}
      <div>
        <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          Drive Types
        </h3>
        <div className="space-y-4">
          {drives.map((drive) => (
            <div key={drive.name} className={`border-2 ${drive.bgColor} rounded-xl overflow-hidden`}>
              <div className="p-4 flex items-center gap-4 border-b border-border">
                <div className={`w-10 h-10 rounded-lg ${drive.color}`} />
                <h4 className="font-display text-lg font-bold text-foreground">
                  {drive.name}
                </h4>
              </div>
              <div className="p-6 bg-card">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-semibold text-primary mb-1">Round Boost (When Used)</h5>
                      <p className="text-sm text-muted-foreground">{drive.roundBoost}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-accent mb-1">Digital Bee Enhancement</h5>
                      <p className="text-sm text-muted-foreground">{drive.digitalBoost}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-1">At Max (500 Drives)</h5>
                      <p className="text-sm text-muted-foreground">{drive.maxBoost}</p>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Shield className="w-4 h-4" /> How to Obtain
                    </h5>
                    <ul className="space-y-1">
                      {drive.obtainMethods.map((method, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {method}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Max Digital Bee */}
      <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-xl p-6">
        <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-primary" />
          Maxed Digital Bee (2000 Drives)
        </h3>
        <p className="text-muted-foreground mb-4">
          When Digital Bee is enhanced with the maximum 500 of each drive type (2000 total), it gains:
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 bg-card rounded-lg border border-border">
            <span className="text-2xl font-bold text-primary">+10</span>
            <p className="text-xs text-muted-foreground">Movespeed (removes the -15% penalty)</p>
          </div>
          <div className="p-3 bg-card rounded-lg border border-border">
            <span className="text-2xl font-bold text-primary">+15</span>
            <p className="text-xs text-muted-foreground">Attack</p>
          </div>
          <div className="p-3 bg-card rounded-lg border border-border">
            <span className="text-2xl font-bold text-primary">+125</span>
            <p className="text-xs text-muted-foreground">Gather Amount</p>
          </div>
          <div className="p-3 bg-card rounded-lg border border-border">
            <span className="text-2xl font-bold text-primary">+0.5%</span>
            <p className="text-xs text-muted-foreground">Ability Duplication Chance (Hive Bonus)</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default DigitalBeeSection;
