import React from "react";
import { Link } from "react-router-dom";

import { SignInForm } from "./SignInForm/SignInForm";

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
            <SignInForm />
          </div>
          <div className="card-footer text-center pt-0 px-lg-2 px-1">
            <p className="mb-4 text-xs mx-auto">
              Don't have an account?
              <Link to="/auth/signon" className="text-dark font-weight-bold">
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
            <div className="blur mt-12 p-4  border border-white border-radius-md position-absolute fixed-bottom m-4">
              <h2 className="mt-3 text-dark font-weight-bold">
                Everest4.0
              </h2>
              <h6 className="text-dark text-sm mt-5">
                Copyright © 2022 everest40.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

