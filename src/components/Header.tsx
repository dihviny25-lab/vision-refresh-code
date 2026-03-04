import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoDark from "@/assets/logo-vision-dark.png";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Liderança", href: "/lideranca" },
  { label: "Células", href: "/celula" },
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
      className={`bg-background/70 backdrop-blur-md sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-sm border-b border-border" : ""
      }`}
    >
      <div className="container-vision flex items-center justify-between h-24 md:h-30">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Igreja Vision - Página inicial">
          <img src={logoDark} alt="Igreja Vision" className="h-16 md:h-24 w-auto object-contain" />
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/contribua"
            className="hidden md:inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity gradient-banner"
          >
            Contribua
            <ArrowRight size={14} />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center w-full text-left py-4 border-b border-gray-100 font-semibold text-black hover:pl-2 transition-all"
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
  className="fixed inset-0 top-16 md:top-20 bg-white z-50 w-full h-screen overflow-y-auto"
  role="navigation"
  aria-label="Menu principal"
>
  <div className="container-vision py-12 grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
    
    {/* COLUNA DA ESQUERDA - Links Principais */}
    <div className="flex flex-col">
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
            className="block text-4xl font-bold py-6 border-b border-gray-100 text-black hover:pl-2 transition-all"
          >
            {link.label}
          </Link>
        </motion.div>
      ))}
    </div>

    {/* COLUNA DA DIREITA - Membros e Redes Sociais */}
    <div className="flex flex-col gap-8">
      {/* Seção Para Membros */}
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Para Membros</p>
        <Link to="/avisos" onClick={() => setMenuOpen(false)} className="block py-2 text-xl font-medium text-black">Grupo de avisos</Link>
        <Link to="/voluntarios" onClick={() => setMenuOpen(false)} className="block py-2 text-xl font-medium text-black">Formulário para voluntários</Link>
      </div>

      {/* Seção Redes Sociais */}
      <div className="mt-4 pt-8 border-t border-gray-100 pb-20">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Redes Sociais</p>
        <a href="https://instagram.com/igrejavision" target="_blank" rel="noreferrer" className="block py-2 text-lg text-black">Instagram</a>
        <a href="https://facebook.com/igrejavision" target="_blank" rel="noreferrer" className="block py-2 text-lg text-black">Facebook</a>
        <a href="https://youtube.com/igrejavision" target="_blank" rel="noreferrer" className="block py-2 text-lg text-black">Youtube</a>
      </div>
    </div>

  </div>
</motion.nav>
  )}
</AnimatePresence>
    </header>
  );
};

export default Header;
