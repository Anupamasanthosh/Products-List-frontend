import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav/Nav";
import Main from "../Components/Home/Main";
import Hero from "../Components/Home/Hero";
import { useDispatch, useSelector } from "react-redux";
import Sort from "../Components/Home/Sort";
import axios from "../Utils/axios";
import Paginator from "../Components/Home/Paginator";
import { getProducts } from "../Utils/Constants";
import { setProductss } from "../Redux/ProductReducer";
import { setCategory } from "../Redux/CategoryReducer";

function Home() {
  const [display, setDisplay] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const dispatch = useDispatch();
  const products = useSelector((state) => state.Products.Products);
  const category = useSelector((state) => state.Category.Category);

  useEffect(() => {
    axios
      .get(getProducts)
      .then((res) => {
        if (res.data.products) {
          dispatch(setProductss(res.data.products));
          dispatch(setCategory(res.data.categories));
        }
      })
      .catch((err) => {
        showErrorToast(res.data.err);
      });
  }, [dispatch, products]);
  useEffect(() => {
    let sortedProducts = [...products];
    let filteredProducts = sortedProducts.filter((product) => {
      const isCatMatch = selectedCat === product.category.toLowerCase();

      return isCatMatch;
    });
    if (selectedPrice === "asc") {
      filteredProducts = sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedPrice === "desc") {
      filteredProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }
    const startIndex = (currentPage - 1) * itemsPerPage;

    const endIndex = startIndex + itemsPerPage;

    const itemsForCurrentPage = filteredProducts.length
      ? filteredProducts
      : sortedProducts.slice(startIndex, endIndex);

    setDisplay(itemsForCurrentPage);
  }, [selectedCat, selectedPrice, products, currentPage, dispatch]);

  const nextPage = () => {
    const totalPageCount = Math.ceil(products.length / itemsPerPage);

    if (currentPage < totalPageCount) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <header>
        <Nav />
      </header>
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-4">
          <Hero />
        </div>
        <div className="container mx-auto p-4">
          <div className="flex flex-col items-center justify-center">
            <div className="uppercase text-3xl px-5 py-5 font-bold">
              Explore Products Here
            </div>
            <Sort
              category={category}
              setSelectedCat={setSelectedCat}
              setSelectedPrice={setSelectedPrice}
            />
          </div>
          <div>
            {display.length ? (
              <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[30px]">
                {display.map((product) => (
                  <Main product={product} key={product._id} />
                ))}
              </div>
            ) : (
              <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[30px]">
                {products.map((product) => (
                  <Main product={product} key={product._id} />
                ))}
              </div>
            )}
          </div>
          <div className="container px-5 py-5">
            <Paginator
              currentPage={currentPage}
              nextPage={nextPage}
              prevPage={prevPage}
            />
          </div>
        </div>
      </main>
      <footer className="bg-gray-300 py-4 text-center">@Productify</footer>
    </div>
  );
}

export default Home;
