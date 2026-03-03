"use client";
import React, { useState } from "react";
import AdminLayout from "../layout";
import Head from "next/head";
import Script from "next/script";

const FullCalendarPage = () => {
    const [scriptsLoaded, setScriptsLoaded] = useState({
        moment: false,
        fullcalendar: false
    });

    const handleScriptLoad = (name) => {
        setScriptsLoaded(prev => ({ ...prev, [name]: true }));
    };

    const allBaseScriptsLoaded = scriptsLoaded.moment && scriptsLoaded.fullcalendar;

    return (
        <AdminLayout>
            <Head>
                <title>Full Calendar | Amerce Admin</title>
            </Head>
            <div className="container-fluid">
                {/* Page Header */}
                <div className="my-4 page-header-breadcrumb d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-2">Full Calendar</h1>
                        <div>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <a href="#">Apps</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Full Calendar
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-primary-light btn-wave me-2 waves-effect waves-light">
                            <i className="bx bx-crown align-middle"></i> Plan Upgrade
                        </button>
                        <button className="btn btn-secondary-light btn-wave me-0">
                            <i className="ri-upload-cloud-line align-middle"></i> Export Report
                        </button>
                    </div>
                </div>
                {/* Page Header Close */}

                <div className="row">
                    {/* Left Column - Events Sidebar */}
                    <div className="col-xl-3">
                        {/* All Events Card */}
                        <div className="card custom-card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">All Events</div>
                                <button className="btn btn-primary btn-wave">
                                    <i className="ri-add-line align-middle me-1 fw-medium d-inline-block"></i>
                                    Create New Event
                                </button>
                            </div>
                            <div className="card-body p-0">
                                <div id="external-events" className="p-3">
                                    <div className="fc-event fc-h-event fc-daygrid-event d-flex align-items-center fc-daygrid-block-event bg-primary-transparent border border-primary border-opacity-10" data-class="bg-primary">
                                        <div className="fc-event-main text-primary">
                                            <i className="ri-circle-fill p-1 lh-1 fs-7 rounded-2 bg-primary-transparent text-primary me-2 align-middle"></i>
                                            Calendar Events
                                        </div>
                                    </div>
                                    <div className="fc-event fc-h-event fc-daygrid-event d-flex align-items-center fc-daygrid-block-event bg-secondary-transparent border border-secondary border-opacity-10" data-class="bg-secondary">
                                        <div className="fc-event-main text-secondary">
                                            <i className="ri-circle-fill p-1 lh-1 fs-7 rounded-2 bg-secondary-transparent text-secondary me-2 align-middle"></i>
                                            Birthday Events
                                        </div>
                                    </div>
                                    <div className="fc-event fc-h-event fc-daygrid-event d-flex align-items-center fc-daygrid-block-event bg-success-transparent border border-success border-opacity-10" data-class="bg-success">
                                        <div className="fc-event-main text-success">
                                            <i className="ri-circle-fill p-1 lh-1 fs-7 rounded-2 bg-success-transparent text-success me-2 align-middle"></i>
                                            Holiday Calendar
                                        </div>
                                    </div>
                                    <div className="fc-event fc-h-event fc-daygrid-event d-flex align-items-center fc-daygrid-block-event bg-info-transparent border border-info border-opacity-10" data-class="bg-info">
                                        <div className="fc-event-main text-info">
                                            <i className="ri-circle-fill p-1 lh-1 fs-7 rounded-2 bg-info-transparent text-info me-2 align-middle"></i>
                                            Office Events
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Activity Card */}
                        <div className="card custom-card">
                            <div className="card-header justify-content-between">
                                <div className="card-title">Activity</div>
                                <button className="btn btn-primary-light btn-sm btn-wave">
                                    View All <i className="ri-arrow-right-line"></i>
                                </button>
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-start gap-2">
                                                        <div>
                                                            <span className="avatar avatar-md avatar-rounded bg-primary-transparent">
                                                                <i className="ri-group-line fs-18"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block fw-semibold mb-1">Monday, Jan 1,2024</span>
                                                            <span className="d-block fs-13 text-muted">Meeting with a client...</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end">
                                                    <div>
                                                        <span className="badge bg-light text-default mb-1">12:00PM - 1:00PM</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-start gap-2">
                                                        <div>
                                                            <span className="avatar avatar-md avatar-rounded bg-secondary-transparent">
                                                                <i className="ri-gift-line fs-18"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block fw-semibold mb-1">Thursday, Dec 29,2022</span>
                                                            <span className="d-block fs-13 text-muted">Attend A party to..</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end">
                                                    <div>
                                                        <span className="badge bg-light text-default mb-1">09:30PM - 12:50PM</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Full Calendar */}
                    <div className="col-xl-9">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">Full Calendar</div>
                            </div>
                            <div className="card-body">
                                <div id="calendar2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Page Specific Scripts */}
            <Script src="/admin-assets/assets/libs/moment/min/moment.min.js" strategy="afterInteractive" onLoad={() => handleScriptLoad('moment')} />
            <Script src="/admin-assets/assets/libs/fullcalendar/index.global.min.js" strategy="afterInteractive" onLoad={() => handleScriptLoad('fullcalendar')} />

            {allBaseScriptsLoaded && (
                <Script src="/admin-assets/assets/js/fullcalendar.js" strategy="afterInteractive" />
            )}
        </AdminLayout>
    );
};

export default FullCalendarPage;
