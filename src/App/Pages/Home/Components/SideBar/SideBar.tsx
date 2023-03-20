import React from "react";

export const SideBar = () => {
  return (
    <aside
      className="sidenav navbar navbar-vertical navbar-expand-xs border-0 bg-slate-900 fixed-start "
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <a
          className="navbar-brand d-flex align-items-center m-0"
          href=" https://demos.creative-tim.com/corporate-ui-dashboard/pages/dashboard.html "
          target="_blank"
        >
          <span className="font-weight-bold text-lg">Corporate UI</span>
        </a>
      </div>
      <div
        className="collapse navbar-collapse px-4  w-auto "
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link  active" href="../pages/dashboard.html">
              <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
                
              </div>
              <span className="nav-link-text ms-1">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  " href="../pages/tables.html">
              <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
                
              </div>
              <span className="nav-link-text ms-1">Tables</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  " href="../pages/wallet.html">
              <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
                
              </div>
              <span className="nav-link-text ms-1">Wallet</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  " href="../pages/rtl.html">
              <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
                
              </div>
              <span className="nav-link-text ms-1">RTL</span>
            </a>
          </li>
          <li className="nav-item mt-2">
            <div className="d-flex align-items-center nav-link">
              
              <span className="font-weight-normal text-md ms-2">
                Account Pages
              </span>
            </div>
          </li>
          <li className="nav-item border-start my-0 pt-2">
            <a
              className="nav-link position-relative ms-0 ps-2 py-2 "
              href="../pages/profile.html"
            >
              <span className="nav-link-text ms-1">Profile</span>
            </a>
          </li>
          <li className="nav-item border-start my-0 pt-2">
            <a
              className="nav-link position-relative ms-0 ps-2 py-2 "
              href="../pages/sign-in.html"
            >
              <span className="nav-link-text ms-1">Sign In</span>
            </a>
          </li>
          <li className="nav-item border-start my-0 pt-2">
            <a
              className="nav-link position-relative ms-0 ps-2 py-2 "
              href="../pages/sign-up.html"
            >
              <span className="nav-link-text ms-1">Sign Up</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidenav-footer mx-4 ">
        <div className="card border-radius-md" id="sidenavCard">
          <div className="card-body  text-start  p-3 w-100">
            <div className="mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className="text-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
                id="sidenavCardIcon"
              >
                <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
              </svg>
            </div>
            <div className="docs-info">
              <h6 className="font-weight-bold up mb-2">Need help?</h6>
              <p className="text-sm font-weight-normal">
                Please check our docs.
              </p>
              <a
                href="https://www.creative-tim.com/learning-lab/bootstrap/license/corporate-ui-dashboard"
                target="_blank"
                className="font-weight-bold text-sm mb-0 icon-move-right mt-auto w-100 mb-0"
              >
                Documentation
                <i
                  className="fas fa-arrow-right-long text-sm ms-1"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
