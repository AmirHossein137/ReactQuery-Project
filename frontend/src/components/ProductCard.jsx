import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ProductCard = ({ id, title, image, price }) => {

  const queryClient = useQueryClient();
  const deleteProduct = useMutation({
    mutationKey: ["delete", id],
    mutationFn: () => {
      return axios.delete(`http://localhost:3000/products/${id}`);
    },
    onSuccess: () => {
      toast.success("Your Product Deleted ...");
      queryClient.fetchQuery({ queryKey: ["products"] });
    },
  });

  return (
    <div className="p-5 flex flex-col shadow-md gap-3 rounded-lg border border-gray-100">
      <div>
        <img src={image} />
      </div>
      <div>
        <span className="font-semibold text-slate-700">{title}</span>
      </div>
      <div>${price}</div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-4">
          <Link
            className="w-full flex items-center justify-center py-1 text-white rounded-lg bg-green-600"
            to={`/single/${id}`}
          >
            Show
          </Link>
        </div>
        <div className="col-span-4">
          <Link
            className="w-full flex items-center justify-center py-1 text-white rounded-lg bg-yellow-600"
            to={`/edit/${id}`}
          >
            Edit
          </Link>
        </div>
        <div className="col-span-4">
          <button
            className="w-full flex items-center justify-center py-1 text-white rounded-lg bg-red-500"
            onClick={() => deleteProduct.mutate(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
