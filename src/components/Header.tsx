import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Liderança", href: "/lideranca" },
  { label: "Músicas", href: "/musicas" },
  { label: "Contribua", href: "/contribua" },
  { label: "Confissão de fé", href: "/confissao-de-fe" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50">
      <div className="container-vision flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2" aria-label="Igreja Vision - Página inicial">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="20" cy="20" r="20" fill="currentColor" className="text-foreground" />
            <path d="M20 8C20 8 14 16 14 22C14 25.3 16.7 28 20 28C23.3 28 26 25.3 26 22C26 16 20 8 20 8Z" fill="currentColor" className="text-background" />
          </svg>
          <span className="text-xl font-extrabold tracking-tight text-foreground">VISION</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/contribua"
            className="hidden md:inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Programação
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 text-foreground font-medium text-sm"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            Menu {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile/Full menu */}
      {menuOpen && (
        <nav
          className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in z-40"
          role="navigation"
          aria-label="Menu principal"
        >
          <div className="container-vision py-8 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium text-foreground hover:text-accent transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
