import React from "react";
import Nav from "../Components/Nav/Nav";
import Details from "../Components/ProductDetails.jsx/Details";

function ProduDetails() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <header>
        <Nav />
      </header>
      <main className="flex-1 overflow-y-auto container px-5 py-5">
        <Details />
      </main>
      <footer className="bg-gray-300 py-4 text-center">@Productify</footer>
    </div>
  );
}

export default ProduDetails;
