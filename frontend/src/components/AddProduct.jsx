import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [formValues, setFormValues] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = useMutation({
    mutationKey: ["add-product"],
    mutationFn: (params) => {
      return axios.post("http://localhost:3000/products", params);
    },
    onSuccess: () => {
      toast.success("Product Added...");
      navigate("/");
    },
    onError : (error) => {
      toast.error(error)
    }
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct.mutate(formValues)
  };

  return (
    <div className="max-w-lg mx-auto p-5 shadow-md rounded-xl border border-gray-200">
      <span className="text-lg text-slate-900 font-bold">Add Product</span>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-semibold">
            Title
          </label>
          <input
            id="title"
            className="w-full border border-gray-300 p-2 rounded-lg"
            type="text"
            name="title"
            placeholder="Enter Your Title ..."
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="img" className="font-semibold">
            Image
          </label>
          <input
            id="img"
            className="w-full border border-gray-300 p-2 rounded-lg"
            type="text"
            name="image"
            placeholder="Enter Your Image ..."
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price" className="font-semibold">
            Price
          </label>
          <input
            id="price"
            className="w-full border border-gray-300 p-2 rounded-lg"
            type="text"
            name="price"
            placeholder="Enter Your Price ..."
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="font-semibold">
            Description
          </label>
          <textarea
            id="description"
            className="w-full border border-gray-300 p-2 rounded-lg"
            type="text"
            name="description"
            placeholder="Enter Your Description ..."
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-blue-600 text-white font-bold py-2 rounded-lg transition duration-300 hover:bg-blue-800 "
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
