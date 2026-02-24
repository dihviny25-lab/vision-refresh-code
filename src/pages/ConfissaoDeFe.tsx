import Layout from "../components/Layout";

const articles = [
  {
    number: 1,
    title: "O Deus Trino",
    text: "Cremos em um só Deus, eternamente existindo em três pessoas igualmente divinas: Pai, Filho e Espírito Santo, que conhecem, amam e glorificam um ao outro. Este único Deus verdadeiro e vivo é infinitamente perfeito tanto em seu amor quanto em sua santidade. Ele é o criador de todas as coisas, visíveis e invisíveis, e é, portanto, digno de receber toda a glória e adoração. Imortal e eterno, ele conhece perfeita e exaustivamente o fim desde o princípio, sustenta e governa soberanamente sobre todas as coisas e, em sua providência, acarreta seus bons propósitos eternos de redimir para si um povo e restaurar a sua criação caída, para o louvor de sua gloriosa graça.",
  },
  {
    number: 2,
    title: "Revelação",
    text: "Deus graciosamente revelou a sua existência e poder na ordem criada, e tem se revelado de maneira suprema aos seres humanos caídos na pessoa de seu Filho, o verbo encarnado. Além do mais, este Deus é um Deus que fala, que por seu Espírito graciosamente se revelou em palavras humanas: cremos que Deus inspirou as palavras preservadas nas Escrituras, os sessenta e seis livros do Antigo e do Novo Testamento, os quais documentam e são também meio de sua obra salvadora no mundo.",
  },
  {
    number: 3,
    title: "Criação da humanidade",
    text: "Cremos que Deus criou os seres humanos, macho e fêmea, à sua própria imagem. Adão e Eva pertenciam à ordem criada que o próprio Deus declarou ser muito boa, servindo como agentes de Deus cuidando, gerenciando e governando sobre a criação, vivendo em santa e dedicada comunhão com seu Criador.",
  },
  {
    number: 4,
    title: "A Queda",
    text: "Cremos que Adão, feito à imagem de Deus, distorceu essa imagem e perdeu a sua bendição original — para si e toda sua descendência — ao cair em pecado pela tentação de Satanás. Como resultado, todos os seres humanos estão alienados de Deus, corrompidos em todo aspecto de seu ser e condenados, final e irrevogavelmente, à morte — a não ser pela intervenção graciosa do próprio Deus.",
  },
  {
    number: 5,
    title: "O Plano de Deus",
    text: "Cremos que desde toda a eternidade Deus determinou, em sua graça, salvar uma grande multidão de pecadores culpados, vindos de toda tribo, língua e nações, e com este fim os conheceu e escolheu.",
  },
  {
    number: 6,
    title: "O Evangelho",
    text: "Cremos ser o evangelho as boas novas de Jesus Cristo — a própria sabedoria de Deus. Completa loucura para o mundo, ainda que seja o poder de Deus para aqueles que estão sendo salvos, essas boas novas são cristológicas, centradas na cruz e na ressurreição.",
  },
  {
    number: 7,
    title: "A Redenção de Cristo",
    text: "Cremos que, movido pelo amor e em obediência ao Pai, o Filho eterno tornou-se humano: o Verbo se encarnou, plenamente Deus e plenamente ser humano, uma Pessoa em duas naturezas.",
  },
  {
    number: 8,
    title: "A Justificação de Pecadores",
    text: "Cremos que Cristo, por sua obediência e morte, pagou plenamente a dívida de todos aqueles que são por ele justificados. Pelo seu sacrifício, ele carregou em nosso lugar o castigo que era devido por nossos pecados, satisfazendo própria, real e plenamente a justiça de Deus por nós.",
  },
  {
    number: 9,
    title: "O Poder do Espírito Santo",
    text: "Cremos que esta salvação, atestada em toda a Escritura e assegurada por Jesus Cristo, é aplicada ao seu povo pelo Espírito Santo. Enviado pelo Pai e pelo Filho, o Espírito Santo glorifica o Senhor Jesus Cristo, e, como outro paracleto, está presente em e com aqueles que creem.",
  },
  {
    number: 10,
    title: "O Reino de Deus",
    text: "Cremos que aqueles que foram salvos pela graça de Deus mediante a união com Cristo, pela fé e pela regeneração do Espírito Santo, entram no reino de Deus e desfrutam das bênçãos da nova aliança: o perdão dos pecados, a transformação interior que desperta um desejo por glorificar, confiar e obedecer a Deus.",
  },
  {
    number: 11,
    title: "O novo povo de Deus",
    text: "Cremos que o povo da nova aliança de Deus já veio à Jerusalém celestial; já está assentado com Cristo nos lugares celestiais. Essa igreja universal se manifesta em igrejas locais das quais Cristo é a única cabeça.",
  },
  {
    number: 12,
    title: "Batismo e Ceia do Senhor",
    text: "Cremos que o batismo e a Ceia do Senhor são ordenados pelo próprio Senhor Jesus. O primeiro está ligado à entrada na comunidade da nova aliança e o segundo, à renovação contínua da aliança.",
  },
  {
    number: 13,
    title: "A Restauração de todas as coisas",
    text: "Cremos na volta pessoal, gloriosa e corporal de nosso Senhor Jesus Cristo com seus santos anjos, quando ele exercerá seu papel final de Juiz e seu reino será consumado.",
  },
];

const ConfissaoDeFe = () => (
  <Layout>
    <section className="py-16 md:py-24" aria-labelledby="confissao-title">
      <div className="container-vision text-center mb-12">
        <span className="subtitle">Confissão de Fé</span>
        <h1 id="confissao-title" className="section-title mt-5">
          No que acreditamos?
        </h1>
      </div>

      <div className="container-vision max-w-3xl mx-auto">
        <p className="text-foreground font-semibold mb-8">
          Declaração de Fé do The Gospel Coalition
        </p>

        <div className="space-y-8">
          {articles.map((article) => (
            <article key={article.number}>
              <h2 className="font-bold text-lg mb-2">
                {article.number}. {article.title}
              </h2>
              <p className="text-foreground/80 leading-relaxed">{article.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default ConfissaoDeFe;
