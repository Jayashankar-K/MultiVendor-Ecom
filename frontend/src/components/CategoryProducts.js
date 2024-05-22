import React from "react";
import SingleProduct from "./SingleProduct";

function CategoryProducts() {
  return (
    <section className="container mt-4">
      <h2 className="mb-4"> Products</h2>
      <div className="row mb-4">
        {/*Product Box*/}

        <SingleProduct title="Product Title" />
        <SingleProduct title="Product Title" />
        <SingleProduct title="Product Title" />
        <SingleProduct title="Product Title" />

        {/*Product Box end*/}
      </div>
    </section>
  );
}

export default CategoryProducts;
