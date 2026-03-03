"use client";
import React, { useState } from "react";
import AdminLayout from "../layout";
import Head from "next/head";
import Script from "next/script";

const BlogCreate = () => {
  const [scriptsLoaded, setScriptsLoaded] = useState({
    choices: false,
    quill: false,
    filepond: false,
    flatpickr: false
  });

  const handleScriptLoad = (name) => {
    setScriptsLoaded(prev => ({ ...prev, [name]: true }));
  };

  const allBaseScriptsLoaded = scriptsLoaded.choices && scriptsLoaded.quill && scriptsLoaded.filepond && scriptsLoaded.flatpickr;

  return (
    <AdminLayout>
      <Head>
        <title>Blog Create | Amerce Admin</title>
        {/* Page Specific Styles */}
        <link rel="stylesheet" href="/admin-assets/assets/libs/choices.js/public/assets/styles/choices.min.css" />
        <link rel="stylesheet" href="/admin-assets/assets/libs/quill/quill.snow.css" />
        <link rel="stylesheet" href="/admin-assets/assets/libs/quill/quill.bubble.css" />
        <link rel="stylesheet" href="/admin-assets/assets/libs/filepond/filepond.min.css" />
        <link rel="stylesheet" href="/admin-assets/assets/libs/filepond-plugin-image-preview/filepond-plugin-image-preview.min.css" />
        <link rel="stylesheet" href="/admin-assets/assets/libs/flatpickr/flatpickr.min.css" />
      </Head>

      <div className="container-fluid">
        <div className="my-4 page-header-breadcrumb d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div>
            <h1 className="page-title fw-medium fs-18 mb-2">Create Blog</h1>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="#">Blog</a></li>
                <li className="breadcrumb-item active" aria-current="page">Create Blog</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-xxl-9 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">New Blog Post</div>
              </div>
              <div className="card-body">
                <div className="row gy-3">
                  <div className="col-xl-12">
                    <label htmlFor="blog-title" className="form-label">Blog Title</label>
                    <input type="text" className="form-control" id="blog-title" placeholder="Blog Title" />
                  </div>
                  <div className="col-xl-12">
                    <label htmlFor="blog-category" className="form-label">Blog Category</label>
                    <select className="form-control" data-trigger id="blog-category">
                      <option value="">Select Category</option>
                      <option value="Nature">Nature</option>
                      <option value="Health">Health</option>
                      <option value="Food">Food</option>
                      <option value="Travel">Travel</option>
                    </select>
                  </div>
                  <div className="col-xl-12">
                    <label className="form-label">Blog Content</label>
                    <div id="blog-content"></div>
                  </div>
                  <div className="col-xl-12">
                    <label className="form-label">Blog Type</label>
                    <div className="d-flex align-items-center gap-3">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="blogType" id="blogType1" defaultChecked />
                        <label className="form-check-label" htmlFor="blogType1">Free</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="blogType" id="blogType2" />
                        <label className="form-check-label" htmlFor="blogType2">Paid</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer text-end">
                <button className="btn btn-primary-light btn-wave">Save Draft</button>
                <button className="btn btn-primary btn-wave ms-2">Post Blog</button>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">Blog Images & Settings</div>
              </div>
              <div className="card-body">
                <div className="row gy-3">
                  <div className="col-xl-12">
                    <label className="form-label">Blog Images</label>
                    <input type="file" className="blog-images" name="filepond" multiple data-allow-reorder="true" data-max-file-size="3MB" data-max-files="6" />
                  </div>
                  <div className="col-xl-12">
                    <label htmlFor="publish-date" className="form-label">Publish Date</label>
                    <input type="text" className="form-control" id="publish-date" placeholder="Choose date" />
                  </div>
                  <div className="col-xl-12">
                    <label htmlFor="publish-time" className="form-label">Publish Time</label>
                    <input type="text" className="form-control" id="publish-time" placeholder="Choose time" />
                  </div>
                  <div className="col-xl-12">
                    <label htmlFor="blog-tags" className="form-label">Blog Tags</label>
                    <select className="form-control" name="blog-tags" id="blog-tags" multiple>
                      <option value="Top Blog">Top Blog</option>
                      <option value="New">New</option>
                      <option value="Trending">Trending</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scripts */}
      <Script src="/admin-assets/assets/libs/choices.js/public/assets/scripts/choices.min.js" strategy="afterInteractive" onLoad={() => handleScriptLoad('choices')} />
      <Script src="/admin-assets/assets/libs/quill/quill.js" strategy="afterInteractive" onLoad={() => handleScriptLoad('quill')} />
      <Script src="/admin-assets/assets/libs/filepond/filepond.min.js" strategy="afterInteractive" onLoad={() => handleScriptLoad('filepond')} />
      <Script src="/admin-assets/assets/libs/filepond-plugin-image-preview/filepond-plugin-image-preview.min.js" strategy="afterInteractive" />
      <Script src="/admin-assets/assets/libs/flatpickr/flatpickr.min.js" strategy="afterInteractive" onLoad={() => handleScriptLoad('flatpickr')} />

      {allBaseScriptsLoaded && (
        <Script src="/admin-assets/assets/js/blog-create.js" strategy="afterInteractive" />
      )}
    </AdminLayout>
  );
};

export default BlogCreate;
