import { MapPin, Clock } from "lucide-react";

const TopBar = () => (
  <div className="bg-topbar text-topbar-foreground py-2.5 px-4 text-xs font-medium">
    <div className="container-vision flex items-center justify-center gap-4 sm:gap-6">
      <span className="flex items-center gap-1.5">
        <Clock size={13} className="text-accent" />
        Domingos, 18h30
      </span>
      <span className="hidden sm:inline text-topbar-foreground/30">|</span>
      <a
        href="https://www.google.com/maps/place/R.+Ernesto+Bergamaschi,+96+-+Monterrey,+Ara%C3%A7atuba+-+SP,+16056-680"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors"
      >
        <MapPin size={13} className="text-accent" />
        R. Ernesto Bergamaschi, 96 - Araçatuba/SP
      </a>
    </div>
  </div>
);

export default TopBar;
