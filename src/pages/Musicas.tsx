import Layout from "../components/Layout";
import AnimatedSection from "../components/AnimatedSection";
import logoWhite from "@/assets/logo-vision-white.png";

const Musicas = () => (
  <Layout>
    <div className="bg-primary text-primary-foreground min-h-[60vh]">
      <section className="py-16 md:py-24" aria-labelledby="musicas-title">
        <AnimatedSection className="container-vision text-center mb-12" variant="blur">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <img src={logoWhite} alt="Igreja Vision" className="h-6 w-auto opacity-50" />
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
