import Layout from "../components/Layout";

const Lideranca = () => (
  <Layout>
    <section className="py-16 md:py-24" aria-labelledby="lideranca-title">
      <div className="container-vision text-center mb-12">
        <span className="subtitle">Liderança</span>
        <h1 id="lideranca-title" className="section-title mt-5">
          Conheça nosso pastor
        </h1>
      </div>

      <div className="container-vision">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-4xl mx-auto">
          <img
            src="/images/pastor-matheus-dan-karol.jpg"
            alt="Pastor Matheus Dan e Karoline"
            className="w-full rounded-lg object-cover"
            loading="lazy"
          />
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
              Atualmente é pastor titular da Igreja Vision, além de presidente do Ministério Batista
              da Cruz, ambos com sede na cidade de Araçatuba/SP.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Lideranca;
