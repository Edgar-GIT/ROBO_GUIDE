import SectionWrapper from "./SectionWrapper";
import { CheckCircle, Star, Zap, Target, Users } from "lucide-react";
import rbcHive from "@/assets/rbc_hive.png";

const RoboHiveSection = () => {
  const beeRecommendations = [
    {
      category: "Essential Event Bees",
      bees: [
        { name: "Digital Bee", reason: "Core RBC bee - Mind Hack stuns enemies, Smileys nuke quests with insane pollen collection, Glitch duplicates abilities", essential: true },
        { name: "Vicious Bee", reason: "Impale helps clearing swarms", essential: true },
        { name: "Windy Bee", reason: "Tornado provides excellent crowd control and is good for early rounds to collect pollen", essential: true },
        { name: "Bear Bee", reason: "Its ability and gifted hive bonus helps a ton with pollen collection, can be stacked with digital bee", essential: true },
        { name: "Tabby Bee", reason: "Collects alot of pollen, gives extra crit power scp and its hive hive bonus helps with everything", essential: true },
        { name: "Festive Bee", reason: "Later rounds are impossible without this bee, festive gifts help alot", essential: true },
        { name: "Puppy Bee", reason: "Bee gather pollen is absolutely broken", essential: true },
        { name: "Photon Bee", reason: "Instant Conversion, 100% essential for RBC", essential: true },
        { name: "Gummy Bee", reason: "Helps with Goo and honey quests; If your using Gummy mask, this bee is a nuke with wings", essential: true },
      ],
    },
    {
      category: "High-Value Gifted Bees",
      bees: [
        { name: "Gifted Basic Bee", reason: "1.2x pollen, no words needed", essential: true },
        { name: "Gifted Bear Bee", reason: "10% pollen buff and 2x pollen from ability", essential: true },
        { name: "Gifted Looker Bee", reason: "25% crit power helps alot with pollen and mobs", essential: true },
        { name: "Gifted Tabby Bee", reason: "Really strong abilities and bonus 50% crit power", essential: true },
        { name: "Gifted Shy Bee", reason: "Bee abilty pollen is always helpfull", essential: false },
        { name: "Gifted Rage Bee", reason: "10% hive atack and +4 bee atack is really good for damage", essential: false },
        { name: "Gifted Music Bee", reason: "25% bee gather pollen, focus, token link, melody, broken bee", essential: true },
        { name: "Gifted Ninja Bee", reason: "Bee movespeed helps alot when it comes to your bee spawning more tokens and moving between fields", essential: false },
        { name: "Gifted  Commander Bee", reason: "This bee is in every hive, extra crit chance is always good", essential: true },
        { name: "Gifted Fuzzy Bee", reason: "Pollen Haze is a pretty decent ability, it will help making fields better if you dont have a fuzzy alt", essential: false },
        { name: "Gifted Lion Bee", reason: "5% pollen is good, only works for full gifted hives though", essential: false },
        { name: "Gifted Bouyant Bee", reason: "1.2x capacity may help, not very likely to do so", essential: false },
      ],
    },
    {
      category: "Attack Focused Bees",
      bees: [
        { name: "Precise Bee", reason: "High crit chance, atacks faster if it crits, excellent for damage output", essential: true },
        { name: "Spicy Bee", reason: "Flame generation gives alot of buffs, gives +4 bee atack and generates 3 extra bees", essential: true },
        { name: "Vicious Bee", reason: "Impale helps clearing swarms, high base BAR and atack", essential: true },
        { name: "Rage Bee", reason: "10% hive atack and +4 bee atack", essential: true },
        { name: "Windy Bee", reason: "Tornado can be usefull to clear swarms", essential: false },
        { name: "Ninja Bee", reason: "Bee movespeed helps to deal more damage", essential: false },
        { name: "Brave Bee", reason: "1 bee atack is decent", essential: false },
        { name: "Commander Bee", reason: "3% crit chance and focus ability will help a bit", essential: false },
        { name: "Digital Bee", reason: "Mind hack is really strong, token duplication is insane", essential: true },
      ],
    },
  ];

  const hiveTypes = [
    {
      name: "Blue Hive (Worst for RBC)",
      color: "bg-blue-500/20 border-blue-500",
      description:
        "Blue hives tend to be bad in the robo challenge due to its low atack power and only being able to do blue pollen quests. However with the right upgrades and bees its possible to reach high rounds.",
      pros: ["Excellent capacity", "Strong bubble pollen"],
      cons: ["Can only do Blue pollen quests", "Requires specific upgrades and luck"],
    },
    {
      name: "Red Hive (50/50 good for RBC)",
      color: "bg-red-500/20 border-red-500",
      description:
        "Red hives benefit from flame mechanics and attack bonuses. Good for players who prefer aggressive playstyles.",
      pros: ["High damage output", "Flame and Super crit bonuses", "Very high pollen collection"],
      cons: ["Super low capacity", "Backpack conversion is impossible", "Relies on Festive Gifts and star saw"],
    },
    {
      name: "White/RBC Hive (Best for RBC)",
      color: "bg-gray-400/20 border-gray-400",
      description:
        "White hives offer flexibility, really good pollen collection in general and can adapt to any quest type. Good for players who are experts at the game and adapt to all situations.",
      pros: ["Quest flexibility", "Balanced stats", "Works with any field", "Good pollen and GOO collection"],
      cons: ["May lack capacity and sometimes backpack conversion", "Fewer dedicated upgrades", "Requires a very well optimized hive with crazy mutations and a max digital bee", "Needs an experienced user"],
    },
  ];

  return (
    <SectionWrapper
      id="robo-hive"
      title="Recommended Hive Composition"
      subtitle="Optimize your hive for maximum Robo Bear Challenge performance"
    >
      {/* What is a Robo Hive */}
      <div className="bg-card border border-border rounded-xl p-6 lg:p-8 mb-12">
        <h3 className="font-display text-xl lg:text-2xl font-bold text-primary mb-4 flex items-center gap-3">
          <Users className="w-6 h-6" />
          What is a Robo Hive?
        </h3>
        <p className="text-foreground/90 leading-relaxed mb-4">
          A "Robo Hive" refers to a hive composition specifically optimized for the Robo Bear Challenge. 
          This setup prioritizes attack power, ability synergies, and specific bee types that excel in 
          the challenge's unique mechanics.
        </p>
        <div className="my-6 rounded-xl overflow-hidden border border-border">
          <figure className="m-0">
            <img
              src={rbcHive}
              alt="Robo Hive Example"
              className="w-full h-auto object-cover"
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-2">
              <p>Keep in mind this hive composition can be changed.</p>
              <p className="mt-2 font-semibold">Beequip recommendations:</p>
              <ul className="mt-1 text-left list-disc list-inside space-y-1 text-sm">
                <li><strong>Paper Angel, Toy Drums, Toy Horns, Paper Clips:</strong> Require atleast 1% bee ability pollen hive bonus.</li>
                <li><strong>Pink Shades, Whistle:</strong> at least 3% super crit power.</li>
                <li><strong>Festive Wreath:</strong> high mark duration; <strong>Snow Tiara:</strong> high bee ability rate and field capacity.</li>
                <li><strong>Sweatband:</strong> needs all three gather types (~20% each); 1% pollen or 1% white pollen hive bonus is ideal.</li>
              </ul>
	      <p className="mt-2 font-semibold">Amulets:</p>
              <ul className="mt-1 text-left list-disc list-inside space-y-1 text-sm">
                <li><strong>SSA</strong> Pollen, Bee Gather Pollen, Instant conversion, Bee ability rate, Critical chance; Sorching star and star Saw passives.</li>
                <li><strong>Ant</strong> Make sure to have 1 bee atack 3% crit chance 50% crit power and white pollen.</li>
                <li><strong>Cog, Stick Bug and Snail:</strong> Robo should have red instant conversion, super crit power, bee atack and bee gather pollen; Stick bug should have 1 bee atack and 2 red bee atack, white pollen/red pollen pollen and 10% bee atack; Snail should have pollen and white pollen.</li>
              <li><strong>Moon and King Beetle</strong> 50% white pollen and 5% pollen/25% bee gather pollen for moon; 1 bee atack and mushroom+strawberry pollen on king beetle.</li>  
              </ul>

              <p className="mt-2 font-semibold">Hive explanation</p>
              <ul className="mt-1 text-left list-disc list-inside space-y-1 text-sm">
                <li><strong>Precise, Spicy and Vector Bees:</strong> Precise bees is the hybrid bee, it gives crit chance, super crit chance and collects good pollen. Vectors bees are the core of the hive as they collect alot of pollen from any field and even give pollen buffs. Spicy bees are important to buff the teams atack and give a good pollen boost and provide decent backpack conversion.</li>
                <li><strong>Legendary Bees:</strong> Most of them are just here for the hive bonus, some are for their good support capabilities.</li>
                <li><strong>Fuzzy and Tadpole:</strong> Important bees to maintain a good field, tadpoles also give boost tokens and baby love.</li>
                <li><strong>Event Bees:</strong> Super good hive bonuses and strong abilities. Digital Bee will carry you in this challenge.</li>
                <li><strong>Rare, Epic and Common Bees:</strong> Mostly here for the hive bonuses, some have good abilities and can equip good Beequips.</li>
              </ul>
	      <p className="mt-2 font-semibold">Mutations:</p>
              <ul className="mt-1 text-left list-disc list-inside space-y-1 text-sm">
                <li><strong>Mythics and Legendary Bees:</strong> Bee movespeed or bee ability rate.</li>
                <li><strong>Event Bees:</strong> Bee gather amount % for digital bee, the others can use bee ability rate or movespeed.</li>
                <li><strong>Rare, Common, Epic Bees:</strong> Movespeed or Bee ability rate.</li>
              </ul>
	      <p className="mt-2 font-semibold">How to Use:</p>
              <ul className="mt-1 text-left list-disc list-inside space-y-1 text-sm">
                <li><strong>Abilities</strong> Make sure you get 10x focus and 10x Precision before starting to try and collect pollen.</li>
                <li><strong>Passive and Pollen</strong> Since this hive requires sorching star and star saw, you should always be getting precise marks if your precision is higher than 5x. Mantain max flames and other buffs, proceed to go over all precise bee targets once everything is ready and sorching star is at atleast 2k.</li>
                <li><strong>Field and Movement</strong> Keep moving and mantain marks up. Stretch all your triangulates and pass then on all marks on the field so they can collect the most amount of pollen</li>
              </ul>

            </figcaption>
          </figure>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-secondary/30 rounded-lg border border-border">
            <Target className="w-8 h-8 text-primary mb-2" />
            <h4 className="font-semibold text-foreground">Attack and Pollen Focus</h4>
            <p className="text-sm text-muted-foreground">
              Prioritize bees with high attack stats, crowd control abilities, pollen collection and support skills
            </p>
          </div>
          <div className="p-4 bg-secondary/30 rounded-lg border border-border">
            <Zap className="w-8 h-8 text-accent mb-2" />
            <h4 className="font-semibold text-foreground">Ability Synergy</h4>
            <p className="text-sm text-muted-foreground">
              Stack abilities that work well with RBC upgrades and mechanics
            </p>
          </div>
          <div className="p-4 bg-secondary/30 rounded-lg border border-border">
            <Star className="w-8 h-8 text-primary mb-2" />
            <h4 className="font-semibold text-foreground">Gifted Bonuses and Beequips</h4>
            <p className="text-sm text-muted-foreground">
              Gifted bees provide hive bonuses that stack throughout the challenge, Beequips are also helpfull
            </p>
          </div>
        </div>
      </div>

      {/* Hive Types */}
      <div className="mb-12">
        <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-6 text-center">
          Hive Type Comparison
        </h3>
        <div className="grid lg:grid-cols-3 gap-6">
          {hiveTypes.map((hive) => (
            <div
              key={hive.name}
              className={`bg-card border-2 ${hive.color} rounded-xl p-6`}
            >
              <h4 className="font-display text-lg font-bold text-foreground mb-3">
                {hive.name}
              </h4>
              <p className="text-muted-foreground text-sm mb-4">{hive.description}</p>
              <div className="space-y-3">
                <div>
                  <span className="text-xs font-semibold text-accent uppercase">Pros</span>
                  <ul className="mt-1 space-y-1">
                    {hive.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-xs font-semibold text-destructive uppercase">Cons</span>
                  <ul className="mt-1 space-y-1">
                    {hive.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-4 h-4 flex-shrink-0 mt-0.5">•</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bee Recommendations */}
      <div className="space-y-8">
        <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground text-center">
          Recommended Bees for RBC
        </h3>
        {beeRecommendations.map((category) => (
          <div key={category.category} className="bg-card border border-border rounded-xl p-6">
            <h4 className="font-display text-lg font-bold text-primary mb-4">
              {category.category}
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.bees.map((bee) => (
                <div
                  key={bee.name}
                  className={`p-4 rounded-lg border ${
                    bee.essential
                      ? "bg-primary/10 border-primary/30"
                      : "bg-secondary/30 border-border"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <h5 className="font-semibold text-foreground">{bee.name}</h5>
                    {bee.essential && (
                      <Star className="w-4 h-4 text-primary fill-primary" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{bee.reason}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Why Robo Hive Matters */}
      <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-xl p-6 lg:p-8">
        <h3 className="font-display text-xl font-bold text-foreground mb-4">
          Why Hive Composition Matters
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-primary mb-2">Fast Progression</h4>
            <p className="text-muted-foreground text-sm">
              Optimized hives can clear rounds faster, earning more Cogs and better rewards. 
              The speed bonus (completing within 3:45) significantly increases your Cog income.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-2">High Scores</h4>
            <p className="text-muted-foreground text-sm">
              Better hives achieve higher scores, which directly affects the quality of your 
              Cog Amulet stats and can even give a good placement on the leaderboards. Higher cog totals mean better stat rolls on amulets.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-2">Leaderboard Performance</h4>
            <p className="text-muted-foreground text-sm">
              Top RBC players use carefully optimized hives to push for the highest rounds 
              and compete on leaderboards. Proper composition is essential for Round 25 completion and a good score.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-2">Difficulty Handling</h4>
            <p className="text-muted-foreground text-sm">
              Later rounds feature significantly stronger enemies. A well-built hive can handle 
              the scaling difficulty and complete milestone rounds for better amulets.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RoboHiveSection;
