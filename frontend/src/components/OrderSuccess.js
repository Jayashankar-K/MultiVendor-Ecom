import { Link } from "react-router-dom";
function OrderSuccess() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-2">
          <div className="card">
            <div className="card-body text-center">
              <p>
                <i className="fa fa-check-circle text-success fa-8x"></i>
              </p>
              <h2 className="text-success">Order Successful!</h2>
              <p className="mt-4">
                <Link to="/" className="btn btn-secondary">
                  Continue Shopping
                </Link>
                <Link to="/customer/orders" className="btn btn-primary ms-2">
                  Track Order
                </Link>
                <Link className="btn btn-danger ms-2">Cancel Order</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
