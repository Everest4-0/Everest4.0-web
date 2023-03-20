import React from "react";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <>
      <div className="col-xl-4 col-md-6 d-flex flex-column mx-auto">
        <div className="card card-plain mt-8">
          <div className="card-header pb-0 text-left bg-transparent">
            <h3 className="font-weight-black text-dark display-6">
              Welcome back
            </h3>
            <p className="mb-0">Welcome back! Please enter your details.</p>
          </div>
          <div className="card-body">
            <form role="form">
              <label>Email Address</label>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  aria-label="Email"
                  aria-describedby="email-addon"
                />
              </div>
              <label>Password</label>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter password"
                  aria-label="Password"
                  aria-describedby="password-addon"
                />
              </div>
              <div className="d-flex align-items-center">
                <div className="form-check form-check-info text-left mb-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="font-weight-normal text-dark mb-0"
                    htmlFor="flexCheckDefault"
                  >
                    Remember for 14 days
                  </label>
                </div>
                <a
                  href="javascript:;"
                  className="text-xs font-weight-bold ms-auto"
                >
                  Forgot password
                </a>
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-dark w-100 mt-4 mb-3">
                  Sign in
                </button>
                <button
                  type="button"
                  className="btn btn-white btn-icon w-100 mb-3"
                >
                  <span className="btn-inner--icon me-1">
                    <img
                      className="w-5"
                      src="/assets/img/logos/google-logo.svg"
                      alt="google-logo"
                    />
                  </span>
                  <span className="btn-inner--text">Sign in with Google</span>
                </button>
              </div>
            </form>
          </div>
          <div className="card-footer text-center pt-0 px-lg-2 px-1">
            <p className="mb-4 text-xs mx-auto">
              Don't have an account?
              <Link to="/auth/signon"  className="text-dark font-weight-bold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="position-absolute w-40 top-0 end-0 h-100 d-md-block d-none">
          <div
            className="oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 bg-cover ms-n8"
            style={{
              backgroundImage: "url('/assets/img/image-sign-in.jpg')",
            }}
          >
            <div className="blur mt-12 p-4 text-center border border-white border-radius-md position-absolute fixed-bottom m-4">
              <h2 className="mt-3 text-dark font-weight-bold">
                Enter our global community of developers.
              </h2>
              <h6 className="text-dark text-sm mt-5">
                Copyright © 2022 Corporate UI Design System by Creative Tim.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
