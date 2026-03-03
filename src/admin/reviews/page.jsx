"use client";
import React, { useState } from "react";
import AdminLayout from "../layout";
import Head from "next/head";
import Script from "next/script";

const Reviews = () => {
    const [swiperReady, setSwiperReady] = useState(false);

    return (
        <AdminLayout>
            <Head>
                <title>Reviews</title>
                <link rel="stylesheet" href="/admin-assets/assets/libs/swiper/swiper-bundle.min.css" />
            </Head>
            <div className="container-fluid">
                <div className="my-4 page-header-breadcrumb d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-2">Reviews</h1>
                        <div>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <a href="#">Pages</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Reviews
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="btn-list">
                        <button className="btn btn-primary-light btn-wave me-2 waves-effect waves-light">
                            <i className="bx bx-crown align-middle"></i> Plan Upgrade
                        </button>
                        <button className="btn btn-secondary-light btn-wave me-0 waves-effect waves-light">
                            <i className="ri-upload-cloud-line align-middle"></i> Export Report
                        </button>
                    </div>
                </div>
                {/* Page Header Close */}

                <div className="row">
                    <div className="col-xl-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Reviews Style 1</div>
                            </div>
                            <div className="card-body p-4 reviewscontainer">
                                <div className="swiper testimonialSwiperbasic">
                                    <div className="swiper-wrapper">
                                        {[1, 2, 3, 4, 7].map((num, i) => (
                                            <div key={i} className="swiper-slide">
                                                <div className="card custom-card border border-primary border-opacity-25 p-3">
                                                    <div className="card-body p-4 bg-primary-transparent rounded">
                                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                                            <span className="badge bg-primary">Completed</span>
                                                            <p className="mb-0 fs-14">
                                                                88%<span className="text-muted fs-12 mx-1">Match</span>
                                                            </p>
                                                        </div>
                                                        <p className="text-default">
                                                            "Diligently craft tailored marketing campaigns to drive business growth, ensuring accuracy and precision in every strategy. Continuously enrich data integrity through forward-thinking innovations."
                                                        </p>
                                                        <div className="d-flex justify-content-between flex-wrap gap-3">
                                                            <div className="d-flex">
                                                                <img
                                                                    src={`/admin-assets/assets/images/faces/${num}.jpg`}
                                                                    alt="img"
                                                                    className="avatar avatar-md avatar-rounded"
                                                                />
                                                                <div className="ms-2 my-auto mb-0">
                                                                    <h6 className="mb-0 lh-1">User Name {num}</h6>
                                                                    <p className="fs-14 mb-0 text-muted">Client</p>
                                                                </div>
                                                            </div>
                                                            <div className="mb-0 text-warning fs-12 my-auto">
                                                                <i className="ri-star-fill"></i>
                                                                <i className="ri-star-fill"></i>
                                                                <i className="ri-star-fill"></i>
                                                                <i className="ri-star-fill"></i>
                                                                <i className="ri-star-half-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Reviews Style 2</div>
                            </div>
                            <div className="card-body p-4 reviewscontainer">
                                <div className="swiper testimonialSwiper1">
                                    <div className="swiper-wrapper">
                                        {[11, 4, 15, 6, 12, 5].map((num, i) => (
                                            <div key={i} className="swiper-slide">
                                                <div className="card custom-card border border-info border-opacity-25 p-3 mb-0">
                                                    <div className="card-body p-4 bg-info-transparent rounded">
                                                        <div className="d-flex align-items-center mb-3">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src={`/admin-assets/assets/images/faces/${num}.jpg`} alt="img" />
                                                            </span>
                                                            <div className="ms-2">
                                                                <h6 className="mb-0 lh-1">Simosn Turo</h6>
                                                                <p className="fs-14 mb-0 text-muted">UI Developer</p>
                                                            </div>
                                                            <div className="ms-auto mb-0 text-warning fs-12 my-auto">
                                                                <i className="ri-star-fill"></i>
                                                                <i className="ri-star-fill"></i>
                                                                <i className="ri-star-fill"></i>
                                                                <i className="ri-star-fill"></i>
                                                                <i className="ri-star-full-line"></i>
                                                            </div>
                                                        </div>
                                                        <p className="text-default">
                                                            "Diligently craft tailored marketing campaigns to drive business growth, ensuring accuracy and precision in every strategy. Continuously enrich data integrity through forward-thinking innovations."
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Script src="/admin-assets/assets/libs/swiper/swiper-bundle.min.js" strategy="afterInteractive" onLoad={() => setSwiperReady(true)} />
            {swiperReady && (
                <Script src="/admin-assets/assets/js/reviews.js" strategy="afterInteractive" />
            )}
        </AdminLayout>
    );
};

export default Reviews;
