import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import SidebarDB from "./SidebarDB";
function AddressList() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SidebarDB />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <h3>Address List</h3>
          <div className="row">
            <div className="col-4 mb-4">
              <div className="card  ">
                <div className="card-body text-muted">
                  <h6>
                    <i className="fa fa-check-circle  text-success mb-2"></i>
                    <br />
                    St-2 , New Krishnanagar , Amritsar , Punjab , India
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card ">
                <div className="card-body text-muted">
                  <h6>
                    <span className="badge bg-secondary mb-2">
                      Mark Default
                    </span>
                    <br />
                    St-2 , New Krishnanagar , Amritsar , Punjab , India
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card ">
                <div className="card-body text-muted">
                  <h6>
                    <span className="badge bg-secondary mb-2">
                      Mark Default
                    </span>
                    <br />
                    St-2 , New Krishnanagar , Amritsar , Punjab , India
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card ">
                <div className="card-body text-muted">
                  <h6>
                    <span className="badge bg-secondary mb-2">
                      Mark Default
                    </span>
                    <br />
                    St-2 , New Krishnanagar , Amritsar , Punjab , India
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card ">
                <div className="card-body text-muted">
                  <h6>
                    <span className="badge bg-secondary mb-2">
                      Mark Default
                    </span>
                    <br />
                    St-2 , New Krishnanagar , Amritsar , Punjab , India
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card ">
                <div className="card-body text-muted">
                  <h6>
                    <span className="badge bg-secondary mb-2">
                      Mark Default
                    </span>
                    <br />
                    St-2 , New Krishnanagar , Amritsar , Punjab , India
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mx-auto">
              <Link
                to="/customer/add-address"
                className="btn btn-outline-success mb-4 me-2 "
              >
                <i className="fa fa-plus-circle "></i> Add Address
              </Link>
              <Link to="#" className="btn btn-outline-danger mb-4 ms-2 ">
                <i className="fa fa-trash"></i> Delete Address
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressList;
