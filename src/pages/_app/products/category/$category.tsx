import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ProductList } from "../../../../components/ProductList";
import { getCategoryBySlug } from "../../../../services/categoryService";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Product } from "../../../../interfaces/product";

const API_BASE_URL = "https://techstation-api.onrender.com";

export const Route = createFileRoute("/_app/products/category/$category")({
  loader: async ({ params }) => {
    const category = await getCategoryBySlug(params.category);
    return { category };
  },
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Produtos - TechStation" }],
  }),
  notFoundComponent: () => (
    <section className="container pt-44 text-center text-black min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Categoria não encontrada</h1>
      <Link to="/products" className="underline">
        Voltar para produtos
      </Link>
    </section>
  ),
});

function RouteComponent() {
    const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const latestRequestIdRef = useRef(0);
  const inFlightControllerRef = useRef<AbortController | null>(null);

  const params = useParams({ from: Route.id });
  const categorySlug = params.category;

  const loadMore = useCallback(async () => {
    if (loading || !hasMore || !categorySlug) return;

    const requestId = ++latestRequestIdRef.current;
    inFlightControllerRef.current?.abort();
    const controller = new AbortController();
    inFlightControllerRef.current = controller;

    setLoading(true);

    try {
      const queryParams = new URLSearchParams();
      queryParams.set("page", String(page));
      queryParams.set("limit", "3");
      queryParams.set("categorySlug", categorySlug);

      const response = await fetch(`${API_BASE_URL}/products?${queryParams.toString()}`, {
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`Erro ao buscar produtos por categoria: ${response.statusText}`);
      }

      const filteredProducts = await response.json();
      if (requestId !== latestRequestIdRef.current) return;

      setProducts((prev) => [...prev, ...filteredProducts.data]);

      const currentPage = filteredProducts.page ?? page;
      const pageLimit = filteredProducts.limit ?? 3;
      const total = filteredProducts.total;

      if (typeof total === "number") {
        setHasMore(currentPage * pageLimit < total);
      } else {
        setHasMore((filteredProducts.data ?? []).length >= pageLimit);
      }

      setPage((prev) => prev + 1);
    } catch (error) {
      if (controller.signal.aborted) return;
      console.error("Erro ao carregar produtos:", error);
      setHasMore(false);
    } finally {
      if (requestId === latestRequestIdRef.current) {
        setLoading(false);
      }
    }
  }, [hasMore, loading, page, categorySlug]);

  useEffect(() => {
    if (!categorySlug) return;

    const controller = new AbortController();
    inFlightControllerRef.current?.abort();
    inFlightControllerRef.current = controller;
    const requestId = ++latestRequestIdRef.current;

    const fetchInitial = async () => {
      setProducts([]);
      setPage(1);
      setHasMore(true);
      setLoading(true);

      try {
        const queryParams = new URLSearchParams();
        queryParams.set("page", "1");
        queryParams.set("limit", "3");
        queryParams.set("categorySlug", categorySlug);

        const res = await fetch(`${API_BASE_URL}/products?${queryParams.toString()}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`Erro ao buscar produtos: ${res.statusText}`);

        const result = await res.json();
        if (requestId !== latestRequestIdRef.current) return;

        setProducts(result.data ?? []);

        const firstPage = result.page ?? 1;
        const pageLimit = result.limit ?? 3;
        const total = result.total;

        if (typeof total === "number") {
          setHasMore(firstPage * pageLimit < total);
        } else {
          setHasMore((result.data ?? []).length >= pageLimit);
        }

        setPage(2);
      } catch (err) {
        if (controller.signal.aborted) return;
        console.error("Erro ao carregar produtos:", err);
        setProducts([]);
        setHasMore(false);
      } finally {
        if (requestId === latestRequestIdRef.current) {
          setLoading(false);
        }
      }
    };

    fetchInitial();

    return () => {
      controller.abort();
    };
  }, [categorySlug]);

  

  return (
    <section className="container pt-44 md:pt-54 pb-10 md:px-10 mb-10 text-black min-h-[80vh]">
      <h1 className=" text-3xl text-center mb-3">Lista de produtos</h1>

      <h2 className="text-center mb-10 p-4">
        Equipamentos de alta performance para elevar o nível do seu setup.
      </h2>

            {loading && products.length === 0 ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#212A2F]"></div>
        </div>
      ) : products.length === 0 ? (
        <>
          <p className="text-center">
            Nenhum produto encontrado para esta categoria.
          </p>
          <Link
            to="/products"
            className="text-accent hover:text-accent-hover underline"
          >
            Voltar para produtos
          </Link>
        </>
      ) : (
        <>
          <ProductList products={products} />

          {hasMore && (
            <div className="w-full flex justify-center">
              <button
                className="bg-[#212A2F] py-3.5 px-7 rounded-xl cursor-pointer text-white disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={loadMore}
                disabled={loading}
              >
                {loading ? "Carregando..." : "Carregar mais"}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}