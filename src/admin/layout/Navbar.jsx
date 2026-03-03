import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Load saved preference on mount
        const saved = localStorage.getItem('adminThemeMode');
        if (saved === 'dark') {
            document.documentElement.setAttribute('data-theme-mode', 'dark');
            setIsDark(true);
        }
    }, []);

    const toggleTheme = (e) => {
        e.preventDefault();
        const html = document.documentElement;
        if (isDark) {
            html.setAttribute('data-theme-mode', 'light');
            html.setAttribute('data-menu-styles', 'light');
            html.setAttribute('data-header-styles', 'light');
            localStorage.setItem('adminThemeMode', 'light');
            setIsDark(false);
        } else {
            html.setAttribute('data-theme-mode', 'dark');
            html.setAttribute('data-menu-styles', 'dark');
            html.setAttribute('data-header-styles', 'dark');
            localStorage.setItem('adminThemeMode', 'dark');
            setIsDark(true);
        }
    };

    return (
        <header className="app-header sticky" id="header">
            <div className="main-header-container container-fluid">
                <div className="header-content-left">
                    <div className="header-element">
                        <div className="horizontal-logo">
                            <a href="#" className="header-logo">
                                <img src="/admin-assets/assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                                <img src="/admin-assets/assets/images/brand-logos/toggle-logo.png" alt="logo" className="toggle-logo" />
                                <img src="/admin-assets/assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" />
                                <img src="/admin-assets/assets/images/brand-logos/toggle-dark.png" alt="logo" className="toggle-dark" />
                            </a>
                        </div>
                    </div>
                    <div className="header-element">
                        <a aria-label="Hide Sidebar" className="sidemenu-toggle header-link" data-bs-toggle="sidebar" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon menu-btn" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon menu-btn-close" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <ul className="header-content-right">
                    <li className="header-element d-md-none d-block">
                        <a href="#" className="header-link" data-bs-toggle="modal" data-bs-target="#header-responsive-search">
                            <i className="bi bi-search header-link-icon"></i>
                        </a>
                    </li>

                    <li className="header-element search-dropdown dropdown d-md-block d-none">
                        <a href="#" className="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                            <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                <path d="M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"></path>
                            </svg>
                        </a>
                        <ul className="main-header-dropdown dropdown-menu dropdown-menu-end overflow-visible">
                            <li className="px-3 py-2">
                                <div className="header-element header-search d-md-block d-none my-auto">
                                    <input type="text" className="header-search-bar form-control" id="header-search" placeholder="Search for Results..." spellCheck={false} autoComplete="off" autoCapitalize="off" />
                                    <a href="#" className="header-search-icon border-0">
                                        <i className="bi bi-search"></i>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <li className="header-element country-selector dropdown">
                        <a href="#" className="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                            <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none" />
                                <polyline points="240 216 184 104 128 216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                <line x1="144" y1="184" x2="224" y2="184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                <line x1="96" y1="32" x2="96" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                <line x1="32" y1="56" x2="160" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                <path d="M128,56a96,96,0,0,1-96,96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                <path d="M69.47,88A96,96,0,0,0,160,152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                            </svg>
                        </a>
                        <ul className="main-header-dropdown dropdown-menu dropdown-menu-end">
                            <li>
                                <div className="py-2 px-3">
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" />
                                </div>
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">
                                    <div className="d-flex align-items-center">
                                        <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                                            <img src="/admin-assets/assets/images/flags/us_flag.jpg" alt="img" />
                                        </span> English
                                    </div>
                                    <span className="text-muted fs-12">(US)</span>
                                </a>
                            </li>
                            {/* Simplified other countries for brevity, but kept the structure */}
                        </ul>
                    </li>

                    <li className="header-element header-theme-mode">
                        <a href="#" onClick={toggleTheme} className="header-link layout-setting">
                            <span className="light-layout">
                                <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" viewBox="0 0 256 256">
                                    <rect width="256" height="256" fill="none" />
                                    <path d="M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                </svg>
                            </span>
                            <span className="dark-layout">
                                <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" viewBox="0 0 256 256">
                                    <rect width="256" height="256" fill="none" />
                                    <line x1="128" y1="40" x2="128" y2="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                    <circle cx="128" cy="128" r="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                    <line x1="64" y1="64" x2="56" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                    <line x1="64" y1="192" x2="56" y2="200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                    <line x1="192" y1="64" x2="200" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                    <line x1="192" y1="192" x2="200" y2="200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                    <line x1="40" y1="128" x2="32" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                    <line x1="128" y1="216" x2="128" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                    <line x1="216" y1="128" x2="224" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                </svg>
                            </span>
                        </a>
                    </li>

                    <li className="header-element cart-dropdown dropdown">
                        <a href="#" className="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                            <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none" />
                                <rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                <path d="M168,88a40,40,0,0,1-80,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                            </svg>
                            <span className="badge bg-primary rounded-pill header-icon-badge" id="cart-icon-badge">5</span>
                        </a>
                        <div className="main-header-dropdown dropdown-menu dropdown-menu-end">
                            <div className="p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-16">Cart Items</p>
                                    <span className="badge bg-success-transparent ms-1 fs-12" id="cart-data">5 Items</span>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            {/* Simplified cart items for brevity */}
                            <div className="p-3 empty-header-item border-top">
                                <div className="text-center d-grid">
                                    <a href="#" className="text-primary text-decoration-underline">Proceed to checkout <i className="ri-arrow-right-line"></i></a>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* Notification Bell */}
                    <li className="header-element notifications-dropdown dropdown">
                        <a href="#" className="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                            <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none" />
                                <path d="M96,192a32,32,0,0,0,64,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                <path d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76H41.1C47.7,168.6,56,139.82,56,104Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                            </svg>
                            <span className="badge bg-danger rounded-pill header-icon-badge" id="notification-icon-badge">3</span>
                        </a>
                        <div className="main-header-dropdown dropdown-menu dropdown-menu-end" id="notificationDropdown">
                            <div className="p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-16">Notifications</p>
                                    <span className="badge bg-danger-transparent ms-1 fs-12">3 Unread</span>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <ul className="list-unstyled mb-0" id="notificationList">
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                        <div className="pe-2">
                                            <span className="avatar avatar-sm bg-primary-transparent avatar-rounded">
                                                <i className="ri-user-line fs-16"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0 fw-semibold">New user registered</p>
                                            <span className="text-muted fs-12">2 min ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                        <div className="pe-2">
                                            <span className="avatar avatar-sm bg-warning-transparent avatar-rounded">
                                                <i className="ri-shopping-bag-line fs-16"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0 fw-semibold">New order received</p>
                                            <span className="text-muted fs-12">1 hour ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                        <div className="pe-2">
                                            <span className="avatar avatar-sm bg-success-transparent avatar-rounded">
                                                <i className="ri-check-line fs-16"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="mb-0 fw-semibold">Payment confirmed</p>
                                            <span className="text-muted fs-12">3 hours ago</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="p-3 border-top text-center">
                                <a href="#" className="text-primary text-decoration-underline fs-13">View all notifications <i className="ri-arrow-right-line"></i></a>
                            </div>
                        </div>
                    </li>

                    {/* Fullscreen Toggle */}
                    <li className="header-element fullscreen-button">
                        <a href="#" className="header-link" onClick={(e) => {
                            e.preventDefault();
                            if (!document.fullscreenElement) {
                                document.documentElement.requestFullscreen();
                            } else {
                                document.exitFullscreen();
                            }
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon full-screen-open" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none" />
                                <polyline points="168 48 208 48 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                <polyline points="88 208 48 208 48 168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                <polyline points="208 168 208 208 168 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                <polyline points="48 88 48 48 88 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                            </svg>
                        </a>
                    </li>

                    <li className="header-element dropdown">
                        <a href="#" className="header-link dropdown-toggle" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <div className="d-flex align-items-center">
                                <div className="me-xl-2 me-0">
                                    <img src="/admin-assets/assets/images/faces/2.jpg" alt="img" className="avatar avatar-sm avatar-rounded" />
                                </div>
                                <div className="d-xl-block d-none lh-1">
                                    <span className="fw-medium lh-1">Mr. Jack</span>
                                </div>
                            </div>
                        </a>
                        <ul className="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end" aria-labelledby="mainHeaderProfile">
                            <li>
                                <div className="py-2 px-3 text-center">
                                    <span className="fw-semibold">Mr. Jack Miller</span>
                                    <span className="d-block fs-12 text-muted">UI/UX Designer</span>
                                </div>
                            </li>
                            <li><a className="dropdown-item d-flex align-items-center" href="#"><i className="ti ti-user text-primary me-2 fs-16"></i>Profile</a></li>
                            <li><a className="dropdown-item d-flex align-items-center" href="#"><i className="ti ti-mail text-secondary me-2 fs-16"></i>Inbox</a></li>
                            <li className="py-2 px-3"><a className="btn btn-primary btn-sm w-100" href="#">Log Out</a></li>
                        </ul>
                    </li>

                    {/* Settings Gear */}
                    <li className="header-element">
                        <a href="#" className="header-link" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas">
                            <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none" />
                                <circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                <path d="M130.05,16h-4.1a113.22,113.22,0,0,0-15.77,1.13l-.72.1A8,8,0,0,0,103,24.43L100.67,40a88.26,88.26,0,0,0-16.86,9.9l-14-5.53a8,8,0,0,0-9.26,2.9l-.41.59A112.67,112.67,0,0,0,52,62.31l-.26.46A8,8,0,0,0,53,72.28L64.68,83.26a87.48,87.48,0,0,0,0,19.48L53,113.72a8,8,0,0,0-1.22,9.81l.26.46A112.22,112.22,0,0,0,60.15,138l.41.58a8,8,0,0,0,9.26,2.9l14-5.53A88.26,88.26,0,0,0,100.67,216l2.37,15.43a8,8,0,0,0,6.46,7.18l.72.1A113.22,113.22,0,0,0,130.05,240h.1a113.22,113.22,0,0,0,15.77-1.13l.72-.1A8,8,0,0,0,153,231.57L155.33,216a88.26,88.26,0,0,0,16.86-9.9l14,5.53a8,8,0,0,0,9.26-2.9l.41-.59A112.67,112.67,0,0,0,204,193.69l.26-.46A8,8,0,0,0,203,183.72L191.32,172.74a87.48,87.48,0,0,0,0-19.48L203,142.28a8,8,0,0,0,1.22-9.81l-.26-.46A112.22,112.22,0,0,0,195.85,118l-.41-.58a8,8,0,0,0-9.26-2.9l-14,5.53A88.26,88.26,0,0,0,155.33,40l-2.37-15.43a8,8,0,0,0-6.46-7.18l-.72-.1A113.22,113.22,0,0,0,130.05,16Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
