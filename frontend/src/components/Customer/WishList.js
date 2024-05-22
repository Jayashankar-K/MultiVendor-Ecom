import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import SidebarDB from "./SidebarDB";
function WishList() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SidebarDB />
        </div>

        <div className="col-md-8 col-12 mb-2">
          <div className="table-responsive ">
            <h3 className="mb-4">My WishList </h3>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <Link to="">
                      <img
                        src={logo}
                        className="img-thumbanil "
                        width="80"
                        alt="..."
                      />
                      Cotton Shirt
                    </Link>
                  </td>
                  <td>Rs. 500</td>
                  <td>
                    <button
                      title="Add to Cart"
                      className="btn btn-success btn-sm mr-5"
                    >
                      <span style={{ fontWeight: "bold", marginLeft: "1px" }}>
                        {" "}
                        Add to Cart
                      </span>
                    </button>

                    <button
                      title="Add to Cart"
                      className="btn btn-danger btn-sm ms-2 mt-2"
                    >
                      <span style={{ fontWeight: "bold", marginLeft: "1px" }}>
                        {" "}
                        Remove
                      </span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <Link to="">
                      <img
                        src={logo}
                        className="img-thumbanil "
                        width="80"
                        alt="..."
                      />
                      Leather Belt
                    </Link>
                  </td>
                  <td>Rs. 500</td>
                  <td>
                    <button
                      title="Add to Cart"
                      className="btn btn-success btn-sm mr-5"
                    >
                      <span style={{ fontWeight: "bold", marginLeft: "1px" }}>
                        {" "}
                        Add to Cart
                      </span>
                    </button>

                    <button
                      title="Add to Cart"
                      className="btn btn-danger btn-sm ms-2 mt-2"
                    >
                      <span style={{ fontWeight: "bold", marginLeft: "1px" }}>
                        {" "}
                        Remove
                      </span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <Link to="">
                      <img
                        src={logo}
                        className="img-thumbanil "
                        width="80"
                        alt="..."
                      />
                      Shoes
                    </Link>
                  </td>
                  <td>Rs. 500</td>
                  <td>
                    <button
                      title="Add to Cart"
                      className="btn btn-success btn-sm mr-5"
                    >
                      <span style={{ fontWeight: "bold", marginLeft: "1px" }}>
                        {" "}
                        Add to Cart
                      </span>
                    </button>

                    <button
                      title="Add to Cart"
                      className="btn btn-danger btn-sm ms-2 mt-2"
                    >
                      <span style={{ fontWeight: "bold", marginLeft: "1px" }}>
                        {" "}
                        Remove
                      </span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <Link to="">
                      <img
                        src={logo}
                        className="img-thumbanil "
                        width="80"
                        alt="..."
                      />
                      Cotton Saree
                    </Link>
                  </td>
                  <td>Rs. 500</td>
                  <td>
                    <button
                      title="Add to Cart"
                      className="btn btn-success btn-sm mr-5"
                    >
                      <span style={{ fontWeight: "bold", marginLeft: "1px" }}>
                        {" "}
                        Add to Cart
                      </span>
                    </button>

                    <button
                      title="Add to Cart"
                      className="btn btn-danger btn-sm ms-2 mt-2"
                    >
                      <span style={{ fontWeight: "bold", marginLeft: "1px" }}>
                        {" "}
                        Remove
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4} align="right">
                    <Link
                      to="/"
                      onClick={scrollToTop}
                      className="btn btn-secondary"
                    >
                      Continue Shopping
                    </Link>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishList;
