import SellerSidebarDB from "./SellerSidebarDB";
function AddProduct() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSidebarDB />
        </div>
        <div className="col-md-8 col-12 mb-2">
          <div className="card">
            <h4 className="card-header">Add Product</h4>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label for="category" className="form-label">
                    Category
                  </label>
                  <select className="form-control">
                    <option disabled defaultValue>
                      Select
                    </option>
                    <option>Men</option>
                    <option>Women</option>
                    <option>Accessories</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="title" className="form-label">
                    Title
                  </label>
                  <input type="text" className="form-control" id="title" />
                </div>
                <div className="mb-3">
                  <label for="Price" className="form-label">
                    Price
                  </label>
                  <input type="number" className="form-control" id="Price" />
                </div>
                <div className="mb-3">
                  <label for="description" className="form-label">
                    Description
                  </label>
                  <textarea className="form-control" id="description" />
                </div>

                <div className="mb-3">
                  <label for="productImg" className="form-label">
                    Product Images
                  </label>
                  <input type="file" className="form-control" id="productImg" />
                </div>

                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
                <button type="reset" className="btn btn-danger ms-2 float-end">
                  Reset
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
