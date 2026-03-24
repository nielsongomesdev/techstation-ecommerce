import { categories } from "../../mocks/categories";
import { Button } from "../Button";
import { useRouter } from "@tanstack/react-router";

export const Categories = () => {
  const router = useRouter();

  return (
    <section className="container flex gap-2.5 lg:grid lg:grid-cols-4 lg:gap-4 mb-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
      {categories.map((category, index) => (
        <div
          key={index}
          className="h-125 rounded-[20px] relative flex items-center justify-center text-white shrink-0 w-[95%] md:w-1/2 lg:w-full overflow-hidden bg-white"
        >
          <img
            src={category.image}
            alt={`Categoria ${category.name}`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-contain p-3"
          />

          <div className="absolute inset-0 bg-black/25 rounded-[20px] snap-center"></div>

          <div className="relative z-10">
            <Button
              variant="secondary"
              onClick={() =>
                router.navigate({
                  to: "/products/category/$category",
                  params: { category: category.slug },
                })
              }
            >
              {category.name}
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
};
