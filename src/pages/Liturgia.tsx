import Layout from "../components/Layout";
import AnimatedSection from "../components/AnimatedSection";
import logoWhite from "@/assets/logo-vision-white.png";

// ╔══════════════════════════════════════════════════════════════╗
// ║  EDITE APENAS OS TEXTOS ABAIXO PARA ATUALIZAR SEMANALMENTE ║
// ╚══════════════════════════════════════════════════════════════╝

const CONTEUDO_LITURGIA = {
  // Data do culto
  data: "08 de Março de 2026",
  subtitulo: "Culto de Domingo",

  // Roteiro do culto — adicione ou remova itens livremente
  roteiro: [
    { horario: "18:00", titulo: "Oração com os Voluntários", descricao: "Responsavél: Pr. Matheus" },
    { horario: "18:20", titulo: "Abertura", descricao: "Acolhimento e boas-vindas" },
    { horario: "18:30", titulo: "Louvor", descricao: "Jesus em tua presença • Na terra como no céu • Sublime • Toque dos céus" },
    { horario: "19:00", titulo: "Avisos e Ofertas", descricao: "Boas-vindas aos visitantes • Novos membros: preencher ficha de membros na recepção • Células em treinamento • Culto dos jovens aos sábados às 19h30 • Inscrição do curso de Teologia" },
    { horario: "19:10", titulo: "Ceia do Senhor", descricao: "Celebração da Ceia do Senhor" }, 
    { horario: "19h:30", titulo: "Palavra", descricao: "Pregação — Pr. Matheus Dan" },
    { horario: "20:10", titulo: "Bênção", descricao: "Bênção apostólica e encerramento" },
    { horario: "20:30", titulo: "Fechamento", descricao: "Responsavél: Evandro" },
  ],

  // Escalas — adicione ou remova ministérios e nomes livremente
  escalas: [
    {
      ministerio: "Louvor",
      nomes: ["Aline - Vocal", "Amanda - Vocal", "Ricardo - Vocal / guitarra", "Patrick - Contra baixo", "Gabriel Cordeiro - Bateria"
],
    },
    {
      ministerio: "Recepção",
      nomes: ["Recepção: Rose Moreira, Natalia, Amanda Lourenço", "Manutenção e ofertas: Leonardo e Renan", "Estacionamento: Cabral"],
    },
    {
      ministerio: "Mídia & Som",
      nomes: ["Filmagem: Eyshila", "Fotografia: João", "Slides: Luiz"],
    },
    {
      ministerio: "Infantil",
      nomes: ["Berçário: Jéssica", "Cordeirinhos: Camila e Marta", "Ovelhinhas: Alexandre e Paula"
"],
    },
    {
      ministerio: "Diaconia",
      nomes: ["Carlos Eduardo", "Bruna Martins", "Felipe Augusto"],
    },
  ],
};

// ╔══════════════════════════════════════════════════════════════╗
// ║  NÃO PRECISA EDITAR NADA ABAIXO DESTA LINHA                ║
// ╚══════════════════════════════════════════════════════════════╝

const Liturgia = () => {
  const { data, subtitulo, roteiro, escalas } = CONTEUDO_LITURGIA;

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-banner py-10 md:py-14" aria-label="Liturgia header">
        <div className="container-vision text-center">
          <AnimatedSection variant="blur">
            <img src={logoWhite} alt="Igreja Vision" className="h-6 w-auto mx-auto mb-4 opacity-70" />
            <p className="text-white/70 text-sm font-semibold uppercase tracking-[0.25em] mb-2">
              {subtitulo}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {data}
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Roteiro */}
      <section className="py-10 md:py-16" aria-label="Roteiro do culto">
        <div className="container-vision max-w-2xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] mb-8 gradient-text">
              Roteiro
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[52px] sm:left-[60px] top-0 bottom-0 w-px bg-border" />

            <ol className="space-y-1">
              {roteiro.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <li className="flex items-start gap-4 sm:gap-5 py-3 group">
                    {/* Horário */}
                    <span className="shrink-0 w-[44px] sm:w-[48px] text-right font-bold text-lg sm:text-xl text-accent tabular-nums">
                      {item.horario}
                    </span>

                    {/* Dot */}
                    <div className="relative shrink-0 mt-2">
                      <span className="block w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background group-hover:ring-accent/20 transition-all" />
                    </div>

                    {/* Conteúdo */}
                    <div className="min-w-0 flex-1 pb-3 border-b border-border group-last:border-b-0">
                      <p className="text-lg sm:text-xl font-bold text-foreground leading-snug">
                        {item.titulo}
                      </p>
                      {item.descricao && (
                        <p className="text-sm sm:text-base text-muted-foreground mt-0.5 leading-relaxed">
                          {item.descricao}
                        </p>
                      )}
                    </div>
                  </li>
                </AnimatedSection>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Escalas */}
      <section className="py-10 md:py-16 bg-secondary/50" aria-label="Escalas do culto">
        <div className="container-vision max-w-2xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] mb-8 gradient-text">
              Escalas
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {escalas.map((escala, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="rounded-xl overflow-hidden border border-border bg-card shadow-sm">
                  {/* Card header */}
                  <div className="px-5 py-3 bg-accent/10 border-b border-border">
                    <h3 className="font-bold text-base sm:text-lg text-accent">
                      {escala.ministerio}
                    </h3>
                  </div>
                  {/* Nomes */}
                  <ul className="px-5 py-4 space-y-2">
                    {escala.nomes.map((nome, j) => (
                      <li
                        key={j}
                        className="text-base sm:text-lg text-foreground/85 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                        {nome}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Liturgia;
