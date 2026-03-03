"use client";
import React from "react";
import AdminLayout from "../../layout";
import Head from "next/head";
import Script from "next/script";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>Blog Details | Amerce Admin</title>
        {/* Page Specific Styles */}
        <link rel="stylesheet" href="/admin-assets/assets/libs/glightbox/css/glightbox.min.css" />
      </Head>

      <div className="container-fluid">
        <div className="my-4 page-header-breadcrumb d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div>
            <h1 className="page-title fw-medium fs-18 mb-2">Blog Details</h1>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="#"> Pages </a>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                <a href="#">Blog</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Blog Details
              </li>
            </ol>
          </div>
          <div>
            <button className="btn btn-primary-light btn-wave me-2 waves-effect waves-light">
              <i className="bx bx-crown align-middle"></i> Plan Upgrade{" "}
            </button>
            <button className="btn btn-secondary-light btn-wave me-0 waves-effect waves-light">
              <i className="ri-upload-cloud-line align-middle"></i> Export
              Report{" "}
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-8">
            <div className="row">
              <div className="col-xl-12">
                <div className="card custom-card">
                  <div className="card-body pb-0">
                    <a href="#">
                      <img
                        src="/admin-assets/assets/images/media/blog/19.jpg"
                        className="card-img rounded blog-details-img"
                        alt="..."
                      />
                    </a>
                    <div className="d-flex align-items-center justify-content-between mb-3 mt-3 flex-wrap gap-2">
                      <p className="h5 fw-semibold mb-0">
                        Virtual Reality and Art: Creating Immersive
                        Experiences
                      </p>
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm avatar-rounded me-2 p-1 bg-gray-300">
                          <img src="/admin-assets/assets/images/faces/12.jpg" alt="" />
                        </span>
                        <div>
                          <p className="mb-0 fw-medium">
                            Christopher -{" "}
                            <span className="fs-12 text-muted fw-normal">
                              Tue,25 Dec 2024 - 11:45
                            </span>
                          </p>
                          <p className="mb-0 text-muted"></p>
                        </div>
                      </div>
                    </div>
                    <div className="d-sm-flex align-items-cneter">
                      <div className="btn-list mt-sm-0 mt-2 blog-icons">
                        <button
                          className="btn rounded-pill btn-sm btn-primary btn-wave waves-effect waves-light"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-title="Like"
                        >
                          <i className="ri-thumb-up-line me-1"></i>Like
                        </button>
                        <button
                          className="btn rounded-pill btn-sm btn-secondary btn-wave waves-effect waves-light"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-title="Share"
                        >
                          <i className="ri-share-line me-1"></i>Share
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-4 pt-0">
                    <h6 className="fw-semibold">
                      {" "}
                      The Evolution of Art in the Digital Age{" "}
                    </h6>
                    <p className="mb-4">
                      {" "}
                      With the advent of digital tools, artists have been able
                      to push the limits of their creativity. VR represents
                      the next step in this evolution, allowing for the
                      creation of art that is not only seen but also
                      experienced.{" "}
                    </p>
                    <p className="mb-4">
                      <span className="h6 fw-semibold">
                        Creating Immersive Art -
                      </span>{" "}
                      VR offers artists a vast array of tools and techniques
                      to create immersive experiences. From 3D modeling
                      software to real-time rendering engines, this section
                      delves into the technologies that are enabling artists
                      to craft virtual worlds.{" "}
                    </p>
                    <p className="mb-2">
                      <span className="h6 fw-semibold">
                        The Future of Art -
                      </span>{" "}
                      What does the future hold for art in the age of VR? This
                      section speculates on how virtual reality might continue
                      to evolve and influence the art world. We’ll discuss
                      potential trends, such as the integration of AI.{" "}
                    </p>
                    <p className="mb-4">
                      Virtual Reality (VR) is transforming the art world,
                      offering artists and audiences new ways to create,
                      experience, and interact with art. By merging technology
                      with creativity, VR has opened up possibilities for
                      immersive experiences that go beyond traditional
                      boundaries.
                    </p>
                    <blockquote className="blockquote custom-blockquote blog-blockquote primary mb-4 text-center">
                      <h6 className="lh-base">
                        While VR offers exciting possibilities, it also
                        presents unique challenges for artists. This section
                        addresses the technical, creative, and logistical
                        obstacles that come with working in virtual reality...
                      </h6>
                      <footer className="blockquote-footer mt-3 fs-14 text-muted mb-0">
                        Someone famous as{" "}
                        <cite title="Source Title">- Maxwell Quasar</cite>
                      </footer>
                      <span className="quote-icon">
                        <i className="ri-chat-quote-fill"></i>
                      </span>
                    </blockquote>
                    <p className="mb-0">
                      {" "}
                      From enchanting nature's beauty quotes that evoke
                      visions of lush meadows full of brilliantly-colored
                      flowers or dense forests with sky-high trees to famous
                      quotes about nature's ever-present—and absolutely
                      fundamental—role in our lives, these 101 quotes about
                      nature will have you itching to get off your couch and
                      get outside. For famous <b>quotes about nature</b>, we
                      have them here!{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="card custom-card overflow-hidden">
                  <div className="card-header">
                    <div className="card-title"> Comments </div>
                  </div>
                  <div className="card-body p-0">
                    <ul
                      className="list-group list-group-flush simplebar-scrollable-y"
                      id="blog-details-comment-list"
                      data-simplebar="init"
                    >
                      <div
                        className="simplebar-wrapper"
                        style={{ margin: "0px" }}
                      >
                        <div className="simplebar-height-auto-observer-wrapper">
                          <div className="simplebar-height-auto-observer"></div>
                        </div>
                        <div className="simplebar-mask">
                          <div
                            className="simplebar-offset"
                            style={{ right: "0px", bottom: "0px" }}
                          >
                            <div
                              className="simplebar-content-wrapper"
                              tabIndex="0"
                              role="region"
                              aria-label="scrollable content"
                              style={{
                                height: "auto",
                                overflow: "hidden scroll",
                              }}
                            >
                              <div
                                className="simplebar-content"
                                style={{ padding: "0px" }}
                              >
                                <li className="list-group-item border-0 border-bottom">
                                  <div className="d-flex align-items-start gap-3 flex-wrap">
                                    <div>
                                      <span className="avatar avatar-lg avatar-rounded  p-1 bg-light borde">
                                        <img
                                          src="/admin-assets/assets/images/faces/3.jpg"
                                          alt=""
                                        />
                                      </span>
                                    </div>
                                    <div className="flex-fill w-50">
                                      <div className="p-3 bg-light border rounded">
                                        <span className="fw-medium d-block mb-1">
                                          TechEnthusiast21
                                        </span>
                                        <span className="d-block mb-3 text-muted">
                                          Wow, these 3D images are
                                          mind-blowing! The depth and realism
                                          are incredible. It's like stepping
                                          into another dimension.
                                        </span>
                                        <div className="btn-list">
                                          <button className="btn btn-sm btn-primary-light btn-wave waves-effect waves-light">
                                            Reply
                                            <i className="ri-reply-line ms-1"></i>
                                          </button>
                                          <button className="btn btn-sm btn-secondary-light btn-wave waves-effect waves-light">
                                            Report
                                            <i className="ri-error-warning-line ms-1"></i>
                                          </button>
                                        </div>
                                      </div>
                                      <div className="list-group-item border-0 pe-0 pb-0">
                                        <div className="d-flex align-items-start gap-3 flex-wrap">
                                          <div>
                                            <span className="avatar avatar-lg avatar-rounded p-1 bg-light border">
                                              <img
                                                src="/admin-assets/assets/images/faces/4.jpg"
                                                alt=""
                                              />
                                            </span>
                                          </div>
                                          <div className="flex-fill w-50">
                                            <div className="p-3 bg-light border rounded">
                                              <span className="fw-medium d-block mb-1">
                                                Karnakaran463
                                              </span>
                                              <span className="d-block mb-3 text-muted">
                                                Great job on showcasing the
                                                power of 3D technology!
                                              </span>
                                              <div className="btn-list">
                                                <button className="btn btn-sm btn-primary-light btn-wave waves-effect waves-light">
                                                  Reply
                                                  <i className="ri-reply-line ms-1"></i>
                                                </button>
                                                <button className="btn btn-sm btn-secondary-light btn-wave waves-effect waves-light">
                                                  Report
                                                  <i className="ri-error-warning-line ms-1"></i>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-group-item border-0 border-bottom">
                                  <div className="d-flex align-items-start gap-3 flex-wrap">
                                    <div>
                                      <span className="avatar avatar-lg avatar-rounded  p-1 bg-light borde">
                                        <img
                                          src="/admin-assets/assets/images/faces/13.jpg"
                                          alt=""
                                        />
                                      </span>
                                    </div>
                                    <div className="flex-fill w-50">
                                      <div className="p-3 bg-light border rounded">
                                        <span className="fw-medium d-block mb-1">
                                          ArtsyExplorer
                                        </span>
                                        <span className="d-block mb-3 text-muted">
                                          The 3D images on your blog are a
                                          visual feast! I love how they bring
                                          a new level of engagement and
                                          interactivity. It's like art coming
                                          to life. Can't wait to see more
                                          creative uses of 3D in the future!
                                        </span>
                                        <div className="btn-list">
                                          <button className="btn btn-sm btn-primary-light btn-wave waves-effect waves-light">
                                            Reply
                                            <i className="ri-reply-line ms-1"></i>
                                          </button>
                                          <button className="btn btn-sm btn-secondary-light btn-wave waves-effect waves-light">
                                            Report
                                            <i className="ri-error-warning-line ms-1"></i>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="simplebar-placeholder"
                          style={{ width: "776px", height: "477px" }}
                        ></div>
                      </div>
                      <div
                        className="simplebar-track simplebar-horizontal"
                        style={{ visibility: "hidden" }}
                      >
                        <div
                          className="simplebar-scrollbar"
                          style={{ width: "0px", display: "none" }}
                        ></div>
                      </div>
                      <div
                        className="simplebar-track simplebar-vertical"
                        style={{ visibility: "visible" }}
                      >
                        <div
                          className="simplebar-scrollbar"
                          style={{
                            height: "166px",
                            transform: "translate3d(0px, 0px, 0px)",
                            display: "block",
                          }}
                        ></div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4">
            <div className="row">
              <div className="col-xl-12">
                <div className="card custom-card overflow-hidden">
                  <div className="card-header justify-content-between">
                    <div className="card-title"> Recent Posts </div>
                    <a
                      href="#"
                      className="fs-12 text-muted"
                    >
                      {" "}
                      View All
                      <i className="ti ti-arrow-narrow-right ms-1"></i>
                    </a>
                  </div>
                  <div className="card-body p-0">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <div className="d-flex gap-3 flex-wrap align-items-center">
                          <span className="avatar avatar-xl">
                            <img
                              src="/admin-assets/assets/images/media/blog/14.jpg"
                              className="img-fluid"
                              alt="..."
                            />
                          </span>
                          <div className="flex-fill">
                            <a
                              href="#"
                              className="mb-0 badge bg-primary-transparent"
                            >
                              Technology
                            </a>
                            <p className="mb-1 popular-blog-content text-truncate fw-medium">
                              {" "}
                              Introduction to AI in Web Development{" "}
                            </p>
                            <span className="text-muted fs-12">
                              2024-02-19 10:30 AM
                            </span>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="text-primary text-decoration-underline"
                            >
                              View All
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex gap-3 flex-wrap align-items-center">
                          <span className="avatar avatar-xl">
                            <img
                              src="/admin-assets/assets/images/media/blog/15.jpg"
                              className="img-fluid"
                              alt="..."
                            />
                          </span>
                          <div className="flex-fill">
                            <a
                              href="#"
                              className="mb-0 badge bg-secondary-transparent"
                            >
                              Travel
                            </a>
                            <p className="mb-1 popular-blog-content text-truncate fw-medium">
                              {" "}
                              Exploring Beautiful Landscapes in New
                              Zealand{" "}
                            </p>
                            <span className="text-muted fs-12">
                              2024-02-18 03:45 PM
                            </span>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="text-primary text-decoration-underline"
                            >
                              View All
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex gap-3 flex-wrap align-items-center">
                          <span className="avatar avatar-xl">
                            <img
                              src="/admin-assets/assets/images/media/blog/16.jpg"
                              className="img-fluid"
                              alt="..."
                            />
                          </span>
                          <div className="flex-fill">
                            <a
                              href="#"
                              className="mb-0 badge bg-success-transparent"
                            >
                              Health &amp; Wellness
                            </a>
                            <p className="mb-1 popular-blog-content text-truncate fw-medium">
                              {" "}
                              10 Tips for a Healthy Lifestyle{" "}
                            </p>
                            <span className="text-muted fs-12">
                              2024-02-17 08:15 AM
                            </span>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="text-primary text-decoration-underline"
                            >
                              View All
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex gap-3 flex-wrap align-items-center">
                          <span className="avatar avatar-xl">
                            <img
                              src="/admin-assets/assets/images/media/blog/17.jpg"
                              className="img-fluid"
                              alt="..."
                            />
                          </span>
                          <div className="flex-fill">
                            <a
                              href="#"
                              className="mb-0 badge bg-info-transparent"
                            >
                              Food &amp; Cooking
                            </a>
                            <p className="mb-1 popular-blog-content text-truncate fw-medium">
                              {" "}
                              Delicious Recipes for a Summer BBQ{" "}
                            </p>
                            <span className="text-muted fs-12">
                              2024-02-16 01:00 PM
                            </span>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="text-primary text-decoration-underline"
                            >
                              View All
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="card custom-card">
                  <div className="card-header">
                    <div className="card-title"> Explore Topics </div>
                  </div>
                  <div className="card-body">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <a href="#">
                          <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <div className="d-flex align-items-center">
                              <div>
                                <span>
                                  <i className="ri-leaf-fill fs-14 p-1 rounded-2 me-2 d-inline-block align-middle lh-1 bg-primary-transparent text-primary"></i>
                                </span>
                              </div>
                              <div>
                                <span className="fw-medium ms-2">Nature</span>
                              </div>
                            </div>
                            <div>
                              <span className="badge bg-primary-transparent rounded-pill">
                                21 Items
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a href="#">
                          <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <div className="d-flex align-items-center">
                              <div>
                                <span>
                                  <i className="ri-discord-fill fs-14 p-1 rounded-2 me-2 d-inline-block align-middle lh-1 bg-secondary-transparent text-secondary"></i>
                                </span>
                              </div>
                              <div>
                                <span className="fw-medium ms-2">Sports</span>
                              </div>
                            </div>
                            <div>
                              <span className="badge bg-primary-transparent rounded-pill">
                                16 Items
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a href="#">
                          <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <div className="d-flex align-items-center">
                              <div>
                                <span>
                                  <i className="ri-bowl-fill fs-14 p-1 rounded-2 me-2 d-inline-block align-middle lh-1 bg-success-transparent text-success"></i>
                                </span>
                              </div>
                              <div>
                                <span className="fw-medium ms-2">Food</span>
                              </div>
                            </div>
                            <div>
                              <span className="badge bg-primary-transparent rounded-pill">
                                06 Items
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a href="#">
                          <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <div className="d-flex align-items-center">
                              <div>
                                <span>
                                  <i className="ri-suitcase-2-fill fs-14 p-1 rounded-2 me-2 d-inline-block align-middle lh-1 bg-info-transparent text-info"></i>
                                </span>
                              </div>
                              <div>
                                <span className="fw-medium ms-2">Travel</span>
                              </div>
                            </div>
                            <div>
                              <span className="badge bg-primary-transparent rounded-pill">
                                18 Items
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a href="#">
                          <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <div className="d-flex align-items-center">
                              <div>
                                <span>
                                  <i className="ri-handbag-fill fs-14 p-1 rounded-2 me-2 d-inline-block align-middle lh-1 bg-warning-transparent text-warning"></i>
                                </span>
                              </div>
                              <div>
                                <span className="fw-medium ms-2">
                                  Fashion
                                </span>
                              </div>
                            </div>
                            <div>
                              <span className="badge bg-primary-transparent rounded-pill">
                                09 Items
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a href="#">
                          <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <div className="d-flex align-items-center">
                              <div>
                                <span>
                                  <i className="ri-handbag-fill fs-14 p-1 rounded-2 me-2 d-inline-block align-middle lh-1 bg-danger-transparent text-danger"></i>
                                </span>
                              </div>
                              <div>
                                <span className="fw-medium ms-2">Beauty</span>
                              </div>
                            </div>
                            <div>
                              <span className="badge bg-primary-transparent rounded-pill">
                                11 Items
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="card custom-card">
                  <div className="card-header">
                    <div className="card-title"> Popular Tags </div>
                  </div>
                  <div className="card-body">
                    <div className="blog-popular-tags">
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #blogger
                        </span>
                      </a>
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #styleblogger
                        </span>
                      </a>
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #livecolorfully
                        </span>
                      </a>
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #amwriting
                        </span>
                      </a>
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #analytics
                        </span>
                      </a>
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #designblogger
                        </span>
                      </a>
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #picoftheday
                        </span>
                      </a>
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #adventure
                        </span>
                      </a>
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #landscape
                        </span>
                      </a>
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #fitnessgoals
                        </span>
                      </a>
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #foodblogger
                        </span>
                      </a>
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #vegan
                        </span>
                      </a>
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #portrait
                        </span>
                      </a>
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #canonphotography
                        </span>
                      </a>
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #fineart
                        </span>
                      </a>
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #trending
                        </span>
                      </a>
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #lifestyle
                        </span>
                      </a>
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #Montainviewpoint
                        </span>
                      </a>
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #Beauty
                        </span>
                      </a>
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #Nature
                        </span>
                      </a>
                      <a href="#">
                        <span className="badge bg-light text-default border">
                          #Art
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="card custom-card">
                  <div className="card-header">
                    <div className="card-title"> Gallery </div>
                  </div>
                  <div className="card-body">
                    <div className="row gy-3">
                      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <a
                          href="/admin-assets/assets/images/media/media-48.jpg"
                          className="glightbox card mb-0"
                          data-gallery="gallery1"
                        >
                          <img
                            src="/admin-assets/assets/images/media/media-48.jpg"
                            alt="image"
                          />
                        </a>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <a
                          href="/admin-assets/assets/images/media/media-49.jpg"
                          className="glightbox card mb-0"
                          data-gallery="gallery1"
                        >
                          <img
                            src="/admin-assets/assets/images/media/media-49.jpg"
                            alt="image"
                          />
                        </a>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <a
                          href="/admin-assets/assets/images/media/media-50.jpg"
                          className="glightbox card mb-0"
                          data-gallery="gallery1"
                        >
                          <img
                            src="/admin-assets/assets/images/media/media-50.jpg"
                            alt="image"
                          />
                        </a>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <a
                          href="/admin-assets/assets/images/media/media-51.jpg"
                          className="glightbox card mb-0"
                          data-gallery="gallery1"
                        >
                          <img
                            src="/admin-assets/assets/images/media/media-51.jpg"
                            alt="image"
                          />
                        </a>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <a
                          href="/admin-assets/assets/images/media/media-52.jpg"
                          className="glightbox card mb-0"
                          data-gallery="gallery1"
                        >
                          <img
                            src="/admin-assets/assets/images/media/media-52.jpg"
                            alt="image"
                          />
                        </a>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <a
                          href="/admin-assets/assets/images/media/media-53.jpg"
                          className="glightbox card mb-0"
                          data-gallery="gallery1"
                        >
                          <img
                            src="/admin-assets/assets/images/media/media-53.jpg"
                            alt="image"
                          />
                        </a>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <a
                          href="/admin-assets/assets/images/media/media-54.jpg"
                          className="glightbox card mb-0"
                          data-gallery="gallery1"
                        >
                          <img
                            src="/admin-assets/assets/images/media/media-54.jpg"
                            alt="image"
                          />
                        </a>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <a
                          href="/admin-assets/assets/images/media/media-55.jpg"
                          className="glightbox card mb-0"
                          data-gallery="gallery1"
                        >
                          <img
                            src="/admin-assets/assets/images/media/media-55.jpg"
                            alt="image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="card custom-card p-3">
                  <div className="card-body p-4 bg-light border">
                    <div className="text-center">
                      <label className="form-check-label mb-3">
                        {" "}
                        Subscribe to get updates about latest News &amp;
                        Posts{" "}
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="Email Here"
                          aria-label="blog-email"
                          aria-describedby="blog-subscribe"
                        />
                        <button
                          className="btn btn-primary btn-wave waves-effect waves-light"
                          type="button"
                          id="blog-subscribe"
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title"> Leave a comment </div>
              </div>
              <div className="card-body">
                <div className="row gy-3">
                  <div className="col-xl-6">
                    <label htmlFor="blog-first-name" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="blog-first-name"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="col-xl-6">
                    <label htmlFor="blog-last-name" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="blog-last-name"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="col-xl-12">
                    <label htmlFor="blog-email" className="form-label">
                      Email ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="blog-email"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="col-xl-12">
                    <label htmlFor="blog-comment" className="form-label">
                      Write Comment
                    </label>
                    <textarea
                      className="form-control"
                      id="blog-comment"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="text-end">
                  <button className="btn btn-primary-light">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Specific Scripts */}
      <Script src="/admin-assets/assets/libs/glightbox/js/glightbox.min.js" strategy="afterInteractive" />
      <Script src="/admin-assets/assets/js/blog-details.js" strategy="afterInteractive" />
    </>
  );
};

BlogDetails.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default BlogDetails;
