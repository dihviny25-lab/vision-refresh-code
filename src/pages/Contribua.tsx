import Layout from "../components/Layout";

const donationMethods = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "PIX",
    description: "Chave - CNPJ",
    detail: "31.874.576/0001-01",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12M8 10h8" />
      </svg>
    ),
    title: "Dinheiro",
    description:
      "Você pode contribuir em espécie utilizando os envelopes disponibilizados em nossas reuniões presenciais.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
    title: "TED ou DOC",
    description: "Igreja Batista da Cruz",
    detail: "CNPJ: 31.874.576/0001-01\nBanco Sicredi\nAgência 3021\nConta 14479-7",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <path d="M1 10h22" />
      </svg>
    ),
    title: "Cartão ou boleto",
    description: "Contribua com cartão ou boleto através do PagSeguro.",
    link: "https://link.mercadopago.com.br/dizimovision",
    linkText: "Clique aqui",
  },
];

const monthlyValues = [
  { label: "R$100", link: "http://pag.ae/7-E6zsacM" },
  { label: "R$200", link: "http://pag.ae/7-E6NLEQn" },
  { label: "R$300", link: "http://pag.ae/7-E6QGCxK" },
  { label: "R$500", link: "http://pag.ae/7-E6ReAYM" },
  { label: "R$1.000", link: "http://pag.ae/7-E6RKfcL" },
];

const Contribua = () => (
  <Layout>
    {/* Banner */}
    <section className="gradient-banner py-12 md:py-16 px-4" aria-label="Versículo">
      <div className="container-vision max-w-4xl">
        <p className="text-primary-foreground text-lg md:text-xl leading-relaxed">
          E Deus é poderoso para fazer que lhes seja acrescentada toda a graça, para que em todas
          as coisas, em todo o tempo, tendo tudo o que é necessário, vocês transbordem em toda boa
          obra.
        </p>
        <p className="text-primary-foreground/70 mt-3 text-sm">2 Coríntios 9:8</p>
      </div>
    </section>

    {/* Content */}
    <section className="py-16 md:py-24" aria-labelledby="contribua-title">
      <div className="container-vision">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          {/* Text */}
          <div className="xl:col-span-5">
            <span className="subtitle">Contribua</span>
            <h1 id="contribua-title" className="section-title mt-5 mb-6">
              Formas de contribuir
            </h1>
            <div className="text-foreground/80 leading-relaxed space-y-4">
              <p>
                Devemos contribuir espontaneamente motivados pela alegria de Deus. A contribuição é
                uma graça que Deus nos dá. É um privilégio ser cooperador com Deus na sua obra. O
                ato de contribuir é uma expressão de culto e adoração. Deus ama a quem dá com
                alegria.
              </p>
              <p>
                Devemos contribuir conscientes de que Deus é dono de tudo e que tudo deve ser feito
                para a sua glória.
              </p>
              <p className="font-medium text-foreground">
                Que os bens que Deus nos deu estejam no altar de Deus, a serviço a Deus
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="xl:col-span-6 xl:col-start-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {donationMethods.map((method) => (
                <div
                  key={method.title}
                  className="bg-secondary rounded-lg p-6 text-center flex flex-col items-center"
                >
                  <div className="text-foreground mb-3">{method.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                  <p className="text-sm text-foreground/70 mb-1">{method.description}</p>
                  {method.detail && (
                    <p className="text-sm text-foreground/80 whitespace-pre-line font-medium">
                      {method.detail}
                    </p>
                  )}
                  {method.link && (
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block bg-accent text-accent-foreground px-5 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      {method.linkText}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Monthly contribution */}
    <section className="py-12 md:py-16 bg-secondary" aria-labelledby="monthly-title">
      <div className="container-vision text-center">
        <h2 id="monthly-title" className="section-title mb-8">
          Contribua mensalmente para a reforma do nosso novo prédio
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {monthlyValues.map((val) => (
            <a
              key={val.label}
              href={val.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-3 rounded font-bold text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {val.label}
            </a>
          ))}
          <a
            href="https://link.mercadopago.com.br/dizimovision"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-6 py-3 rounded font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Doação Única
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contribua;
