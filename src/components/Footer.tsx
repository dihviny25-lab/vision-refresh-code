import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-footer text-footer-foreground">
    <div className="container-vision pt-16 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
        {/* Logo + Description */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-5">
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <circle cx="20" cy="20" r="20" fill="white" />
              <path d="M20 8C20 8 14 16 14 22C14 25.3 16.7 28 20 28C23.3 28 26 25.3 26 22C26 16 20 8 20 8Z" fill="hsl(var(--footer-bg))" />
            </svg>
            <span className="text-lg font-extrabold tracking-tight">VISION</span>
          </div>
          <p className="text-sm text-footer-foreground/60 leading-relaxed max-w-xs">
            Uma igreja cristã evangélica reformada, de confissão batista, em Araçatuba/SP.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-footer-foreground/40 mb-5">Navegação</h3>
          <nav aria-label="Links do rodapé">
            <ul className="space-y-3 text-sm">
              <li><Link to="/contribua" className="text-footer-foreground/70 hover:text-accent transition-colors">Contribua</Link></li>
              <li><Link to="/hubs" className="text-footer-foreground/70 hover:text-accent transition-colors">Células</Link></li>
              <li><Link to="/confissao-de-fe" className="text-footer-foreground/70 hover:text-accent transition-colors">Confissão de fé</Link></li>
              <li><Link to="/musicas" className="text-footer-foreground/70 hover:text-accent transition-colors">Músicas</Link></li>
              <li><Link to="/lideranca" className="text-footer-foreground/70 hover:text-accent transition-colors">Liderança</Link></li>
            </ul>
          </nav>
        </div>

        {/* Para Membros */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-footer-foreground/40 mb-5">Para Membros</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="text-footer-foreground/70 hover:text-accent transition-colors">Grupo de avisos</a></li>
            <li><a href="#" className="text-footer-foreground/70 hover:text-accent transition-colors">Formulário para voluntários</a></li>
          </ul>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-footer-foreground/40 mt-8 mb-4">Novo por aqui?</h3>
          <a
            href="https://app.enuves.com/institutions/769/people/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline font-medium"
          >
            Ficha de inscrição →
          </a>
        </div>

        {/* Endereço + Social */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-footer-foreground/40 mb-5">Endereço</h3>
          <p className="text-sm text-footer-foreground/70 leading-relaxed mb-6">
            R. Ernesto Bergamaschi, 96<br />
            Monterrey - Araçatuba/SP
          </p>
          <div className="flex gap-2">
            {[
              { label: "Facebook", href: "https://facebook.com", icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
              { label: "Instagram", href: "https://instagram.com", icon: <><rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.5" /></> },
              { label: "YouTube", href: "https://youtube.com", icon: <path d="M23 9.71a8.5 8.5 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.36 78.36 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.3 2 3.14 3.14 0 00.71 1.36 2.86 2.86 0 001.49.78A45.18 45.18 0 0012 19.73a45.18 45.18 0 008.35-.37 2.86 2.86 0 001.49-.78 3.14 3.14 0 00.71-1.36 9.55 9.55 0 00.3-2 48.29 48.29 0 00.15-6.48zM9.74 14.85V8.66l5.92 3.11c-1.97 1.03-3.94 2.06-5.92 3.08z" /> },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-footer-foreground/5 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">{icon}</svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-footer-foreground/10 pt-6 text-center">
        <p className="text-xs text-footer-foreground/40">
          © {new Date().getFullYear()} Igreja Vision. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
