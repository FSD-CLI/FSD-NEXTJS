import axios from "axios";
import type { Product, ProductPayload } from "@/entities/products";

type UpdateProductParams = {
  id: string;
  payload: ProductPayload;
};

export const updateProduct = async ({
  id,
  payload,
}: UpdateProductParams): Promise<Product> => {
  const response = await axios.put(`/products/${id}`, payload);
  return response.data;
};
