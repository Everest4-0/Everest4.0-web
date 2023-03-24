import React from "react";
import { Link } from "react-router-dom";

export const SideBar = ({ menus }: any) => {
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
          <span className="font-weight-bold text-lg">everest4.0</span>
        </a>
      </div>
      <div
        className="collapse navbar-collapse px-4  w-auto "
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          {menus?.map(({ text, Icon, to, childs }: any) => <>
            <li className="nav-item">
              <Link className="nav-link" to={to} >
                <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
                  <Icon />
                </div>
                <span className="nav-link-text ms-1">{text}</span>
              </Link>
            </li>

            {childs?.map(({ to, text }: any) =>
              <li className="nav-item border-start my-0 pt-2">
                <Link
                  className="nav-link position-relative ms-0 ps-2 py-2 "
                  to={to}
                >
                  <span className="nav-link-text ms-1">{text}</span>
                </Link>
              </li>
            )}
          </>
          )}
        </ul>
      </div>
    </aside>
  );
};
