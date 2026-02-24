import Layout from "../components/Layout";

const hubs = [
  {
    name: "Hub",
    leaders: "Pr Matheus e Karol",
    address: "Rua Dr Péricles Pimentel Salgado, 152, Umuarama - Araçatuba/SP",
    day: "Terça-feira, 20h",
  },
  {
    name: "Hub Escolhidos",
    leaders: "Marcos e Lorraine",
    address: "Rua Maria Floriano Pavan, 86, Jardim das Oliveiras - Araçatuba/SP",
    day: "Terça-feira, 20h",
  },
  {
    name: "Hub Forjados na Fé",
    leaders: "Diego e Jéssica",
    address: "Rua Vicente de Carvalho, 1575, Hilda Mandarino - Araçatuba/SP",
    day: "Terça-feira, 21h",
  },
  {
    name: "Hub Aviação",
    leaders: "Marcio Cabral e Roseli",
    address: "Rua Dona Ida, 2124, Aviação - Araçatuba/SP",
    day: "Terça-feira, 20h30",
  },
  {
    name: "Hub Gaditas",
    leaders: "Dênis",
    address: "Rua Tupinambás, 567, São João - Araçatuba/SP",
    day: "Terça-feira, 21h",
  },
  {
    name: "Hub Inside",
    leaders: "Lucas",
    address: "Rua Silvio José Venturolli, 340, Umuarama - Araçatuba/SP",
    day: "Terça-feira, 20h",
  },
  {
    name: "Hub Maanaim",
    leaders: "Henrique e Beatriz",
    address: "Rua Domingos Paludetto, 1186, Simões - Birigui/SP",
    day: "Terça-feira, 20h30",
  },
];

const Hubs = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24" aria-labelledby="hubs-title">
        <div className="container-vision">
          <div className="text-center mb-16">
            <span className="subtitle">Hubs</span>
            <h1 id="hubs-title" className="section-title mt-5 mb-5">
              Encontre o hub mais próximo de você
            </h1>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
            {/* Texto descritivo */}
            <div className="xl:col-span-5">
              <p className="text-foreground/80 leading-relaxed mb-4">
                HUB significa SUPORTE, nossos Hubs são pequenos grupos que se encontram semanalmente,
                para compartilhar a palavra de Deus, compartilhar experiências, criando um ambiente de
                amizades profundas e reais, procure um mais próximo de você.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Algumas igrejas trabalham com modelo de célula, nós somos diferentes em alguns aspectos,
                exatamente por isso escolhemos colocar um nome diferente.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Quero desafiar você a frequentar um de nossos HUBs e você irá perceber claramente a
                presença de Deus e o ambiente transformador.
              </p>
            </div>

            {/* Lista de hubs */}
            <div className="xl:col-span-6 xl:col-start-7">
              <ul className="divide-y divide-border">
                {hubs.map((hub) => (
                  <li key={hub.name} className="py-6 first:pt-0 last:pb-0">
                    <h2 className="text-xl font-bold text-foreground mb-1">{hub.name}</h2>
                    <p className="text-foreground/80 text-sm mb-1">
                      <strong>Líderes:</strong> {hub.leaders}
                    </p>
                    <p className="text-foreground/80 text-sm">{hub.address}</p>
                    <p className="text-foreground/60 text-sm">{hub.day}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hubs;
