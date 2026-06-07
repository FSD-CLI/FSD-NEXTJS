import Image from "next/image";

import type { Product } from "../model/types";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="rounded-2xl border p-4 shadow-sm">
      <Image
        src={product.imageUrl}
        alt={product.title}
        width={640}
        height={360}
        className="mb-3 h-48 w-full rounded-xl object-cover"
      />

      <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="mt-2 text-sm text-gray-600">{product.description}</p>

      <div className="mt-3 flex items-center justify-between">
        <span className="font-semibold">{product.price} EGP</span>
        <span className="text-sm text-gray-500">Stock: {product.stock}</span>
      </div>
    </div>
  );
};
