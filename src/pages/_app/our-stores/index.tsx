import { createFileRoute } from "@tanstack/react-router";
import OurStoresBanner from "@/assets/images/banner-loja-tech.png";
import OurStoresImg1 from "@/assets/images/loja-1.png";
import OurStoresImg2 from "@/assets/images/loja-2.png";

export const Route = createFileRoute("/_app/our-stores/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Nossas lojas - TechStation" }],
  }),
});

function RouteComponent() {
  return (
    <section className="container py-6">
      <img
        src={OurStoresBanner}
        alt="Banner da loja TechStation com equipamentos de setup"
        decoding="async"
        className="rounded-[20px] h-80 md:h-125 object-cover w-full"
      />

      <div>
        <h1 className="text-black text-2xl max-w-7xl m-auto my-20 text-center">
          Nossas lojas são o coração da nossa marca. Explore a coleção mais
          recente de hardwares, teste a performance dos equipamentos e sinta a
          qualidade da TechStation pessoalmente.
        </h1>

        <section className="text-black w-full space-y-20">
          <div className="flex flex-col md:flex-row items-center gap-2.5">
            <div className="text-center py-6">
              <h2 className="text-3xl mb-5">Novidades ao vivo</h2>

              <p>
                Descubra os lançamentos da temporada antes de todo mundo e
                experimente nossos setups mais recentes de perto.
              </p>
            </div>

            <img
              src={OurStoresImg1}
              alt="Setup gamer em exibição na loja TechStation"
              loading="lazy"
              decoding="async"
              className="rounded-[20px] md:max-w-[42vw] aspect-10/7 object-cover size-full"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2.5">
            <img
              src={OurStoresImg2}
              alt="Área de experiência com periféricos na loja TechStation"
              loading="lazy"
              decoding="async"
              className="rounded-[20px] md:max-w-[42vw] aspect-10/7 object-cover size-full"
            />

            <div className="text-center py-6 px-3">
              <h2 className="text-3xl mb-5">Atendimento Sob Medida</h2>

              <p>
                Conte com dicas de especialistas, sugestões de upgrade
                exclusivas e suporte personalizado de quem realmente entende de
                tecnologia e performance.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
