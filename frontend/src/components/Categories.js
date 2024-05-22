import logo from "../logo.svg";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <section className="container mt-4">
      {/*Categories */}
      <h2 className="mb-4">All Categories</h2>
      <div className="row mb-4">
        <div className="col-12 col-md-3 mb-4">
          <div className="card">
            <img src={logo} className="card-img-top" alt="../" />
            <div className="card-body">
              <h4 className="card-title">
                <Link to="#">Category</Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mb-4">
          <div className="card">
            <img src={logo} className="card-img-top" alt="../" />
            <div className="card-body">
              <h4 className="card-title">
                <Link to="#">Category</Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mb-4">
          <div className="card">
            <img src={logo} className="card-img-top" alt="../" />
            <div className="card-body">
              <h4 className="card-title">
                <Link to="#">Category</Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mb-4">
          <div className="card">
            <img src={logo} className="card-img-top" alt="../" />
            <div className="card-body">
              <h4 className="card-title">
                <Link to="#">Category</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination"></ul>
      </nav>
      {/* Categories End*/}
    </section>
  );
}

export default Categories;
