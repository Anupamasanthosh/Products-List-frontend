import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Details() {
  const id = useParams();
  const products = useSelector((state) => state.Products.Products);
  const productToDisplay = products.filter((item) => item._id === id.id);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="text-center sm:text-left p-5">
        <img
          src={productToDisplay[0].image}
          alt=""
          className="w-[560px] aspect-square object-cover rounded-xl mx-auto"
        />
      </div>
      <div className="text-center sm:text-left p-5">
        <span className="text-gray-900 font-semibold">
          {productToDisplay[0].category}
        </span>
        <h1 className="text-3xl font-bold">{productToDisplay[0].name}</h1>
        <p className="text-gray-700">{productToDisplay[0].description}</p>
        <h6 className="text-2xl font-medium text-gray">
          price:$ {productToDisplay[0].price}
        </h6>
      </div>
    </div>
  );
}

export default Details;
