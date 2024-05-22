import logo from "../logo.svg";
import { Link } from "react-router-dom";
function Checkout(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="container mt-4">
      <h3 className="mb-4">My Cart </h3>
      <div className="row">
        <div className="col-md-8 col-12">
          <div className="table-responsive ">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
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
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>Total</th>
                  <th>Rs. 2000</th>
                </tr>
                <tr>
                  <td colSpan={3} align="right">
                    <Link
                      to="/"
                      onClick={scrollToTop}
                      className="btn btn-secondary"
                    >
                      Continue Shopping
                    </Link>
                    <Link className="btn btn-success ms-2">
                      Proceed To Payment
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

export default Checkout;
