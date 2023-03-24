import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Api } from '../../../Api/Api'
import { services } from '../../../Api/services'

export const ShowCourse = () => {
    const { id } = useParams()
    const [params, setParams] = useState({ id })
    const { data: { data }, isLoading, error } = Api({ service: services.courses.list, id, params })
    return (
        <>

            <div className="pt-5 pb-6 bg-cover" style={{ backgroundImage: "url('/public/assets/img/header-blue-purple.jpg')" }}>
                <div className="container ">
                    <h4>#{data.code}</h4>
                    <h2>{data.title}</h2>
                </div>
            </div>

            <div className="container my-3 py-3">
                <div className="row mt-n6 mb-6">
                    <div className="col-lg-3 col-sm-6">
                        <div className="card blur border border-white mb-4 shadow-xs">
                            <div className="card-body p-4">
                                <div className="icon icon-shape bg-white shadow shadow-xs text-center border-radius-md d-flex align-items-center justify-content-center mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z"></path>
                                        <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd"></path>
                                        <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"></path>
                                    </svg>
                                </div>
                                <p className="text-sm mb-1">Today's Revenue</p>
                                <h3 className="mb-0 font-weight-bold">$8,093.00</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card blur border border-white mb-4 shadow-xs">
                            <div className="card-body p-4">
                                <div className="icon icon-shape bg-white shadow shadow-xs text-center border-radius-md d-flex align-items-center justify-content-center mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                                        <path d=" M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z"></path>
                                        <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z"></path>
                                    </svg>
                                </div>
                                <p className="text-sm mb-1">Marketing</p>
                                <h3 className="mb-0 font-weight-bold">$37,193.00</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card blur border border-white mb-4 shadow-xs">
                            <div className="card-body p-4">
                                <div className="icon icon-shape bg-white shadow shadow-xs text-center border-radius-md d-flex align-items-center justify-content-center mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"></path>
                                    </svg>
                                </div>
                                <p className="text-sm mb-1">Human Resources</p>
                                <h3 className="mb-0 font-weight-bold">$25,426.70</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card blur border border-white mb-4 shadow-xs">
                            <div className="card-body p-4">
                                <div className="icon icon-shape bg-white shadow shadow-xs text-center border-radius-md d-flex align-items-center justify-content-center mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z"></path>
                                        <path fill-rule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <p className="text-sm mb-1">Wallet</p>
                                <h3 className="mb-0 font-weight-bold">$2,400.10</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex align-items-center mb-4">
                            <h3 className="mb-1 font-weight-bold">
                                Wallet
                            </h3>
                        </div>
                        <div className="d-md-flex align-items-center mb-4">
                            <div className="mb-md-0 mb-3">
                                <h5 className="font-weight-semibold mb-1">Billing and invoicing</h5>
                                <p className="text-sm mb-0">Pick an account plan that fits your workflow.</p>
                            </div>
                            <button type="button" className="btn btn-sm btn-dark btn-icon d-flex align-items-center mb-0 ms-md-auto">
                                <span className="btn-inner--icon">
                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="d-block me-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
                                    </svg>
                                </span>
                                <span className="btn-inner--text">Download</span>
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="horizontal mb-4 dark" />
                <div className="row">
                    <div className="col-md-4">
                        <h6 className="text-sm font-weight-semibold mb-1">Billing history</h6>
                        <p className="text-sm">We’ll credit your account if you need to <br /> downgrade during the billing cycle.</p>
                    </div>
                    <div className="col-md-8 mb-6">
                        <div className="card shadow-xs border mb-4">
                            <div className="table-responsive p-0">
                                <table className="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                            <th className="d-flex align-items-center py-3 px-4 text-sm">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                </div>
                                                <span className="text-xs font-weight-semibold opacity-7 ms-1">All invoices</span>
                                            </th>
                                            <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Status</th>
                                            <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Amount</th>
                                            <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Plan</th>
                                            <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="d-flex align-items-center py-3 px-4 text-sm">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                </div>
                                                <span className="font-weight-semibold text-dark ms-1">Jan 2022</span>
                                            </td>
                                            <td>
                                                <span className="badge badge-sm border border-success text-success bg-success border-radius-sm">
                                                    <svg width="9" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="me-1">
                                                        <path d="M1 4.42857L3.28571 6.71429L9 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    Paid
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-sm">USD $30.00</span>
                                            </td>
                                            <td>
                                                <span className="text-sm">Basic Plan</span>
                                            </td>
                                            <td className="text-sm font-weight-semibold text-dark">
                                                <span className="text-sm">Download</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="d-flex align-items-center py-3 px-4 text-sm">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                </div>
                                                <span className="font-weight-semibold text-dark ms-1">Feb 2022</span>
                                            </td>
                                            <td>
                                                <span className="badge badge-sm border border-success text-success bg-success border-radius-sm">
                                                    <svg width="9" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="me-1">
                                                        <path d="M1 4.42857L3.28571 6.71429L9 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    Paid
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-sm">USD $30.00</span>
                                            </td>
                                            <td>
                                                <span className="text-sm">Basic Plan</span>
                                            </td>
                                            <td className="text-sm font-weight-semibold text-dark">
                                                <span className="text-sm">Download</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="d-flex align-items-center py-3 px-4 text-sm">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                </div>
                                                <span className="font-weight-semibold text-dark ms-1">Mar 2022</span>
                                            </td>
                                            <td>
                                                <span className="badge badge-sm border border-success text-success bg-success border-radius-sm">
                                                    <svg width="9" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="me-1">
                                                        <path d="M1 4.42857L3.28571 6.71429L9 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    Paid
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-sm">USD $30.00</span>
                                            </td>
                                            <td>
                                                <span className="text-sm">Basic Plan</span>
                                            </td>
                                            <td className="text-sm font-weight-semibold text-dark">
                                                <span className="text-sm">Download</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="d-flex align-items-center py-3 px-4 text-sm">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                </div>
                                                <span className="font-weight-semibold text-dark ms-1">Apr 2022</span>
                                            </td>
                                            <td>
                                                <span className="badge badge-sm border border-success text-success bg-success border-radius-sm">
                                                    <svg width="9" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="me-1">
                                                        <path d="M1 4.42857L3.28571 6.71429L9 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    Paid
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-sm">USD $30.00</span>
                                            </td>
                                            <td>
                                                <span className="text-sm">Basic Plan</span>
                                            </td>
                                            <td className="text-sm font-weight-semibold text-dark">
                                                <span className="text-sm">Download</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="d-flex align-items-center py-3 px-4 text-sm">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                </div>
                                                <span className="font-weight-semibold text-dark ms-1">May 2022</span>
                                            </td>
                                            <td>
                                                <span className="badge badge-sm border border-success text-success bg-success border-radius-sm">
                                                    <svg width="9" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="me-1">
                                                        <path d="M1 4.42857L3.28571 6.71429L9 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    Paid
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-sm">USD $30.00</span>
                                            </td>
                                            <td>
                                                <span className="text-sm">Basic Plan</span>
                                            </td>
                                            <td className="text-sm font-weight-semibold text-dark">
                                                <span className="text-sm">Download</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="d-flex align-items-center py-3 px-4 text-sm">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                </div>
                                                <span className="font-weight-semibold text-dark ms-1">Jun 2022</span>
                                            </td>
                                            <td>
                                                <span className="badge badge-sm border border-success text-success bg-success border-radius-sm">
                                                    <svg width="9" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="me-1">
                                                        <path d="M1 4.42857L3.28571 6.71429L9 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    Paid
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-sm">USD $30.00</span>
                                            </td>
                                            <td>
                                                <span className="text-sm">Basic Plan</span>
                                            </td>
                                            <td className="text-sm font-weight-semibold text-dark">
                                                <span className="text-sm">Download</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="d-flex align-items-center py-3 px-4 text-sm">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                </div>
                                                <span className="font-weight-semibold text-dark ms-1">Jul 2022</span>
                                            </td>
                                            <td>
                                                <span className="badge badge-sm border border-success text-success bg-success border-radius-sm">
                                                    <svg width="9" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="me-1">
                                                        <path d="M1 4.42857L3.28571 6.71429L9 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    Paid
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-sm">USD $30.00</span>
                                            </td>
                                            <td>
                                                <span className="text-sm">Basic Plan</span>
                                            </td>
                                            <td className="text-sm font-weight-semibold text-dark">
                                                <span className="text-sm">Download</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card shadow-xs border mb-4">
                                    <div className="card-body py-0">
                                        <div className="row">
                                            <div className="col-4 pe-1">
                                                <div className="chart">

                                                </div>
                                            </div>
                                            <div className="col-8 my-auto">
                                                <div className="d-flex">
                                                    <div>
                                                        <h4 className="font-weight-semibold text-lg mb-4">Primary Wallet</h4>
                                                        <p className="text-sm mb-1">Current Balance</p>
                                                        <h3 className="mb-0 font-weight-bold">$20,450.80</h3>
                                                    </div>
                                                    <div className="ms-auto text-end d-flex flex-column">
                                                        <div className="dropdown">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ms-auto cursor-pointer dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd"></path>
                                                            </svg>
                                                            <ul className="dropdown-menu dropdown-menu-end me-n4">
                                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                            </ul>
                                                        </div>
                                                        <span className="badge badge-sm border border-success text-success bg-success border-radius-sm mt-auto mb-2">
                                                            <svg width="9" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.46967 4.46967C0.176777 4.76256 0.176777 5.23744 0.46967 5.53033C0.762563 5.82322 1.23744 5.82322 1.53033 5.53033L0.46967 4.46967ZM5.53033 1.53033C5.82322 1.23744 5.82322 0.762563 5.53033 0.46967C5.23744 0.176777 4.76256 0.176777 4.46967 0.46967L5.53033 1.53033ZM5.53033 0.46967C5.23744 0.176777 4.76256 0.176777 4.46967 0.46967C4.17678 0.762563 4.17678 1.23744 4.46967 1.53033L5.53033 0.46967ZM8.46967 5.53033C8.76256 5.82322 9.23744 5.82322 9.53033 5.53033C9.82322 5.23744 9.82322 4.76256 9.53033 4.46967L8.46967 5.53033ZM1.53033 5.53033L5.53033 1.53033L4.46967 0.46967L0.46967 4.46967L1.53033 5.53033ZM4.46967 1.53033L8.46967 5.53033L9.53033 4.46967L5.53033 0.46967L4.46967 1.53033Z" fill="#67C23A"></path>
                                                            </svg>
                                                            10.5%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card shadow-xs border mb-4">
                                    <div className="card-body py-0">
                                        <div className="row">
                                            <div className="col-4 pe-1">
                                                <div className="chart">
                                                    <canvas id="chart-doughnut-dark" className="chart-canvas" height="150" width="127" style={{ display: "block", boxSizing: "border-box", height: "150px", width: "127px" }}></canvas>
                                                </div>
                                            </div>
                                            <div className="col-8 my-auto">
                                                <div className="d-flex">
                                                    <div>
                                                        <h4 className="font-weight-semibold text-lg mb-4">Secondary Wallet</h4>
                                                        <p className="text-sm mb-1">Current Balance</p>
                                                        <h3 className="mb-0 font-weight-bold">$10,250.60</h3>
                                                    </div>
                                                    <div className="ms-auto text-end d-flex flex-column">
                                                        <div className="dropdown">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ms-auto cursor-pointer dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd"></path>
                                                            </svg>
                                                            <ul className="dropdown-menu dropdown-menu-end me-n4">
                                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                            </ul>
                                                        </div>
                                                        <span className="badge badge-sm border border-success text-success bg-success border-radius-sm mt-auto mb-2">
                                                            <svg width="9" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.46967 4.46967C0.176777 4.76256 0.176777 5.23744 0.46967 5.53033C0.762563 5.82322 1.23744 5.82322 1.53033 5.53033L0.46967 4.46967ZM5.53033 1.53033C5.82322 1.23744 5.82322 0.762563 5.53033 0.46967C5.23744 0.176777 4.76256 0.176777 4.46967 0.46967L5.53033 1.53033ZM5.53033 0.46967C5.23744 0.176777 4.76256 0.176777 4.46967 0.46967C4.17678 0.762563 4.17678 1.23744 4.46967 1.53033L5.53033 0.46967ZM8.46967 5.53033C8.76256 5.82322 9.23744 5.82322 9.53033 5.53033C9.82322 5.23744 9.82322 4.76256 9.53033 4.46967L8.46967 5.53033ZM1.53033 5.53033L5.53033 1.53033L4.46967 0.46967L0.46967 4.46967L1.53033 5.53033ZM4.46967 1.53033L8.46967 5.53033L9.53033 4.46967L5.53033 0.46967L4.46967 1.53033Z" fill="#67C23A"></path>
                                                            </svg>
                                                            33.8%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="d-md-flex align-items-center mb-4">
                            <div className="mb-md-0 mb-4">
                                <h5 className="font-weight-semibold mb-1">Your cards</h5>
                                <p className="text-sm mb-0">Pick an account plan that fits your workflow.</p>
                            </div>
                            <button type="button" className="btn btn-sm btn-dark btn-icon d-flex align-items-center mb-0 ms-md-auto">
                                <span className="btn-inner--icon">
                                    <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="d-block me-2">
                                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                                    </svg>
                                </span>
                                <span className="btn-inner--text">Manage cards</span>
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div className="col-md-4">
                        <h6 className="text-sm font-weight-semibold mb-1">Card details</h6>
                        <p className="text-sm">We’ll credit your account if you need to <br /> downgrade during the billing cycle.</p>
                    </div>
                    <div className="col-md-8 mb-4">
                        <div className="card border shadow-xs">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="card card-background card-background-after-none align-items-start mb-2">
                                            <div className="full-background" style={{ backgroundImage: "url('/public/assets/img/curved-images/img-6.jpg')" }}></div></div>
                                        <div className="card-body text-start ps-3 pe-2 pt-2 pb-2 w-100">
                                            <div className="row">
                                                <div className="col-8 py-2">
                                                    <p className="text-white text-sm font-weight-bold mb-6">Corporate UI</p>
                                                    <div className="d-flex align-items-center mb-0 mt-auto">
                                                        <p className="font-weight-semibold mb-0">Noah Jackes</p>
                                                        <span className="ms-auto text-xs font-weight-bolder text-pt-mono">08/28</span>
                                                    </div>
                                                    <span className="ms-auto text-sm font-weight-bolder text-pt-mono">1234&nbsp;&nbsp;6578&nbsp;&nbsp;9000&nbsp;&nbsp;1234</span>
                                                </div>
                                                <div className="col-4">
                                                    <div className="blur d-flex flex-column w-80 h-100 py-2 ms-auto border-radius-lg border border-white">
                                                        <div className="text-center w-100">
                                                            <img src="/public/assets/img/logos/wifi-white.png" className="w-25 mx-auto" alt="wifi" />
                                                        </div>
                                                        <div className="text-center mt-auto w-100">
                                                            <img src="/public/assets/img/logos/mastercard-white.png" className="w-40 mx-auto mt-2" alt="mastercard" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-wrapper w-100 mb-lg-0 mb-5">
                                        <div className="d-flex align-items-center mb-2">
                                            <span className="text-sm font-weight-semibold">This month</span>
                                            <p className="text-dark font-weight-bold ms-auto mb-0">$56,982.20</p>
                                        </div>
                                        <div className="progress">

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="card card-background card-background-after-none align-items-start mb-2">
                                        <div className="full-background" style={{ backgroundImage: "url('/public/assets/img/curved-images/img-7.jpg')" }}></div>
                                        <div className="card-body text-start p-2 w-100">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="blur d-flex align-items-center w-100 border-radius-md border border-white mb-4 p-2">
                                                        <p className="text-white text-sm w-50 mb-0 font-weight-bold">Corporate UI</p>
                                                        <div className="text-end ms-auto w-100 pe-2">
                                                            <img src="/public/assets/img/logos/wifi-white.png" className="w-10 ms-auto" alt="wifi" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-8 py-2 mt-auto">
                                                    <div className="d-flex align-items-center mb-0 mt-auto ms-2">
                                                        <p className="font-weight-semibold mb-0 mt-3">Noah Jackes</p>
                                                        <span className="ms-auto text-xs font-weight-bolder text-pt-mono">08/28</span>
                                                    </div>
                                                    <span className="text-sm font-weight-bolder text-pt-mono ms-2">1234&nbsp;&nbsp;6578&nbsp;&nbsp;9000&nbsp;&nbsp;1234</span>
                                                </div>
                                                <div className="col-4 py-2 text-end mt-auto">
                                                    <img src="/public/assets/img/logos/visa-white.png" className="w-50 ms-auto me-3" alt="visa" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-wrapper w-100">
                                        <div className="d-flex align-items-center mb-2">
                                            <span className="text-sm font-weight-semibold">This month</span>
                                            <p className="text-dark font-weight-bold ms-auto mb-0">$16,748.05</p>
                                        </div>
                                        <div className="progress">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-md-4">
                    <h6 className="text-sm font-weight-semibold mb-1">Current Plan</h6>
                    <p className="text-sm">We’ll credit your account if you need to <br /> downgrade during the billing cycle.</p>
                </div>
                <div className="col-md-4">
                    <ul className="list-group">
                        <li className="list-group-item border-info d-flex justify-content-between mb-3 border-radius-md shadow-xs p-3">
                            <div className="d-flex align-items-start">
                                <div className="icon icon-shape icon-sm bg-info text-white shadow-none text-center  border-radius-sm me-sm-2 me-3 mt-1 px-2 d-flex align-items-center justify-content-center">
                                    <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div className="d-flex flex-column">
                                    <h6 className="mb-0 text-sm text-info">Free Plan $0/month</h6>
                                    <span className="text-sm text-info">Includes 1 user, 10GB individual data and access to all features.</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center text-danger text-gradient">
                                <div className="form-check">
                                    <input type="radio" id="radio3" name="radioDisabled" className="form-check-input form-check-input-info" />
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item border d-flex justify-content-between mb-3 border-radius-md shadow-xs p-3">
                            <div className="d-flex align-items-start">
                                <div className="icon icon-shape icon-sm bg-dark text-white shadow-none text-center  border-radius-sm me-sm-2 me-3 mt-1 px-2 d-flex align-items-center justify-content-center">
                                    <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"></path>
                                    </svg>
                                </div>
                                <div className="d-flex flex-column">
                                    <h6 className="mb-0 text-sm">Freelancer Plan $30/month</h6>
                                    <span className="text-sm">Includes up to 10 users, 20GB individual data and access to all features.</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center text-danger text-gradient">
                                <div className="form-check">
                                    <input type="radio" id="radio3" name="radioDisabled" className="form-check-input form-check-input-info" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className="list-group">
                        <li className="list-group-item border d-flex justify-content-between mb-3 border-radius-md shadow-xs p-3">
                            <div className="d-flex align-items-start">
                                <div className="icon icon-shape icon-sm bg-dark text-white shadow-none text-center  border-radius-sm me-sm-2 me-3 mt-1 px-2 d-flex align-items-center justify-content-center">
                                    <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd"></path>
                                        <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"></path>
                                    </svg>
                                </div>
                                <div className="d-flex flex-column">
                                    <h6 className="mb-0 text-sm">Company Plan $50/month</h6>
                                    <span className="text-sm">Includes up to 20 users, 40GB individual data and access to all features.</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center text-danger text-gradient">
                                <div className="form-check">
                                    <input type="radio" id="radio3" name="radioDisabled" className="form-check-input form-check-input-info" />
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item border d-flex justify-content-between mb-3 border-radius-md shadow-xs p-3">
                            <div className="d-flex align-items-start">
                                <div className="icon icon-shape icon-sm bg-dark text-white shadow-none text-center  border-radius-sm me-sm-2 me-3 mt-1 px-2 d-flex align-items-center justify-content-center">
                                    <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd"></path>
                                        <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"></path>
                                    </svg>
                                </div>
                                <div className="d-flex flex-column">
                                    <h6 className="mb-0 text-sm">Corporate Plan $90/month</h6>
                                    <span className="text-sm">Unlimited users, unlimited individual data and access to all features.</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center text-danger text-gradient">
                                <div className="form-check">
                                    <input type="radio" id="radio3" name="radioDisabled" className="form-check-input form-check-input-info" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>



        </>
    )
}
