import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

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
          className="block"
        >
          <picture>
            <source media="(min-width: 768px)" srcSet="/images/banner-desktop.jpg" />
            <img
              src="/images/banner-mobile.jpg"
              alt="Série Dons - Assista agora"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </picture>
        </a>
      </section>

      {/* Quem Somos */}
      <section className="py-12 md:py-20" aria-labelledby="quem-somos-title">
        <div className="container-vision">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">
            <div className="xl:col-span-5">
              <span className="subtitle">Quem somos</span>
              <h1 id="quem-somos-title" className="section-title mt-5 mb-5">
                Um lugar de transformação
              </h1>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Somos uma igreja firmada na palavra de Deus, adotamos a confissão de fé The Gospel
                Coalition também subscrevemos os símbolos de fé da Atos 29 Brasil. Somos uma igreja
                que professa a continuidade dos dons, contemporânea em sua forma de culto,
                monergista quanto a salvação e complementarista quanto ao ministério pastoral.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-8">
                Iniciamos os trabalhos no dia 14 de janeiro de 2018 e nos tornamos uma igreja
                oficialmente em 5 de maio de 2019.
              </p>

              {/* Pastor card */}
              <Link
                to="/lideranca"
                className="flex items-center gap-4 group"
              >
                <img
                  src="/images/pastor-matheus-dan.jpg"
                  alt="Pastor Matheus Dan"
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <strong className="text-foreground block">Matheus Dan</strong>
                  <span className="text-sm text-foreground/60 group-hover:text-accent transition-colors">
                    Conheça o pastor →
                  </span>
                </div>
              </Link>
            </div>

            <div className="xl:col-span-5 xl:col-start-8 relative">
              {/* Quote overlay */}
              <div className="hidden xl:block absolute -left-8 top-8 z-10 bg-primary text-primary-foreground p-6 rounded-lg max-w-[280px] text-sm leading-relaxed shadow-lg">
                Deus amou o mundo de tal maneira, que deu seu único filho, para que todo aquele que
                nele crê tenha a vida eterna.
              </div>

              {/* Photo slider */}
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
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
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {slideImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        i === currentSlide ? "bg-accent" : "bg-primary-foreground/50"
                      }`}
                      aria-label={`Ir para foto ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className="py-12 md:py-16" aria-labelledby="missao-title">
        <div className="container-vision text-center max-w-3xl mx-auto mb-12">
          <span className="subtitle">Missão</span>
          <h2 id="missao-title" className="section-title mt-5 mb-5">
            Compartilhar o amor de Deus
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Nossa missão é proclamar o Evangelho de Jesus Cristo e promover a transformação de
            vidas, através da pregação fiel da palavra de Deus.
          </p>
        </div>

        {/* Cards */}
        <div className="container-vision">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {missionCards.map((card) => {
              const CardWrapper = card.external ? "a" : Link;
              const cardProps = card.external
                ? { href: card.link, target: "_blank", rel: "noopener noreferrer" }
                : { to: card.link };

              return (
                <CardWrapper
                  key={card.title}
                  {...(cardProps as any)}
                  className="card-overlay min-h-[280px] flex items-end p-6 group"
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <div className="relative z-10 text-primary-foreground">
                    <h3 className="text-lg font-bold mb-1">{card.title}</h3>
                    <p className="text-sm text-primary-foreground/80 mb-2">{card.description}</p>
                    <span className="text-sm font-medium text-accent group-hover:underline">
                      Saiba mais →
                    </span>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programação + Localização */}
      <section className="py-12 md:py-20">
        <div className="container-vision">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
            {/* Programação */}
            <div className="xl:col-span-6">
              <span className="subtitle">Fique por dentro</span>
              <h2 className="section-title mt-5 mb-8">Nossa programação</h2>
              <ul className="space-y-6">
                <li className="border-l-2 border-foreground pl-5">
                  <h3 className="font-bold text-lg mb-1">Culto</h3>
                  <p className="text-foreground/80">
                    Todos os domingos, às 18h30, nos reunimos como igreja para adorar a Deus e ouvir
                    sua Palavra.
                  </p>
                </li>
                <li className="border-l-2 border-foreground pl-5">
                  <h3 className="font-bold text-lg mb-1">Células</h3>
                  <p className="text-foreground/80 mb-3">
                    Às terças, temos nossos encontros nas casas.
                  </p>
                  <Link
                    to="/hubs"
                    className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Encontre uma célula
                  </Link>
                </li>
                <li className="border-l-2 border-foreground pl-5">
                  <h3 className="font-bold text-lg mb-1">Casa do Encontro</h3>
                  <p className="text-foreground/80">
                    Às quintas, às 20h30, temos a Casa do Encontro, um momento de oração e
                    compartilhar da Palavra.
                  </p>
                </li>
              </ul>
            </div>

            {/* Localização */}
            <div className="xl:col-span-5 xl:col-start-8">
              <span className="subtitle">Onde estamos</span>
              <h2 className="section-title mt-5 mb-8">Araçatuba/SP</h2>
              <div className="rounded-lg overflow-hidden mb-6">
              <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBY4dXj7bJEru3VCYJ1GR5-CqN2dU2Kr2c&q=R.+Ernesto+Bergamaschi,+96+-+Monterrey,+Ara%C3%A7atuba+-+SP,+16056-680"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Igreja Vision no mapa"
                />
              </div>
              <a
                href="https://www.google.com/maps/place/R.+Ernesto+Bergamaschi,+96+-+Monterrey,+Ara%C3%A7atuba+-+SP,+16056-680"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-accent transition-colors block"
              >
                <strong className="text-foreground">Endereço</strong>
                <br />
                R. Ernesto Bergamaschi, 96 - Monterrey - Araçatuba/SP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Confissão de Fé */}
      <section className="gradient-banner py-16 md:py-20">
        <div className="container-vision flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-primary-foreground text-xl md:text-2xl font-medium leading-relaxed max-w-3xl">
            Tendo sido, pois, justificados pela fé, temos paz com Deus, por nosso Senhor Jesus
            Cristo.
          </p>
          <Link
            to="/confissao-de-fe"
            className="shrink-0 bg-primary text-primary-foreground px-6 py-3 rounded text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Confissão de fé
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
