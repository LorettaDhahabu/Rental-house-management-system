import React from "react";

function Home() {
  return (
    <div className="container-fluid bg-success vh-100">
      <div className="row ">
        <div className="col section1 ">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Login <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
