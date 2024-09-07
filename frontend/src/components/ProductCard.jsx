import { Link } from "react-router-dom"

const ProductCard = ({ id, title, image, price, description }) => {

  return (
    <div className="p-5 flex flex-col shadow-md gap-3 rounded-lg border border-gray-100">
      <div>
        <img src={image}/>
      </div>
      <div>
        <span className="font-semibold text-slate-700">{title}</span>
      </div>
      <div>${price}</div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-4">
          <Link className="w-full flex items-center justify-center py-1 text-white rounded-lg bg-green-600" to={`/single/${id}`}>Show</Link>
        </div>
        <div className="col-span-4">
          <Link className="w-full flex items-center justify-center py-1 text-white rounded-lg bg-yellow-600" to={`/edit/${id}`}>Edit</Link>
        </div>
        <div className="col-span-4">
          <button className="w-full flex items-center justify-center py-1 text-white rounded-lg bg-red-500">Delete</button>
        </div>
      </div>
    </div>
  )
};

export default ProductCard;
