import React from "react";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";
function AllProducts() {
  return (
    <section className="container mt-4">
      <h2 className="mb-4">All Products</h2>
      <div className="row mb-4">
        {/*Product Box*/}

        <SingleProduct title="Product Title" />
        <SingleProduct title="Product Title" />
        <SingleProduct title="Product Title" />
        <SingleProduct title="Product Title" />

        {/*Product Box end*/}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination"></ul>
      </nav>
    </section>
  );
}

export default AllProducts;
