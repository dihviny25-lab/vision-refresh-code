import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-footer text-footer-foreground pt-16 pb-8">
    <div className="container-vision">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <circle cx="20" cy="20" r="20" fill="white" />
              <path d="M20 8C20 8 14 16 14 22C14 25.3 16.7 28 20 28C23.3 28 26 25.3 26 22C26 16 20 8 20 8Z" fill="hsl(var(--footer-bg))" />
            </svg>
            <div>
              <div className="text-[10px] font-semibold tracking-[0.2em] text-footer-foreground/70">IGREJA</div>
              <div className="text-lg font-extrabold tracking-tight">VISION</div>
            </div>
          </div>
          <p className="text-sm text-footer-foreground/70 leading-relaxed">
            A Igreja Vision é uma igreja cristã evangélica reformada, de confissão batista, em Araçatuba/SP.
          </p>
        </div>

        {/* Links */}
        <div>
          <nav aria-label="Links do rodapé">
            <ul className="space-y-3 text-sm">
              <li><Link to="/contribua" className="text-footer-foreground/80 hover:text-accent transition-colors">Contribua</Link></li>
              <li><Link to="/hubs" className="text-footer-foreground/80 hover:text-accent transition-colors">Células</Link></li>
              <li><Link to="/confissao-de-fe" className="text-footer-foreground/80 hover:text-accent transition-colors">Confissão de fé</Link></li>
              <li><Link to="/musicas" className="text-footer-foreground/80 hover:text-accent transition-colors">Músicas</Link></li>
              <li><Link to="/lideranca" className="text-footer-foreground/80 hover:text-accent transition-colors">Líderes</Link></li>
            </ul>
          </nav>
        </div>

        {/* Para Membros */}
        <div>
          <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Para Membros</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="text-footer-foreground/80 hover:text-accent transition-colors">Grupo de avisos</a></li>
            <li><a href="#" className="text-footer-foreground/80 hover:text-accent transition-colors">Formulário para voluntários</a></li>
          </ul>
          <h3 className="font-semibold text-sm uppercase tracking-wider mt-6 mb-4">Ainda não é membro?</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="https://app.enuves.com/institutions/769/people/register" target="_blank" rel="noopener noreferrer" className="text-footer-foreground/80 hover:text-accent transition-colors">Ficha de inscrição</a></li>
          </ul>
        </div>

        {/* Endereço + Social */}
        <div>
          <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Endereço</h3>
          <p className="text-sm text-footer-foreground/80 leading-relaxed">
            R. Ernesto Bergamaschi, 96, Monterrey<br />
            Araçatuba/SP
          </p>
          <div className="flex gap-3 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-footer-foreground/10 flex items-center justify-center hover:bg-footer-foreground/20 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-footer-foreground/10 flex items-center justify-center hover:bg-footer-foreground/20 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-footer-foreground/10 flex items-center justify-center hover:bg-footer-foreground/20 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 9.71a8.5 8.5 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.36 78.36 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.3 2 3.14 3.14 0 00.71 1.36 2.86 2.86 0 001.49.78A45.18 45.18 0 0012 19.73a45.18 45.18 0 008.35-.37 2.86 2.86 0 001.49-.78 3.14 3.14 0 00.71-1.36 9.55 9.55 0 00.3-2 48.29 48.29 0 00.15-6.48zM9.74 14.85V8.66l5.92 3.11c-1.97 1.03-3.94 2.06-5.92 3.08z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
