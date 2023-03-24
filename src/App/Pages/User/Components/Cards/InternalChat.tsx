import React from "react";

export default function InternalChat() {
  return (
    <>
      <div className="col-12 col-xl-4 mb-4">
        <div className="card border shadow-xs h-100">
          <div className="card-header pb-0 p-3">
            <div className="row mb-sm-0 mb-2">
              <div className="col-md-8 col-9">
                <h6 className="mb-0 font-weight-semibold text-lg">
                  Internal chat
                </h6>
                <p className="text-sm mb-0">/marketing channel</p>
              </div>
              <div className="col-md-4 col-3 text-end">
                <button
                  type="button"
                  className="btn btn-white btn-icon px-2 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="card-body p-3 pt-0">
            <ul className="list-group">
              <li className="list-group-item border-0 d-flex align-items-center px-0 mb-1">
                <div className="avatar avatar-sm rounded-circle me-2">
                  <img
                    src="../assets/img/team-1.jpg"
                    alt="kal"
                    className="w-100"
                  />
                </div>
                <div className="d-flex align-items-start flex-column justify-content-center">
                  <h6 className="mb-0 text-sm font-weight-semibold">
                    Sarah Lamalo
                  </h6>
                  <p className="mb-0 text-sm text-secondary">
                    Hi! I need more information about ...
                  </p>
                </div>
                <span className="p-1 bg-success rounded-circle ms-auto me-3">
                  <span className="visually-hidden">Online</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
