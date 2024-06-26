import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import SidebarDB from "./SidebarDB";
function AddAddress() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SidebarDB />
        </div>
        <div className="col-md-8 col-12 mb-2">
          <div className="card">
            <h4 className="card-header">Add Address</h4>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label for="Name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="Name" />
                </div>
                <div className="mb-3">
                  <label for="address" className="form-label">
                    Address
                  </label>
                  <textarea type="text" className="form-control" id="address" />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAddress;
