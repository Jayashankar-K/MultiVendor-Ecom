import logo from "../logo.svg";

import SingleProductNoSim from "./SingleProductNoSim";
import { Link } from "react-router-dom";

function ProductDetail() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-4">
          <div
            id="ProductThumbnailSlider"
            className="carousel carousel-fade carousel-dark slide   mt-4"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#ProductThumbnailSlider"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#ProductThumbnailSlider"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#ProductThumbnailSlider"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={logo} className="img-thumbnail mb-5" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={logo} className="img-thumbnail  mb-5" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={logo} className="img-thumbnail mb-5" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev "
              type="button"
              data-bs-target="#ProductThumbnailSlider"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next "
              type="button"
              data-bs-target="#ProductThumbnailSlider"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-8">
          <h3>Product Title</h3>
          <h5 className="card-title ">Rs.500</h5>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>

          <p>
            <div className="card-footer mt-3">
              <Link title="Demo" target="blank" className="btn btn-dark">
                <i className=" fa-solid fa-cart-plus"></i>Demo
              </Link>
              <button title="Buy Now" className="btn btn-primary ms-1  mr-5">
                <i className="fa-solid fa-bag-shopping "></i>
                <span style={{ fontWeight: "bold", marginLeft: "1px" }}>
                  BUY NOW
                </span>
              </button>
              <button title="Add to Cart" className="btn btn-success   ms-1">
                <i className="fa-solid fa-cart-plus "></i>
                <span style={{ fontWeight: "bold", marginLeft: "1px" }}>
                  ADD TO CART
                </span>
              </button>

              <button title="Add to Wishlist" className="btn btn-danger   ms-1">
                <i className="fa fa-heart"></i>{" "}
                <span style={{ fontWeight: "bold", marginLeft: "1px" }}>
                  WISHLIST
                </span>
              </button>
            </div>
          </p>
          <hr></hr>
          <div className="producttags mt-4">
            <h5>Tags</h5>
            <p>
              <Link to="#" className="badge bg-secondary text-white me-1">
                Men
              </Link>
              <Link to="#" className="badge bg-secondary text-white me-1">
                Shirt
              </Link>
              <Link to="#" className="badge bg-secondary text-white me-1">
                Men
              </Link>
              <Link to="#" className="badge bg-secondary text-white me-1">
                Shirt
              </Link>
              <Link to="#" className="badge bg-secondary text-white me-1">
                Men
              </Link>
              <Link to="#" className="badge bg-secondary text-white me-1">
                Shirt
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/*Related Products*/}
      <h3 className="mt-5 mb-3">Related Products</h3>
      <div
        id="relatedProductsSlider"
        className="carousel carousel-dark slide   mt-4"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#relatedProductsSlider"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#relatedProductsSlider"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#relatedProductsSlider"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row  mb-5">
              <SingleProductNoSim title="Cotton Shirt" />
              <SingleProductNoSim title="Cotton Shirt" />
              <SingleProductNoSim title="Cotton Shirt" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="row mb-5">
              <SingleProductNoSim title=" Shirt" />
              <SingleProductNoSim title=" Shirt" />
              <SingleProductNoSim title=" Shirt" />
              <SingleProductNoSim title=" Shirt" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="row mb-5">
              <SingleProductNoSim title="Cotton " />
              <SingleProductNoSim title="Cotton " />
              <SingleProductNoSim title="Cotton " />
              <SingleProductNoSim title="Cotton " />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#relatedProductsSlider"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next "
          type="button"
          data-bs-target="#relatedProductsSlider"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/*End*/}
    </section>
  );
}

export default ProductDetail;
