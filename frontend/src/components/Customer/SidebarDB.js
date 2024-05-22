import { Link } from "react-router-dom";
function SidebarDB() {
  return (
    <div className="list-group">
      <Link
        to="/customer/dashboard"
        className="list-group-item list-group-item-action "
      >
        Dashboard
      </Link>
      <Link
        to="/customer/update-profile"
        className="list-group-item list-group-item-action "
      >
        Profile
      </Link>
      <Link
        to="/customer/change-password"
        className="list-group-item list-group-item-action"
      >
        Change password
      </Link>
      <Link
        to="/customer/orders"
        className="list-group-item list-group-item-action"
      >
        Orders
      </Link>
      <Link
        to="/customer/wishlist"
        className="list-group-item list-group-item-action"
      >
        WishList
      </Link>
      <Link
        to="/customer/addresses"
        className="list-group-item list-group-item-action"
      >
        Address
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

export default SidebarDB;
