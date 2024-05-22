import SellerSidebarDB from "./SellerSidebarDB";
import { Link } from "react-router-dom";

function SellerProdcuts() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSidebarDB />
        </div>
        <div className="col-md-8 col-12 mb-2">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td colSpan="3" align="left">
                    <h3>
                      <Link
                        to="/seller/add-product"
                        className="btn btn-outline-primary mb-4 ms-auto "
                      >
                        <i className="fa fa-plus-circle"></i> Add Product
                      </Link>
                    </h3>
                  </td>
                </tr>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Product Title</td>
                  <td>
                    <Link to="" className="btn btn-outline-info ms-2">
                      <i className="fa-regular fa-eye"></i> View{" "}
                    </Link>
                    <Link to="" className="btn btn-outline-primary ms-2">
                      <i className="fa-solid fa-pencil"></i>Edit{" "}
                    </Link>
                    <Link to="" className="btn btn-outline-danger  ms-2 ">
                      <i className="fa-solid fa-trash"></i> Delete{" "}
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerProdcuts;
