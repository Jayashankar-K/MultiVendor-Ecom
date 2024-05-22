import logo from "../logo.svg";
import { Link } from "react-router-dom";

function SingleProductNoSim(props) {
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
            <Link to="/product/cotton-dhoti/1">{props.title}</Link>
          </h4>
          <h5 clas onClick={scrollToTop} sName="card-title text-muted">
            Price : Rs.500
          </h5>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button
            title="Add to Cart"
            className="btn btn-success btn-sm flex-fill mr-1"
          >
            <i className="fa-solid fa-cart-plus"></i>
            <span style={{ fontWeight: "bold", marginLeft: "1px" }}>CART</span>
          </button>

          <button
            title="Add to Wishlist"
            className="btn btn-danger btn-sm flex-fill ms-1 ml-1"
          >
            <i className="fa fa-heart"></i>{" "}
            <span style={{ fontWeight: "bold", marginLeft: "1px" }}>
              WISHLIST
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProductNoSim;
