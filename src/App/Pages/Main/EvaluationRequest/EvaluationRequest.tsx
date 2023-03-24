import React, { useMemo, useState } from 'react'
import { Row } from 'react-bootstrap'
import { Api } from '../../../Api/Api'
import { services } from '../../../Api/services'
import Moment from "react-moment";
export const EvaluationRequest = () => {

    const [evaluationsSize, setevaluationsSize] = useState<number>(0)
    const { data: requested, isLoading, error } = Api({ service: services.evaluationRequests.list,params:{requesterId:'44eb445f-78e9-4632-ae53-32ac0d3206a9'} })
    const { data: request } = Api({ service: services.evaluationRequests.list })
    const { data: evaluations } = Api({ service: services.evaluations.list })

    useMemo(() => setevaluationsSize(evaluations?.data?.length), [evaluations])
    return (
        <>
            <pre>{JSON.stringify(evaluationsSize, null, 1)}</pre>
            <div>EvaluationRequest-</div>
            <Row>
                <div className="col-lg-6 col-md-6">
                    <div className="card shadow-xs border">
                        <div className="card-header border-bottom pb-0">
                            <div className="d-sm-flex align-items-center mb-3">
                                <div>
                                    <h6 className="font-weight-semibold text-lg mb-0">Solicitação de avaliação</h6>
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
                                    <input type="text" className="form-control" placeholder="Search" />
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

                                        {requested?.data?.map((item: any) =>
                                            <tr>
                                                <td>
                                                    <div className="d-flex px-2">
                                                        <div className="avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2">
                                                            <img src="../assets/img/small-logos/logo-spotify.svg" className="w-80" alt="spotify" />
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm">{item?.requested?.datas?.firstName} {item?.requested?.datas?.lastName}</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-sm font-weight-normal mb-0">{100 * item?.evaluations?.length / evaluationsSize}</p>
                                                </td>
                                                <td>
                                                    <span className="text-sm font-weight-normal">Wed 3:00pm</span>
                                                </td>
                                                <td className="align-middle">
                                                    <div className="d-flex">
                                                        <div className="border px-1 py-1 text-center d-flex align-items-center border-radius-sm my-auto">
                                                            <img src="../assets/img/logos/visa.png" className="w-90 mx-auto" alt="visa" />
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
                                                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B"></path>
                                                        </svg>
                                                    </a>
                                                </td>
                                            </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6">
                    <div className="card shadow-xs border">
                        <div className="card-header border-bottom pb-0">
                            <div className="d-sm-flex align-items-center mb-3">
                                <div>
                                    <h6 className="font-weight-semibold text-lg mb-0">Solicitação de avaliação</h6>
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
                                    <input type="text" className="form-control" placeholder="Search" />
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

                                        {request?.data?.map((item: any) =>
                                            <tr>
                                                <td>
                                                    <div className="d-flex px-2">
                                                        <div className="avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2">
                                                            <img src="../assets/img/small-logos/logo-spotify.svg" className="w-80" alt="spotify" />
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm">{item?.requested?.datas?.firstName} {item?.requested?.datas?.lastName}</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-sm font-weight-normal mb-0">{100 * item?.evaluations?.length / evaluationsSize}</p>
                                                </td>
                                                <td>
                                                    <span className="text-sm font-weight-normal">{item?.createdAt} Wed 3:00pm</span>
                                                </td>
                                                <td className="align-middle">
                                                    <div className="d-flex">
                                                        <div className="border px-1 py-1 text-center d-flex align-items-center border-radius-sm my-auto">
                                                            <img src="../assets/img/logos/visa.png" className="w-90 mx-auto" alt="visa" />
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
                                                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B"></path>
                                                        </svg>
                                                    </a>
                                                </td>
                                            </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>

        </>
    )
}
