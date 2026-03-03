"use client";
import React, { useState } from "react";
import AdminLayout from "../layout";
import Head from "next/head";
import Script from "next/script";

const ToDoList = () => {
    const [scriptsLoaded, setScriptsLoaded] = useState({
        choices: false,
        flatpickr: false,
        dragula: false
    });

    const handleScriptLoad = (name) => {
        setScriptsLoaded(prev => ({ ...prev, [name]: true }));
    };

    const allBaseScriptsLoaded = scriptsLoaded.choices && scriptsLoaded.flatpickr && scriptsLoaded.dragula;

    return (
        <AdminLayout>
            <Head>
                <title>To Do List | Amerce Admin</title>
                <link rel="stylesheet" href="/admin-assets/assets/libs/choices.js/public/assets/styles/choices.min.css" />
                <link rel="stylesheet" href="/admin-assets/assets/libs/flatpickr/flatpickr.min.css" />
                <link rel="stylesheet" href="/admin-assets/assets/libs/dragula/dragula.min.css" />
            </Head>

            <div className="container-fluid">
                <div className="my-4 page-header-breadcrumb d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-2">To Do List</h1>
                        <nav>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><a href="#">Apps</a></li>
                                <li className="breadcrumb-item active" aria-current="page">To Do List</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-3">
                        <div className="card custom-card">
                            <div className="card-body p-0">
                                <div className="p-3 task-navigation border-bottom border-block-end-dashed">
                                    <ul className="list-unstyled task-main-nav mb-0">
                                        <li className="px-0 pt-0">
                                            <span className="fs-11 text-muted op-7 fw-semibold">TASK STATUS</span>
                                        </li>
                                        <li className="active">
                                            <a href="#">
                                                <div className="d-flex align-items-center">
                                                    <span className="me-2 lh-1"><i className="ri-task-line align-middle fs-14"></i></span>
                                                    <span className="flex-fill text-nowrap">All Tasks</span>
                                                    <span className="badge bg-success-transparent rounded-pill">34</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="d-flex align-items-center">
                                                    <span className="me-2 lh-1"><i className="ri-star-s-line align-middle fs-14"></i></span>
                                                    <span className="flex-fill text-nowrap">Important</span>
                                                    <span className="badge bg-light text-default rounded-pill">12</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="d-flex align-items-center">
                                                    <span className="me-2 lh-1"><i className="ri-delete-bin-5-line align-middle fs-14"></i></span>
                                                    <span className="flex-fill text-nowrap">Deleted</span>
                                                    <span className="badge bg-light text-default rounded-pill">5</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="card custom-card">
                                    <div className="card-header justify-content-between">
                                        <div className="card-title">New Tasks <span className="badge bg-light text-default rounded-pill ms-2">10</span></div>
                                    </div>
                                    <div className="card-body p-3" id="new-tasks-draggable">
                                        <div className="card custom-card shadow-none mb-3 border draggable-item">
                                            <div className="card-body">
                                                <div className="form-check custom-checkbox mb-3">
                                                    <input className="form-check-input" type="checkbox" id="task1" />
                                                    <label className="form-check-label fw-medium" htmlFor="task1">Design Dashboard UI</label>
                                                </div>
                                                <p className="fs-12 text-muted">Create modern UI for the admin dashboard</p>
                                            </div>
                                        </div>
                                        <div className="card custom-card shadow-none mb-3 border draggable-item">
                                            <div className="card-body">
                                                <div className="form-check custom-checkbox mb-3">
                                                    <input className="form-check-input" type="checkbox" id="task2" />
                                                    <label className="form-check-label fw-medium" htmlFor="task2">API Integration</label>
                                                </div>
                                                <p className="fs-12 text-muted">Integrate REST APIs to the application</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="card custom-card">
                                    <div className="card-header justify-content-between">
                                        <div className="card-title">In Progress <span className="badge bg-light text-default rounded-pill ms-2">5</span></div>
                                    </div>
                                    <div className="card-body p-3" id="todo-tasks-draggable">
                                        <div className="card custom-card shadow-none mb-3 border draggable-item border-primary border-start-3">
                                            <div className="card-body">
                                                <div className="form-check custom-checkbox mb-3">
                                                    <input className="form-check-input" type="checkbox" id="task3" />
                                                    <label className="form-check-label fw-medium" htmlFor="task3">Fix bugs</label>
                                                </div>
                                                <p className="fs-12 text-muted">Fix known issues from testing</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="card custom-card">
                                    <div className="card-header justify-content-between">
                                        <div className="card-title">Completed Tasks <span className="badge bg-light text-default rounded-pill ms-2">3</span></div>
                                    </div>
                                    <div className="card-body p-3" id="completed-tasks-draggable">
                                        <div className="card custom-card shadow-none mb-3 border draggable-item border-success border-start-3">
                                            <div className="card-body">
                                                <div className="form-check custom-checkbox mb-3">
                                                    <input className="form-check-input" type="checkbox" id="task4" defaultChecked />
                                                    <label className="form-check-label fw-medium text-decoration-line-through" htmlFor="task4">Update Documentation</label>
                                                </div>
                                                <p className="fs-12 text-muted">Update project readme and documentation</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Script src="/admin-assets/assets/libs/choices.js/public/assets/scripts/choices.min.js" strategy="afterInteractive" onLoad={() => handleScriptLoad('choices')} />
            <Script src="/admin-assets/assets/libs/flatpickr/flatpickr.min.js" strategy="afterInteractive" onLoad={() => handleScriptLoad('flatpickr')} />
            <Script src="/admin-assets/assets/libs/dragula/dragula.min.js" strategy="afterInteractive" onLoad={() => handleScriptLoad('dragula')} />

            {allBaseScriptsLoaded && (
                <Script src="/admin-assets/assets/js/todolist.js" strategy="afterInteractive" />
            )}
        </AdminLayout>
    );
};

export default ToDoList;
