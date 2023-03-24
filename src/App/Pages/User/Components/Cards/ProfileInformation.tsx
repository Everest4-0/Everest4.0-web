import React from 'react'

export default function ProfileInformation() {
  return (
    <>
      <div className="col-12 col-xl-4 mb-4">
          <div className="card border shadow-xs h-100">
            <div className="card-header pb-0 p-3">
              <div className="row">
                <div className="col-md-8 col-9">
                  <h6 className="mb-0 font-weight-semibold text-lg">Profile information</h6>
                  <p className="text-sm mb-1">Edit the information about you.</p>
                </div>
                <div className="col-md-4 col-3 text-end">
                  <button type="button" className="btn btn-white btn-icon px-2 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body p-3">
              <p className="text-sm mb-4">
                Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
              </p>
              <ul className="list-group">
                <li className="list-group-item border-0 ps-0 text-dark font-weight-semibold pt-0 pb-1 text-sm"><span className="text-secondary">First Name:</span> &nbsp; Noah</li>
                <li className="list-group-item border-0 ps-0 text-dark font-weight-semibold pb-1 text-sm"><span className="text-secondary">Last Name:</span> &nbsp; Mclaren</li>
                <li className="list-group-item border-0 ps-0 text-dark font-weight-semibold pb-1 text-sm"><span className="text-secondary">Mobile:</span> &nbsp; +(44) 123 1234 123</li>
                <li className="list-group-item border-0 ps-0 text-dark font-weight-semibold pb-1 text-sm"><span className="text-secondary">Function:</span> &nbsp; Manager - Organization</li>
                <li className="list-group-item border-0 ps-0 text-dark font-weight-semibold pb-1 text-sm"><span className="text-secondary">Location:</span> &nbsp; USA</li>
                <li className="list-group-item border-0 ps-0 text-dark font-weight-semibold pb-1 text-sm">
                  <span className="text-secondary">Social:</span> &nbsp;
                  <a className="btn btn-link text-dark mb-0 ps-1 pe-1 py-0" href="javascript:;">
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                  <a className="btn btn-link text-dark mb-0 ps-1 pe-1 py-0" href="javascript:;">
                    <i className="fab fa-github fa-lg"></i>
                  </a>
                  <a className="btn btn-link text-dark mb-0 ps-1 pe-1 py-0" href="javascript:;">
                    <i className="fab fa-slack fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  )
}
