import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import AnimatedSection, { ParallaxSection } from "../components/AnimatedSection";

const slideImages = [
  "/images/slide-1.jpg",
  "/images/slide-2.jpg",
  "/images/slide-3.jpg",
  "/images/slide-4.jpg",
  "/images/slide-5.jpg",
];

const missionCards = [
  {
    title: "Músicas",
    description: "Ouça as playlists com as músicas que cantamos na Vision",
    image: "/images/card-musicas.jpg",
    link: "/musicas",
  },
  {
    title: "Contribua",
    description: "Ajude a Vision a avançar com o evangelho e alcançar pessoas",
    image: "/images/card-contribua.jpg",
    link: "/contribua",
  },
  {
    title: "Células",
    description: "Pequenos grupos reunidos em casas para orar e estudar a Bíblia",
    image: "/images/card-hubs.jpg",
    link: "/hubs",
  },
  {
    title: "Seja membro",
    description: "Preencha o formulário para se tornar um membro da Vision",
    image: "/images/card-membro.jpg",
    link: "https://app.enuves.com/institutions/769/people/register",
    external: true,
  },
];

const scheduleItems = [
  {
    icon: Calendar,
    title: "Culto",
    description: "Todos os domingos, às 18h30, nos reunimos como igreja para adorar a Deus e ouvir sua Palavra.",
  },
  {
    icon: Users,
    title: "Células",
    description: "Às terças, temos nossos encontros nas casas.",
    cta: { label: "Encontre uma célula", to: "/hubs" },
  },
  {
    icon: BookOpen,
    title: "Casa do Encontro",
    description: "Às quintas, às 20h30, temos a Casa do Encontro, um momento de oração e compartilhar da Palavra.",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Banner */}
      <section aria-label="Banner principal">
        <a
          href="https://www.youtube.com/watch?v=wIgoMxyw4Vk"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative group overflow-hidden"
        >
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <picture>
              <source media="(min-width: 768px)" srcSet="/images/banner-desktop.jpg" />
              <img
                src="/images/banner-mobile.jpg"
                alt="Série Dons - Assista agora"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="eager"
              />
            </picture>
          </motion.div>
        </a>
      </section>

      {/* Quem Somos */}
      <section className="py-16 md:py-28" aria-labelledby="quem-somos-title">
        <div className="container-vision">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-center">
            <AnimatedSection className="xl:col-span-5" variant="fade-right">
              <span className="subtitle">Quem somos</span>
              <h1 id="quem-somos-title" className="section-title mt-4 mb-6">
                Um lugar de<br />transformação
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-4 text-base">
                Somos uma igreja firmada na palavra de Deus, adotamos a confissão de fé The Gospel
                Coalition também subscrevemos os símbolos de fé da Atos 29 Brasil. Somos uma igreja
                que professa a continuidade dos dons, contemporânea em sua forma de culto,
                monergista quanto a salvação e complementarista quanto ao ministério pastoral.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10 text-base">
                Iniciamos os trabalhos no dia 14 de janeiro de 2018 e nos tornamos uma igreja
                oficialmente em 5 de maio de 2019.
              </p>

              {/* Pastor card */}
              <Link
                to="/lideranca"
                className="flex items-center gap-4 group p-4 -ml-4 rounded-2xl hover:bg-secondary transition-colors"
              >
                <img
                  src="/images/pastor-matheus-dan.jpg"
                  alt="Pastor Matheus Dan"
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-accent/20"
                  loading="lazy"
                />
                <div>
                  <strong className="text-foreground block text-sm">Matheus Dan</strong>
                  <span className="text-sm text-muted-foreground group-hover:text-accent transition-colors flex items-center gap-1">
                    Conheça o pastor <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection className="xl:col-span-6 xl:col-start-7" delay={0.15} variant="fade-left">
              {/* Photo slider */}
              <ParallaxSection speed={0.15}>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-foreground/10">
                  {slideImages.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Momentos na Vision ${i + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        i === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  ))}
                  {/* Dots */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {slideImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`rounded-full transition-all duration-300 ${
                          i === currentSlide
                            ? "bg-accent w-6 h-2.5"
                            : "bg-primary-foreground/40 w-2.5 h-2.5 hover:bg-primary-foreground/60"
                        }`}
                        aria-label={`Ir para foto ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </ParallaxSection>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className="py-16 md:py-24 bg-secondary" aria-labelledby="missao-title">
        <div className="container-vision">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14" variant="blur">
            <span className="subtitle">Missão</span>
            <h2 id="missao-title" className="section-title mt-4 mb-5">
              Compartilhar o amor de Deus
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Nossa missão é proclamar o Evangelho de Jesus Cristo e promover a transformação de
              vidas, através da pregação fiel da palavra de Deus.
            </p>
          </AnimatedSection>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {missionCards.map((card, i) => {
              const CardWrapper = card.external ? "a" : Link;
              const cardProps = card.external
                ? { href: card.link, target: "_blank", rel: "noopener noreferrer" }
                : { to: card.link };

              return (
                <AnimatedSection key={card.title} delay={i * 0.1} variant="scale">
                  <CardWrapper
                    {...(cardProps as any)}
                    className="card-overlay min-h-[320px] flex items-end p-7 group"
                    style={{ backgroundImage: `url(${card.image})` }}
                  >
                    <div className="relative z-10 text-primary-foreground">
                      <h3 className="text-xl font-bold mb-1.5">{card.title}</h3>
                      <p className="text-sm text-primary-foreground/80 mb-3 leading-relaxed">{card.description}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all">
                        Saiba mais <ArrowRight size={14} />
                      </span>
                    </div>
                  </CardWrapper>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programação + Localização */}
      <section className="py-16 md:py-28">
        <div className="container-vision">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">
            {/* Programação */}
            <AnimatedSection className="xl:col-span-6" variant="fade-right">
              <span className="subtitle">Fique por dentro</span>
              <h2 className="section-title mt-4 mb-10">Nossa programação</h2>
              <div className="space-y-6">
                {scheduleItems.map((item, i) => (
                  <AnimatedSection
                    key={item.title}
                    delay={i * 0.12}
                    variant="fade-up"
                  >
                    <div className="flex gap-5 p-5 rounded-2xl hover:bg-secondary transition-colors group">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                        <item.icon size={22} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                        {item.cta && (
                          <Link
                            to={item.cta.to}
                            className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-accent hover:gap-2.5 transition-all"
                          >
                            {item.cta.label} <ArrowRight size={14} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            {/* Localização */}
            <AnimatedSection className="xl:col-span-5 xl:col-start-8" delay={0.15} variant="fade-left">
              <span className="subtitle">Onde estamos</span>
              <h2 className="section-title mt-4 mb-10">Araçatuba/SP</h2>
              <AnimatedSection variant="scale" delay={0.3}>
                <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBY4dXj7bJEru3VCYJ1GR5-CqN2dU2Kr2c&q=R.+Ernesto+Bergamaschi,+96+-+Monterrey,+Ara%C3%A7atuba+-+SP,+16056-680"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Igreja Vision no mapa"
                  />
                </div>
              </AnimatedSection>
              <a
                href="https://www.google.com/maps/place/R.+Ernesto+Bergamaschi,+96+-+Monterrey,+Ara%C3%A7atuba+-+SP,+16056-680"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 rounded-2xl hover:bg-secondary transition-colors group"
              >
                <MapPin size={20} className="shrink-0 text-accent mt-0.5" />
                <div>
                  <strong className="text-foreground block text-sm">Endereço</strong>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    R. Ernesto Bergamaschi, 96 - Monterrey - Araçatuba/SP
                  </span>
                </div>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Confissão de Fé */}
      <section className="gradient-banner py-20 md:py-24 overflow-hidden">
        <div className="container-vision flex flex-col md:flex-row items-center justify-between gap-8">
          <AnimatedSection variant="fade-right">
            <p className="text-primary-foreground text-xl md:text-3xl font-semibold leading-snug max-w-2xl">
              Tendo sido, pois, justificados pela fé, temos paz com Deus, por nosso Senhor Jesus
              Cristo.
            </p>
          </AnimatedSection>
          <AnimatedSection variant="fade-left" delay={0.2}>
            <Link
              to="/confissao-de-fe"
              className="shrink-0 bg-primary-foreground text-foreground px-7 py-3.5 rounded-full text-sm font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Confissão de fé
              <ArrowRight size={15} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
