import SidebarDB from "./SidebarDB";
import logo from "../../logo.svg";

import { Link } from "react-router-dom";

function Orders() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SidebarDB />
        </div>
        <div className="col-md-8 col-12 mb-2">
          <div className="row">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Order Details</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
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
                      <span className="text-secondary">
                        <i className="fa fa-spin fa-spinner"></i> Processing
                      </span>
                    </td>
                    <td>
                      <p>Lorem Ipsum</p>
                    </td>
                  </tr>
                  <tr>
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
                      <span className="text-success">
                        <i className="fa fa-check-circle"></i> Completed
                      </span>
                    </td>
                    <td>
                      <p>Lorem Ipsum</p>
                      <br />
                      <button className="btn btn-primary btn-sm">
                        Download Invoice
                      </button>
                    </td>
                  </tr>
                  <tr>
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
                      <span className="text-success">
                        <i className="fa fa-check-circle"></i> Completed
                      </span>
                    </td>
                    <td>
                      <p>Lorem Ipsum</p>
                      <br />
                      <button className="btn btn-primary btn-sm">
                        Download Invoice
                      </button>
                    </td>
                  </tr>
                  <tr>
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
                      <span className="text-danger">
                        <i className="fa fa-times-circle"></i> Cancelled
                      </span>
                    </td>
                    <td>
                      <p>Lorem Ipsum</p>
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
