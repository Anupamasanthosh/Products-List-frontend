import React from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

function Paginator({ currentPage, nextPage, prevPage }) {
  return (
    <div className="flex justify-center">
      <div className="pt-1 px-5">
        <FcPrevious onClick={prevPage}></FcPrevious>
      </div>
      <span>Page {currentPage}</span>
      <div className="pt-1 px-5">
        <FcNext onClick={nextPage}></FcNext>
      </div>
    </div>
  );
}

export default Paginator;
