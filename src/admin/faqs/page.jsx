"use client";
import React from "react";
import AdminLayout from "../layout";
import Head from "next/head";

const FAQs = () => {
  return (
    <AdminLayout>
      <Head>
        <title>FAQs | Amerce Admin</title>
      </Head>
      <div className="container-fluid">
        {/* Page Header */}
        <div className="my-4 page-header-breadcrumb d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div>
            <h1 className="page-title fw-medium fs-18 mb-2">FAQs</h1>
            <div>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="#">Pages</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    FAQs
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="btn-list">
            <button className="btn btn-primary-light btn-wave me-2">
              <i className="bx bx-crown align-middle"></i> Plan Upgrade
            </button>
            <button className="btn btn-secondary-light btn-wave me-0">
              <i className="ri-upload-cloud-line align-middle"></i> Export Report
            </button>
          </div>
        </div>
        {/* Page Header Close */}

        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-12">
                  <div className="bg-white rounded overflow-hidden mb-4">
                    <div className="d-block faq-header p-3 border-bottom">
                      <div className="text-center">
                        <h3 className="text-primary text-decoration-underline fw-semibold mb-2">
                          FAQs
                        </h3>
                        <h4 className="mb-2 fw-semibold">
                          Frequently Asked Questions
                        </h4>
                        <p className="fs-14 mb-2 text-muted">
                          Whenever you're facing technical issues, seeking advice, or simply looking for guidance, our platform is here to lend a helping hand.
                        </p>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="row">
                        <div className="col-xl-3">
                          <ul className="nav nav-tabs flex-columns nav-tabs-header faq-tab w-100 d-inline-block p-0" role="tablist">
                            <li className="nav-item m-1 mb-2" role="presentation">
                              <a className="nav-link px-3 py-2 active" data-bs-toggle="tab" role="tab" aria-current="page" href="#order-placing" aria-selected="true">Order Placing</a>
                            </li>
                            <li className="nav-item m-1 mb-2" role="presentation">
                              <a className="nav-link px-3 py-2" data-bs-toggle="tab" role="tab" href="#order-status" aria-selected="false" tabIndex="-1">Order Status</a>
                            </li>
                            <li className="nav-item m-1 mb-2" role="presentation">
                              <a className="nav-link px-3 py-2" data-bs-toggle="tab" role="tab" href="#shipping-delivery" aria-selected="false" tabIndex="-1">Shipping and Delivery</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-xl-9">
                          <div className="tab-content">
                            {/* Order Placing Tab */}
                            <div className="tab-pane show active border-0 p-0" id="order-placing" role="tabpanel">
                              <div className="d-flex mb-3 align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-3 lh-1">
                                  <span className="avatar avatar-md bg-primary-transparent">
                                    <i className="ri-box-3-line fs-18"></i>
                                  </span>
                                  <div>
                                    <p className="mb-1 fs-15 fw-semibold">Order Placing</p>
                                    <span className="text-muted fs-13">Get help with Order Placing</span>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion faq-accordion accordions-items-seperate" id="accordionFAQ1">
                                <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                      1. How do I place an order?
                                    </button>
                                  </h2>
                                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionFAQ1">
                                    <div className="accordion-body">
                                      You can place an order by selecting the items you wish to purchase, adding them to your cart, and proceeding to checkout.
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                      2. Can I modify my order after placing it?
                                    </button>
                                  </h2>
                                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFAQ1">
                                    <div className="accordion-body">
                                      Once your order has been placed, it may be possible to make changes before it is processed. Please contact customer support.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Order Status Tab */}
                            <div className="tab-pane border-0 p-0" id="order-status" role="tabpanel">
                              <div className="d-flex mb-3 align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-3 lh-1">
                                  <span className="avatar avatar-md bg-secondary-transparent">
                                    <i className="ri-check-double-line fs-18 text-secondary"></i>
                                  </span>
                                  <div>
                                    <p className="mb-1 fs-15 fw-semibold">Order Status</p>
                                    <span className="text-muted fs-13">Get help with Order Tracking</span>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion faq-accordion accordions-items-seperate" id="accordionFAQ2">
                                <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                      1. How can I track my order?
                                    </button>
                                  </h2>
                                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFAQ2">
                                    <div className="accordion-body">
                                      You can track your order using the tracking link provided in your shipping confirmation email.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Shipping Delivery Tab */}
                            <div className="tab-pane border-0 p-0" id="shipping-delivery" role="tabpanel">
                              <div className="d-flex mb-3 align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-3 lh-1">
                                  <span className="avatar avatar-md bg-success-transparent">
                                    <i className="ri-truck-line fs-18 text-success"></i>
                                  </span>
                                  <div>
                                    <p className="mb-1 fs-15 fw-semibold">Shipping</p>
                                    <span className="text-muted fs-13">Get help with delivery dates</span>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion faq-accordion accordions-items-seperate" id="accordionFAQ3">
                                <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                      1. When will my order arrive?
                                    </button>
                                  </h2>
                                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionFAQ3">
                                    <div className="accordion-body">
                                      Standard delivery usually takes 3-5 business days.
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default FAQs;
