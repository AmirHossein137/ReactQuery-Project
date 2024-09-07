import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { PaginationBox } from "./PaginationBox";

const Paginate = () => {
  const [currnetPage, setCurrentPage] = useState(1);

  const { data } = useQuery({
    queryKey: ["pagination-product", currnetPage],
    queryFn: () => {
      return axios.get("http://localhost:3000/products", {
        params: {
          _page: currnetPage,
          _per_page: 4,
        },
      });
    },
    keepPreviousData: true,
    staleTime: 30000,
  });

  console.log(data);

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {data?.data?.data?.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-7">
        <PaginationBox
          pageCount={data?.data?.last}
          currentPage={currnetPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default Paginate;
