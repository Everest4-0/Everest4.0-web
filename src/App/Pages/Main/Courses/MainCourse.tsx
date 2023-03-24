import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Api } from '../../../Api/Api'
import { services } from '../../../Api/services'

export const MainCourse = () => {
    const navigate = useNavigate();
    const { data: { data }, isLoading, error } = Api({ service: services.courses.list })
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="card card-background card-background-after-none align-items-start mt-4 mb-5">
                        <div className="full-background" style={{ backgroundImage: "url('../assets/img/header-blue-purple.jpg')" }}></div>
                        <div className="card-body text-start p-4 w-100">
                            <h3 className="text-white mb-2">Courses 🔥</h3>
                            <p className="mb-4 font-weight-semibold">
                                Check all the advantages and choose the best.
                            </p>
                            <button type="button" className="btn btn-outline-white btn-blur btn-icon d-flex align-items-center mb-0">
                                <span className="btn-inner--icon">
                                    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="d-block me-2">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.61036 4.52196C6.34186 4.34296 5.99664 4.32627 5.71212 4.47854C5.42761 4.63081 5.25 4.92731 5.25 5.25V8.75C5.25 9.0727 5.42761 9.36924 5.71212 9.52149C5.99664 9.67374 6.34186 9.65703 6.61036 9.47809L9.23536 7.72809C9.47879 7.56577 9.625 7.2926 9.625 7C9.625 6.70744 9.47879 6.43424 9.23536 6.27196L6.61036 4.52196Z"></path>
                                    </svg>
                                </span>
                                <span className="btn-inner--text">Watch more</span>
                            </button>
                            <img src="../assets/img/3d-cube.png" alt="3d-cube" className="position-absolute top-0 end-1 w-25 max-width-200 mt-n6 d-sm-block d-none" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-4">
                <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
                    <div className="card shadow-xs border h-100">
                        <div className="card-header pb-0">
                            <h6 className="font-weight-semibold text-lg mb-0">courses over time</h6>
                            <p className="text-sm">Here you have details about the balance.</p>
                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                                <label className="btn btn-white px-3 mb-0" htmlFor="btnradio1">12 months</label>
                                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                                <label className="btn btn-white px-3 mb-0" htmlFor="btnradio2">30 days</label>
                                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
                                <label className="btn btn-white px-3 mb-0" htmlFor="btnradio3">7 days</label>
                            </div>
                        </div>
                        <div className="card-body py-3">
                            <div className="chart mb-2">
                                <canvas id="chart-bars" className="chart-canvas" height="240" width="365" style={{ display: "block", boxSizing: "border-box", height: "240px", width: "365px" }}></canvas>
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
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
                                            </svg>
                                        </span>
                                        <span className="btn-inner--text">Download</span>
                                    </button>
                                </div>
                            </div>
                            <div className="pb-3 d-sm-flex align-items-center">
                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradiotable" id="btnradiotable1" />
                                    <label className="btn btn-white px-3 mb-0" htmlFor="btnradiotable1">All</label>
                                    <input type="radio" className="btn-check" name="btnradiotable" id="btnradiotable2" />
                                    <label className="btn btn-white px-3 mb-0" htmlFor="btnradiotable2">Free</label>
                                    <input type="radio" className="btn-check" name="btnradiotable" id="btnradiotable3" />
                                    <label className="btn btn-white px-3 mb-0" htmlFor="btnradiotable3">Premium</label>
                                </div>
                                <div className="input-group w-sm-25 ms-auto">
                                    <span className="input-group-text text-body">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                                        </svg>
                                    </span>
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body px-0 py-0">
                            <div className="table-responsive p-0">
                                <table className="table table-hover align-items-center justify-content-center mb-0">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="text-secondary text-xs font-weight-semibold opacity-7">course</th>
                                            <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Email</th>
                                            <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Date</th>
                                            <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((course: any) =>
                                            <tr onClick={()=>navigate('show/'+course?.id)}>
                                                <td>
                                                    <div className="d-flex px-2">
                                                        <div className="avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2">
                                                            <img src="../assets/img/small-logos/logo-spotify.svg" className="w-80" alt="spotify" />
                                                        </div>
                                                        <div className="my-auto">
                                                            <p className="text-sm mb-0">#{course?.code}</p>
                                                            <h6 className="mb-0 text-sm">{course?.title} </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-sm font-weight-normal mb-0">{course?.roles}</p>
                                                </td>
                                                <td>
                                                    <span className="text-sm font-weight-normal">{course?.createdAt}</span>
                                                </td>
                                                <td className="align-middle">
                                                    <div className="d-flex">
                                                        <div className="border px-1 py-1 text-center d-flex align-items-center border-radius-sm my-auto">

                                                            <span className="text-sm font-weight-normal">{course?.language ?? 'PT'}</span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <p className="text-secondary text-sm mb-0">Expiry 06/2026</p>
                                                        </div>
                                                    </div>
                                                </td>

                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
