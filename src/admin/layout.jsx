"use client";
import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import Head from 'next/head';
import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import Loader from './layout/Loader';
import Switcher from './layout/Switcher';

export default function AdminLayout({ children }) {
    const [popperReady, setPopperReady] = useState(false);
    const [bootstrapReady, setBootstrapReady] = useState(false);
    const [wavesReady, setWavesReady] = useState(false);
    const [simplebarReady, setSimplebarReady] = useState(false);
    const [switcherReady, setSwitcherReady] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        const body = document.body;
        const savedTheme = localStorage.getItem('adminThemeMode') || 'light';
        const menuStyle = savedTheme === 'dark' ? 'dark' : 'light';
        html.setAttribute("data-nav-layout", "vertical");
        html.setAttribute("data-theme-mode", savedTheme);
        html.setAttribute("data-menu-styles", menuStyle);
        html.setAttribute("data-header-styles", menuStyle);
        html.setAttribute("data-vertical-style", "overlay");
        // Scale the admin layout to 90% so it fits at 100% browser zoom
        html.style.fontSize = "14.4px";
        // Set admin background on html & body so no storefront color bleeds through
        const adminBg = savedTheme === 'dark' ? '#1a1c2b' : '#f3f4f9';
        html.style.backgroundColor = adminBg;
        body.style.backgroundColor = adminBg;

        return () => {
            html.removeAttribute("data-nav-layout");
            html.removeAttribute("data-theme-mode");
            html.removeAttribute("data-menu-styles");
            html.removeAttribute("data-header-styles");
            html.removeAttribute("data-vertical-style");
            html.style.fontSize = "";
            html.style.backgroundColor = "";
            body.style.backgroundColor = "";
        };
    }, []);

    return (
        <>
            <Head>
                <link rel="stylesheet" href="/admin-assets/assets/libs/node-waves/waves.min.css" />
                <link rel="stylesheet" href="/admin-assets/assets/libs/simplebar/simplebar.min.css" />
                <link rel="stylesheet" href="/admin-assets/assets/css/icons.css" />
                <link rel="stylesheet" href="/admin-assets/assets/css/styles.css" />
                <link rel="stylesheet" href="/admin-assets/assets/css/admin-dark-overrides.css" />
            </Head>

            <Switcher />
            <Loader />

            <div className="page">
                <Navbar />
                <Sidebar />
                <div className="main-content app-content">
                    {children}
                </div>
            </div>

            <div className="scrollToTop">
                <span className="arrow lh-1">
                    <i className="ri-arrow-up-line ms-1 fs-16"></i>
                </span>
            </div>
            <div id="responsive-overlay"></div>

            {/* Step 1 — Popper (global) must load first */}
            <Script
                src="/admin-assets/assets/libs/@popperjs/core/umd/popper.min.js"
                strategy="afterInteractive"
                onLoad={() => setPopperReady(true)}
            />

            {/* Step 2 — Bootstrap (needs Popper global) */}
            {popperReady && (
                <Script
                    src="/admin-assets/assets/libs/bootstrap/js/bootstrap.bundle.min.js"
                    strategy="afterInteractive"
                    onLoad={() => setBootstrapReady(true)}
                />
            )}

            {/* Step 3 — Waves */}
            {bootstrapReady && (
                <Script
                    src="/admin-assets/assets/libs/node-waves/waves.min.js"
                    strategy="afterInteractive"
                    onLoad={() => setWavesReady(true)}
                />
            )}

            {/* Step 4 — SimpleBar */}
            {wavesReady && (
                <Script
                    src="/admin-assets/assets/libs/simplebar/simplebar.min.js"
                    strategy="afterInteractive"
                    onLoad={() => setSimplebarReady(true)}
                />
            )}

            {/* Step 5 — Admin Init */}
            {simplebarReady && (
                <Script
                    src="/admin-assets/assets/js/admin-init.js"
                    strategy="afterInteractive"
                    onLoad={() => setSwitcherReady(true)}
                />
            )}

            {/* Step 6 — Custom logic */}
            {switcherReady && (
                <Script
                    src="/admin-assets/assets/js/custom-safe.js"
                    strategy="afterInteractive"
                />
            )}
        </>
    );
}
