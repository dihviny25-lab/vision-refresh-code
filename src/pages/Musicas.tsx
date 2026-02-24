import Layout from "../components/Layout";

const Musicas = () => (
  <Layout>
    <div className="bg-primary text-primary-foreground min-h-[60vh]">
      <section className="py-16 md:py-24" aria-labelledby="musicas-title">
        <div className="container-vision text-center mb-12">
          <span className="subtitle text-primary-foreground/70">Músicas</span>
          <h1 id="musicas-title" className="section-title mt-5 text-primary-foreground">
            O que cantamos na Vision?
          </h1>
        </div>

        <div className="container-vision max-w-3xl mx-auto">
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
        </div>
      </section>
    </div>
  </Layout>
);

export default Musicas;
