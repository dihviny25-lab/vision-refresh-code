import { MapPin, Clock, Users } from "lucide-react";
import Layout from "../components/Layout";
import AnimatedSection from "../components/AnimatedSection";

const celulas = [
  {
    name: "Célula",
    leaders: "Pr Matheus e Karol",
    address: "Rua Dr Péricles Pimentel Salgado, 152, Umuarama - Araçatuba/SP",
    day: "Terça-feira, 20h",
  },
  {
    name: "Célula Escolhidos",
    leaders: "Marcos e Lorraine",
    address: "Rua Maria Floriano Pavan, 86, Jardim das Oliveiras - Araçatuba/SP",
    day: "Terça-feira, 20h",
  },
  {
    name: "Célula Forjados na Fé",
    leaders: "Diego e Jéssica",
    address: "Rua Vicente de Carvalho, 1575, Hilda Mandarino - Araçatuba/SP",
    day: "Terça-feira, 21h",
  },
  {
    name: "Célula Aviação",
    leaders: "Marcio Cabral e Roseli",
    address: "Rua Dona Ida, 2124, Aviação - Araçatuba/SP",
    day: "Terça-feira, 20h30",
  },
  {
    name: "Célula Gaditas",
    leaders: "Dênis",
    address: "Rua Tupinambás, 567, São João - Araçatuba/SP",
    day: "Terça-feira, 21h",
  },
  {
    name: "Célula Inside",
    leaders: "Lucas",
    address: "Rua Silvio José Venturolli, 340, Umuarama - Araçatuba/SP",
    day: "Terça-feira, 20h",
  },
  {
    name: "Célula Maanaim",
    leaders: "Henrique e Beatriz",
    address: "Rua Domingos Paludetto, 1186, Simões - Birigui/SP",
    day: "Terça-feira, 20h30",
  },
];

const Hubs = () => {
  return (
    <Layout>
      {/* Hero banner */}
      <section className="gradient-banner py-12 md:py-16" aria-label="Células header">
        <AnimatedSection className="container-vision text-center" variant="blur">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <circle cx="20" cy="20" r="20" fill="white" />
              <path d="M20 8C20 8 14 16 14 22C14 25.3 16.7 28 20 28C23.3 28 26 25.3 26 22C26 16 20 8 20 8Z" fill="hsl(var(--gradient-end))" />
            </svg>
            <span className="text-white/70 text-xs font-semibold uppercase tracking-[0.3em]">Vision Cells</span>
          </div>
          <h1 className="section-title text-white">
            Encontre a célula mais próxima de você
          </h1>
          <p className="text-white/80 leading-relaxed text-lg mt-4 max-w-2xl mx-auto">
            Nossas células são pequenos grupos que se encontram semanalmente para compartilhar a
            palavra de Deus e criar amizades profundas e reais.
          </p>
        </AnimatedSection>
      </section>

      <section className="py-16 md:py-28" aria-labelledby="celulas-title">
        <div className="container-vision">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {celulas.map((celula, i) => (
              <AnimatedSection key={celula.name} delay={i * 0.06}>
                <div className="bg-secondary rounded-2xl p-6 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300 h-full flex flex-col border-t-4 border-t-transparent hover:border-t-accent">
                  <h2 className="text-lg font-bold text-foreground mb-4 gradient-text">{celula.name}</h2>
                  <div className="space-y-3 text-sm flex-1">
                    <div className="flex items-start gap-2.5">
                      <Users size={15} className="shrink-0 text-accent mt-0.5" />
                      <span className="text-muted-foreground">{celula.leaders}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <MapPin size={15} className="shrink-0 text-accent mt-0.5" />
                      <span className="text-muted-foreground">{celula.address}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock size={15} className="shrink-0 text-accent mt-0.5" />
                      <span className="text-muted-foreground">{celula.day}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hubs;
