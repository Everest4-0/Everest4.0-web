import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signOnDataType } from "./SignOnInterface";
import { SignOnComponent } from "./SignOnFormComponet";

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

            <SignOnComponent />

          </div>
          <div className="card-footer text-center pt-0 px-lg-2 px-1">
            <p className="mb-4 text-xs mx-auto">
              Already have an account?
              <Link to="/auth/signin" className="text-dark font-weight-bold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
