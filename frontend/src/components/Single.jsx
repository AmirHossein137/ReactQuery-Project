import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const Single = () => {

 const {id} = useParams();

 const {data , isLoading} = useQuery({
    queryKey : ['single-product' , id],
    queryFn : () => {
        return axios.get(`http://localhost:3000/products/${id}`)
    }
 })


 if(isLoading){
    return (
        <div className="w-full flex items-center justify-center h-[85vh]">
            <span className="text-2xl font-bold text-slate-900">Is Loading ...</span>
        </div>
    )
 }

  return (
    <div className="max-w-lg mx-auto p-4 shadow-lg rounded-xl flex flex-col gap-4">
        <div className="flex items-center justify-between">
            <span className="text-slate-700 font-bold">{data?.data?.title}</span>
            <span className="text-rose-500">${data?.data?.price}</span>
        </div>
        <div>
            <img src={data?.data?.image} alt={data?.data?.title}/>
        </div>
        <p className="text-sm text-gray-500">{data?.data?.description}</p>
    </div>
  )
}

export default Single