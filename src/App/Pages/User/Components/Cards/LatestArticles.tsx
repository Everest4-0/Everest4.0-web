import React from "react";

export default function LatestArticles() {
  return (
    <>
      <div className="col-12">
        <div className="card shadow-xs border mb-4 pb-3">
          <div className="card-header pb-0 p-3">
            <h6 className="mb-0 font-weight-semibold text-lg">Last articles</h6>
            <p className="text-sm mb-1">
              Here you will find the latest articles.
            </p>
          </div>
          <div className="card-body p-3">
            <div className="row">
              <div className="col-xl-4 col-md-6 mb-xl-0 mb-4">
                <div className="card card-background border-radius-xl card-background-after-none align-items-start mb-4">
                  <div
                    className="full-background bg-cover"
                    style={{ backgroundImage: "../assets/img/img-8.jpg" }}
                  ></div>
                  <span className="mask bg-dark opacity-1 border-radius-sm"></span>
                  <div className="card-body text-start p-3 w-100">
                    <div className="row">
                      <div className="col-12">
                        <div className="blur shadow d-flex align-items-center w-100 border-radius-md border border-white mt-8 p-3">
                          <div className="w-50">
                            <p className="text-dark text-sm font-weight-bold mb-1">
                              Sara Lamalo
                            </p>
                            <p className="text-xs text-secondary mb-0">
                              20 Jul 2022
                            </p>
                          </div>
                          <p className="text-dark text-sm font-weight-bold ms-auto">
                            Growth
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="javascript:;">
                  <h4 className="font-weight-semibold">Best strategy games</h4>
                </a>
                <p className="mb-4">
                  As Uber works through a huge amount of internal management
                  turmoil.
                </p>
                <a
                  href="javascript:;"
                  className="text-dark font-weight-semibold icon-move-right mt-auto w-100 mb-5"
                >
                  Read post
                  <i
                    className="fas fa-arrow-right-long text-sm ms-1"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
              <div className="col-xl-4 col-md-6 mb-xl-0 mb-4">
                <div className="card card-background border-radius-xl card-background-after-none align-items-start mb-4">
                  <div
                    className="full-background bg-cover"
                    style={{ backgroundImage: "../assets/img/img-9.jpg" }}
                  ></div>
                  <span className="mask bg-dark opacity-1 border-radius-sm"></span>
                  <div className="card-body text-start p-3 w-100">
                    <div className="row">
                      <div className="col-12">
                        <div className="blur shadow d-flex align-items-center w-100 border-radius-md border border-white mt-8 p-3">
                          <div className="w-50">
                            <p className="text-dark text-sm font-weight-bold mb-1">
                              Charles Deluvio
                            </p>
                            <p className="text-xs text-secondary mb-0">
                              17 Jul 2022
                            </p>
                          </div>
                          <p className="text-dark text-sm font-weight-bold ms-auto">
                            Education
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="javascript:;">
                  <h4 className="font-weight-semibold">
                    Don't be afraid to be wrong
                  </h4>
                </a>
                <p className="mb-4">
                  As Uber works through a huge amount of internal management
                  turmoil.
                </p>
                <a
                  href="javascript:;"
                  className="text-dark font-weight-semibold icon-move-right mt-auto w-100 mb-5"
                >
                  Read post
                  <i
                    className="fas fa-arrow-right-long text-sm ms-1"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
              <div className="col-xl-4 col-md-6 mb-xl-0 mb-4">
                <div className="card h-100 card-plain border border-dashed px-5">
                  <div className="card-body d-flex flex-column justify-content-center text-center">
                    <a href="javascript:;">
                      <div className="icon icon-shape bg-dark text-center text-white rounded-circle mx-auto d-flex align-items-center justify-content-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="19"
                          width="19"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <h5 className="text-dark text-lg"> Create new post </h5>
                      <p className="text-sm text-secondary mb-0">
                        Drive into the editor and add your content.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
