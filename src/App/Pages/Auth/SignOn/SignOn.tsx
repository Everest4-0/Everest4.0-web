import React from "react";
import { Link } from "react-router-dom";

export const SignOn = () => {
  return (
    <>
      <div className="col-md-6">
        <div className="position-absolute w-40 top-0 start-0 h-100 d-md-block d-none">
          <div
            className="oblique-image position-absolute d-flex fixed-top ms-auto h-100 z-index-0 bg-cover me-n8"
            style={{
              backgroundImage: "url('../assets/img/image-sign-up.jpg')",
            }}
          >
            <div className="my-auto text-start max-width-350 ms-7">
              <h1 className="mt-3 text-white font-weight-bolder">
                Start your <br /> new journey.
              </h1>
              <p className="text-white text-lg mt-4 mb-4">
                Use these awesome forms to login or create new account in your
                project for free.
              </p>
              <div className="d-flex align-items-center">
                
                <p className="font-weight-bold text-white text-sm mb-0 ms-2">
                  Join 2.5M+ users
                </p>
              </div>
            </div>
            <div className="text-start position-absolute fixed-bottom ms-7">
              <h6 className="text-white text-sm mb-5">
                Copyright © 2022 Corporate UI Design System by Creative Tim.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex flex-column mx-auto">
        <div className="card card-plain mt-8">
          <div className="card-header pb-0 text-left bg-transparent">
            <h3 className="font-weight-black text-dark display-6">Sign up</h3>
            <p className="mb-0">Nice to meet you! Please enter your details.</p>
          </div>
          <div className="card-body">
            <form role="form">
              <label>Name</label>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  aria-label="Name"
                  aria-describedby="name-addon"
                />
              </div>
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
                  placeholder="Create a password"
                  aria-label="Password"
                  aria-describedby="password-addon"
                />
              </div>
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
                  I agree the{" "}
                  <a href="javascript:;" className="text-dark font-weight-bold">
                    Terms and Conditions
                  </a>
                  .
                </label>
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-dark w-100 mt-4 mb-3">
                  Sign up
                </button>
                <button
                  type="button"
                  className="btn btn-white btn-icon w-100 mb-3"
                >
                  <span className="btn-inner--icon me-1">
                    <img
                      className="w-5"
                      src="../assets/img/logos/google-logo.svg"
                      alt="google-logo"
                    />
                  </span>
                  <span className="btn-inner--text">Sign up with Google</span>
                </button>
              </div>
            </form>
          </div>
          <div className="card-footer text-center pt-0 px-lg-2 px-1">
            <p className="mb-4 text-xs mx-auto">
              Already have an account?
              <Link to="/auth/signin"  className="text-dark font-weight-bold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
