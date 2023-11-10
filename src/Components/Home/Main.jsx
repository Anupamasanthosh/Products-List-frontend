import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function Main({ product }) {
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className=" mx-auto flex justify-center items-center">
            <img
              src={product.image}
              alt=""
              className="w-full h-full object-cover  group-hover:scale-110 transition duration-300"
            />
          </div>
        </div>
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link
            to={`/product/${product._id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <FaEye className="text-xl" />
          </Link>
        </div>
      </div>
      <div>
        <div className="font-semibold capitalize text-gray-500 mb-1">
          {product.category}
        </div>
        <h2 className="text-xl font-bold mb-1">{product.name}</h2>
        <div className="font-semibold">$ {product.price}</div>
      </div>
    </div>
  );
}

export default Main;
