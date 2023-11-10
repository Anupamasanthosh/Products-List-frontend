import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-gray-100 h-[600px] bg-hero bg-no-repeat  bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>new Saplings
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            Autumn Sale
            <br />
            <span className="font-semibold">Plants</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 boder-primary"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <div className="w-[700px] h-full">
            <img
              src="https://i.pinimg.com/564x/45/65/8e/45658efb74e62638098e496237d18919.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
