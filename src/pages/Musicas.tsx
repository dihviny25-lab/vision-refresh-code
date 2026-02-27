import Layout from "../components/Layout";
import AnimatedSection from "../components/AnimatedSection";

const Musicas = () => (
  <Layout>
    <div className="bg-primary text-primary-foreground min-h-[60vh]">
      <section className="py-16 md:py-24" aria-labelledby="musicas-title">
        <AnimatedSection className="container-vision text-center mb-12" variant="blur">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <circle cx="20" cy="20" r="20" fill="white" />
              <path d="M20 8C20 8 14 16 14 22C14 25.3 16.7 28 20 28C23.3 28 26 25.3 26 22C26 16 20 8 20 8Z" fill="hsl(var(--gradient-end))" />
            </svg>
            <span className="text-primary-foreground/50 text-xs font-semibold uppercase tracking-[0.3em]">Vision Music</span>
          </div>
          <h1 id="musicas-title" className="section-title text-primary-foreground">
            O que cantamos na <span className="gradient-text">Vision</span>?
          </h1>
        </AnimatedSection>

        <AnimatedSection className="container-vision max-w-3xl mx-auto" variant="fade-up" delay={0.2}>
          <div className="rounded-xl overflow-hidden">
            <iframe
              src="https://open.spotify.com/embed/playlist/0kpxMDhIoKFbGGC6bYsfOi?utm_source=generator&theme=0"
              width="100%"
              height="600"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Playlist IBC - Louvores Culto no Spotify"
              className="rounded-xl"
            />
          </div>
        </AnimatedSection>
      </section>
    </div>
  </Layout>
);

export default Musicas;
