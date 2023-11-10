import React from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  const handleProduct = () => {
    navigate("/products");
  };
  return (
    <div>
      <nav className="bg-white shadow py-4 ">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center">
              <a className="flex-shrink" href="/">
                <img
                  className="w-12 h-12"
                  src="https://i.pinimg.com/564x/bc/ac/22/bcac22e4a00f1efd1b0cd5adebd65a3c.jpg"
                  alt="Workflow"
                />
              </a>
              <span className="italic text-gray-500  hover:text-black dark:hover:text-black">
                Productify
              </span>
            </div>
            <div className="flex items-center ml-4 md:ml-6">
              <div className="relative ml-3">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="  flex items-center justify-center w-full rounded-md  px-4 pt-1 text-gray-500 capitalize "
                    onClick={handleProduct}
                  >
                    create product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
