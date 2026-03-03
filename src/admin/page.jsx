"use client";
import React, { useState } from "react";
import AdminLayout from "./layout";
import Head from "next/head";
import Script from "next/script";

const Dashboard = () => {
  const [apexReady, setApexReady] = useState(false);

  return (
    <AdminLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between my-4 page-header-breadcrumb flex-wrap gap-2">
          <div>
            <p className="fw-semibold fs-20 mb-0">Welcome Back, Jack Miller</p>
            <p className="fs-13 text-muted mb-0">Let's dive in and get things done.</p>
          </div>
          <div className="d-flex align-items-center gap-2 flex-wrap">
            <div className="form-group">
              <div className="input-group border">
                <div className="input-group-text border-0 pe-0">
                  <i className="ri-calendar-line lh-1"></i>
                </div>
                <input
                  type="text"
                  className="form-control breadcrumb-input border-0"
                  id="daterange"
                  placeholder="Search By Date Range"
                />
              </div>
            </div>
            <button type="button" className="btn btn-primary btn-wave">
              <i className="ri-upload-2-line me-2"></i> Export report
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-xxl-9">
            <div className="row">
              <div className="col-xl-3">
                <div className="card custom-card main-card-item primary">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-3 flex-wrap">
                      <div>
                        <span className="d-block mb-3 fw-medium">Total Sales</span>
                        <h3 className="fw-semibold lh-1 mb-0">32,981</h3>
                      </div>
                      <div className="text-end">
                        <div className="mb-4">
                          <span className="avatar avatar-md bg-primary svg-white avatar-rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                              <rect width="256" height="256" fill="none" />
                              <rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                              <path d="M168,88a40,40,0,0,1-80,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <a href="#" className="text-muted text-decoration-underline fw-medium fs-13">View all sales</a>
                      <span className="text-success fw-semibold"><i className="ti ti-arrow-narrow-up"></i>0.29%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="card custom-card main-card-item">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-3 flex-wrap">
                      <div>
                        <span className="d-block mb-3 fw-medium">Total Revenue</span>
                        <h3 className="fw-semibold lh-1 mb-0">$14,32,145</h3>
                      </div>
                      <div className="text-end">
                        <div className="mb-4">
                          <span className="avatar avatar-md bg-secondary svg-white avatar-rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                              <rect width="256" height="256" fill="none" />
                              <line x1="128" y1="24" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                              <path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <a href="#" className="text-muted text-decoration-underline fw-medium fs-13">complete revenue</a>
                      <span className="text-danger fw-semibold"><i className="ti ti-arrow-narrow-up"></i>3.45%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="card custom-card main-card-item">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-3 flex-wrap">
                      <div>
                        <span className="d-block mb-3 fw-medium">Page Views</span>
                        <h3 className="fw-semibold lh-1 mb-0">4,678</h3>
                      </div>
                      <div className="text-end">
                        <div className="mb-4">
                          <span className="avatar avatar-md bg-success svg-white avatar-rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                              <rect width="256" height="256" fill="none" />
                              <circle cx="84" cy="108" r="52" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                              <path d="M10.23,200a88,88,0,0,1,147.54,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                              <path d="M172,160a87.93,87.93,0,0,1,73.77,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                              <path d="M152.69,59.7A52,52,0,1,1,172,160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <a href="#" className="text-muted text-decoration-underline fw-medium fs-13">Total page views</a>
                      <span className="text-success fw-semibold"><i className="ti ti-arrow-narrow-up"></i>11.54%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="card custom-card main-card-item">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-3 flex-wrap">
                      <div>
                        <span className="d-block mb-3 fw-medium">Profit By Sale</span>
                        <h3 className="fw-semibold lh-1 mb-0">$645</h3>
                      </div>
                      <div className="text-end">
                        <div className="mb-4">
                          <span className="avatar avatar-md bg-info svg-white avatar-rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                              <rect width="256" height="256" fill="none" />
                              <path d="M40,56V184a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8H56A16,16,0,0,1,40,56h0A16,16,0,0,1,56,40H192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                              <circle cx="180" cy="132" r="12" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <a href="#" className="text-muted text-decoration-underline fw-medium fs-13">Total profit earned</a>
                      <span className="text-success fw-semibold"><i className="ti ti-arrow-narrow-up"></i>0.18%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="card custom-card">
                  <div className="card-header justify-content-between">
                    <div className="card-title"> Visitors Report </div>
                    <div className="dropdown">
                      <a href="#" className="p-2 fs-12 text-muted" data-bs-toggle="dropdown" aria-expanded="false">
                        Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                      </a>
                      <ul className="dropdown-menu" role="menu">
                        <li><a className="dropdown-item" href="#">This Week</a></li>
                        <li><a className="dropdown-item" href="#">Last Week</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row gy-3">
                      <div className="col-xl-6">
                        <div className="p-3 bg-light text-default rounded border border-dashed">
                          <span className="d-block mb-1">This Week</span>
                          <h5 className="fw-semibold lh-1 mb-0">14,642<span className="text-success fw-semibold fs-13 ms-2 d-inline-flex align-items-center">0.64%<i className="ri-arrow-up-s-line ms-1"></i></span></h5>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="p-3 bg-light text-default rounded border border-dashed">
                          <span className="d-block mb-1">Last Week</span>
                          <h5 className="fw-semibold lh-1 mb-0">12,326<span className="text-danger fw-semibold fs-13 ms-2 d-inline-flex align-items-center">5.31%<i className="ri-arrow-down-s-line ms-1"></i></span></h5>
                        </div>
                      </div>
                    </div>
                    <div id="visitors-report"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="card custom-card">
                  <div className="card-header justify-content-between">
                    <div className="card-title"> Order Statistics </div>
                    <div className="d-flex align-items-center flex-wrap gap-2">
                      <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary btn-wave">Day</button>
                        <button type="button" className="btn btn-primary-light btn-wave">Week</button>
                        <button type="button" className="btn btn-primary-light btn-wave">Month</button>
                        <button type="button" className="btn btn-primary-light btn-wave">Year</button>
                      </div>
                      <div>
                        <button className="btn btn-light border btn-sm">Export<i className="ri-share-forward-line ms-1"></i></button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pb-0">
                    <div id="ordered-statistics"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3">
            <div className="card custom-card overflow-hidden">
              <div className="card-header justify-content-between">
                <div className="card-title"> Top Selling categories </div>
                <div className="dropdown">
                  <a href="#" className="p-2 fs-12 text-muted" data-bs-toggle="dropdown" aria-expanded="false">
                    Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li><a className="dropdown-item" href="#">This Week</a></li>
                    <li><a className="dropdown-item" href="#">Last Week</a></li>
                    <li><a className="dropdown-item" href="#">This Month</a></li>
                  </ul>
                </div>
              </div>
              <div className="card-body p-0">
                <div id="top-categories" className="p-4 pb-3"></div>
                <div className="border-top">
                  <ul className="list-group list-group-flush top-categories">
                    <li className="list-group-item">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="lh-1">
                          <div className="fw-semibold mb-1">Electronics</div>
                          <div><span className="text-muted fs-13">Increased by <span className="text-success fw-medium ms-1 d-inline-flex align-items-center">0.64%<i className="ti ti-trending-up ms-1"></i></span></span></div>
                        </div>
                        <div className="lh-1 text-end">
                          <span className="d-block fw-semibold h6 mb-0">1,754</span>
                          <span className="d-block fs-13 text-muted">Sales</span>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="lh-1">
                          <div className="fw-semibold mb-1">Accessories</div>
                          <div><span className="text-muted fs-13">Decreased by <span className="text-danger fw-medium ms-1 d-inline-flex align-items-center">2.75%<i className="ti ti-trending-down ms-1"></i></span></span></div>
                        </div>
                        <div className="lh-1 text-end">
                          <span className="d-block fw-semibold h6 mb-0">1,234</span>
                          <span className="d-block fs-13 text-muted">Sales</span>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="lh-1">
                          <div className="fw-semibold mb-1">Home Appliances</div>
                          <div><span className="text-muted fs-13">Increased by <span className="text-success fw-medium ms-1 d-inline-flex align-items-center">1.54%<i className="ti ti-trending-up ms-1"></i></span></span></div>
                        </div>
                        <div className="lh-1 text-end">
                          <span className="d-block fw-semibold h6 mb-0">878</span>
                          <span className="d-block fs-13 text-muted">Sales</span>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="lh-1">
                          <div className="fw-semibold mb-1">Beauty Products</div>
                          <div><span className="text-muted fs-13">Increased by <span className="text-success fw-medium ms-1 d-inline-flex align-items-center">1.54%<i className="ti ti-trending-up ms-1"></i></span></span></div>
                        </div>
                        <div className="lh-1 text-end">
                          <span className="d-block fw-semibold h6 mb-0">270</span>
                          <span className="d-block fs-13 text-muted">Sales</span>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="lh-1">
                          <div className="fw-semibold mb-1">Furniture</div>
                          <div><span className="text-muted fs-13">Decreased by <span className="text-danger fw-medium ms-1 d-inline-flex align-items-center">0.12%<i className="ti ti-trending-down ms-1"></i></span></span></div>
                        </div>
                        <div className="lh-1 text-end">
                          <span className="d-block fw-semibold h6 mb-0">456</span>
                          <span className="d-block fs-13 text-muted">Sales</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xxl-3">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title"> Country Wise Sales </div>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-0 top-country-sales">
                  <li>
                    <div className="d-flex align-items-center flex-wrap gap-2">
                      <div className="lh-1">
                        <span className="avatar avatar-md p-2 bg-light border avatar-rounded">
                          <img src="/admin-assets/assets/images/flags/us_flag.jpg" alt="" />
                        </span>
                      </div>
                      <div className="flex-fill lh-1">
                        <span className="fw-semibold mb-2 d-block">United States</span>
                        <span className="d-block text-muted fs-13">32,190 Sales</span>
                      </div>
                      <div className="text-end">
                        <span className="text-default h6 fw-semibold mb-0">$32,190</span>
                        <span className="text-success fw-medium d-block"><i className="ti ti-arrow-narrow-up"></i>0.27%</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center flex-wrap gap-2">
                      <div className="lh-1">
                        <span className="avatar avatar-md p-2 bg-light border avatar-rounded">
                          <img src="/admin-assets/assets/images/flags/germany_flag.jpg" alt="" />
                        </span>
                      </div>
                      <div className="flex-fill lh-1">
                        <span className="fw-semibold mb-2 d-block">Germany</span>
                        <span className="d-block text-muted fs-13">8,798 Sales</span>
                      </div>
                      <div className="text-end">
                        <span className="text-default h6 fw-semibold mb-0">$29,234</span>
                        <span className="text-success fw-medium d-block"><i className="ti ti-arrow-narrow-up"></i>0.12%</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center flex-wrap gap-2">
                      <div className="lh-1">
                        <span className="avatar avatar-md p-2 bg-light border avatar-rounded">
                          <img src="/admin-assets/assets/images/flags/mexico_flag.jpg" alt="" />
                        </span>
                      </div>
                      <div className="flex-fill lh-1">
                        <span className="fw-semibold mb-2 d-block">Mexico</span>
                        <span className="d-block text-muted fs-13">16,885 Sales</span>
                      </div>
                      <div className="text-end">
                        <span className="text-default h6 fw-semibold mb-0">$26,166</span>
                        <span className="text-danger fw-medium d-block"><i className="ti ti-arrow-narrow-down"></i>0.75%</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center flex-wrap gap-2">
                      <div className="lh-1">
                        <span className="avatar avatar-md p-2 bg-light border avatar-rounded">
                          <img src="/admin-assets/assets/images/flags/uae_flag.jpg" alt="" />
                        </span>
                      </div>
                      <div className="flex-fill lh-1">
                        <span className="fw-semibold mb-2 d-block">Uae</span>
                        <span className="d-block text-muted fs-13">14,885 Sales</span>
                      </div>
                      <div className="text-end">
                        <span className="text-default h6 fw-semibold mb-0">$24,263</span>
                        <span className="text-success fw-medium d-block"><i className="ti ti-arrow-narrow-up"></i>1.45%</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center flex-wrap gap-2">
                      <div className="lh-1">
                        <span className="avatar avatar-md p-2 bg-light border avatar-rounded">
                          <img src="/admin-assets/assets/images/flags/argentina_flag.jpg" alt="" />
                        </span>
                      </div>
                      <div className="flex-fill lh-1">
                        <span className="fw-semibold mb-2 d-block">Argentina</span>
                        <span className="d-block text-muted fs-13">17,578 Sales</span>
                      </div>
                      <div className="text-end">
                        <span className="text-default h6 fw-semibold mb-0">$23,897</span>
                        <span className="text-success fw-medium d-block"><i className="ti ti-arrow-narrow-up"></i>0.36%</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center flex-wrap gap-2">
                      <div className="lh-1">
                        <span className="avatar avatar-md p-2 bg-light border avatar-rounded">
                          <img src="/admin-assets/assets/images/flags/russia_flag.jpg" alt="" />
                        </span>
                      </div>
                      <div className="flex-fill lh-1">
                        <span className="fw-semibold mb-2 d-block">Russia</span>
                        <span className="d-block text-muted fs-13">10,118 Sales</span>
                      </div>
                      <div className="text-end">
                        <span className="text-default h6 fw-semibold mb-0">$20,212</span>
                        <span className="text-danger fw-medium d-block"><i className="ti ti-arrow-narrow-down"></i>0.68%</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xxl-3">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title"> Visitors By Gender </div>
              </div>
              <div className="card-body">
                <div id="segmentation"></div>
                <div>
                  <ul className="list-group segmentation-list">
                    <li className="list-group-item male">
                      <div className="d-flex align-items-start justify-content-between">
                        <div>
                          <span className="d-block fw-semibold">Male<span className="text-success fw-medium ms-1 d-inline-flex align-items-center"><i className="ti ti-arrow-narrow-up"></i>0.78%</span></span>
                        </div>
                        <div className="h6 mb-0 fw-semibold"> 18,235 </div>
                      </div>
                    </li>
                    <li className="list-group-item female">
                      <div className="d-flex align-items-start justify-content-between">
                        <div>
                          <span className="d-block fw-semibold">Female<span className="text-danger fw-medium ms-1 d-inline"><i className="ti ti-arrow-narrow-down"></i>1.57%</span></span>
                        </div>
                        <div className="h6 mb-0 fw-semibold"> 12,743 </div>
                      </div>
                    </li>
                    <li className="list-group-item others">
                      <div className="d-flex align-items-start justify-content-between">
                        <div>
                          <span className="d-block fw-semibold">Others<span className="text-success fw-medium ms-1 d-inline-flex align-items-center"><i className="ti ti-arrow-narrow-up"></i>0.32%</span></span>
                        </div>
                        <div className="h6 mb-0 fw-semibold"> 5,369 </div>
                      </div>
                    </li>
                    <li className="list-group-item not-mentioned">
                      <div className="d-flex align-items-start justify-content-between">
                        <div>
                          <span className="d-block fw-semibold">Not Mentioned<span className="text-success fw-medium ms-1 d-inline-flex align-items-center"><i className="ti ti-arrow-narrow-up"></i>19.45%</span></span>
                        </div>
                        <div className="h6 mb-0 fw-semibold"> 16,458 </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title"> Recent Activity </div>
              </div>
              <div className="card-body">
                <ul className="list-unstyled recent-activity-list">
                  <li>
                    <div className="d-flex justify-content-between align-items-start gap-2 pe-4">
                      <div>
                        <span className="d-block">Jane Smith ordered 5 new units of <span className="text-primary fw-semibold">Product Y.</span></span>
                      </div>
                      <div className="recent-activity-time fs-13">
                        <span className="text-muted">12:45 Am</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between align-items-start gap-2 pe-4">
                      <div>
                        <span className="d-block">Scheduled demo with potential client DEF for next Tuesday</span>
                      </div>
                      <div className="recent-activity-time fs-13">
                        <span className="text-muted">03:26 Pm</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between align-items-start gap-2 pe-4">
                      <div>
                        <span className="d-block">Product X price updated to <span className="text-success fw-semibold">$XX.XX</span> per every unit</span>
                      </div>
                      <div className="recent-activity-time fs-13">
                        <span className="text-muted">08:52 Pm</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between align-items-start gap-2 pe-4">
                      <div>
                        <span className="d-block">Database backup completed successfully</span>
                      </div>
                      <div className="recent-activity-time fs-13">
                        <span className="text-muted">02:54 Am</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between align-items-start gap-2 pe-4">
                      <div>
                        <span className="d-block">Generated <span className="text-warning fw-semibold">$10,000</span> in revenue</span>
                      </div>
                      <div className="recent-activity-time fs-13">
                        <span className="text-muted">11:38 Am</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between align-items-start gap-2 pe-4">
                      <div>
                        <span className="d-block">Processed refund for Order <span className="text-danger fw-semibold">#13579</span> due to defective item</span>
                      </div>
                      <div className="recent-activity-time fs-13">
                        <span className="text-muted">01:42 Pm</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xxl-3">
            <div className="card custom-card overflow-hidden">
              <div className="card-header justify-content-between">
                <div className="card-title"> Recent Transactions </div>
                <a href="#" className="fs-13 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </a>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table text-nowrap">
                    <thead>
                      <tr>
                        <th scope="col">Payment Mode</th>
                        <th scope="col" className="text-end">Amount Paid</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-start gap-2">
                            <div>
                              <span className="avatar avatar-md avatar-rounded bg-primary-transparent">
                                <i className="ri-paypal-line fs-18"></i>
                              </span>
                            </div>
                            <div>
                              <span className="d-block fw-semibold mb-1">Paypal ****2783</span>
                              <span className="d-block fs-13 text-muted">Online Transaction</span>
                            </div>
                          </div>
                        </td>
                        <td className="text-end">
                          <div>
                            <span className="d-block fw-semibold mb-1 h6">$1,234.78</span>
                            <span className="d-block fs-13 text-muted">Nov 22,2024</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-start gap-2">
                            <div>
                              <span className="avatar avatar-md avatar-rounded bg-secondary-transparent">
                                <i className="ri-wallet-3-line fs-18"></i>
                              </span>
                            </div>
                            <div>
                              <span className="d-block fw-semibold mb-1">Digital Wallet</span>
                              <span className="d-block fs-13 text-muted">Online Transaction</span>
                            </div>
                          </div>
                        </td>
                        <td className="text-end">
                          <div>
                            <span className="d-block fw-semibold mb-1 h6">$623.99</span>
                            <span className="d-block fs-13 text-muted">Nov 22,2024</span>
                          </div>
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
          <div className="col-xxl-9">
            <div className="card custom-card">
              <div className="card-header justify-content-between">
                <div className="card-title"> Recent Orders </div>
                <div className="d-flex flex-wrap gap-2">
                  <div>
                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                  </div>
                  <div className="dropdown">
                    <a href="#" className="btn btn-primary btn-sm btn-wave" data-bs-toggle="dropdown" aria-expanded="false">
                      Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a className="dropdown-item" href="#">New</a></li>
                      <li><a className="dropdown-item" href="#">Popular</a></li>
                      <li><a className="dropdown-item" href="#">Relevant</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table text-nowrap">
                    <thead>
                      <tr>
                        <th scope="row" className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob1" value="" aria-label="..." /></th>
                        <th scope="col">Product</th>
                        <th scope="col">Category</th>
                        <th scope="col" className="text-center">Quantity</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Status</th>
                        <th scope="col">Price</th>
                        <th scope="col">Ordered Date</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob2" value="" aria-label="..." /></td>
                        <td>
                          <div className="d-flex">
                            <span className="avatar avatar-md bg-light"><img src="/admin-assets/assets/images/ecommerce/png/1.png" className="" alt="..." /></span>
                            <div className="ms-2">
                              <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#">Classic tufted leather sofa</a></p>
                              <p className="fs-13 text-muted mb-0">Pixel</p>
                            </div>
                          </div>
                        </td>
                        <td> Furniture </td>
                        <td className="text-center"> 1 </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="lh-1">
                              <span className="avatar avatar-xs avatar-rounded">
                                <img src="/admin-assets/assets/images/faces/1.jpg" alt="" />
                              </span>
                            </div>
                            <div> Lucas Hayes </div>
                          </div>
                        </td>
                        <td><span className="badge bg-primary-transparent">Shipped</span></td>
                        <td className="fw-semibold">$1200.00</td>
                        <td>2024-05-18</td>
                        <td>
                          <div className="btn-list">
                            <button className="btn btn-sm btn-icon btn-primary-light btn-wave">
                              <i className="ri-eye-line"></i>
                            </button>
                            <button className="btn btn-sm btn-icon btn-secondary-light btn-wave">
                              <i className="ri-edit-line"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3">
            <div className="card custom-card overflow-hidden">
              <div className="card-header justify-content-between">
                <div className="card-title"> Visitors By Browser </div>
                <div className="dropdown">
                  <a href="#" className="p-2 fs-12 text-muted" data-bs-toggle="dropdown" aria-expanded="false">
                    Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li><a className="dropdown-item" href="#">This Week</a></li>
                    <li><a className="dropdown-item" href="#">Last Week</a></li>
                    <li><a className="dropdown-item" href="#">This Month</a></li>
                  </ul>
                </div>
              </div>
              <div className="card-body p-0">
                <ul className="list-group list-group-flush visitors-browser-list">
                  <li className="list-group-item">
                    <div className="d-flex align-items-center">
                      <div className="me-2">
                        <span className="avatar avatar-sm avatar-rounded">
                          <img src="/admin-assets/assets/images/browser-logos/chrome.png" alt="" />
                        </span>
                      </div>
                      <div className="flex-fill">
                        <span className="d-block fw-semibold mb-1">Chrome</span>
                        <div>
                          <div className="progress progress-xs" role="progressbar" aria-valuenow={74} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{ width: '74%' }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="text-end ms-2">
                        <span className="h6 mb-0 fw-semibold">74%</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script
        src="/admin-assets/assets/libs/apexcharts/apexcharts.min.js"
        strategy="afterInteractive"
        onLoad={() => setApexReady(true)}
      />
      {apexReady && (
        <Script
          src="/admin-assets/assets/js/sales-dashboard.js"
          strategy="afterInteractive"
        />
      )}
    </AdminLayout>
  );
};

export default Dashboard;
