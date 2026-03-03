(function () {
    "use strict";

    /* tooltip */
    var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    if (typeof bootstrap !== "undefined") {
        tooltipTriggerList.forEach(function (el) { new bootstrap.Tooltip(el); });
    }

    /* popover */
    var popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    if (typeof bootstrap !== "undefined") {
        popoverTriggerList.forEach(function (el) { new bootstrap.Popover(el); });
    }

    /* breadcrumb date range picker */
    if (typeof flatpickr !== "undefined" && document.getElementById("daterange")) {
        flatpickr("#daterange", {
            mode: "range",
            dateFormat: "F, d Y",
            defaultDate: ["May, 01 2024", "May, 30 2024"],
            disableMobile: true,
        });
    }

    /* color pickers — only init if container elements exist */
    var pickrContainerPrimary = document.querySelector(".pickr-container-primary");
    var themeContainerPrimary = document.querySelector(".theme-container-primary");
    if (pickrContainerPrimary && themeContainerPrimary && typeof Pickr !== "undefined") {
        var nanoButtons = [];
        var nanoPickr = null;
        var btn = document.createElement("button");
        btn.innerHTML = "nano";
        nanoButtons.push(btn);
        btn.addEventListener("click", function () {
            var el = document.createElement("p");
            pickrContainerPrimary.appendChild(el);
            if (nanoPickr) nanoPickr.destroyAndRemove();
            nanoPickr = new Pickr({ el: el, theme: "nano", default: "#735dff" });
        });
        themeContainerPrimary.appendChild(btn);
        nanoButtons[0].click();
    }

    var pickrContainerBackground = document.querySelector(".pickr-container-background");
    var themeContainerBackground = document.querySelector(".theme-container-background");
    if (pickrContainerBackground && themeContainerBackground && typeof Pickr !== "undefined") {
        var nanoButtons1 = [];
        var nanoPickr1 = null;
        var btn1 = document.createElement("button");
        btn1.innerHTML = "nano";
        nanoButtons1.push(btn1);
        btn1.addEventListener("click", function () {
            var el = document.createElement("p");
            pickrContainerBackground.appendChild(el);
            if (nanoPickr1) nanoPickr1.destroyAndRemove();
            nanoPickr1 = new Pickr({ el: el, theme: "nano", default: "#735dff" });
        });
        themeContainerBackground.appendChild(btn1);
        nanoButtons1[0].click();
    }

    /* header theme toggle */
    var layoutSetting = document.querySelector(".layout-setting");
    if (layoutSetting) {
        layoutSetting.addEventListener("click", function () {
            var html = document.querySelector("html");
            if (!html) return;
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

    /* Choices JS */
    document.addEventListener("DOMContentLoaded", function () {
        if (typeof Choices === "undefined") return;
        document.querySelectorAll("[data-trigger]").forEach(function (el) {
            new Choices(el, { allowHTML: true });
        });
    });

    /* footer year */
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.innerHTML = new Date().getFullYear();

    /* node waves */
    if (typeof Waves !== "undefined") {
        Waves.attach(".btn-wave", ["waves-light"]);
        Waves.init();
    }

    /* card remove */
    document.querySelectorAll('[data-bs-toggle="card-remove"]').forEach(function (ele) {
        ele.addEventListener("click", function (e) {
            e.preventDefault();
            var card = ele.closest(".card");
            if (card) card.remove();
        });
    });

    /* card fullscreen */
    document.querySelectorAll('[data-bs-toggle="card-fullscreen"]').forEach(function (ele) {
        ele.addEventListener("click", function (e) {
            var card = ele.closest(".card");
            if (card) {
                card.classList.toggle("card-fullscreen");
                card.classList.remove("card-collapsed");
            }
            e.preventDefault();
        });
    });

    /* count-up */
    var countI = 1;
    setInterval(function () {
        document.querySelectorAll(".count-up").forEach(function (ele) {
            if (ele.getAttribute("data-count") >= countI) {
                countI += 1;
                ele.innerText = countI;
            }
        });
    }, 10);

    /* back to top */
    var scrollToTop = document.querySelector(".scrollToTop");
    if (scrollToTop) {
        window.addEventListener("scroll", function () {
            scrollToTop.style.display = window.scrollY > 100 ? "flex" : "none";
        });
        scrollToTop.addEventListener("click", function () {
            window.scrollTo(0, 0);
        });
    }

    /* SimpleBar header dropdowns */
    if (typeof SimpleBar !== "undefined") {
        ["header-notification-scroll1", "header-notification-scroll2",
            "header-notification-scroll3", "header-cart-items-scroll"].forEach(function (id) {
                var el = document.getElementById(id);
                if (el) new SimpleBar(el, { autoHide: true });
            });
    }

    /* autoComplete search */
    if (typeof autoComplete !== "undefined" && document.getElementById("header-search")) {
        new autoComplete({
            selector: "#header-search",
            data: {
                src: ["What is the meaning of life?", "How does gravity work?",
                    "Why is the sky blue?", "What is the capital of France?"],
                cache: true,
            },
            resultItem: { highlight: true },
        });
    }

    /* cart dropdown remove */
    document.querySelectorAll(".dropdown-item-close").forEach(function (button) {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            var item = button.closest(".dropdown-item");
            if (item) item.remove();
            var cartData = document.getElementById("cart-data");
            var cartBadge = document.getElementById("cart-icon-badge");
            var count = document.querySelectorAll(".dropdown-item-close").length;
            if (cartData) cartData.innerText = count + " Items";
            if (cartBadge) cartBadge.innerText = count;
            if (count === 0) {
                var emptyItem = document.querySelector(".empty-header-item");
                var emptyShow = document.querySelector(".empty-item");
                if (emptyItem) emptyItem.classList.add("d-none");
                if (emptyShow) emptyShow.classList.remove("d-none");
            }
        });
    });

    /* notifications dropdown remove */
    document.querySelectorAll(".dropdown-item-close1").forEach(function (button) {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (button.parentNode && button.parentNode.parentNode &&
                button.parentNode.parentNode.parentNode &&
                button.parentNode.parentNode.parentNode.parentNode) {
                button.parentNode.parentNode.parentNode.parentNode.remove();
            }
            var notifData = document.getElementById("notifiation-data");
            var remaining = document.querySelectorAll(".dropdown-item-close1").length;
            if (notifData) notifData.innerText = remaining + " Unread";
            if (remaining === 0) {
                var h1 = document.querySelector(".empty-header-item1");
                var h2 = document.querySelector(".empty-item1");
                if (h1) h1.classList.add("d-none");
                if (h2) h2.classList.remove("d-none");
            }
        });
    });

    /* toggle switches */
    document.querySelectorAll(".toggle").forEach(function (e) {
        e.addEventListener("click", function () { e.classList.toggle("on"); });
    });

    /* product quantity buttons */
    var minValue = 0, maxValue = 30;
    document.querySelectorAll(".product-quantity-minus").forEach(function (el) {
        el.addEventListener("click", function () {
            var input = el.parentElement && el.parentElement.childNodes[3];
            if (input) {
                var val = Number(input.value);
                if (val > minValue) input.value = val - 1;
            }
        });
    });
    document.querySelectorAll(".product-quantity-plus").forEach(function (el) {
        el.addEventListener("click", function () {
            var input = el.parentElement && el.parentElement.childNodes[3];
            if (input) {
                var val = Number(input.value);
                if (val < maxValue) input.value = val + 1;
            }
        });
    });

})();

/* fullscreen */
function openFullscreen() {
    var elem = document.documentElement;
    var open = document.querySelector(".full-screen-open");
    var close = document.querySelector(".full-screen-close");
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (elem.requestFullscreen) elem.requestFullscreen();
        else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
        if (close) { close.classList.add("d-block"); close.classList.remove("d-none"); }
        if (open) open.classList.add("d-none");
    } else {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        if (open) { open.classList.remove("d-none"); open.classList.add("d-block"); }
        if (close) { close.classList.remove("d-block"); close.classList.add("d-none"); }
    }
}
