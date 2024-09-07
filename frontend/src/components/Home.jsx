import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "./ProductCard";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      return axios.get("http://localhost:3000/products");
    },
  });



  return (
    <>
      <div className="grid grid-cols-5 gap-5 mb-10">
        {data?.data?.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
