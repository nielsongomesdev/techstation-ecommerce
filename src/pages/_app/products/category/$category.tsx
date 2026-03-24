import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductList } from "../../../../components/ProductList";
import { products } from "../../../../mocks/products";

export const Route = createFileRoute("/_app/products/category/$category")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Produtos - TechStation" }],
  }),
});

function RouteComponent() {
  const { category } = Route.useParams();

  const normalizeCategory = (value: string) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const filteredProducts = products.filter(
    (product) =>
      normalizeCategory(product.category?.name ?? "") ===
      normalizeCategory(category),
  );

  return (
    <section className="container pt-44 md:pt-54 pb-10 md:px-10 mb-10 text-black min-h-[80vh]">
      <h1 className=" text-3xl text-center mb-3">Lista de produtos</h1>

      <h2 className="text-center mb-10 p-4">
        Equipamentos de alta performance para elevar o nível do seu setup.
      </h2>

      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-2 min-h-80">
          <p className="text-center">
            Nenhum produto encontrado para esta categoria.
          </p>
          <Link
            to="/products"
            className="text-accent hover:text-accent-hover underline"
          >
            Voltar para produtos
          </Link>
        </div>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </section>
  );
}
