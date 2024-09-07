import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const InfinityQuery = () => {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, isFetching} = useInfiniteQuery({
    queryKey: ["infinity"],
    queryFn: ({ pageParam }) => {
      return axios.get("http://localhost:3000/products", {
        params: {
          _page: pageParam ?? 1,
          _per_page: 4,
        },
      });
    },
    getNextPageParam: (response) => {
      return response?.data?.next ?? undefined;
    },
    getPreviousPageParam: (response) => {
      return response?.data?.prev ?? undefined;
    },
  });

  useEffect(() => {
    if (inView && !isFetching) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div className="max-w-sm flex flex-col mx-auto gap-3">
      {data?.pages?.map((page) => {
        return page?.data?.data?.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ));
      })}
      <div ref={ref}></div>
    </div>
  );
};

export default InfinityQuery;
