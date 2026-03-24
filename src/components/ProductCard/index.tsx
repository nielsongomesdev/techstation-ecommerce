import { Link } from "@tanstack/react-router";
import type { Product } from "../../interfaces/product";
import { MdAddShoppingCart } from "react-icons/md";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-2xl shadow-md h-full flex flex-col overflow-hidden">
      <Link
        to="/products/$productId"
        params={{ productId: String(product.id) }}
        className="block bg-surface"
      >
        <div className="aspect-4/3 p-4 flex items-center justify-center">
          <img
            className="w-full h-full object-contain"
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
          />
        </div>
      </Link>

      <div className="text-black p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold min-h-16">{product.name}</h3>

        <p className="mb-2">{product.color}</p>

        <div className="flex justify-between mt-auto">
          <p className="font-bold">R${product.price},00</p>

          <button className="cursor-pointer" onClick={() => addToCart(product)}>
            <MdAddShoppingCart className="h-7 w-7" />
          </button>
        </div>
      </div>
    </div>
  );
};
