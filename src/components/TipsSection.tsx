import SectionWrapper from "./SectionWrapper";
import { Lightbulb, CheckCircle, XCircle } from "lucide-react";

const TipsSection = () => {
  const preRoundTips = [
    {
      tip: "Use Consumables Freely",
      description: "Use every item you can that will help you, no need to worry about saving them as robo bear challenge gives massive amounts of resources.",
      good: true,
    },
    {
      tip: "Restarting RBC",
      description: "If you want the best chance to win, NEVER start a robo bear challenge run without at least one upgrade that gives bonus cogs, you should go to round 4 without buying anything and then buy a drive and quit. Repeat the process until you get a cog upgrade.",
      good: true,
    },
    {
      tip: "Save Quest Rerolls",
      description: "Quest rerrols are very valuable, PLEASE only use them after rounds 20+ as even with super smoothies and loaded dice you will not manage to do a bad quest. If your unlucky early on, just consider using some items and field boosters.",
      good: true,
    },
    {
      tip: "Smart Purchases",
      description: "Take every single bonus cog upgrade that you see, the debuffs dont matter as you will be able to overcome them with all the upgrades you will be able to buy. Rerrol upgrades ATLEAST 2 times per round and only buy upgrades that will benefit you 100%, not those who give are 50/50 good.",
      good: true,
    },
    {
      tip: "Nectars and other temporary boosts",
      description: "Never say no to using ur nectar vials or just afking planters for their nectars, they are super valuable and will help you a lot in the long run. The same goes for other temporary boosts like field boosters, sticker stack, winds, mondo buff, etc... Always make use of them.",
      good: true,
    },
    {
      tip: "Asking for Help",
      description: "If you play this game im 100% sure you made some friends along the way, dont be afraid to ask for help as it will absolutely make a difference. Whether its for carrying you through a round or just asking for some items, every little bit helps.",
      good: true,
    },
  ];

  const duringRoundTips = [
    {
      tip: "Keep Moving",
      description: "Mechsquito Toxin stacks reduce pollen and movespeed. Constant movement helps dodge projectiles.",
      good: true,
    },
    {
      tip: "Prioritize Cogturrets",
      description: "Cogturrets shoot rolling cogs that cover large areas and destroy the field, therefore allowing you to collect less pollen. Take them out before they overwhelm the field.",
      good: true,
    },
    {
      tip: "Track Golden Cogmowers",
      description: "Golden Cogmowers provide a huge help. Always check the map on rounds 2-6, 12-16 and 21-25. If you have killed it during one of these 3 round groups you will no longer need to look for it inside that group of rounds, keep in mind 3 of them spawn in total.",
      good: true,
    },
    {
      tip: "Use your passives and items effectively",
      description: "No need for explanation, if you use things randomly you will never get far. Time your passives and use the items when you need them.",
      good: true,
    },
    {
      tip: "Finish Rounds Quickly",
      description: "Enemies pile up over time. Fast completion prevents death spirals and earns speed bonus Cogs.",
      good: true,
    },
    {
      tip: "Bee selection ratio",
      description: "Choosing bee combos is very important even though it's not for all the bees. The most important are the mythics, you should pick 1 spicy bee per every 2 precise bees you choose, 1 tadpole for every 2 bouyant bees and 2 vectors per every precise bee or bee with mark abilities.",
      good: true,
    },
    {
      tip: "Milestone quests",
      description: "Milestone quests are usually the most important ones, make sure you prepare for them. For every one of these rounds, always collect the pollen part first and then speed through the rest of the round. For round 15 you can go to the 35 bee zone area after finishing pollen as it has a higher spawnrate for mega mechsquitos (dont go in the fields).",
      good: true,
    },
    {
      tip: "Quests order",
      description: "VERY IMPORTANT. Time managing is a pain and if you dont choose the right order for your quests ur absolutely gonna lose. Every second counts, think about the map and think about how close the fields are between each other, it doesnt matter if theres a field you can clear easier, go for the closest one. For example, for the Pumpking Dandelion Pineaple quest, always do pumpkin first, then pineaple and then use a whirligig to go to dandelion.",
      good: true,
    },
  ];

  const avoidTips = [
    {
      tip: "Don't Pick Convert at Hive Quests (Usually)",
      description: "Unless your between the rounds 1 and  6 you should never pick convert at hive quests as its almost impossible to keep pollen in your backpack and converting will be impossible because of all the mobs atacking you and the convert rate debuffs.",
      good: false,
    },
    {
      tip: "Don't Let Toxin Stack",
      description: "At 10 stacks, Mechsquito Toxin severely cripples your collection. Keep moving!",
      good: false,
    },
    {
      tip: "Impossible looking Rounds",
      description: "If a round seems impossible and you have valuable buffs active, quit early to preserve them or spend 1 minute trying to complete the round. If in this minute you barely did 10% of the quest, just quit. If you managed to do more, absolutely try until the end!",
      good: false,
    },
    {
      tip: "Don't Ignore Golden Cogmowers",
      description: "DO NOT FORGET ABOUT THESE. 100% Essential for winning and getting high scores. They help alot with getting good upgrades.",
      good: false,
    },
  ];

  return (
    <SectionWrapper
      id="tips"
      title="Tips & Tricks"
      subtitle="Expert advice for maximizing your Robo Bear Challenge performance"
    >
      {/* Pre-Round Tips */}
      <div className="mb-12">
        <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Lightbulb className="w-6 h-6 text-primary" />
          Pre-Round Thoughts
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {preRoundTips.map((item) => (
            <div
              key={item.tip}
              className="bg-card border border-border rounded-lg p-4 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.tip}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* During Round Tips */}
      <div className="mb-12">
        <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Lightbulb className="w-6 h-6 text-primary" />
          Tips During Rounds
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {duringRoundTips.map((item) => (
            <div
              key={item.tip}
              className="bg-card border border-border rounded-lg p-4 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.tip}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What to Avoid */}
      <div>
        <h3 className="font-display text-xl font-bold text-destructive mb-6 flex items-center gap-3">
          <XCircle className="w-6 h-6" />
          What to Avoid
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {avoidTips.map((item) => (
            <div
              key={item.tip}
              className="bg-destructive/5 border border-destructive/30 rounded-lg p-4"
            >
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.tip}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TipsSection;
