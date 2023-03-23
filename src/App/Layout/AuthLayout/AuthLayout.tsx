import React from "react";
import { Link, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="container-fluid p-0 m-0 top-0">      
      <main className="main-content  mt-0">
        <section>
          <div className="page-header min-vh-100">
            <div className="container">
              <div className="row">
                <Outlet />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
