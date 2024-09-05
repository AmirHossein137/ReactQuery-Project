import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
const Home = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return axios.get('http://localhost:3000/products')
    },
  });

  console.log(data);

  return <div>Home</div>;
};

export default Home;
