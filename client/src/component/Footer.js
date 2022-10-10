import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Company Logo
            </h5>
            <p>Loremasdfghjkl;sdrtyuicgvhbjnkertyuioghjkbnm</p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Products
            </h5>
            <p className="text-white">House Types</p>

            <p className="text-white">Houses</p>

            <p className="text-white">Tenants</p>

            <p className="text-white">Payments</p>

            <p className="text-white">Reports</p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Follow Us
            </h5>
            <div className="text-white text-center text-md-right">
              <ul className="list-unstyled list-block">
                <li className="list-block-item">
                  <i className="fab fa-facebook"></i>
                </li>
                <li className="list-block-item">
                  <i className="fab fa-facebook"></i>
                </li>
                <li className="list-block-item">
                  <i className="fab fa-facebook"></i>
                </li>
                <li className="list-block-item">
                  <i className="fab fa-facebook"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mb-4"></hr>
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>Copyright @2022 All rights reserved</p>
          </div>
          <div className="col-md-5 col-lg-4">
            <p>Terms & Services </p>
            <p>Privacy</p>
          </div>
          {/* <div className="col-md-5 col-lg-4">
            <i className="fab fa-facebook"></i>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
