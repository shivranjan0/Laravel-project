"use client";
import React, { useState } from "react";
import AdminLayout from "../layout";
import Head from "next/head";
import Script from "next/script";

const ChatPage = () => {
  const [scriptsLoaded, setScriptsLoaded] = useState({
    glightbox: false,
    emojiPicker: false
  });

  const handleScriptLoad = (name) => {
    setScriptsLoaded(prev => ({ ...prev, [name]: true }));
  };

  const handleInfoChange = (e, name, img, status) => {
    if (typeof window !== 'undefined' && window.changeTheInfo) {
      window.changeTheInfo(e.currentTarget, name, img, status);
    }
  };

  return (
    <AdminLayout>
      <Head>
        <title>Chat | Amerce Admin</title>
        <link rel="stylesheet" href="/admin-assets/assets/libs/glightbox/css/glightbox.min.css" />
      </Head>

      <div className="container-fluid">
        <div className="my-4 page-header-breadcrumb d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div>
            <h1 className="page-title fw-medium fs-18 mb-2">Chat</h1>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="#">Apps</a></li>
                <li className="breadcrumb-item active" aria-current="page">Chat</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="main-chart-wrapper gap-2 mb-2 d-sm-flex">
          <div className="chat-info border">
            <div className="p-3 chat-search">
              <div className="input-group">
                <input type="text" className="form-control bg-light border-0" placeholder="Search Chat" />
                <button className="btn btn-light" type="button" id="button-addon2">
                  <i className="ri-search-line text-muted"></i>
                </button>
              </div>
            </div>

            <ul className="nav nav-tabs tab-style-2 nav-justified" id="myTab1" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="users-tab" data-bs-toggle="tab" data-bs-target="#users-tab-pane" type="button" role="tab">Users</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="groups-tab" data-bs-toggle="tab" data-bs-target="#groups-tab-pane" type="button" role="tab">Groups</button>
              </li>
            </ul>

            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active border-0" id="users-tab-pane" role="tabpanel" tabIndex="0">
                <div className="chat-users-tab">
                  <ul className="list-unstyled mb-0" id="chat-msg-scroll">
                    <li className="checkforactive">
                      <a href="#" onClick={(e) => handleInfoChange(e, 'Sajjaad', '10', 'online')}>
                        <div className="d-flex align-items-top">
                          <div className="me-1 lh-1">
                            <span className="avatar avatar-md online avatar-rounded">
                              <img src="/admin-assets/assets/images/faces/10.jpg" alt="img" />
                            </span>
                          </div>
                          <div className="flex-fill">
                            <p className="mb-0 fw-semibold">Sajjaad <span className="float-end text-muted fw-normal fs-11">12:32</span></p>
                            <p className="fs-12 mb-0">
                              <span className="chat-msg text-truncate">Hey, are you there?</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="checkforactive">
                      <a href="#" onClick={(e) => handleInfoChange(e, 'Suhail', '2', 'offline')}>
                        <div className="d-flex align-items-top">
                          <div className="me-1 lh-1">
                            <span className="avatar avatar-md offline avatar-rounded">
                              <img src="/admin-assets/assets/images/faces/2.jpg" alt="img" />
                            </span>
                          </div>
                          <div className="flex-fill">
                            <p className="mb-0 fw-semibold">Suhail <span className="float-end text-muted fw-normal fs-11">08:15</span></p>
                            <p className="fs-12 mb-0">
                              <span className="chat-msg text-truncate">Meeting at 10AM</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-pane fade border-0" id="groups-tab-pane" role="tabpanel" tabIndex="0">
                <div className="chat-groups-tab">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#">
                        <div className="d-flex align-items-top">
                          <div className="me-1 lh-1">
                            <span className="avatar avatar-md bg-primary-transparent avatar-rounded">
                              WT
                            </span>
                          </div>
                          <div className="flex-fill">
                            <p className="mb-0 fw-semibold">Web Team <span className="float-end text-muted fw-normal fs-11">10:45</span></p>
                            <p className="fs-12 mb-0 text-muted">
                              <span className="chat-msg text-truncate">Project review today</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="main-chat-area border">
            <div className="d-flex align-items-center justify-content-between flex-wrap p-3 border-bottom shadow-sm chat-content-header">
              <div className="d-flex align-items-center">
                <span className="avatar avatar-md chatimageperson online avatar-rounded me-2">
                  <img src="/admin-assets/assets/images/faces/10.jpg" alt="img" />
                </span>
                <div>
                  <p className="mb-0 fw-semibold chatnameperson">Sajjaad</p>
                  <p className="text-muted fs-12 mb-0 chatpersonstatus">online</p>
                </div>
              </div>
              <div className="d-flex mt-2 mt-sm-0">
                <button className="btn btn-icon btn-sm btn-light ms-1" data-bs-toggle="tooltip" title="Voice Call"><i className="ri-phone-line"></i></button>
                <button className="btn btn-icon btn-sm btn-light ms-1" data-bs-toggle="tooltip" title="Video Call"><i className="ri-vidicon-line"></i></button>
                <button className="btn btn-icon btn-sm btn-light ms-1 responsive-chat-close"><i className="ri-close-line"></i></button>
              </div>
            </div>

            <div className="chat-content" id="main-chat-content">
              <ul className="list-unstyled">
                <li className="chat-item-start">
                  <div className="chat-list-inner">
                    <div className="chat-user-profile">
                      <span className="avatar avatar-md online avatar-rounded chatimageperson">
                        <img src="/admin-assets/assets/images/faces/10.jpg" alt="img" />
                      </span>
                    </div>
                    <div className="ms-3">
                      <span className="chatting-user-info">
                        <span className="chatnameperson">Sajjaad</span> <span className="msg-sent-time">10:45</span>
                      </span>
                      <div className="main-chat-msg">
                        <div>
                          <p className="mb-0">Hey there! Are you available for a quick chat?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="chat-item-end">
                  <div className="chat-list-inner">
                    <div className="me-3">
                      <span className="chatting-user-info d-inline-flex align-items-center">
                        <span className="msg-sent-time me-2">10:48</span> You
                      </span>
                      <div className="main-chat-msg">
                        <div>
                          <p className="mb-0">Hi Sajjaad! Yes, I am available.</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat-user-profile">
                      <span className="avatar avatar-md online avatar-rounded">
                        <img src="/admin-assets/assets/images/faces/1.jpg" alt="img" />
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="chat-footer">
              <input className="form-control chat-message-space" placeholder="Type your message here..." type="text" />
              <a aria-label="anchor" className="btn btn-light btn-icon mx-2 emoji-picker" href="#"><i className="bx bx-smile"></i></a>
              <button className="btn btn-primary btn-icon"><i className="bx bxs-send"></i></button>
            </div>
          </div>
        </div>
      </div>

      <Script src="/admin-assets/assets/libs/glightbox/js/glightbox.min.js" strategy="afterInteractive" onLoad={() => handleScriptLoad('glightbox')} />
      <Script src="/admin-assets/assets/libs/fg-emoji-picker/fgEmojiPicker.js" strategy="afterInteractive" onLoad={() => handleScriptLoad('emojiPicker')} />

      {(scriptsLoaded.glightbox && scriptsLoaded.emojiPicker) && (
        <Script src="/admin-assets/assets/js/chat.js" strategy="afterInteractive" />
      )}
    </AdminLayout>
  );
};

export default ChatPage;
