import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "./ProductCard";

const ParallelQueries = () => {
  const productListId = [2, 6, 3, 8];

  const parallelProduct = useQueries({
    queries: productListId.map((productId) => ({
      queryKey: ["parallel", productId],
      queryFn: () => {
        return axios.get(`http://localhost:3000/products/${productId}`);
      },
    })),
  });

  console.log(parallelProduct);

  return (
    <div className="grid grid-cols-4 gap-3">
      {parallelProduct.map((parallel) => {
        return (
          <ProductCard
            key={parallel?.data?.data?.id}
            id={parallel?.data?.data?.id}
            title={parallel?.data?.data?.title}
            image={parallel?.data?.data?.image}
            price={parallel?.data?.data?.price}
          />
        );
      })}
    </div>
  );
};

export default ParallelQueries;
