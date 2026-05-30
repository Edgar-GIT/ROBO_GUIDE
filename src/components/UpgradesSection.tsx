import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { ChevronDown, ChevronUp, Lock, Cog } from "lucide-react";

type UpgradeRarity = "common" | "rare" | "epic" | "legendary";

interface Upgrade {
  name: string;
  cap: number | string;
  effects: string;
  effectsAtCap?: string;
}

const upgradesData: Record<UpgradeRarity, Upgrade[]> = {
  common: [
    { name: "Botnet", cap: 1, effects: "+25% Bee Gather Pollen, +1 Cogs Per Round" },
    { name: "Credit", cap: 3, effects: "+2 Cogs Per Round", effectsAtCap: "+6 Cogs Per Round" },
    { name: "Defragment", cap: 10, effects: "x1.5 Capacity, x0.9 Critical Power", effectsAtCap: "x6 Capacity, x0.5 Critical Power" },
    { name: "Homepage", cap: 10, effects: "x1.25 Sunflower Field Pollen, x1.25 Dandelion Field Pollen, x1.25 Mushroom Field Pollen, x1.25 Blue Flower Field Pollen", effectsAtCap: "x3.5 to each field" },
    { name: "Iterate", cap: 100, effects: "x1.05 Pollen", effectsAtCap: "x6 Pollen" },
    { name: "Overfit: Blue", cap: 10, effects: "x1.25 Blue Pollen, x0.95 Player Movespeed, -5% Bee Movespeed", effectsAtCap: "x4 Blue Pollen, x0.75 Player Movespeed, -15% Bee Movespeed" },
    { name: "Overfit: Red", cap: 10, effects: "x1.25 Red Pollen, x0.9 Capacity", effectsAtCap: "x4 Red Pollen, x0.5 Capacity" },
    { name: "Overfit: White", cap: 10, effects: "x1.25 White Pollen, x0.9 Convert Rate", effectsAtCap: "x4 White Pollen, x0.5 Convert Rate" },
    { name: "Sharpen", cap: 10, effects: "x1.2 Bee Attack, x0.9 Capacity", effectsAtCap: "x3 Bee Attack, x0.5 Capacity" },
  ],
  rare: [
    { name: "APM", cap: 1, effects: "Focus tokens grant x1.03 Pollen from Tools and Collector Tool Speed for 20s. Stacks up to 10 times." },
    { name: "Blue Screen", cap: 1, effects: "Blue Boost tokens grant x1.03 Attack and x1.03 Blue Bee Attack for 15s. Stacks up to 10 times." },
    { name: "Crypto", cap: 3, effects: "+3 Cogs Per Round, x0.8 Pollen, x0.8 Capacity", effectsAtCap: "+9 Cogs Per Round, x0.5 Pollen, x0.5 Capacity" },
    { name: "Commit", cap: 2, effects: "+5% Critical Chance, -10% Instant Conversion", effectsAtCap: "+10% Critical Chance, -20% Instant Conversion" },
    { name: "Dynamo", cap: 10, effects: "x1.25 Bomb Pollen, x0.9 Bee Gather Pollen", effectsAtCap: "x3.5 Bomb Pollen, x0.4 Bee Gather Pollen" },
    { name: "Equalize", cap: 1, effects: "+1 Bee Attack, x1.25 Ungifted Bee Attack" },
    { name: "Expansion", cap: 100, effects: "x1.25 Capacity", effectsAtCap: "x26 Capacity" },
    { name: "GPU", cap: 3, effects: "x1.25 Pollen, -4 Cogs Per Round", effectsAtCap: "x1.75 Pollen, -12 Cogs Per Round" },
    { name: "Multithread", cap: 1, effects: "All Ability Tokens can be created During Battle, -1 Cogs Per Round" },
    { name: "Nullify", cap: 2, effects: "x1.5 Critical Power, x0.8 Pollen", effectsAtCap: "x2 Critical Power, x0.6 Pollen" },
    { name: "Outsource", cap: 3, effects: "x1.5 Bee Gather Pollen, x0.85 Pollen From Tools", effectsAtCap: "x2.5 Bee Gather Pollen, x0.55 Pollen From Tools" },
    { name: "RAM", cap: 10, effects: "+75,000 Capacity, +1 Cogs per Round", effectsAtCap: "+750,000 Capacity, +10 Cogs per Round" },
    { name: "Router", cap: 10, effects: "x1.3 Strawberry/Spider/Bamboo/Pineapple Field Pollen", effectsAtCap: "x4 to each field" },
    { name: "Saturate", cap: 3, effects: "x1.25 Blue Bee Attack, x1.25 Colorless Bee Attack, x0.8 Red Bee Attack", effectsAtCap: "x1.75 Blue/Colorless Attack, x0.4 Red Bee Attack" },
    { name: "SSD: Blue", cap: 3, effects: "x2 Blue Field Capacity, x1.5 Blue Bee Convert Rate, -3% Critical Chance", effectsAtCap: "x4 Blue Field Capacity, x2.5 Blue Convert, -6% Crit" },
    { name: "SSD: Red", cap: 3, effects: "x2 Red Field Capacity, x1.5 Red Bee Convert Rate, x0.75 Bomb Pollen", effectsAtCap: "x4 Red Field Capacity, x2.5 Red Convert, x0.5 Bomb Pollen" },
    { name: "SSD: White", cap: 3, effects: "x2 White Field Capacity, x1.5 Colorless Bee Convert Rate, x0.8 Bee Attack", effectsAtCap: "x4 White Capacity, x2.5 Convert, x0.6 Attack" },
    { name: "Subscribe", cap: 1, effects: "+1 Cogs Per Round, x1.1 Event Bee Pollen" },
    { name: "Virus", cap: 3, effects: "+1 Bee Attack, +1% Critical Chance, x0.9 Pollen", effectsAtCap: "+3 Bee Attack, +3% Crit, x0.7 Pollen" },
    { name: "VPN", cap: 3, effects: "+10% Dodge Chance", effectsAtCap: "+30% Dodge Chance" },
  ],
  epic: [
    { name: "Bandwidth", cap: 1, effects: "x1.25 Convert Rate At Hive, x1.1 Mark Ability Pollen, x3 Crimson and Cobalt Ability Pollen" },
    { name: "Base-15", cap: 10, effects: "x1.25 Cactus/Pumpkin/Pine Tree/Rose Field Pollen", effectsAtCap: "x3.5 to each field" },
    { name: "beeBay", cap: 1, effects: "+1 Option When Choosing Bees, +1 Cogs per Round" },
    { name: "Client-Side", cap: 1, effects: "x1.25 Player Movespeed, x1.25 Pollen From Tools, x0.75 Convert Rate" },
    { name: "Demarcate", cap: 1, effects: "Mark tokens grant x1.03 Critical Power for 15s. Stacks up to 10 times." },
    { name: "F5", cap: 1, effects: "+1 Quest Reroll, -3 Cogs Per Round" },
    { name: "Fission", cap: 1, effects: "x4 Bomb Pollen, +1 Cogs Per Round, +1 Bee Attack, x0.75 Pollen" },
    { name: "FOV", cap: 1, effects: "+1 Option When Choosing Upgrades, -2% Critical Chance" },
    { name: "Furnace", cap: 1, effects: "x1.5 Flame Pollen, x1.5 Flame Duration, x1.5 Flame Damage, -4 Cogs Per Round" },
    { name: "HDD", cap: 1, effects: "x3 Capacity, x4 Convert Rate at Hive, x0.5 Convert Rate, x0 Instant Conversion, x0.5 Goo Conversion" },
    { name: "Inject", cap: 1, effects: "+2 Blue Bee Attack, +1 Colorless Bee Attack, x1.25 Impale Damage" },
    { name: "Invert", cap: 1, effects: "Bubbles collect x4 from Red Flowers. Flames collect x4 from Blue Flowers." },
    { name: "Malware", cap: 3, effects: "+3 Bee Attack, x0.75 Capacity, x0.75 Convert Rate", effectsAtCap: "+9 Bee Attack, x0.25 Capacity, x0.25 Convert Rate" },
    { name: "NFT", cap: 1, effects: "+4 Cogs Per Round, -3 Bee Attack" },
    { name: "Normalize", cap: 1, effects: "x2 Pollen, x2 Bee Attack, x0 Critical Chance" },
    { name: "Pop-Up", cap: 1, effects: "x2 Bubble Pollen, x1.5 Bubble Lifespan, +3 Blue Bee Attack, -4 Cogs Per Round" },
    { name: "Proxy", cap: 1, effects: "Haste tokens grant +2% Dodge Chance for 20s. Stacks up to 10 times." },
    { name: "Refractor", cap: 10, effects: "x1.1 Bee Ability Pollen, x0.9 Convert Rate", effectsAtCap: "x2 Bee Ability Pollen, x0.75 Convert Rate" },
    { name: "Respec: Blue", cap: 2, effects: "x0.6 Blue Pollen, x1.25 White Pollen, x1.25 Red Pollen", effectsAtCap: "x0.4 Blue, x1.5 White/Red Pollen" },
    { name: "Respec: Red", cap: 2, effects: "x0.6 Red Pollen, x1.25 Blue Pollen, x1.25 White Pollen", effectsAtCap: "x0.4 Red, x1.5 Blue/White Pollen" },
    { name: "Respec: White", cap: 2, effects: "x0.6 White Pollen, x1.25 Blue Pollen, x1.25 Red Pollen", effectsAtCap: "x0.4 White, x1.5 Blue/Red Pollen" },
    { name: "RGB", cap: 1, effects: "+1% Critical Chance, x1.25 Flame Pollen, x1.25 Bubble Pollen, x0.8 Bee Gather Pollen" },
    { name: "Synchronize", cap: 1, effects: "x1.2 Bomb Power, Red/Blue Bomb Sync always active if Crimson/Cobalt Bee is active" },
    { name: "Torrent", cap: 1, effects: "+10% Instant Conversion, x1.5 Tornado Pollen, x1.5 Beamstorm Pollen" },
    { name: "Trojan", cap: 10, effects: "x1.25 Bee Attack, -10% Bee Movespeed", effectsAtCap: "x3.5 Bee Attack, -50% Bee Movespeed" },
    { name: "White Noise", cap: 1, effects: "x1.1 White Pollen, x1.5 Buzz Bomb Pollen, -1 Cogs Per Round" },
    { name: "Virtual Pet", cap: 1, effects: "+10% Bee Movespeed, x1.5 Scratch Pollen, x3 Fetch Pollen" },
  ],
  legendary: [
    { name: "Bluetooth", cap: 1, effects: "x2 Blue Bee Attack, x1.25 Blue Pollen" },
    { name: "Bruteforce", cap: 1, effects: "+6% Super-Crit Chance, x1.25 Red Pollen" },
    { name: "Codec", cap: 1, effects: "+20% Instant Conversion, x0.8 Attack" },
    { name: "Corrupt", cap: 1, effects: "+1% Ability Duplication Chance, x2 Duped Ability Pollen" },
    { name: "Fluid Simulation", cap: 1, effects: "x1.25 Goo, x1.25 White Pollen" },
    { name: "Optimize", cap: 25, effects: "x1.1 Pollen, x1.1 Convert Rate, x1.1 Capacity", effectsAtCap: "x3.5 Pollen, x3.5 Convert Rate, x3.5 Capacity" },
    { name: "Overclock", cap: 1, effects: "+10% Bee Movespeed, +10% Bee Ability Rate, x0.75 Capacity" },
    { name: "Pseudo-RNG", cap: 1, effects: "+3% Critical Chance, x1.25 Super-Crit Power, x2 Clover Field Pollen" },
    { name: "Reboot", cap: 1, effects: "+1 Quest Reroll" },
    { name: "Stack Overflow", cap: 1, effects: "+10 Cogs Per Round, x0.75 Movespeed, -25% Bee Movespeed" },
    { name: "The Cloud", cap: 3, effects: "x2.5 Capacity", effectsAtCap: "x5.5 Capacity" },
    { name: "Wifi", cap: 10, effects: "x1.5 Stump/Mountain Top/Coconut/Pepper Patch Field Pollen", effectsAtCap: "x6 to each field" },
  ],
};

