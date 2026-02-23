import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // Ensure autoplay is available if needed, though basic css import might suffice for core
import { Autoplay } from "swiper/modules";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Topbar */}
            <div className="tf-topbar topbar-s3 bg-dark tf-btn-swiper-main">
                <div className="container-full">
                    <div className="row align-items-center">
                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="tf-list list-currenci">
                                <div className="tf-currencies d-none d-xl-block">
                                    <select
                                        className="tf-dropdown-select style-default color-white type-currencies"
                                        defaultValue="United States (USD $)"
                                    >
                                        <option data-thumbnail="/assets/images/country/us.png">United States (USD $)</option>
                                        <option data-thumbnail="/assets/images/country/vn.png">Viet Nam (VND ₫)</option>
                                    </select>
                                </div>
                                <div className="tf-currencies d-xl-none">
                                    <select
                                        className="tf-dropdown-select style-default color-white type-currencies"
                                        defaultValue="(USD $)"
                                    >
                                        <option data-thumbnail="/assets/images/country/us.png">(USD $)</option>
                                        <option data-thumbnail="/assets/images/country/vn.png">(VND ₫)</option>
                                    </select>
                                </div>
                                <div className="tf-languages">
                                    <select className="tf-dropdown-select style-default color-white type-languages">
                                        <option>English</option>
                                        <option>العربية</option>
                                        <option>简体中文</option>
                                        <option>اردو</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1 d-none d-xl-block">
                            <div className="nav-prev-swiper d-flex text-white link">
                                <i className="icon icon-CaretLeft"></i>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="text-center">
                                <Swiper
                                    dir="ltr"
                                    className="tf-swiper"
                                    autoplay={{ delay: 1500, disableOnInteraction: false }}
                                    loop={true}
                                    modules={[Autoplay]}
                                >
                                    <SwiperSlide>
                                        <div className="d-flex align-items-center justify-content-center gap-8">
                                            <i className="icon icon-SealPercent text-primary fs-20"></i>
                                            <p className="text-white text-start text-line-clamp-1">
                                                20% Off – Auto Applied at Checkout – Limited Time Only
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <p className="text-white text-line-clamp-1">
                                            20% Off – Auto Applied at Checkout – Limited Time Only
                                        </p>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className="col-sm-1 d-none d-xl-block">
                            <div className="nav-next-swiper d-flex text-white link justify-content-end">
                                <i className="icon icon-CaretRightThin"></i>
                            </div>
                        </div>
                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="d-flex align-items-center justify-content-end gap-20">
                                <a href="https://www.facebook.com/" target="_blank" className="d-flex"><i className="fs-20 text-white link icon icon-FacebookLogo"></i></a>
                                <a href="https://x.com/" target="_blank" className="d-flex"><i className="fs-20 text-white link icon icon-XLogo"></i></a>
                                <a href="https://www.instagram.com/" target="_blank" className="d-flex"><i className="fs-20 text-white link icon icon-InstagramLogo"></i></a>
                                <a href="https://www.tiktok.com/" target="_blank" className="d-flex"><i className="fs-20 text-white link icon icon-TiktokLogo"></i></a>
                                <a href="https://www.snapchat.com/" target="_blank" className="d-flex"><i className="fs-20 text-white link icon icon-SnapchatLogo"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Topbar */}

            {/* Header */}
            <header
                className={`tf-header header-s7 scr-box-shadow ${isScrolled ? "header-sticky" : ""}`}
                style={{ top: 0, width: "100%", zIndex: 1000 }}
            >
                <div className="container-full">
                    <div className="header-inner">
                        <div className="box-open-menu-mobile d-xl-none">
                            <a href="#mobileMenu" data-bs-toggle="offcanvas" className="btn-open-menu">
                                <i className="icon icon-List"></i>
                            </a>
                        </div>
                        <div className="header-left d-none d-xl-flex">
                            <a href="/" className="logo-site">
                                <img loading="lazy" width="150" height="30" src="/assets/images/logo/logo.svg" alt="Image" />
                            </a>
                            <nav className="box-navigation">
                                <ul className="box-nav-menu">
                                    <li className="menu-item position-relative">
                                        <Link to="/" className="item-link">
                                            <span className="text cus-text">Home</span>
                                            <i className="icon icon-CaretDown"></i>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/shop" className="item-link">
                                            <span className="text cus-text">Shop</span>
                                            <i className="icon icon-CaretDown"></i>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/product" className="item-link">
                                            <span className="text cus-text">Product</span>
                                            <i className="icon icon-CaretDown"></i>
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className="item-link">
                                            <span className="text cus-text">Blog</span>
                                            <i className="icon icon-CaretDown"></i>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className="item-link">
                                            <span className="text cus-text">Pages</span>
                                            <i className="icon icon-CaretDown"></i>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className="item-link">
                                            <span className="text cus-text">Buy Template</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-center d-xl-none">
                            <a href="/" className="logo-site">
                                <img loading="lazy" width="150" height="30" src="/assets/images/logo/logo.svg" alt="Image" />
                            </a>
                        </div>
                        <div className="header-right">
                            <form action="#" className="form-search-nav style-3 d-none d-xl-block">
                                <fieldset>
                                    <input type="text" placeholder="Search Products" required="" />
                                </fieldset>
                                <button type="submit" className="btn-action">
                                    <i className="icon icon-MagnifyingGlass"></i>
                                </button>
                            </form>
                            <ul className="nav-icon-list">
                                <li className="d-xl-none">
                                    <a href="#search" data-bs-toggle="modal" className="nav-icon-item link">
                                        <i className="icon icon-MagnifyingGlass"></i>
                                    </a>
                                </li>
                                <li className="d-none d-xl-block">
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
                                        <span className="count">12</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
