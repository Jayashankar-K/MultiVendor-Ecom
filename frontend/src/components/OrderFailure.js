import { Link } from "react-router-dom";
function OrderFailure() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-2">
          <div className="card">
            <div className="card-body text-center">
              <p>
                <i className="fa fa-times-circle text-danger fa-8x"></i>
              </p>
              <h2 className="text-danger">Oops! Something Wrong happened.</h2>
              <p className="mt-4">
                <Link to="/" className="btn btn-secondary">
                  Continue Shopping
                </Link>
                <Link to="/customer/orders" className="btn btn-primary ms-2">
                  Track Order
                </Link>
                <Link to="/checkout" className="btn btn-warning ms-2">
                  Order Again
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderFailure;
