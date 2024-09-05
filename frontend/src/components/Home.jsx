import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "./ProductCard";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return axios.get("https://api.escuelajs.co/api/v1/products");
    },
  });

  console.log(data)

  return (
    <>
      <div className="grid grid-cols-5 gap-3">
        {data?.data.map((item) => (
          <ProductCard
          key={item.id}
          title={item.title}
          description={item.description}
          images={item.images}
          price={item.price}
        />
        ))}
      </div>
    </>
  );
};

export default Home;
