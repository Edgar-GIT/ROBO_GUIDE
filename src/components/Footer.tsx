import { Cog, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4">
            <Cog className="w-8 h-8 text-primary animate-cog" />
            <span className="font-display text-xl font-bold text-gradient-cog">
              RBC Guide
            </span>
          </div>

          <p className="text-muted-foreground text-sm max-w-md mb-6">
            The complete guide to mastering the Robo Bear Challenge in Bee Swarm Simulator. 
            All information sourced from the official Bee Swarm Simulator Wiki and from Personal experience.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://bee-swarm-simulator.fandom.com/wiki/Robo_Bear_Challenge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Official Wiki
            </a>
            <a
              href="https://www.roblox.com/games/1537690962/Bee-Swarm-Simulator"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Play Bee Swarm Simulator
            </a>
            <a
              href="https://www.roblox.com/users/6037815703/profile?friendshipSourceType=PlayerSearch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              My Profile on Roblox
            </a>
          </div>

          {/* Disclaimer */}
          <div className="text-xs text-muted-foreground/60 max-w-lg">
            <p className="mb-2">
              This is a fan-made guide and is not affiliated with Onett or Roblox Corporation.
              Made with alot of love by your best buddy Ed :).
            </p>
            <p>
              Bee Swarm Simulator is a registered trademark of Onett. 
              All game assets and mechanics belong to their respective owners.
            </p>
          </div>

          {/* Divider */}
          <div className="section-divider w-32 my-6" />

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} RBC Guide. Made with ⚙️ for the Bee Swarm community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
