import { useState , useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const [editValue, setEditValue] = useState({});

  const { id } = useParams();

  console.log(id)

  const handleChange = (e) => {
    setEditValue({
      ...editValue,
      [e.target.name]: e.target.value,
    });
  };

  const { data , } = useQuery({
    queryKey : ['get-data' , id],
    queryFn : () => {
      return axios.get(`http://localhost:3000/products/${id}`)
    },
  })

  useEffect(() => {

  } , )


  return (
    <div className="max-w-lg mx-auto p-5 shadow-md rounded-xl border border-gray-200">
      <span className="text-lg text-slate-900 font-bold">Edit Product</span>
      <form className="flex flex-col gap-4 mt-5">
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
            value={editValue.title}
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
            value={editValue.image}
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
            value={editValue.price}
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
            value={editValue.description}
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

export default Edit;
