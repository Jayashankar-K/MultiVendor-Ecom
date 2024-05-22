import SellerSidebarDB from "./SellerSidebarDB";
function SellerChangePassword() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSidebarDB />
        </div>
        <div className="col-md-8 col-12 mb-2">
          <div className="card">
            <h4 className="card-header">Change Password</h4>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label for="pwd" className="form-label">
                    Old Password
                  </label>
                  <input type="password" className="form-control" id="pwd" />
                </div>

                <div className="mb-3">
                  <label for="pwd" className="form-label">
                    New Password
                  </label>
                  <input type="password" className="form-control" id="pwd" />
                </div>
                <div className="mb-3">
                  <label for="pwd" className="form-label">
                    Confirm New Password
                  </label>
                  <input type="password" className="form-control" id="pwd" />
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

export default SellerChangePassword;
