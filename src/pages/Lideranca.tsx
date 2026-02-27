import Layout from "../components/Layout";
import AnimatedSection from "../components/AnimatedSection";

const Lideranca = () => (
  <Layout>
    {/* Hero banner */}
    <section className="gradient-banner py-12 md:py-16" aria-label="Liderança header">
      <div className="container-vision text-center">
        <AnimatedSection variant="blur">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <circle cx="20" cy="20" r="20" fill="white" />
              <path d="M20 8C20 8 14 16 14 22C14 25.3 16.7 28 20 28C23.3 28 26 25.3 26 22C26 16 20 8 20 8Z" fill="hsl(var(--gradient-end))" />
            </svg>
            <span className="text-white/70 text-xs font-semibold uppercase tracking-[0.3em]">Vision Church</span>
          </div>
          <h1 id="lideranca-title" className="section-title text-white">
            Conheça nosso pastor
          </h1>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 md:py-24" aria-labelledby="lideranca-title">
      <div className="container-vision">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-4xl mx-auto">
          <AnimatedSection variant="fade-right">
            <img
              src="/images/pastor-matheus-dan-karol.jpg"
              alt="Pastor Matheus Dan e Karoline"
              className="w-full rounded-2xl object-cover shadow-xl"
              loading="lazy"
            />
          </AnimatedSection>
          <AnimatedSection variant="fade-left" delay={0.15}>
            <div className="text-foreground/80 leading-relaxed space-y-4">
              <p>
                <strong className="text-foreground">Pastor Matheus Dan</strong> é casado com Karoline
                Martins da Silva Dantas desde 2010 e pai do Nicolas. É bacharel em Teologia pelo
                Seminário Martin Bucer e em Administração pela Faculdade de Ciências Econômicas do
                Triângulo Mineiro, e formado no curso intensivo Plantador oferecido pelo Restore
                Brasil, um braço da Rede Atos 29.
              </p>
              <p>
                Tem trabalhado no ministério em tempo integral desde 2008, auxiliando no pastoreio de
                igrejas em Uberaba/MG, servindo e plantando igrejas em Três Lagoas/MS e Araçatuba/SP.
                Atuou como professor de polo do Curso de Teologia Nível Superior do Seminário Martin
                Bucer no Brasil de 2017 a 2019, e diretor do Curso de Formação Ministerial do
                Seminário Huguenotes em Araçatuba/SP.
              </p>
              <p>
                Atualmente é pastor titular da <span className="gradient-text font-semibold">Igreja Vision</span>, além de presidente do Ministério Batista
                da Cruz, ambos com sede na cidade de Araçatuba/SP.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </Layout>
);

export default Lideranca;
