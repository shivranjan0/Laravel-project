import React from 'react';
import { Link } from 'react-router-dom';

const ShopHeader = () => {
    return (
        <header className="tf-header">
            <div className="br-line fake-class bottom-0"></div>
            <div className="container-full">
                <div className="header-inner">
                    <div className="box-open-menu-mobile d-xl-none">
                        <a href="#mobileMenu" data-bs-toggle="offcanvas" className="btn-open-menu">
                            <i className="icon icon-List"></i>
                        </a>
                    </div>
                    <div className="header-left">
                        <a href="/" className="logo-site">
                            <img loading="lazy" width="150" height="30" src="/assets/images/logo/logo.svg" alt="Image" />
                        </a>
                    </div>
                    <div className="header-center d-none d-xl-block">
                        <nav className="box-navigation">
                            <ul className="box-nav-menu">
                                <li className="menu-item position-relative">
                                    <a href="#" className="item-link">
                                        <span className="text cus-text">
                                            Home
                                        </span>
                                        <i className="icon icon-CaretDown"></i>
                                    </a>
                                    <div className="sub-menu mega-menu_home_v2 home-type_2">
                                        <ul className="sub-menu_list">
                                            <li>
                                                <a href="/" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Main Demo
                                                    </span>
                                                    <span className="demo-label type-hot">Hot</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="home-mental.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Home Mental
                                                    </span>
                                                    <span className="demo-label type-new">New</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="home-electronics.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Home Electronics
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="home-pod.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Home POD
                                                    </span>
                                                    <span className="demo-label type-new">New</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="home-pet-care.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Home Pet Care
                                                    </span>
                                                    <span className="demo-label type-trend">Trend</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="home-baby.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Home Baby
                                                    </span>
                                                    <span className="demo-label type-hot">Hot</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="home-auto.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Home Auto
                                                    </span>
                                                    <span className="demo-label type-new">New</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="sub-menu_list">
                                            <li>
                                                <a href="home-decor.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Home Decor
                                                    </span>
                                                    <span className="demo-label type-new">New</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="home-cosmetic.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Home Cosmetic
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="home-organic.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Home Organic
                                                    </span>
                                                    <span className="demo-label type-hot">Hot</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="home-fashion.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Home Fashion
                                                    </span>
                                                    <span className="demo-label type-trend">Trend</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="home-headphone.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Home Headphone
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="home-jewelry.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Home Jewelry
                                                    </span>
                                                    <span className="demo-label type-hot">Hot</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="home-garden.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Home Garden
                                                    </span>
                                                    <span className="demo-label type-new">New</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="sub-menu_list">
                                            <li>
                                                <a href="home-construction.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Home Construct
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="home-furniture.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Home Furniture
                                                    </span>
                                                    <span className="demo-label type-hot">Hot</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="home-fashion-2.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Home Fashion 2
                                                    </span>
                                                    <span className="demo-label type-trend">Trend</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="home-bag-accessories.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Home Bag
                                                    </span>
                                                    <span className="demo-label type-new">New</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="home-sport.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Home Sport
                                                    </span>
                                                    <span className="demo-label type-hot">Hot</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="home-office-equipment.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Home Office
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="home-sneaker.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Home Sneaker
                                                    </span>
                                                    <span className="demo-label type-trend">Trend</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="image-preview">
                                            <img loading="lazy" width="300" height="264"
                                                src="/assets/images/section/amerce-html.jpg" alt="Image">
                                        </div>
                                    </div>
                                </li>
                                <li className="menu-item">
                                    <a href="#" className="item-link">
                                        <span className="text cus-text">
                                            Shop
                                        </span>
                                        <i className="icon icon-CaretDown"></i>
                                    </a>
                                    <div className="sub-menu mega-menu">
                                        <div className="container-full">
                                            <div className="row">
                                                <div className="col-2">
                                                    <div className="mega-menu-item menu-lv-2">
                                                        <p className="menu-heading">SHOP LAYOUT</p>
                                                        <ul className="sub-menu_list">
                                                            <li>
                                                                <a href="shop-default.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Default
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-left-sidebar.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Left Sidebar
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-right-sidebar.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Right Sidebar
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-full-width.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Full Width
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="collection.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Collection List
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-sub-collection.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Sub Collection
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="mega-menu-item menu-lv-2">
                                                        <p className="menu-heading">SHOP FEATURE</p>
                                                        <ul className="sub-menu_list">
                                                            <li>
                                                                <a href="shop-default.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Pagination Link
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-load-more-button.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Pagination Loadmore
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-infinity-scroll.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Infinite Scroll
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-filter-sidebar.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Filter Sidebar
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-filter-hidden.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Filter Hidden
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-filter-dropdown.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Filter Dropdown
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-filter-drawer.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Filter Drawer
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="mega-menu-item menu-lv-2">
                                                        <p className="menu-heading">PRODUCT HOVER</p>
                                                        <ul className="sub-menu_list">
                                                            <li>
                                                                <a href="shop-hover-01.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Product Style 01
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-hover-02.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Product Style 02
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-hover-03.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Product Style 03
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-hover-04.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Product Style 04
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-hover-05.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Product Style 05
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-hover-06.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Product Style 06
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="mega-menu-item menu-lv-2">
                                                        <p className="menu-heading">MY PAGES</p>
                                                        <ul className="sub-menu_list">
                                                            <li>
                                                                <a href="wishlist.html" className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Wish List
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="search-result.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Search Result
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="view-cart.html" className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        View Cart
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="login.html" className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Login/Register
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="forget-password.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Forget Password
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="track-order.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Order Tracking
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="account-page.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        My Account
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="box-image_v01 h-100">
                                                        <a href="shop-default.html" className="box-image_img img-style">
                                                            <img loading="lazy" width="700" height="461"
                                                                src="/assets/images/collection/cls-7.jpg" alt="Image">
                                                        </a>
                                                        <div className="box-image_content">
                                                            <a href="shop-default.html"
                                                                className="title h3 fw-medium text-white link-underline-white text-decoration-thickness">
                                                                Shop Men
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="menu-item">
                                    <a href="#" className="item-link">
                                        <span className="text cus-text">
                                            Product
                                        </span>
                                        <i className="icon icon-CaretDown"></i>
                                    </a>
                                    <div className="sub-menu mega-menu">
                                        <div className="container-full">
                                            <div className="row">
                                                <div className="col-2 ms-auto">
                                                    <div className="mega-menu-item menu-lv-2">
                                                        <p className="menu-heading">PRODUCT LAYOUT</p>
                                                        <ul className="sub-menu_list">
                                                            <li>
                                                                <a href="product-detail.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Product Default
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-right-thumbnail.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Right Thumbnail
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-bottom-thumbnail.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Bottom Thumbnail
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-grid.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Product Grid
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-grid-2.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Product Grid 2
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-stacked.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Product Stacked
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-description-accordion.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Description Accordion
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="mega-menu-item menu-lv-2">
                                                        <p className="menu-heading">PRODUCT DETAIL</p>
                                                        <ul className="sub-menu_list">
                                                            <li>
                                                                <a href="product-inner-zoom.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Inner Zoom
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-inner-circle-zoom.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Inner Circle Zoom
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-no-zoom.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        No Zoom
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-external-zoom.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        External Zoom
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-open-lightbox.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Open Lightbox
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-video.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Product Video
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-3d.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Product 3D/AR
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-group.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Product Group
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-affiliate.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Product Affiliate
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-out-of-stock.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Out Of Stock
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="mega-menu-item menu-lv-2">
                                                        <p className="menu-heading">PRODUCT FEATURE</p>
                                                        <ul className="sub-menu_list">
                                                            <li>
                                                                <a href="product-together.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Buy Together
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-countdown-timer.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Countdown Timer
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-volume-discount-thumbnail.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Discount Thumbnail
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-available.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Pickup Avaiable
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-pre-order.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Pre Order
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-deals.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Deals
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-customer-note.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Customer Note
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-buyX-getY.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Buy X Get Y
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="mega-menu-item menu-lv-2">
                                                        <p className="menu-heading">PRODUCT SWATCH</p>
                                                        <ul className="sub-menu_list">
                                                            <li>
                                                                <a href="product-swatch-color.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Swatch Color
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-swatch-image.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Swatch Image
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-swatch-rounded.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Swatch Rounded
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-swatch-rounded-color.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Rounded Color
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-swatch-rounded-image.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Rounded Image
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-swatch-dropdown.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Dropdown
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-swatch-dropdown-color.html"
                                                                    className="sub-menu_link has-text">
                                                                    <span className="cus-text">
                                                                        Dropdown Color
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-4 me-auto">
                                                    <div dir="ltr" className="swiper tf-swiper" data-preview="2"
                                                        data-tablet="2" data-mobile-sm="2" data-mobile="2"
                                                        data-space="10" data-pagination="2" data-pagination-sm="2"
                                                        data-pagination-md="2" data-pagination-lg="2">
                                                        <div className="swiper-wrapper">
                                                            <!-- Product 1 -->
                                                            <div className="swiper-slide">
                                                                <div className="card-product">
                                                                    <div className="card-product_wrapper">
                                                                        <a href="product-detail.html"
                                                                            className="product-img">
                                                                            <img className="img-product" loading="lazy"
                                                                                width="330" height="440"
                                                                                src="/assets/images/product/product-1.jpg"
                                                                                alt="Product">
                                                                            <img className="img-hover" loading="lazy"
                                                                                width="330" height="440"
                                                                                src="/assets/images/product/product-1_2.jpg"
                                                                                alt="Product">
                                                                        </a>
                                                                        <ul className="product-action_list">
                                                                            <li className="wishlist">
                                                                                <a href="#;"
                                                                                    className="hover-tooltip tooltip-left box-icon">
                                                                                    <span
                                                                                        className="icon icon-heart"></span>
                                                                                    <span className="tooltip">Add to
                                                                                        Wishlist</span>
                                                                                </a>
                                                                            </li>
                                                                            <li className="compare">
                                                                                <a href="#compare"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    className="hover-tooltip tooltip-left box-icon">
                                                                                    <span
                                                                                        className="icon icon-ArrowsLeftRight"></span>
                                                                                    <span className="tooltip">Compare</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#quickView"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    className="hover-tooltip tooltip-left box-icon">
                                                                                    <span className="icon icon-Eye"></span>
                                                                                    <span className="tooltip">Quick
                                                                                        view</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="product-badge_list">
                                                                            <li
                                                                                className="product-badge_item text-caption-01 new">
                                                                                NEW</li>
                                                                        </ul>
                                                                        <div className="product-action_bot">
                                                                            <a href="#quickAdd" data-bs-toggle="modal"
                                                                                className="tf-btn btn-white small  w-100">
                                                                                Quick Add
                                                                            </a>
                                                                        </div>
                                                                        <div className="product-marquee_sale">
                                                                            <div className="marquee-wrapper">
                                                                                <div className="initial-child-container">
                                                                                    <!-- 1 -->
                                                                                    <div className="marquee-child-item">
                                                                                        HOT SALE 25% OFF
                                                                                    </div>
                                                                                    <i className="icon icon-Star2"></i>
                                                                                    <!-- 2 -->
                                                                                    <div className="marquee-child-item">
                                                                                        HOT SALE 25% OFF
                                                                                    </div>
                                                                                    <i className="icon icon-Star2"></i>
                                                                                    <!-- 3 -->
                                                                                    <div className="marquee-child-item">
                                                                                        HOT SALE 25% OFF
                                                                                    </div>
                                                                                    <i className="icon icon-Star2"></i>
                                                                                    <!-- 4 -->
                                                                                    <div className="marquee-child-item">
                                                                                        HOT SALE 25% OFF
                                                                                    </div>
                                                                                    <i className="icon icon-Star2"></i>
                                                                                    <!-- 5 -->
                                                                                    <div className="marquee-child-item">
                                                                                        HOT SALE 25% OFF
                                                                                    </div>
                                                                                    <i className="icon icon-Star2"></i>
                                                                                    <!-- 1 -->
                                                                                    <div className="marquee-child-item">
                                                                                        HOT SALE 25% OFF
                                                                                    </div>
                                                                                    <i className="icon icon-Star2"></i>
                                                                                    <!-- 2 -->
                                                                                    <div className="marquee-child-item">
                                                                                        HOT SALE 25% OFF
                                                                                    </div>
                                                                                    <i className="icon icon-Star2"></i>
                                                                                    <!-- 3 -->
                                                                                    <div className="marquee-child-item">
                                                                                        HOT SALE 25% OFF
                                                                                    </div>
                                                                                    <i className="icon icon-Star2"></i>
                                                                                    <!-- 4 -->
                                                                                    <div className="marquee-child-item">
                                                                                        HOT SALE 25% OFF
                                                                                    </div>
                                                                                    <i className="icon icon-Star2"></i>
                                                                                    <!-- 5 -->
                                                                                    <div className="marquee-child-item">
                                                                                        HOT SALE 25% OFF
                                                                                    </div>
                                                                                    <i className="icon icon-Star2"></i>
                                                                                    <!-- 1 -->
                                                                                    <div className="marquee-child-item">
                                                                                        HOT SALE 25% OFF
                                                                                    </div>
                                                                                    <i className="icon icon-Star2"></i>
                                                                                    <!-- 2 -->
                                                                                    <div className="marquee-child-item">
                                                                                        HOT SALE 25% OFF
                                                                                    </div>
                                                                                    <i className="icon icon-Star2"></i>
                                                                                    <!-- 3 -->
                                                                                    <div className="marquee-child-item">
                                                                                        HOT SALE 25% OFF
                                                                                    </div>
                                                                                    <i className="icon icon-Star2"></i>
                                                                                    <!-- 4 -->
                                                                                    <div className="marquee-child-item">
                                                                                        HOT SALE 25% OFF
                                                                                    </div>
                                                                                    <i className="icon icon-Star2"></i>
                                                                                    <!-- 5 -->
                                                                                    <div className="marquee-child-item">
                                                                                        HOT SALE 25% OFF
                                                                                    </div>
                                                                                    <i className="icon icon-Star2"></i>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-product_info">
                                                                        <a href="product-detail.html"
                                                                            className="name-product lh-24 fw-medium link-underline-text">
                                                                            Lyocell wrap top
                                                                        </a>
                                                                        <div
                                                                            className="star-wrap d-flex align-items-center">
                                                                            <i className="icon icon-Star"></i>
                                                                            <i className="icon icon-Star"></i>
                                                                            <i className="icon icon-Star"></i>
                                                                            <i className="icon icon-Star"></i>
                                                                            <i className="icon icon-Star"></i>
                                                                        </div>
                                                                        <div className="price-wrap">
                                                                            <span
                                                                                className="price-new text-primary fw-semibold">$69,99</span>
                                                                            <span
                                                                                className="price-old text-caption-01 cl-text-3">$99,99</span>
                                                                        </div>
                                                                        <ul className="product-color_list">
                                                                            <li
                                                                                className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                                                                                <span
                                                                                    className="tooltip color-filter">Brown</span>
                                                                                <span
                                                                                    className="swatch-value bg-muted-brown"></span>
                                                                                <img src="/assets/images/product/product-1.jpg"
                                                                                    data-src="/assets/images/product/product-1.jpg"
                                                                                    alt="Image">
                                                                            </li>
                                                                            <li
                                                                                className="product-color-item color-swatch hover-tooltip tooltip-bot">
                                                                                <span className="tooltip color-filter">Dark
                                                                                    Blue</span>
                                                                                <span
                                                                                    className="swatch-value bg-dark-blue-gray"></span>
                                                                                <img src="/assets/images/product/product-1_3.jpg"
                                                                                    data-src="/assets/images/product/product-1_3.jpg"
                                                                                    alt="Image">
                                                                            </li>
                                                                            <li
                                                                                className="product-color-item color-swatch hover-tooltip tooltip-bot">
                                                                                <span
                                                                                    className="tooltip color-filter">Gray</span>
                                                                                <span
                                                                                    className="swatch-value bg-soft-gray"></span>
                                                                                <img src="/assets/images/product/product-1_4.jpg"
                                                                                    data-src="/assets/images/product/product-1_4.jpg"
                                                                                    alt="Image">
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- Product 2 -->
                                                            <div className="swiper-slide">
                                                                <div className="card-product">
                                                                    <div className="card-product_wrapper">
                                                                        <a href="product-detail.html"
                                                                            className="product-img">
                                                                            <img className="img-product" loading="lazy"
                                                                                width="330" height="440"
                                                                                src="/assets/images/product/product-2.jpg"
                                                                                alt="Product">
                                                                            <img className="img-hover" loading="lazy"
                                                                                width="330" height="440"
                                                                                src="/assets/images/product/product-2_2.jpg"
                                                                                alt="Product">
                                                                        </a>
                                                                        <ul className="product-action_list">
                                                                            <li className="wishlist">
                                                                                <a href="#;"
                                                                                    className="hover-tooltip tooltip-left box-icon">
                                                                                    <span
                                                                                        className="icon icon-heart"></span>
                                                                                    <span className="tooltip">Add to
                                                                                        Wishlist</span>
                                                                                </a>
                                                                            </li>
                                                                            <li className="compare">
                                                                                <a href="#compare"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    className="hover-tooltip tooltip-left box-icon">
                                                                                    <span
                                                                                        className="icon icon-ArrowsLeftRight"></span>
                                                                                    <span className="tooltip">Compare</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#quickView"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    className="hover-tooltip tooltip-left box-icon">
                                                                                    <span className="icon icon-Eye"></span>
                                                                                    <span className="tooltip">Quick
                                                                                        view</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="product-badge_list">
                                                                            <li
                                                                                className="product-badge_item text-caption-01 sale">
                                                                                -25%</li>
                                                                        </ul>
                                                                        <div className="product-action_bot">
                                                                            <a href="#quickAdd" data-bs-toggle="modal"
                                                                                className="tf-btn btn-white small  w-100">
                                                                                Quick Add
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-product_info">
                                                                        <a href="product-detail.html"
                                                                            className="name-product lh-24 fw-medium link-underline-text">
                                                                            Buttons cotton top
                                                                        </a>
                                                                        <div
                                                                            className="star-wrap d-flex align-items-center">
                                                                            <i className="icon icon-Star"></i>
                                                                            <i className="icon icon-Star"></i>
                                                                            <i className="icon icon-Star"></i>
                                                                            <i className="icon icon-Star"></i>
                                                                            <i className="icon icon-Star"></i>
                                                                        </div>
                                                                        <div className="price-wrap">
                                                                            <span
                                                                                className="price-new text-primary fw-semibold">$29,99</span>
                                                                            <span
                                                                                className="price-old text-caption-01 cl-text-3">$49,99</span>
                                                                        </div>
                                                                        <ul className="product-color_list">
                                                                            <li
                                                                                className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                                                                                <span
                                                                                    className="tooltip color-filter">Brown</span>
                                                                                <span
                                                                                    className="swatch-value bg-muted-brown"></span>
                                                                                <img src="/assets/images/product/product-2.jpg"
                                                                                    data-src="/assets/images/product/product-2.jpg"
                                                                                    alt="Image">
                                                                            </li>
                                                                            <li
                                                                                className="product-color-item color-swatch hover-tooltip tooltip-bot">
                                                                                <span
                                                                                    className="tooltip color-filter">Beige</span>
                                                                                <span
                                                                                    className="swatch-value bg-stone-beige"></span>
                                                                                <img src="/assets/images/product/product-2_3.jpg"
                                                                                    data-src="/assets/images/product/product-2_3.jpg"
                                                                                    alt="Image">
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- Product 3 -->
                                                            <div className="swiper-slide">
                                                                <div className="card-product">
                                                                    <div className="card-product_wrapper">
                                                                        <a href="product-detail.html"
                                                                            className="product-img">
                                                                            <img className="img-product" loading="lazy"
                                                                                width="330" height="440"
                                                                                src="/assets/images/product/product-3.jpg"
                                                                                alt="Product">
                                                                            <img className="img-hover" loading="lazy"
                                                                                width="330" height="440"
                                                                                src="/assets/images/product/product-3_2.jpg"
                                                                                alt="Product">
                                                                        </a>
                                                                        <ul className="product-action_list">
                                                                            <li className="wishlist">
                                                                                <a href="#;"
                                                                                    className="hover-tooltip tooltip-left box-icon">
                                                                                    <span
                                                                                        className="icon icon-heart"></span>
                                                                                    <span className="tooltip">Add to
                                                                                        Wishlist</span>
                                                                                </a>
                                                                            </li>
                                                                            <li className="compare">
                                                                                <a href="#compare"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    className="hover-tooltip tooltip-left box-icon">
                                                                                    <span
                                                                                        className="icon icon-ArrowsLeftRight"></span>
                                                                                    <span className="tooltip">Compare</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#quickView"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    className="hover-tooltip tooltip-left box-icon">
                                                                                    <span className="icon icon-Eye"></span>
                                                                                    <span className="tooltip">Quick
                                                                                        view</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="product-badge_list">
                                                                            <li
                                                                                className="product-badge_item text-caption-01 sale">
                                                                                -25%</li>
                                                                        </ul>
                                                                        <div className="product-action_bot">
                                                                            <a href="#quickAdd" data-bs-toggle="modal"
                                                                                className="tf-btn btn-white small  w-100">
                                                                                Quick Add
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-product_info">
                                                                        <a href="product-detail.html"
                                                                            className="name-product lh-24 fw-medium link-underline-text">
                                                                            Wool Midi Coat
                                                                        </a>
                                                                        <div
                                                                            className="star-wrap d-flex align-items-center">
                                                                            <i className="icon icon-Star"></i>
                                                                            <i className="icon icon-Star"></i>
                                                                            <i className="icon icon-Star"></i>
                                                                            <i className="icon icon-Star"></i>
                                                                            <i className="icon icon-Star"></i>
                                                                        </div>
                                                                        <div className="price-wrap">
                                                                            <span
                                                                                className="price-new text-primary fw-semibold">$15,99</span>
                                                                            <span
                                                                                className="price-old text-caption-01 cl-text-3">$25,99</span>
                                                                        </div>
                                                                        <ul className="product-color_list">
                                                                            <li
                                                                                className="product-color-item color-swatch hover-tooltip tooltip-bot active">
                                                                                <span
                                                                                    className="tooltip color-filter">Brown</span>
                                                                                <span
                                                                                    className="swatch-value bg-muted-brown"></span>
                                                                                <img src="/assets/images/product/product-3.jpg"
                                                                                    data-src="/assets/images/product/product-3.jpg"
                                                                                    alt="Image">
                                                                            </li>
                                                                            <li
                                                                                className="product-color-item color-swatch hover-tooltip tooltip-bot">
                                                                                <span className="tooltip color-filter">Dark
                                                                                    Blue</span>
                                                                                <span
                                                                                    className="swatch-value bg-dark-blue-gray"></span>
                                                                                <img src="/assets/images/product/product-3_3.jpg"
                                                                                    data-src="/assets/images/product/product-3_3.jpg"
                                                                                    alt="Image">
                                                                            </li>
                                                                            <li
                                                                                className="product-color-item color-swatch hover-tooltip tooltip-bot">
                                                                                <span
                                                                                    className="tooltip color-filter">Beige</span>
                                                                                <span
                                                                                    className="swatch-value bg-stone-beige"></span>
                                                                                <img src="/assets/images/product/product-3_4.jpg"
                                                                                    data-src="/assets/images/product/product-3_4.jpg"
                                                                                    alt="Image">
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- Product 4 -->
                                                            <div className="swiper-slide">
                                                                <div className="card-product">
                                                                    <div className="card-product_wrapper">
                                                                        <a href="product-detail.html"
                                                                            className="product-img">
                                                                            <img className="img-product" loading="lazy"
                                                                                width="330" height="440"
                                                                                src="/assets/images/product/product-4.jpg"
                                                                                alt="Product">
                                                                            <img className="img-hover" loading="lazy"
                                                                                width="330" height="440"
                                                                                src="/assets/images/product/product-4_2.jpg"
                                                                                alt="Product">
                                                                        </a>
                                                                        <ul className="product-action_list">
                                                                            <li className="wishlist">
                                                                                <a href="#;"
                                                                                    className="hover-tooltip tooltip-left box-icon">
                                                                                    <span
                                                                                        className="icon icon-heart"></span>
                                                                                    <span className="tooltip">Add to
                                                                                        Wishlist</span>
                                                                                </a>
                                                                            </li>
                                                                            <li className="compare">
                                                                                <a href="#compare"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    className="hover-tooltip tooltip-left box-icon">
                                                                                    <span
                                                                                        className="icon icon-ArrowsLeftRight"></span>
                                                                                    <span className="tooltip">Compare</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#quickView"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    className="hover-tooltip tooltip-left box-icon">
                                                                                    <span className="icon icon-Eye"></span>
                                                                                    <span className="tooltip">Quick
                                                                                        view</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        <div className="product-action_bot">
                                                                            <a href="#shoppingCart"
                                                                                data-bs-toggle="offcanvas"
                                                                                className="tf-btn btn-white small  w-100">
                                                                                Add to Cart

                                                                            </a>
                                                                        </div>
                                                                        <div className="product-countdown">
                                                                            <div className="js-countdown cd-has-zero"
                                                                                data-timer="1093120"
                                                                                data-labels="D : ,H : ,M : ,S">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-product_info">
                                                                        <a href="product-detail.html"
                                                                            className="name-product lh-24 fw-medium link-underline-text">
                                                                            linen slim-fit shirt
                                                                        </a>
                                                                        <div
                                                                            className="star-wrap d-flex align-items-center">
                                                                            <i className="icon icon-Star"></i>
                                                                            <i className="icon icon-Star"></i>
                                                                            <i className="icon icon-Star"></i>
                                                                            <i className="icon icon-Star"></i>
                                                                            <i className="icon icon-Star"></i>
                                                                        </div>
                                                                        <div className="price-wrap">
                                                                            <span
                                                                                className="price-new text-primary fw-semibold">$45,99</span>
                                                                            <span
                                                                                className="price-old text-caption-01 cl-text-3">$79,99</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sw-dot-default tf-sw-pagination"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="menu-item position-relative">
                                    <a href="#" className="item-link">
                                        <span className="text cus-text">
                                            Blog
                                        </span>
                                        <i className="icon icon-CaretDown"></i>
                                    </a>
                                    <div className="sub-menu mega-menu-item">
                                        <ul className="sub-menu_list">
                                            <li>
                                                <a href="blog.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Blog
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-single.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Blog Single
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-item position-relative">
                                    <a href="#" className="item-link">
                                        <span className="text cus-text">
                                            Pages
                                        </span>
                                        <i className="icon icon-CaretDown"></i>
                                    </a>
                                    <div className="sub-menu mega-menu-item">
                                        <ul className="sub-menu_list">
                                            <li>
                                                <a href="about.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        About Us
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="contact.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Contact Us
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="our-store.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Our Store
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="invoice.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Invoice
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="404.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        404
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="compare.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        Compare
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="account-page.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">
                                                        My Account
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-item">
                                    <a href="https://themeforest.net/user/themesflat/portfolio" target="_blank"
                                        className="item-link">
                                        <span className="text cus-text">
                                            Buy Template
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-right">
                        <ul className="nav-icon-list">
                            <li className="d-none d-sm-block">
                                <a href="#search" data-bs-toggle="modal" className="nav-icon-item link">
                                    <i className="icon icon-MagnifyingGlass"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#sign" data-bs-toggle="modal" className="nav-icon-item link">
                                    <i className="icon icon-User"></i>
                                </a>
                            </li>
                            <li className="d-none d-sm-block">
                                <a href="wishlist.html" className="nav-icon-item link">
                                    <i className="icon icon-HeartStraight"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#shoppingCart" data-bs-toggle="offcanvas" className="nav-icon-item link shop-cart">
                                    <i className="icon icon-Handbag"></i>
                                    <span className="count">
                                        12
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ShopHeader;
