import React from "react";
import { Link, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="container position-sticky z-index-sticky top-0">
      <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
              <div className="container-fluid px-1">
                <a
                  className="navbar-brand font-weight-bolder ms-lg-0 "
                  href="../pages/dashboard.html"
                >
                  Corporate UI
                </a>
                <button
                  className="navbar-toggler shadow-none ms-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navigation"
                  aria-controls="navigation"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon mt-2">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </span>
                </button>
                <div className="collapse navbar-collapse" id="navigation">
                  <ul className="navbar-nav mx-auto ms-xl-auto">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center me-2 "
                        aria-current="page"
                        href="../pages/dashboard.html"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center me-2 "
                        href="../pages/profile.html"
                      >
                        <span>Profile</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center me-2 "
                        href="../pages/sign-up.html"
                      >
                        Sign Up
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center me-2 text-dark font-weight-bold"
                        href="../pages/sign-in.html"
                      >
                        Sign In
                      </a>
                    </li>
                  </ul>
                  <ul className="navbar-nav d-lg-block d-none">
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/product/corporate-ui-dashboard"
                        className="btn btn-sm mb-0 bg-gradient-dark"
                      >
                        Free download
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <main className="main-content  mt-0">
        <section>
          <div className="page-header min-vh-100">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-md-6 d-flex flex-column mx-auto">
                  <div className="card card-plain mt-8">
                    <div className="card-header pb-0 text-left bg-transparent">
                      <h3 className="font-weight-black text-dark display-6">
                        Welcome back
                      </h3>
                      <p className="mb-0">
                        Welcome back! Please enter your details.
                      </p>
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
                          <button
                            type="button"
                            className="btn btn-dark w-100 mt-4 mb-3"
                          >
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
                            <span className="btn-inner--text">
                              Sign in with Google
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                      <p className="mb-4 text-xs mx-auto">
                        Don't have an account?
                        <a
                          href="javascript:;"
                          className="text-dark font-weight-bold"
                        >
                          Sign up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="position-absolute w-40 top-0 end-0 h-100 d-md-block d-none">
                    <div
                      className="oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 bg-cover ms-n8"
                      style={{
                        backgroundImage:
                          "url('/assets/img/image-sign-in.jpg')",
                      }}
                    >
                      <div className="blur mt-12 p-4 text-center border border-white border-radius-md position-absolute fixed-bottom m-4">
                        <h2 className="mt-3 text-dark font-weight-bold">
                          Enter our global community of developers.
                        </h2>
                        <h6 className="text-dark text-sm mt-5">
                          Copyright © 2022 Corporate UI Design System by
                          Creative Tim.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      ---
      <Outlet />
      ---
    </div>
  );
};
