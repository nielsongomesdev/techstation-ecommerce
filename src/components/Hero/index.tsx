import Banner from "@/assets/images/banner-tech.png";
import { Button } from "../Button";
import { Overlay } from "../Overlay";
import { Link, useRouter } from "@tanstack/react-router";

export const Hero = () => {
  const router = useRouter();

  return (
    <div className="container">
      <section className="relative h-125 rounded-[20px] mb-10">
        <img
          src={Banner}
          alt="Setup TechStation com monitor e periféricos"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover rounded-[20px]"
        />

        <Overlay
          title=""
          subtitle="Performance extrema para o seu setup."
          className="bottom-0 px-6 md:px-24 pb-24 justify-end md:items-end"
        >
          <Button
            variant="secondary"
            onClick={() => router.navigate({ to: "/products" })}
          >
            Ver modelos
          </Button>
          <Link
            to="/products/$productId"
            params={{ productId: "1" }}
            className="flex justify-center items-center gap-2 text-nowrap leading-none hover:cursor-pointer transition-colors duration-200 font-medium rounded-full transition py-2.5 bg-white text-primary hover:bg-gray-100 px-8"
          >
            Comprar agora
          </Link>
        </Overlay>
      </section>
    </div>
  );
};
