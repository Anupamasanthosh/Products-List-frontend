import React from "react";

function Sort({ category, setSelectedCat, setSelectedPrice }) {
  const handleCatChange = (e) => {
    setSelectedCat(e.target.value);
  };
  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };
  return (
    <div className="flex  flex-row justify-between w-full px-5 py-5">
      <div className="justify-start ml-5 sm:ml-3">
        <select
          id="category"
          name="category"
          onChange={handleCatChange}
          className="h-full px-4 py-2 pl-2 text-gray-500 bg-transparent  shadow-sm w-52 border-transparent border-gray-300 focus:ring-indigo-500  focus:border-indigo-500 pr-7 sm:text-sm rounded"
        >
          <option>All</option>
          {category.map((cat, index) => (
            <option value={cat.name} key={index}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className="justify-end mr-5 sm:mr-3">
        <select
          id="price"
          name="price"
          onChange={handlePriceChange}
          className="h-full px-4 py-2 pl-2 text-gray-500 bg-transparent  shadow-sm w-52 border-transparent border-gray-300 focus:ring-indigo-500  focus:border-indigo-500 pr-7 sm:text-sm rounded"
        >
          <option>All</option>
          <option value="asc">Low-to-High</option>
          <option value="desc">High-to-low</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
