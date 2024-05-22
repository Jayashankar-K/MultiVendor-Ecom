import logo from "../logo.svg";
import { Link } from "react-router-dom";
import Features from "./Features";
import SingleProduct from "./SingleProduct";
import AllProducts from "./AllProducts";

function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const products = [
    {
      title: "Product 1",
      price: 100,
    },
    {
      title: "Product 2",
      price: 200,
    },
    {
      title: "Product 3",
      price: 300,
    },
    {
      title: "Product 4",
      price: 400,
    },
  ];
  return (
    <main className="mt-4">
      <div className="container">
        {/*Latest Products*/}
        <h2 className="mb-4">
          Latest Products
          <Link to="/products" className="float-end btn btn-dark m-2">
            View All Products <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </h2>
        <div className="row mb-4">
          {products.map((product) => (
            <SingleProduct product={product} />
          ))}
        </div>
        {/*Latest Products End*/}

        {/*Popular Categories */}
        <h2 className="mb-4">Categories</h2>
        <div className="row mb-4">
          {/*Category Box*/}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">
                  <Link onClick={scrollToTop} to="/category/men/1">
                    Category title
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          {/*Category Box end*/}
          {/*Category Box*/}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">
                  <Link onClick={scrollToTop} to="/">
                    Category title
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          {/*Category Box end*/}
          {/*Category Box*/}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">
                  <Link onClick={scrollToTop} to=" /">
                    Category title
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          {/*Category Box end*/}
        </div>
        {/*Popular Categories End*/}

        {/*Popular Products*/}
        <h2 className="mb-4">
          Popular Products
          <a href="#" className="float-end btn btn-dark m-2">
            View All Products <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </h2>
        <div className="row mb-4">
          {/*Product Box*/}
          {products.map((product) => (
            <SingleProduct product={product} />
          ))}
          {/*Product Box end*/}
        </div>
        {/*Popular Products End*/}

        {/*Rating And reviews*/}
        <div
          id="carouselExampleIndicators"
          className="carousel slide my-4 border bg-dark text-white p-5"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <cite title="Source Title">Customer Name</cite>
                </figcaption>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <cite title="Source Title">Customer Name</cite>
                </figcaption>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <cite title="Source Title">Customer Name</cite>
                </figcaption>
              </figure>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/*End */}
      </div>
      <Features />
    </main>
  );
}
export default Home;
