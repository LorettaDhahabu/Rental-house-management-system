import React from 'react'
import {Link} from 'react-router-dom'
// import Dashboard from './component/Dashboard'

function Home() {
  return (
    <div className="container-fluid bg-success vh-100">
      <div className="home-form">
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Login
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form className="signin-form">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="enter your email/ username..."
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="enter your password...."
                    />
                  </div>
                  {/* <Link
                    to={`/dashboard`}
                    onClick={() => <Dashboard />}
                  >
                    <button className="viewBtn">Login </button>
                  </Link> */}

                  <button type="submit" class="btn btn-primary">
                    Login <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                  <div>
                    <p>Don’t have an account yet?</p>
                    <a href="#">Creat Account</a>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home