const rarityColors: Record<UpgradeRarity, { border: string; bg: string; text: string }> = {
  common: { border: "border-gray-400", bg: "bg-gray-400/10", text: "text-gray-400" },
  rare: { border: "border-blue-400", bg: "bg-blue-400/10", text: "text-blue-400" },
  epic: { border: "border-purple-400", bg: "bg-purple-400/10", text: "text-purple-400" },
  legendary: { border: "border-primary", bg: "bg-primary/10", text: "text-primary" },
};

const UpgradesSection = () => {
  const [expandedRarity, setExpandedRarity] = useState<UpgradeRarity | null>("legendary");

  const toggleRarity = (rarity: UpgradeRarity) => {
    setExpandedRarity(expandedRarity === rarity ? null : rarity);
  };

  return (
    <SectionWrapper
      id="upgrades"
      title="All Upgrades"
      subtitle="Complete list of every upgrade available in the Robo Bear Challenge"
    >
      {/* Upgrade Info */}
      <div className="bg-card border border-border rounded-xl p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg gradient-cog">
            <Cog className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              Understanding Upgrades
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Before each round, you can choose from 3 upgrade options. Use the <Lock className="w-4 h-4 inline" /> lock 
              feature to save upgrades you want but cannot afford or even abuse the rerrol feature to get insane upgrades. Upgrades stack across rounds, and many have caps. 
              Some upgrades have trade-offs—read effects carefully before selecting.
            </p>
          </div>
        </div>
      </div>

      {/* Upgrades by Rarity */}
      <div className="space-y-4">
        {(Object.keys(upgradesData) as UpgradeRarity[]).reverse().map((rarity) => (
          <div
            key={rarity}
            className={`border-2 ${rarityColors[rarity].border} rounded-xl overflow-hidden`}
          >
            {/* Header */}
            <button
              onClick={() => toggleRarity(rarity)}
              className={`w-full flex items-center justify-between p-4 ${rarityColors[rarity].bg} hover:opacity-90 transition-opacity`}
            >
              <div className="flex items-center gap-3">
                <span className={`font-display text-lg font-bold uppercase ${rarityColors[rarity].text}`}>
                  {rarity}
                </span>
                <span className="text-sm text-muted-foreground">
                  ({upgradesData[rarity].length} upgrades)
                </span>
              </div>
              {expandedRarity === rarity ? (
                <ChevronUp className={`w-5 h-5 ${rarityColors[rarity].text}`} />
              ) : (
                <ChevronDown className={`w-5 h-5 ${rarityColors[rarity].text}`} />
              )}
            </button>

            {/* Content */}
            {expandedRarity === rarity && (
              <div className="p-4 bg-card">
                <div className="grid gap-3">
                  {upgradesData[rarity].map((upgrade) => (
                    <div
                      key={upgrade.name}
                      className={`p-4 rounded-lg border ${rarityColors[rarity].border} ${rarityColors[rarity].bg}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                        <h4 className={`font-display font-bold ${rarityColors[rarity].text}`}>
                          {upgrade.name}
                        </h4>
                        <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">
                          Cap: {upgrade.cap}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/90 mb-1">
                        <span className="text-muted-foreground">Effect: </span>
                        {upgrade.effects}
                      </p>
                      {upgrade.effectsAtCap && (
                        <p className="text-xs text-muted-foreground">
                          <span className="text-primary">At Cap: </span>
                          {upgrade.effectsAtCap}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="mt-8 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/30 rounded-xl p-6">
        <h3 className="font-display text-lg font-bold text-foreground mb-4">
          Upgrade Priority Tips
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <Cog className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span><strong className="text-foreground">Cog Generation:</strong> Take all the cog upgrades you see, specially the most rewarding ones like Stack Overflow</span>
          </li>
          <li className="flex items-start gap-2">
            <Cog className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span><strong className="text-foreground">Attack Power:</strong> Nullify, Equalize, Demarcate, Inject and Sharpen boost bee damage significantly</span>
          </li>
          <li className="flex items-start gap-2">
            <Cog className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span><strong className="text-foreground">Blue Hives:</strong> Only take general pollen upgrades that dont give debuffs</span>
          </li>
          <li className="flex items-start gap-2">
            <Cog className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span><strong className="text-foreground">Red Hives:</strong> Recommended to get 2x Sharpen and 1.5x Overfit White, dont go over that; Stack as much pollen and instant conversion as possible</span>
          </li>
          <li className="flex items-start gap-2">
            <Cog className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span><strong className="text-foreground">White/RBC Hives:</strong> Stack crit power and pollen, the rest doesnt matter</span>
          </li>
          <li className="flex items-start gap-2">
            <Cog className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span><strong className="text-foreground">To Ignore:</strong> NEVER take useless upgrades like APM, Client-Side, FOV, Normalize, etc</span>
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default UpgradesSection;
