import SidebarDB from "./SidebarDB";
import { Link } from "react-router-dom";

function Dashboard(props) {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SidebarDB />
        </div>
        <div className="col-md-8 col-12 mb-2">
          <div className="row">
            <div className="col-md-4 mb-2">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Total Orders</h4>
                  <h4>
                    <Link to="/customer/orders">123</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-4  mb-2">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Total WishList </h4>
                  <h4>
                    <Link to="/customer/wishlist">123</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Total Address </h4>
                  <h4>
                    <Link to="/customer/addresses">6</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
