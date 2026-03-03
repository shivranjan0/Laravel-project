import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <aside className="app-sidebar sticky" id="sidebar">
            <div className="main-sidebar-header">
                <Link href="/admin" className="header-logo">
                    <img src="/admin-assets/assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                    <img src="/admin-assets/assets/images/brand-logos/toggle-dark.png" alt="logo" className="toggle-dark" />
                    <img src="/admin-assets/assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" />
                    <img src="/admin-assets/assets/images/brand-logos/toggle-logo.png" alt="logo" className="toggle-logo" />
                </Link>
            </div>

            <div className="main-sidebar" id="sidebar-scroll">
                <nav className="main-menu-container nav nav-pills flex-column sub-open">
                    <div className="slide-left" id="slide-left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                        </svg>
                    </div>

                    <ul className="main-menu">

                        {/* ── Dashboards ── */}
                        <li className="slide__category"><span className="category-name">Dashboards</span></li>
                        <li className="slide">
                            <Link href="/admin" className="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 256 256">
                                    <rect width="256" height="256" fill="none" />
                                    <path d="M104,216V152h48v64h64V120a8,8,0,0,0-2.34-5.66l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,40,120v96Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                </svg>
                                <span className="side-menu__label">Sales Dashboard</span>
                            </Link>
                        </li>

                        {/* ── Web Apps ── */}
                        <li className="slide__category"><span className="category-name">Web Apps</span></li>
                        <li className="slide has-sub">
                            <a href="#" className="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 256 256">
                                    <rect width="256" height="256" fill="none" />
                                    <rect x="48" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                    <rect x="144" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                    <rect x="48" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                    <rect x="144" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                </svg>
                                <span className="side-menu__label">Apps</span>
                                <i className="ri-arrow-right-s-line side-menu__angle"></i>
                            </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1"><a href="#">Apps</a></li>
                                <li className="slide">
                                    <Link href="/admin/full-calendar" className="side-menu__item">Full Calendar</Link>
                                </li>
                                <li className="slide has-sub">
                                    <a href="#" className="side-menu__item">
                                        Ecommerce <i className="ri-arrow-right-s-line side-menu__angle"></i>
                                    </a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <Link href="/admin/add-product" className="side-menu__item">Add Product</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        {/* ── Pages ── */}
                        <li className="slide__category"><span className="category-name">Pages</span></li>
                        <li className="slide has-sub">
                            <a href="#" className="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 256 256">
                                    <rect width="256" height="256" fill="none" />
                                    <rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                    <line x1="80" y1="96" x2="176" y2="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                    <line x1="80" y1="128" x2="176" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                    <line x1="80" y1="160" x2="176" y2="160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                </svg>
                                <span className="side-menu__label">Pages</span>
                                <i className="ri-arrow-right-s-line side-menu__angle"></i>
                            </a>
                            <ul className="slide-menu child1 pages-ul">
                                <li className="slide side-menu__label1"><a href="#">Pages</a></li>

                                {/* Blog */}
                                <li className="slide has-sub">
                                    <a href="#" className="side-menu__item">
                                        Blog <i className="ri-arrow-right-s-line side-menu__angle"></i>
                                    </a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <Link href="/admin/blog" className="side-menu__item">Blog</Link>
                                        </li>
                                        <li className="slide">
                                            <Link href="/admin/blog/details" className="side-menu__item">Blog Details</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* Chat */}
                                <li className="slide">
                                    <Link href="/admin/chat" className="side-menu__item">Chat</Link>
                                </li>

                                {/* Email / Mail */}
                                <li className="slide has-sub">
                                    <a href="#" className="side-menu__item">
                                        Email <i className="ri-arrow-right-s-line side-menu__angle"></i>
                                    </a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <Link href="/admin/mail" className="side-menu__item">Mail App</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* FAQ's */}
                                <li className="slide">
                                    <Link href="/admin/faqs" className="side-menu__item">FAQ&apos;s</Link>
                                </li>

                                {/* Reviews */}
                                <li className="slide">
                                    <Link href="/admin/reviews" className="side-menu__item">Reviews</Link>
                                </li>

                                {/* To Do List */}
                                <li className="slide">
                                    <Link href="/admin/to-do-list" className="side-menu__item">To Do List</Link>
                                </li>
                            </ul>
                        </li>

                    </ul>

                    <div className="slide-right" id="slide-right">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                        </svg>
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
