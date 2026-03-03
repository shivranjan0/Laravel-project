"use client";
import React, { useState, useEffect } from "react";
import AdminLayout from "../layout";
import Head from "next/head";
import Script from "next/script";

const MailPage = () => {
  const [choicesReady, setChoicesReady] = useState(false);
  const [quillReady, setQuillReady] = useState(false);

  return (
    <>
      <Head>
        <title>Mail App | Amerce Admin</title>
        <link rel="stylesheet" href="/admin-assets/assets/libs/quill/quill.snow.css" />
        <link rel="stylesheet" href="/admin-assets/assets/libs/choices.js/public/assets/styles/choices.min.css" />
      </Head>

      <div className="container-fluid">
        {/* Page Header */}
        <div className="my-4 page-header-breadcrumb d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div>
            <h1 className="page-title fw-medium fs-18 mb-2">Mail App</h1>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  <a href="#">Email</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Mail App
                </li>
              </ol>
            </nav>
          </div>
          <div className="btn-list">
            <button className="btn btn-primary-light btn-wave me-2 waves-effect waves-light">
              <i className="bx bx-crown align-middle"></i> Plan Upgrade
            </button>
            <button className="btn btn-secondary-light btn-wave me-0">
              <i className="ri-upload-cloud-line align-middle"></i> Export Report
            </button>
          </div>
        </div>
        {/* Page Header Close */}

        <div className="main-mail-container mb-2 gap-2 d-flex">
          {/* Mail Navigation */}
          <div className="mail-navigation border">
            <div className="d-grid align-items-top p-3 border-bottom">
              <button
                className="btn btn-primary d-flex align-items-center justify-content-center"
                data-bs-toggle="modal"
                data-bs-target="#mail-Compose"
              >
                <i className="ri-add-circle-line fs-16 align-middle me-1"></i>Compose Mail
              </button>
            </div>
            <div className="p-3" id="mail-main-nav">
              <ul className="list-unstyled mail-main-nav">
                <li className="active mail-type">
                  <a href="#">
                    <div className="d-flex align-items-center">
                      <span className="me-2 lh-1">
                        <i className="ri-inbox-archive-line align-middle fs-16"></i>
                      </span>
                      <span className="flex-fill text-nowrap">Inbox</span>
                      <span className="badge bg-primary-transparent text-primary rounded-pill">12</span>
                    </div>
                  </a>
                </li>
                <li className="mail-type">
                  <a href="#">
                    <div className="d-flex align-items-center">
                      <span className="me-2 lh-1">
                        <i className="ri-star-line align-middle fs-16"></i>
                      </span>
                      <span className="flex-fill text-nowrap">Starred</span>
                    </div>
                  </a>
                </li>
                <li className="mail-type">
                  <a href="#">
                    <div className="d-flex align-items-center">
                      <span className="me-2 lh-1">
                        <i className="ri-alarm-warning-line align-middle fs-16"></i>
                      </span>
                      <span className="flex-fill text-nowrap">Snoozed</span>
                    </div>
                  </a>
                </li>
                <li className="mail-type">
                  <a href="#">
                    <div className="d-flex align-items-center">
                      <span className="me-2 lh-1">
                        <i className="ri-send-plane-2-line align-middle fs-16"></i>
                      </span>
                      <span className="flex-fill text-nowrap">Sent</span>
                    </div>
                  </a>
                </li>
                <li className="mail-type">
                  <a href="#">
                    <div className="d-flex align-items-center">
                      <span className="me-2 lh-1">
                        <i className="ri-draft-line align-middle fs-16"></i>
                      </span>
                      <span className="flex-fill text-nowrap">Drafts</span>
                      <span className="badge bg-secondary-transparent text-secondary rounded-pill">4</span>
                    </div>
                  </a>
                </li>
                <li className="mail-type">
                  <a href="#">
                    <div className="d-flex align-items-center">
                      <span className="me-2 lh-1">
                        <i className="ri-spam-2-line align-middle fs-16"></i>
                      </span>
                      <span className="flex-fill text-nowrap">Spam</span>
                    </div>
                  </a>
                </li>
                <li className="mail-type">
                  <a href="#">
                    <div className="d-flex align-items-center">
                      <span className="me-2 lh-1">
                        <i className="ri-delete-bin-line align-middle fs-16"></i>
                      </span>
                      <span className="flex-fill text-nowrap">Trash</span>
                    </div>
                  </a>
                </li>
                <li className="mail-type">
                  <a href="#">
                    <div className="d-flex align-items-center">
                      <span className="me-2 lh-1">
                        <i className="ri-archive-line align-middle fs-16"></i>
                      </span>
                      <span className="flex-fill text-nowrap">Archive</span>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="mt-4">
                <span className="fs-12 text-muted fw-semibold op-7 mb-2 d-block">LABELS</span>
                <ul className="list-unstyled mail-main-nav">
                  <li>
                    <a href="#">
                      <div className="d-flex align-items-center">
                        <span className="me-2 lh-1">
                          <i className="ri-circle-fill fs-8 text-primary"></i>
                        </span>
                        <span className="flex-fill text-nowrap">Work</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="d-flex align-items-center">
                        <span className="me-2 lh-1">
                          <i className="ri-circle-fill fs-8 text-secondary"></i>
                        </span>
                        <span className="flex-fill text-nowrap">Promotions</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="d-flex align-items-center">
                        <span className="me-2 lh-1">
                          <i className="ri-circle-fill fs-8 text-success"></i>
                        </span>
                        <span className="flex-fill text-nowrap">Social</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Inbox List */}
          <div className="total-mails border flex-fill">
            <div className="p-3 border-bottom d-flex align-items-center flex-wrap gap-2">
              <div className="flex-grow-1">
                <div className="input-group">
                  <input type="text" className="form-control bg-light border-0" placeholder="Search Mails" />
                  <button className="btn btn-light" type="button">
                    <i className="ri-search-line text-muted"></i>
                  </button>
                </div>
              </div>
              <div className="btn-list mt-md-0 mt-2">
                <button className="btn btn-icon btn-light btn-wave waves-effect waves-light" data-bs-toggle="tooltip" title="Reload">
                  <i className="ri-restart-line text-muted"></i>
                </button>
                <div className="dropdown">
                  <button className="btn btn-icon btn-light btn-wave waves-effect waves-light" data-bs-toggle="dropdown">
                    <i className="ri-more-2-fill text-muted"></i>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Mark all as read</a></li>
                    <li><a className="dropdown-item" href="#">Clear all</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mail-messages p-0" id="mail-messages">
              <ul className="list-unstyled mb-0 mail-messages-container">
                {[1, 2, 3, 4, 5, 6].map((it) => (
                  <li key={it} className={it === 1 ? 'active' : ''}>
                    <div className="d-flex align-items-top">
                      <div className="me-2 lh-1">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                      <div className="me-2 lh-1">
                        <span className="avatar avatar-md avatar-rounded">
                          <img src={`/admin-assets/assets/images/faces/${it}.jpg`} alt="" />
                        </span>
                      </div>
                      <div className="flex-fill">
                        <div className="d-flex align-items-center justify-content-between mb-0">
                          <p className="mb-0 fw-semibold">Sender Name {it}</p>
                          <span className="float-end text-muted fw-normal fs-11">10:45 AM</span>
                        </div>
                        <p className="fs-12 mb-0 fw-semibold text-truncate">Important message subject line goes here...</p>
                        <p className="fs-12 mb-0 text-muted text-truncate">This is a brief preview of the email content that will be displayed in the list...</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mail Details (hidden on small screens if not active) */}
          <div className="mails-information border">
            <div className="mail-info-header p-3 border-bottom d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-icon btn-light btn-sm total-mails-close d-lg-none">
                  <i className="ri-close-line"></i>
                </button>
                <h6 className="mb-0 fw-semibold">Message Detail</h6>
              </div>
              <div className="btn-list">
                <button className="btn btn-icon btn-light btn-sm btn-wave waves-effect waves-light"><i className="ri-star-line"></i></button>
                <button className="btn btn-icon btn-light btn-sm btn-wave waves-effect waves-light"><i className="ri-delete-bin-line"></i></button>
              </div>
            </div>
            <div className="mail-info-body p-3" id="mail-info-body">
              <div className="d-flex align-items-center gap-3 mb-4">
                <span className="avatar avatar-lg avatar-rounded">
                  <img src="/admin-assets/assets/images/faces/1.jpg" alt="" />
                </span>
                <div>
                  <p className="mb-0 fw-semibold fs-14">Sender Name <span className="text-muted fw-normal fs-12 ms-1">&lt;sender@example.com&gt;</span></p>
                  <p className="mb-0 text-muted fs-12">to me <i className="ri-arrow-down-s-line align-middle"></i></p>
                </div>
                <div className="ms-auto text-end">
                  <p className="mb-0 text-muted fs-11">Oct 24, 2024, 10:45 AM</p>
                </div>
              </div>
              <div className="main-mail-content">
                <h6 className="fw-semibold mb-3">Important Project Update</h6>
                <p>Hello Team,</p>
                <p>I hope this email finds you well. I wanted to share some important updates regarding the current project milestones.</p>
                <p>We have successfully completed the initial design phase and are now moving into the development stage. Please review the attached documents for more details.</p>
                <p>Best regards,<br />Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compose Modal */}
      <div className="modal modal-lg fade" id="mail-Compose" tabIndex="-1" aria-labelledby="mail-ComposeLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="mail-ComposeLabel">New Message</h6>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row gy-3">
                <div className="col-xl-12">
                  <label htmlFor="toMail" className="form-label">To</label>
                  <select className="form-control" name="toMail" id="toMail" multiple>
                    <option value="Choice 1">contact@example.com</option>
                    <option value="Choice 2">support@example.com</option>
                  </select>
                </div>
                <div className="col-xl-12">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="subject" placeholder="Subject" />
                </div>
                <div className="col-xl-12">
                  <div id="mail-compose-editor" style={{ height: "200px" }}></div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Send Message</button>
            </div>
          </div>
        </div>
      </div>

      {/* Dependencies */}
      <Script
        src="/admin-assets/assets/libs/choices.js/public/assets/scripts/choices.min.js"
        strategy="afterInteractive"
        onLoad={() => setChoicesReady(true)}
      />
      <Script
        src="/admin-assets/assets/libs/quill/quill.min.js"
        strategy="afterInteractive"
        onLoad={() => setQuillReady(true)}
      />

      {/* Init Script */}
      {(choicesReady && quillReady) && (
        <Script id="mail-init" strategy="afterInteractive">
          {`
            (function() {
                const choices = new Choices('#toMail', {
                    removeItemButton: true,
                });
                new Quill('#mail-compose-editor', {
                    theme: 'snow'
                });
                // SimpleBar instances
                if (typeof SimpleBar !== 'undefined') {
                    new SimpleBar(document.getElementById('mail-main-nav'));
                    new SimpleBar(document.getElementById('mail-messages'));
                    new SimpleBar(document.getElementById('mail-info-body'));
                }
            })();
          `}
        </Script>
      )}
    </>
  );
};

MailPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default MailPage;
