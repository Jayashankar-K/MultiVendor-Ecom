import SellerSidebarDB from "./SellerSidebarDB";
import logo from "../../logo.svg";

import { Link } from "react-router-dom";

function VendorOrders() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSidebarDB />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Payment Status</th>
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
                    <td>
                      <span className="text-success">
                        <i className="fa fa-check-circle"></i> Completed
                      </span>
                    </td>
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
                        Shoes
                      </Link>
                    </td>
                    <td>
                      <span className="text-success">
                        <i className="fa fa-check-circle"></i> Completed
                      </span>
                    </td>
                    <td>
                      <span className="text-success">
                        <i className="fa fa-check-circle"></i> Completed
                      </span>
                    </td>
                    <td>
                      <p>Lorem Ipsum</p>
                      <button className="btn btn-primary btn-sm">
                        <i class="fa-solid fa-download"></i> Download Invoice
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
                    <td>
                      <span className="text-danger">
                        <i className="fa fa-circle-exclamation"></i> Failed
                      </span>
                    </td>
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

export default VendorOrders;
