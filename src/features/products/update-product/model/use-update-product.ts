import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productQueryKeys } from "@/entities/products";
import { updateProduct } from "../api/update-product";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProduct,
    onSuccess: (updatedProduct) => {
      queryClient.invalidateQueries({ queryKey: productQueryKeys.all });
      queryClient.invalidateQueries({
        queryKey: productQueryKeys.detail(updatedProduct.id),
      });
    },
  });
};
