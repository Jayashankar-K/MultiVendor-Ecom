import logo from "../logo.svg";
import { Link } from "react-router-dom";
function SingleProduct(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="col-12 col-md-3 mt-4 mb-4 ">
      <div className="card">
        <Link to="/product/cotton-dhoti/1">
          <img src={logo} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <h4 className="card-title">
            <Link onClick={scrollToTop} to="/product/cotton-dhoti/1">
              {props.product.title}
            </Link>
          </h4>
          <h5 className="card-title text-muted">
            Price : Rs.{props.product.price}
          </h5>
        </div>
        <div className="card-footer">
          <button title="Add to Cart" className="btn btn-success btn-sm mr-5">
            <i className="fa-solid fa-cart-plus "></i>
            <span style={{ fontWeight: "bold", marginLeft: "1px" }}>CART</span>
          </button>

          <button
            title="Add to Wishlist"
            className="btn btn-danger btn-sm ms-1"
          >
            <i className="fa fa-heart"></i>{" "}
            <span style={{ fontWeight: "bold", marginLeft: "1px" }}>
              WISHLIST
            </span>
          </button>

          <button
            title="Show Similar"
            className="btn btn-outline-secondary btn-sm ms-1"
          >
            <i className="fa fa-search"></i>{" "}
            <span style={{ fontWeight: "bold", marginLeft: "1px" }}>
              SIMILAR
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
