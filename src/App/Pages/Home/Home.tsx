import React from 'react'

export const Home = () => {
  return (
    <>
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            
            <nav className="navbar navbar-main navbar-expand-lg mx-5 px-0 shadow-none rounded" id="navbarBlur" navbar-scroll="true">
            <div className="container-fluid py-1 px-2">
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent mb-1 pb-0 pt-1 px-0 me-sm-6 me-5">
                    <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="javascript:;">Dashboard</a></li>
                    <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
                </ol>
                <h6 className="font-weight-bold mb-0">Dashboard</h6>
                </nav>
                <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                    <div className="input-group">
                    <span className="input-group-text text-body bg-white  border-end-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>
                    <input type="text" className="form-control ps-0" placeholder="Search"/>
                    </div>
                </div>
                <ul className="navbar-nav  justify-content-end">
                    <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                    <a href="javascript:;" className="nav-link text-body p-0" id="iconNavbarSidenav">
                        <div className="sidenav-toggler-inner">
                        <i className="sidenav-toggler-line"></i>
                        <i className="sidenav-toggler-line"></i>
                        <i className="sidenav-toggler-line"></i>
                        </div>
                    </a>
                    </li>
                    <li className="nav-item px-3 d-flex align-items-center">
                    <a href="javascript:;" className="nav-link text-body p-0">
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" className="fixed-plugin-button-nav cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    </li>
                    <li className="nav-item dropdown pe-2 d-flex align-items-center">
                    <a href="javascript:;" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointers">
                        <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                        <li className="mb-2">
                        <a className="dropdown-item border-radius-md" href="javascript:;">
                            <div className="d-flex py-1">
                            <div className="my-auto">
                                <img src="../assets/img/team-2.jpg" className="avatar avatar-sm border-radius-sm  me-3 "/>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <h6 className="text-sm font-weight-normal mb-1">
                                <span className="font-weight-bold">New message</span> from Laur
                                </h6>
                                <p className="text-xs text-secondary mb-0 d-flex align-items-center ">
                                <i className="fa fa-clock opacity-6 me-1"></i>
                                13 minutes ago
                                </p>
                            </div>
                            </div>
                        </a>
                        </li>
                        <li className="mb-2">
                        <a className="dropdown-item border-radius-md" href="javascript:;">
                            <div className="d-flex py-1">
                            <div className="my-auto">
                                <img src="../assets/img/small-logos/logo-google.svg" className="avatar avatar-sm border-radius-sm bg-gradient-dark p-2  me-3 "/>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <h6 className="text-sm font-weight-normal mb-1">
                                <span className="font-weight-bold">New report</span> by Google
                                </h6>
                                <p className="text-xs text-secondary mb-0 d-flex align-items-center ">
                                <i className="fa fa-clock opacity-6 me-1"></i>
                                1 day
                                </p>
                            </div>
                            </div>
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item border-radius-md" href="javascript:;">
                            <div className="d-flex py-1">
                            <div className="avatar avatar-sm border-radius-sm bg-slate-800  me-3  my-auto">
                                
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <h6 className="text-sm font-weight-normal mb-1">
                                Payment successfully completed
                                </h6>
                                <p className="text-xs text-secondary d-flex align-items-center mb-0 ">
                                <i className="fa fa-clock opacity-6 me-1"></i>
                                2 days
                                </p>
                            </div>
                            </div>
                        </a>
                        </li>
                    </ul>
                    </li>
                    <li className="nav-item ps-2 d-flex align-items-center">
                    <a href="javascript:;" className="nav-link text-body p-0">
                        <img src="../assets/img/team-2.jpg" className="avatar avatar-sm" alt="avatar" />
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            <div className="container-fluid py-4 px-5">
            <div className="row">
                <div className="col-md-12">
                <div className="d-md-flex align-items-center mb-3 mx-2">
                    <div className="mb-md-0 mb-3">
                    <h3 className="font-weight-bold mb-0">Hello, Noah</h3>
                    <p className="mb-0">Apps you might like!</p>
                    </div>
                    <button type="button" className="btn btn-sm btn-white btn-icon d-flex align-items-center mb-0 ms-md-auto mb-sm-0 mb-2 me-2">
                    <span className="btn-inner--icon">
                        <span className="p-1 bg-success rounded-circle d-flex ms-auto me-2">
                        <span className="visually-hidden">New</span>
                        </span>
                    </span>
                    <span className="btn-inner--text">Messages</span>
                    </button>
                    <button type="button" className="btn btn-sm btn-dark btn-icon d-flex align-items-center mb-0">
                    <span className="btn-inner--icon">
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="d-block me-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </span>
                    <span className="btn-inner--text">Sync</span>
                    </button>
                </div>
                </div>
            </div>
            <hr className="my-0"/>
            <div className="row">
                <div className="position-relative overflow-hidden">
                <div className="swiper mySwiper mt-4 mb-2">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div>
                        <div className="card card-background shadow-none border-radius-xl card-background-after-none align-items-start mb-0">
                            <div className="full-background bg-cover" style={{backgroundImage: "url('../assets/img/img-2.jpg')"}}></div>
                            <div className="card-body text-start px-3 py-0 w-100">
                            <div className="row mt-12">
                                <div className="col-sm-3 mt-auto">
                                <h4 className="text-dark font-weight-bolder">#1</h4>
                                <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Name</p>
                                <h5 className="text-dark font-weight-bolder">Secured</h5>
                                </div>
                                <div className="col-sm-3 ms-auto mt-auto">
                                <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Category</p>
                                <h5 className="text-dark font-weight-bolder">Banking</h5>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="card card-background shadow-none border-radius-xl card-background-after-none align-items-start mb-0">
                        <div className="full-background bg-cover" style={{backgroundImage: "url('../assets/img/img-1.jpg')"}}></div>
                        <div className="card-body text-start px-3 py-0 w-100">
                            <div className="row mt-12">
                            <div className="col-sm-3 mt-auto">
                                <h4 className="text-dark font-weight-bolder">#2</h4>
                                <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Name</p>
                                <h5 className="text-dark font-weight-bolder">Cyber</h5>
                            </div>
                            <div className="col-sm-3 ms-auto mt-auto">
                                <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Category</p>
                                <h5 className="text-dark font-weight-bolder">Security</h5>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="card card-background shadow-none border-radius-xl card-background-after-none align-items-start mb-0">
                        <div className="full-background bg-cover" style={{backgroundImage: "url('../assets/img/img-3.jpg')"}}></div>
                        <div className="card-body text-start px-3 py-0 w-100">
                            <div className="row mt-12">
                            <div className="col-sm-3 mt-auto">
                                <h4 className="text-dark font-weight-bolder">#3</h4>
                                <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Name</p>
                                <h5 className="text-dark font-weight-bolder">Alpha</h5>
                            </div>
                            <div className="col-sm-3 ms-auto mt-auto">
                                <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Category</p>
                                <h5 className="text-dark font-weight-bolder">Blockchain</h5>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="card card-background shadow-none border-radius-xl card-background-after-none align-items-start mb-0">
                        <div className="full-background bg-cover" style={{backgroundImage: "url('../assets/img/img-4.jpg')"}}></div>
                        <div className="card-body text-start px-3 py-0 w-100">
                            <div className="row mt-12">
                            <div className="col-sm-3 mt-auto">
                                <h4 className="text-dark font-weight-bolder">#4</h4>
                                <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Name</p>
                                <h5 className="text-dark font-weight-bolder">Beta</h5>
                            </div>
                            <div className="col-sm-3 ms-auto mt-auto">
                                <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Category</p>
                                <h5 className="text-dark font-weight-bolder">Web3</h5>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="card card-background shadow-none border-radius-xl card-background-after-none align-items-start mb-0">
                        <div className="full-background bg-cover" style={{backgroundImage: "url('../assets/img/img-5.jpg')"}}></div>
                        <div className="card-body text-start px-3 py-0 w-100">
                            <div className="row mt-12">
                            <div className="col-sm-3 mt-auto">
                                <h4 className="text-dark font-weight-bolder">#5</h4>
                                <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Name</p>
                                <h5 className="text-dark font-weight-bolder">Gama</h5>
                            </div>
                            <div className="col-sm-3 ms-auto mt-auto">
                                <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Category</p>
                                <h5 className="text-dark font-weight-bolder">Design</h5>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="card card-background shadow-none border-radius-xl card-background-after-none align-items-start mb-0">
                        <div className="full-background bg-cover" style={{backgroundImage: "url('../assets/img/img-1.jpg')"}}></div>
                        <div className="card-body text-start px-3 py-0 w-100">
                            <div className="row mt-12">
                            <div className="col-sm-3 mt-auto">
                                <h4 className="text-dark font-weight-bolder">#6</h4>
                                <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Name</p>
                                <h5 className="text-dark font-weight-bolder">Rompro</h5>
                            </div>
                            <div className="col-sm-3 ms-auto mt-auto">
                                <p className="text-dark opacity-6 text-xs font-weight-bolder mb-0">Category</p>
                                <h5 className="text-dark font-weight-bolder">Security</h5>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
                <div className="card shadow-xs border h-100">
                    <div className="card-header pb-0">
                    <h6 className="font-weight-semibold text-lg mb-0">Balances over time</h6>
                    <p className="text-sm">Here you have details about the balance.</p>
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" checked/>
                        <label className="btn btn-white px-3 mb-0" htmlFor="btnradio1">12 months</label>
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                        <label className="btn btn-white px-3 mb-0" htmlFor="btnradio2">30 days</label>
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
                        <label className="btn btn-white px-3 mb-0" htmlFor="btnradio3">7 days</label>
                    </div>
                    </div>
                    <div className="card-body py-3">
                    <div className="chart mb-2">
                        <canvas id="chart-bars" className="chart-canvas" height="240"></canvas>
                    </div>
                    <button className="btn btn-white mb-0 ms-auto">View report</button>
                    </div>
                </div>
                </div>
                <div className="col-lg-8 col-md-6">
                <div className="card shadow-xs border">
                    <div className="card-header border-bottom pb-0">
                    <div className="d-sm-flex align-items-center mb-3">
                        <div>
                        <h6 className="font-weight-semibold text-lg mb-0">Recent transactions</h6>
                        <p className="text-sm mb-sm-0 mb-2">These are details about the last transactions</p>
                        </div>
                        <div className="ms-auto d-flex">
                        <button type="button" className="btn btn-sm btn-white mb-0 me-2">
                            View report
                        </button>
                        <button type="button" className="btn btn-sm btn-dark btn-icon d-flex align-items-center mb-0">
                            <span className="btn-inner--icon">
                            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="d-block me-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            </span>
                            <span className="btn-inner--text">Download</span>
                        </button>
                        </div>
                    </div>
                    <div className="pb-3 d-sm-flex align-items-center">
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradiotable" id="btnradiotable1" checked/>
                        <label className="btn btn-white px-3 mb-0" htmlFor="btnradiotable1">All</label>
                        <input type="radio" className="btn-check" name="btnradiotable" id="btnradiotable2" />
                        <label className="btn btn-white px-3 mb-0" htmlFor="btnradiotable2">Monitored</label>
                        <input type="radio" className="btn-check" name="btnradiotable" id="btnradiotable3" />
                        <label className="btn btn-white px-3 mb-0" htmlFor="btnradiotable3">Unmonitored</label>
                        </div>
                        <div className="input-group w-sm-25 ms-auto">
                        <span className="input-group-text text-body">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                            </svg>
                        </span>
                        <input type="text" className="form-control" placeholder="Search"/>
                        </div>
                    </div>
                    </div>
                    <div className="card-body px-0 py-0">
                    <div className="table-responsive p-0">
                        <table className="table align-items-center justify-content-center mb-0">
                        <thead className="bg-gray-100">
                            <tr>
                            <th className="text-secondary text-xs font-weight-semibold opacity-7">Transaction</th>
                            <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Amount</th>
                            <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Date</th>
                            <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Account</th>
                            <th className="text-center text-secondary text-xs font-weight-semibold opacity-7"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>
                                <div className="d-flex px-2">
                                <div className="avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2">
                                    <img src="../assets/img/small-logos/logo-spotify.svg" className="w-80" alt="spotify"/>
                                </div>
                                <div className="my-auto">
                                    <h6 className="mb-0 text-sm">Spotify</h6>
                                </div>
                                </div>
                            </td>
                            <td>
                                <p className="text-sm font-weight-normal mb-0">$2,500</p>
                            </td>
                            <td>
                                <span className="text-sm font-weight-normal">Wed 3:00pm</span>
                            </td>
                            <td className="align-middle">
                                <div className="d-flex">
                                <div className="border px-1 py-1 text-center d-flex align-items-center border-radius-sm my-auto">
                                    <img src="../assets/img/logos/visa.png" className="w-90 mx-auto" alt="visa"/>
                                </div>
                                <div className="ms-2">
                                    <p className="text-dark text-sm mb-0">Visa 1234</p>
                                    <p className="text-secondary text-sm mb-0">Expiry 06/2026</p>
                                </div>
                                </div>
                            </td>
                            <td className="align-middle">
                                <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                                <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                                </svg>
                                </a>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <div className="d-flex px-2">
                                <div className="avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2">
                                    <img src="../assets/img/small-logos/logo-invision.svg" className="w-80" alt="invision"/>
                                </div>
                                <div className="my-auto">
                                    <h6 className="mb-0 text-sm">Invision</h6>
                                </div>
                                </div>
                            </td>
                            <td>
                                <p className="text-sm font-weight-normal mb-0">$5,000</p>
                            </td>
                            <td>
                                <span className="text-sm font-weight-normal">Wed 1:00pm</span>
                            </td>
                            
                            <td className="align-middle">
                                <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                                
                                </a>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <div className="d-flex px-2">
                                <div className="avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2">
                                    <img src="../assets/img/small-logos/logo-jira.svg" className="w-80" alt="jira"/>
                                </div>
                                <div className="my-auto">
                                    <h6 className="mb-0 text-sm">Jira</h6>
                                </div>
                                </div>
                            </td>
                            <td>
                                <p className="text-sm font-weight-normal mb-0">$3,400</p>
                            </td>
                            <td>
                                <span className="text-sm font-weight-normal">Mon 7:40pm</span>
                            </td>
                            <td className="align-middle">
                                <div className="d-flex">
                                <div className="border px-1 py-1 text-center d-flex align-items-center border-radius-sm my-auto">
                                    <img src="../assets/img/logos/mastercard.png" className="w-90 mx-auto" alt="mastercard"/>
                                </div>
                                <div className="ms-2">
                                    <p className="text-dark text-sm mb-0">Mastercard 1234</p>
                                    <p className="text-secondary text-sm mb-0">Expiry 06/2026</p>
                                </div>
                                </div>
                            </td>
                            <td className="align-middle">
                                <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                                <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                                </svg>
                                </a>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <div className="d-flex px-2">
                                <div className="avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2">
                                    <img src="../assets/img/small-logos/logo-slack.svg" className="w-80" alt="slack"/>
                                </div>
                                <div className="my-auto">
                                    <h6 className="mb-0 text-sm">Slack</h6>
                                </div>
                                </div>
                            </td>
                            <td>
                                <p className="text-sm font-weight-normal mb-0">$1,000</p>
                            </td>
                            <td>
                                <span className="text-sm font-weight-normal">Wed 5:00pm</span>
                            </td>
                            <td className="align-middle">
                                <div className="d-flex">
                                <div className="border px-1 py-1 text-center d-flex align-items-center border-radius-sm my-auto">
                                    <img src="../assets/img/logos/visa.png" className="w-90 mx-auto" alt="visa"/>
                                </div>
                                <div className="ms-2">
                                    <p className="text-dark text-sm mb-0">Visa 1234</p>
                                    <p className="text-secondary text-sm mb-0">Expiry 06/2026</p>
                                </div>
                                </div>
                            </td>
                            <td className="align-middle">
                                <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                                <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                                </svg>
                                </a>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-3 col-sm-6 mb-xl-0">
                <div className="card border shadow-xs mb-4">
                    <div className="card-body text-start p-3 w-100">
                    <div className="icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3">
                        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                        <path fill-rule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <div className="w-100">
                            <p className="text-sm text-secondary mb-1">Revenue</p>
                            <h4 className="mb-2 font-weight-bold">$99,118.5</h4>
                            <div className="d-flex align-items-center">
                            <span className="text-sm text-success font-weight-bolder">
                                <i className="fa fa-chevron-up text-xs me-1"></i>10.5%
                            </span>
                            <span className="text-sm ms-1">from $89,740.00</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0">
                <div className="card border shadow-xs mb-4">
                    <div className="card-body text-start p-3 w-100">
                    <div className="icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3">
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                        <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                        </svg>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <div className="w-100">
                            <p className="text-sm text-secondary mb-1">Transactions</p>
                            <h4 className="mb-2 font-weight-bold">376</h4>
                            <div className="d-flex align-items-center">
                            <span className="text-sm text-success font-weight-bolder">
                                <i className="fa fa-chevron-up text-xs me-1"></i>55%
                            </span>
                            <span className="text-sm ms-1">from 243</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0">
                <div className="card border shadow-xs mb-4">
                    <div className="card-body text-start p-3 w-100">
                    <div className="icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3">
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <div className="w-100">
                            <p className="text-sm text-secondary mb-1">Avg. Transaction</p>
                            <h4 className="mb-2 font-weight-bold">$450.53</h4>
                            <div className="d-flex align-items-center">
                            <span className="text-sm text-success font-weight-bolder">
                                <i className="fa fa-chevron-up text-xs me-1"></i>22%
                            </span>
                            <span className="text-sm ms-1">from $369.30</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                <div className="card border shadow-xs mb-4">
                    <div className="card-body text-start p-3 w-100">
                    <div className="icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3">
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <div className="w-100">
                            <p className="text-sm text-secondary mb-1">Coupon Sales</p>
                            <h4 className="mb-2 font-weight-bold">$23,364.55</h4>
                            <div className="d-flex align-items-center">
                            <span className="text-sm text-success font-weight-bolder">
                                <i className="fa fa-chevron-up text-xs me-1"></i>18%
                            </span>
                            <span className="text-sm ms-1">from $19,800.40</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <div className="card shadow-xs border">
                    <div className="card-header pb-0">
                    <div className="d-sm-flex align-items-center mb-3">
                        <div>
                        <h6 className="font-weight-semibold text-lg mb-0">Overview balance</h6>
                        <p className="text-sm mb-sm-0 mb-2">Here you have details about the balance.</p>
                        </div>
                        <div className="ms-auto d-flex">
                        <button type="button" className="btn btn-sm btn-white mb-0 me-2">
                            View report
                        </button>
                        </div>
                    </div>
                    <div className="d-sm-flex align-items-center">
                        <h3 className="mb-0 font-weight-semibold">$87,982.80</h3>
                        <span className="badge badge-sm border border-success text-success bg-success border-radius-sm ms-sm-3 px-2">
                        <svg width="9" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.46967 4.46967C0.176777 4.76256 0.176777 5.23744 0.46967 5.53033C0.762563 5.82322 1.23744 5.82322 1.53033 5.53033L0.46967 4.46967ZM5.53033 1.53033C5.82322 1.23744 5.82322 0.762563 5.53033 0.46967C5.23744 0.176777 4.76256 0.176777 4.46967 0.46967L5.53033 1.53033ZM5.53033 0.46967C5.23744 0.176777 4.76256 0.176777 4.46967 0.46967C4.17678 0.762563 4.17678 1.23744 4.46967 1.53033L5.53033 0.46967ZM8.46967 5.53033C8.76256 5.82322 9.23744 5.82322 9.53033 5.53033C9.82322 5.23744 9.82322 4.76256 9.53033 4.46967L8.46967 5.53033ZM1.53033 5.53033L5.53033 1.53033L4.46967 0.46967L0.46967 4.46967L1.53033 5.53033ZM4.46967 1.53033L8.46967 5.53033L9.53033 4.46967L5.53033 0.46967L4.46967 1.53033Z" fill="#67C23A"></path>
                        </svg>
                        10.5%
                        </span>
                    </div>
                    </div>
                    <div className="card-body p-3">
                    <div className="chart mt-n6">
                        <canvas id="chart-line" className="chart-canvas" height="300"></canvas>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </main>
  </>
  )
}
