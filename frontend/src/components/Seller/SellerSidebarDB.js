import { Link } from "react-router-dom";
function SellerSidebarDB() {
  return (
    <div className="list-group">
      <Link
        to="/seller/dashboard"
        className="list-group-item list-group-item-action "
      >
        Dashboard
      </Link>
      <Link
        to="/seller/update-profile"
        className="list-group-item list-group-item-action "
      >
        Profile
      </Link>
      <Link
        to="/seller/change-password"
        className="list-group-item list-group-item-action"
      >
        Change password
      </Link>
      <Link
        to="/seller/products"
        className="list-group-item list-group-item-action"
      >
        Products
      </Link>
      <Link
        to="/seller/add-product"
        className="list-group-item list-group-item-action"
      >
        Add Product
      </Link>
      <Link
        to="/seller/orders"
        className="list-group-item list-group-item-action"
      >
        Orders
      </Link>

      <Link
        to="/seller/reports"
        className="list-group-item list-group-item-action"
      >
        Reports
      </Link>
      <Link
        to="/"
        className="list-group-item text-danger list-group-item-action"
      >
        Logout
      </Link>
    </div>
  );
}

export default SellerSidebarDB;
