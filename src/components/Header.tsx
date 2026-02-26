import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Liderança", href: "/lideranca" },
  { label: "Células", href: "/hubs" },
  { label: "Músicas", href: "/musicas" },
  { label: "Contribua", href: "/contribua" },
  { label: "Confissão de fé", href: "/confissao-de-fe" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`bg-background/95 backdrop-blur-md sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-sm border-b border-border" : ""
      }`}
    >
      <div className="container-vision flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Igreja Vision - Página inicial">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="20" cy="20" r="20" fill="currentColor" className="text-foreground" />
            <path d="M20 8C20 8 14 16 14 22C14 25.3 16.7 28 20 28C23.3 28 26 25.3 26 22C26 16 20 8 20 8Z" fill="currentColor" className="text-background" />
          </svg>
          <span className="text-xl font-extrabold tracking-tight text-foreground">VISION</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/contribua"
            className="hidden md:inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Contribua
            <ArrowRight size={14} />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 text-foreground font-medium text-sm px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Fechar" : "Menu"}
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 top-16 md:top-20 bg-background/50 backdrop-blur-md z-40"
            role="navigation"
            aria-label="Menu principal"
          >
            <div className="container-vision py-12 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-2xl sm:text-3xl font-bold py-3 border-b border-border transition-colors ${
                      location.pathname === link.href
                        ? "text-accent"
                        : "text-foreground hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
