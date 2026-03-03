/**
 * admin-init.js — safe minimal replacement for defaultmenu.min.js + custom-switcher.min.js
 * Only initialises what's actually present in the DOM.
 */
(function () {
    "use strict";

    /* ── Sidebar toggle ── */
    var sidebar = document.getElementById("sidebar");
    var toggleBtn = document.querySelector(".sidemenu-toggle");
    var mainContent = document.querySelector(".main-content");
    var overlay = document.getElementById("responsive-overlay");
    var html = document.documentElement;

    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            if (window.innerWidth >= 992) {
                // desktop: toggle icon-overlay mode
                if (html.getAttribute("data-icon-overlay") === "open") {
                    html.removeAttribute("data-icon-overlay");
                } else {
                    html.setAttribute("data-toggled", "icon-overlay-close");
                }
                html.setAttribute("data-nav-layout", "vertical");
                html.setAttribute("data-vertical-style", "overlay");
            } else {
                // mobile: open / close sidebar
                if (html.getAttribute("data-toggled") === "open") {
                    html.setAttribute("data-toggled", "close");
                    if (overlay) overlay.classList.remove("active");
                } else {
                    html.setAttribute("data-toggled", "open");
                    if (overlay) {
                        overlay.classList.add("active");
                        overlay.addEventListener("click", function () {
                            html.setAttribute("data-toggled", "close");
                            overlay.classList.remove("active");
                        }, { once: true });
                    }
                }
            }
        });
    }

    /* ── Responsive overlay on resize ── */
    window.addEventListener("resize", function () {
        if (window.innerWidth >= 992 && overlay) {
            overlay.classList.remove("active");
            if (html.getAttribute("data-toggled") === "open") {
                html.setAttribute("data-toggled", "close");
            }
        }
    });

    /* ── Mark active sidebar link ── */
    var currentPath = window.location.pathname;
    document.querySelectorAll(".side-menu__item").forEach(function (link) {
        var href = link.getAttribute("href");
        if (href && currentPath.endsWith(href)) {
            link.classList.add("active");
            var slide = link.closest(".slide");
            if (slide) slide.classList.add("active");
        }
    });

    /* ── Sidebar submenu toggles ── */
    document.querySelectorAll(".slide.has-sub > .side-menu__item").forEach(function (item) {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            var submenu = item.nextElementSibling;
            if (!submenu) return;
            var isOpen = submenu.style.display === "block";
            /* close other open submenus at same level */
            var parent = item.closest("ul");
            if (parent) {
                parent.querySelectorAll(":scope > .slide.has-sub > .slide-menu").forEach(function (m) {
                    m.style.display = "none";
                    var s = m.previousElementSibling;
                    if (s) s.closest(".slide") && s.closest(".slide").classList.remove("open");
                });
            }
            submenu.style.display = isOpen ? "none" : "block";
            var slide = item.closest(".slide");
            if (slide) slide.classList.toggle("open", !isOpen);
        });
    });

    /* ── Dark / light theme toggle ── */
    var layoutSetting = document.querySelector(".layout-setting");
    if (layoutSetting) {
        layoutSetting.addEventListener("click", function () {
            if (html.getAttribute("data-theme-mode") === "dark") {
                html.setAttribute("data-theme-mode", "light");
                html.setAttribute("data-header-styles", "light");
                html.setAttribute("data-menu-styles", "light");
                localStorage.removeItem("zynixdarktheme");
            } else {
                html.setAttribute("data-theme-mode", "dark");
                html.setAttribute("data-header-styles", "dark");
                html.setAttribute("data-menu-styles", "dark");
                localStorage.setItem("zynixdarktheme", "true");
            }
        });
    }

    /* ── Restore saved theme from localStorage ── */
    if (localStorage.getItem("zynixdarktheme")) {
        html.setAttribute("data-theme-mode", "dark");
        html.setAttribute("data-header-styles", "dark");
        html.setAttribute("data-menu-styles", "dark");
    }

})();
