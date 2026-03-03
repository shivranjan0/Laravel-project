"use client";
import React, { useState, useEffect } from "react";
import AdminLayout from "../layout";
import Head from "next/head";
import Script from "next/script";

const AddProduct = () => {
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
        <title>Add Product | Amerce Admin</title>
        {/* Page Specific Styles */}
        <link rel="stylesheet" href="/admin-assets/assets/libs/choices.js/public/assets/styles/choices.min.css" />
        <link rel="stylesheet" href="/admin-assets/assets/libs/quill/quill.snow.css" />
        <link rel="stylesheet" href="/admin-assets/assets/libs/quill/quill.bubble.css" />
        <link rel="stylesheet" href="/admin-assets/assets/libs/filepond/filepond.min.css" />
        <link rel="stylesheet" href="/admin-assets/assets/libs/filepond-plugin-image-preview/filepond-plugin-image-preview.min.css" />
        <link rel="stylesheet" href="/admin-assets/assets/libs/filepond-plugin-image-edit/filepond-plugin-image-edit.min.css" />
        <link rel="stylesheet" href="/admin-assets/assets/libs/flatpickr/flatpickr.min.css" />
      </Head>

      <div className="container-fluid">
        <div className="my-4 page-header-breadcrumb d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div>
            <h1 className="page-title fw-medium fs-18 mb-2">Add Product</h1>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="#">Apps</a></li>
                <li className="breadcrumb-item"><a href="#">Ecommerce</a></li>
                <li className="breadcrumb-item active" aria-current="page">Add Product</li>
              </ol>
            </nav>
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

        <div className="row">
          <div className="col-xl-3">
            <div className="card custom-card">
              <div className="card-body">
                <ul className="nav flex-column nav-pills tab-style-7" role="tablist">
                  <li className="nav-item m-1" role="presentation">
                    <a className="nav-link d-inline-flex w-100 mb-0 bg-light active" id="account" data-bs-toggle="tab" data-bs-target="#account-pane" href="#" aria-selected="true" role="tab">Basic Information</a>
                  </li>
                  <li className="nav-item m-1" role="presentation">
                    <a className="nav-link d-inline-flex w-100 mb-0 bg-light" id="notification-tab" data-bs-toggle="tab" data-bs-target="#notification-tab-pane" role="tab" aria-controls="notification-tab-pane" href="#" aria-selected="false">Pricing</a>
                  </li>
                  <li className="nav-item m-1" role="presentation">
                    <a className="nav-link d-inline-flex w-100 mb-0 bg-light" id="security-tab" data-bs-toggle="tab" data-bs-target="#security-tab-pane" role="tab" aria-controls="security-tab-pane" aria-selected="false" href="#">Specification</a>
                  </li>
                  <li className="nav-item m-1" role="presentation">
                    <a className="nav-link d-inline-flex w-100 mb-0 bg-light" id="otherinfo-tab" data-bs-toggle="tab" data-bs-target="#otherinfo-tab-pane" role="tab" aria-controls="otherinfo-tab-pane" aria-selected="false" href="#">Other Information</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">Product Tags & Images</div>
              </div>
              <div className="card-body">
                <div className="row gy-3">
                  <div className="col-xl-12">
                    <label htmlFor="product-tags" className="form-label">Product Tags</label>
                    <select className="form-control" name="product-tags" id="product-tags" multiple>
                      <option value="Plain" selected>Plain</option>
                      <option value="Solid" selected>Solid</option>
                      <option value="Relaxed">Relaxed</option>
                      <option value="Washed">Washed</option>
                    </select>
                  </div>
                  <div className="col-xl-12">
                    <label className="form-label">Select Images</label>
                    <input type="file" className="product-Images" name="filepond" multiple data-allow-reorder="true" data-max-file-size="3MB" data-max-files="6" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-9">
            <div className="card custom-card">
              <div className="p-3 border-bottom border-top border-block-end-dashed tab-content">
                {/* Basic Information Pane */}
                <div className="tab-pane show active p-0 border-0" id="account-pane" role="tabpanel">
                  <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-1">
                    <div className="fw-semibold d-block fs-15">General Information :</div>
                    <button className="btn btn-secondary">Add Product<i className="bi bi-plus-lg ms-2"></i></button>
                  </div>
                  <div className="row gy-3">
                    <div className="col-xl-12">
                      <label htmlFor="product-name-add" className="form-label">Product Name</label>
                      <input type="text" className="form-control" id="product-name-add" placeholder="Name" />
                      <label className="form-label mt-1 fs-12 op-5 text-muted mb-0">*Product Name should not exceed 30 characters</label>
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="product-size-add" className="form-label">Size</label>
                      <select className="form-control" data-trigger id="product-size-add">
                        <option value="">Select</option>
                        <option value="Extra Large">Extra Large</option>
                        <option value="Extra Small">Extra Small</option>
                        <option value="Large">Large</option>
                        <option value="Medium">Medium</option>
                        <option value="Small">Small</option>
                      </select>
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="product-brand-add" className="form-label">Brand</label>
                      <select className="form-control" data-trigger id="product-brand-add">
                        <option value="">Select</option>
                        <option value="Armani">Armani</option>
                        <option value="Lacoste">Lacoste</option>
                        <option value="Puma">Puma</option>
                        <option value="Spykar">Spykar</option>
                      </select>
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="product-category-add" className="form-label">Category</label>
                      <select className="form-control" data-trigger id="product-category-add">
                        <option value="">Category</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Footwear">Footwear</option>
                        <option value="Accessories">Accessories</option>
                      </select>
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="product-color-add" className="form-label">Colors</label>
                      <select className="form-control" name="product-color-add" id="product-color-add" multiple>
                        <option value="White">White</option>
                        <option value="Black">Black</option>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                      </select>
                    </div>
                    <div className="col-xl-12">
                      <label className="form-label">Product Description</label>
                      <div id="product-features"></div>
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="publish-date" className="form-label">Publish Date</label>
                      <input type="text" className="form-control" id="publish-date" placeholder="Choose date" />
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="publish-time" className="form-label">Publish Time</label>
                      <input type="text" className="form-control" id="publish-time" placeholder="Choose time" />
                    </div>
                  </div>
                </div>

                {/* Pricing Pane */}
                <div className="tab-pane p-0 border-0" id="notification-tab-pane" role="tabpanel">
                  <div className="fw-semibold d-block fs-15 mb-4">Pricing :</div>
                  <div className="row gy-3">
                    <div className="col-xl-6">
                      <label htmlFor="product-cost-add" className="form-label">Actual Price</label>
                      <input type="text" className="form-control" id="product-cost-add" placeholder="Actual Price" />
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="product-price-add" className="form-label">Dealer Price</label>
                      <input type="text" className="form-control" id="product-price-add" placeholder="Dealer Price" />
                    </div>
                  </div>
                </div>

                {/* Specification Pane */}
                <div className="tab-pane p-0 border-0" id="security-tab-pane" role="tabpanel">
                  <div className="fw-semibold d-block fs-15 mb-4">Specification :</div>
                  <div className="row gy-3">
                    <div className="col-xl-6">
                      <label htmlFor="product-weight-add" className="form-label">Weight</label>
                      <input type="text" className="form-control" id="product-weight-add" placeholder="Weight" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer border-top-0">
                <div className="btn-list float-end">
                  <button className="btn btn-primary">Save Product<i className="bi bi-download ms-2"></i></button>
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
        <Script src="/admin-assets/assets/js/add-products.js" strategy="afterInteractive" />
      )}
    </AdminLayout>
  );
};

export default AddProduct;
