import React from "react";
import SingleProduct from "./SingleProduct";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function CategoryProducts() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [product, setProducts] = useState([]);
  const [totalResult, setTotalResults] = useState([0]);
  const { category_slug, category_id } = useParams();

  useEffect(() => {
    fetchData(baseUrl + `/product/?category=` + category_id);
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results);
        setTotalResults(data.count);
      });
  }
  function changeUrl(baseurl) {
    fetchData(baseurl);
  }

  var links = [];
  var limit = 1;
  var totalLinks = totalResult / limit;
  for (let i = 1; i <= totalLinks; i++) {
    links.push(
      <li class="page-item">
        <Link
          onClick={() =>
            changeUrl(baseUrl + `/product/?category=${category_id}&?page=${i}`)
          }
          to={`/category/${category_slug}/${category_id}/?page=${i}`}
          class="page-link"
        >
          {i}
        </Link>
      </li>
    );
  }

  return (
    <section className="container mt-4">
      <h2 className="mb-4">{category_slug} Products</h2>
      <div className="row mb-4">
        {/*Product Box*/}
        {product.map((product) => (
          <SingleProduct product={product} />
        ))}
        {/*Product Box end*/}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">{links}</ul>
      </nav>
    </section>
  );
}

export default CategoryProducts;
