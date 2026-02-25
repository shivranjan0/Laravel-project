import { useState } from "react";
import Link from "next/link";
import ServiceFeatures from "./ServiceFeatures";
import { ArrowUpRight } from "iconoir-react";

const Footer = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection((prev) => (prev === section ? null : section));
    };

    return (
        <footer className="tf-footer footer-s5 bg-white">
            <ServiceFeatures />
            <div className="position-relative">
                <div className="br-line fake-class top-0"></div>
                <div className="br-line fake-class bottom-0 d-none d-sm-flex"></div>
                <div className="container-full">
                    <div className="footer-inner flat-spacing">
                        <div className="col-left">
                            <div className={`footer-col-block footer-wrap-start ${activeSection === "our-store" ? "open" : ""}`}>
                                <p className="footer-heading footer-heading-mobile" onClick={() => toggleSection("our-store")}>OUR STORE</p>
                                <div className="tf-collapse-content">
                                    <div>
                                        <p className="cl-text-2 mb-4">
                                            24/7 Support Center:
                                        </p>
                                        <a href="tel:0112348888" className="link h4 fw-medium mb-12 d-block">
                                            (+01) 1234 8888
                                        </a>
                                        <a href="https://www.google.com/maps?q=600+N+Michigan+Ave+Chicago,+IL+60611+USA"
                                            target="_blank" rel="noopener noreferrer" className="cl-text-2 link mb-4 d-block">
                                            600 N Michigan Ave, Chicago, IL 60611, USA
                                        </a>
                                        <a href="mailto:hi.amere@gmail.com" className="cl-text-2 link">
                                            hi.amere@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="br-line type-vertical cl-nor"></div>
                        <div className="col-center">
                            <div className="footer-link-list">
                                <div className={`footer-col-block footer-wrap-2 ${activeSection === "company" ? "open" : ""}`}>
                                    <p className="footer-heading footer-heading-mobile" onClick={() => toggleSection("company")}>COMPANY</p>
                                    <div className="tf-collapse-content">
                                        <div>
                                            <ul className="footer-menu-list">
                                                <li><Link href="/about" className="cl-text-2 link">About Us</Link></li>
                                                <li><Link href="/blog" className="cl-text-2 link">Our Stories</Link></li>
                                                <li><Link href="/contact" className="cl-text-2 link">Contact us</Link></li>
                                                <li><Link href="/blog" className="cl-text-2 link">Latest New</Link></li>
                                                <li><Link href="/my-account" className="cl-text-2 link">My Account</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={`footer-col-block footer-wrap-3 ${activeSection === "customer" ? "open" : ""}`}>
                                    <p className="footer-heading footer-heading-mobile" onClick={() => toggleSection("customer")}>CUSTOMER</p>
                                    <div className="tf-collapse-content">
                                        <div>
                                            <ul className="footer-menu-list">
                                                <li><Link href="#" className="cl-text-2 link">Shipping</Link></li>
                                                <li><Link href="#" className="cl-text-2 link">Return & Refund</Link></li>
                                                <li><Link href="#" className="cl-text-2 link">Privacy Policy</Link></li>
                                                <li><Link href="#" className="cl-text-2 link">Terms & Conditions</Link></li>
                                                <li><Link href="#" className="cl-text-2 link">Orders FAQs</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={`footer-col-block footer-wrap-4 ${activeSection === "my-account" ? "open" : ""}`}>
                                    <p className="footer-heading footer-heading-mobile" onClick={() => toggleSection("my-account")}>MY ACCOUNT</p>
                                    <div className="tf-collapse-content">
                                        <div>
                                            <ul className="footer-menu-list">
                                                <li><Link href="/login" className="cl-text-2 link">Login</Link></li>
                                                <li><Link href="/signup" className="cl-text-2 link">Sign up</Link></li>
                                                <li><Link href="/my-account" className="cl-text-2 link">My Account</Link></li>
                                                <li><Link href="/wishlist" className="cl-text-2 link">Wish List</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="br-line type-vertical cl-nor"></div>
                        <div className="col-right">
                            <div className={`footer-col-block footer-wrap-end ${activeSection === "newsletter" ? "open" : ""}`}>
                                <p className="footer-heading footer-heading-mobile" onClick={() => toggleSection("newsletter")}>NEWSLETTER</p>
                                <div className="tf-collapse-content">
                                    <div>
                                        <p className="footer-desc cl-text-2 mb-16">
                                            Subscribe for store updates and discounts.
                                        </p>
                                        <form className="form-sub mb-16" onSubmit={(e) => e.preventDefault()}>
                                            <fieldset>
                                                <input type="email" placeholder="Enter your e-mail" required />
                                            </fieldset>
                                            <button type="submit" className="btn-action">
                                                <ArrowUpRight height={20} width={20} />
                                            </button>
                                        </form>
                                        <p className="text-remember cl-text-2">
                                            By clicking subcribe, you agree to the
                                            <Link href="#" className="link link-underline"> Terms of Service </Link>
                                            and
                                            <Link href="#" className="link link-underline"> Privacy Policy</Link>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container-full">
                    <div className="inner-bottom">
                        <div className="tf-list list-currenci">
                            <div className="tf-currencies">
                                <select
                                    className="tf-dropdown-select style-default color-text-2 type-currencies"
                                    defaultValue="United States (USD $)"
                                >
                                    <option data-thumbnail="/assets/images/country/us.png">United States (USD $)</option>
                                    <option data-thumbnail="/assets/images/country/vn.png">Viet Nam (VND ₫)</option>
                                </select>
                            </div>
                            <div className="tf-languages">
                                <select className="tf-dropdown-select style-default color-text-2 type-languages">
                                    <option>English</option>
                                    <option>العربية</option>
                                    <option>简体中文</option>
                                    <option>اردو</option>
                                </select>
                            </div>
                        </div>
                        <p className="text-nocopy cl-text-2">
                            ©2026 Amerce. All Rights Reserved.
                        </p>
                        <ul className="tf-list payment-list">
                            <li><img loading="lazy" width="38" height="24" src="/assets/images/payment/visa.svg" alt="Image" /></li>
                            <li><img loading="lazy" width="38" height="24" src="/assets/images/payment/master-card.svg" alt="Image" /></li>
                            <li><img loading="lazy" width="38" height="24" src="/assets/images/payment/amex.svg" alt="Image" /></li>
                            <li><img loading="lazy" width="38" height="24" src="/assets/images/payment/paypal.svg" alt="Image" /></li>
                            <li><img loading="lazy" width="38" height="24" src="/assets/images/payment/water.svg" alt="Image" /></li>
                            <li><img loading="lazy" width="38" height="24" src="/assets/images/payment/discover.svg" alt="Image" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
