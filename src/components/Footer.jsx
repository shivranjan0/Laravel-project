
const Footer = () => {
    return (
        <footer className="tf-footer footer-s5 bg-white">
            <div className="position-relative">
                <div className="br-line fake-class top-0"></div>
                <div className="br-line fake-class bottom-0 d-none d-sm-flex"></div>
                <div className="container-full">
                    <div className="footer-inner flat-spacing">
                        <div className="col-left">
                            <div className="footer-col-block footer-wrap-start">
                                <p className="footer-heading footer-heading-mobile ">OUR STORE</p>
                                <div className="tf-collapse-content">
                                    <p className="cl-text-2 mb-4">
                                        24/7 Support Center:
                                    </p>
                                    <a href="tel:0112348888" className=" link h4 fw-medium mb-12">
                                        (+01) 1234 8888
                                    </a>
                                    <a href="https://www.google.com/maps?q=600+N+Michigan+Ave+Chicago,+IL+60611+USA"
                                        target="_blank" rel="noopener noreferrer" className="cl-text-2 link mb-4">
                                        600 N Michigan Ave, Chicago, IL 60611, USA
                                    </a>
                                    <a href="mailto:hi.amere@gmail.com" className="cl-text-2 link">
                                        hi.amere@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="br-line type-vertical cl-nor"></div>
                        <div className="col-center">
                            <div className="footer-link-list">
                                <div className="footer-col-block footer-wrap-2">
                                    <p className="footer-heading footer-heading-mobile ">COMPANY</p>
                                    <div className="tf-collapse-content">
                                        <ul className="footer-menu-list">
                                            <li><a href="about.html" className="cl-text-2 link">About Us</a></li>
                                            <li><a href="our-store.html" className="cl-text-2 link">Our Stories</a></li>
                                            <li><a href="contact.html" className="cl-text-2 link">Contact us</a></li>
                                            <li><a href="blog.html" className="cl-text-2 link">Latest New</a></li>
                                            <li><a href="account-page.html" className="cl-text-2 link">My Account</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-col-block footer-wrap-3">
                                    <p className="footer-heading footer-heading-mobile ">CUSTOMER</p>
                                    <div className="tf-collapse-content">
                                        <ul className="footer-menu-list">
                                            <li><a href="shipping.html" className="cl-text-2 link">Shipping</a></li>
                                            <li><a href="return-and-refund.html" className="cl-text-2 link">Return & Refund</a></li>
                                            <li><a href="privacy-policy.html" className="cl-text-2 link">Privacy Policy</a></li>
                                            <li><a href="term-and-condition.html" className="cl-text-2 link">Terms & Conditions</a></li>
                                            <li><a href="faq.html" className="cl-text-2 link">Orders FAQs</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-col-block footer-wrap-4">
                                    <p className="footer-heading footer-heading-mobile ">MY ACCOUNT</p>
                                    <div className="tf-collapse-content">
                                        <ul className="footer-menu-list">
                                            <li><a href="login.html" className="cl-text-2 link">Login</a></li>
                                            <li><a href="register.html" className="cl-text-2 link">Sign up</a></li>
                                            <li><a href="account-page.html" className="cl-text-2 link">My Account</a></li>
                                            <li><a href="wishlist.html" className="cl-text-2 link">Wish List</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="br-line type-vertical cl-nor"></div>
                        <div className="col-right">
                            <div className="footer-col-block footer-wrap-end">
                                <p className="footer-heading footer-heading-mobile ">NEWSLETTER</p>
                                <div className="tf-collapse-content">
                                    <p className="footer-desc cl-text-2 mb-16">
                                        Subscribe for store updates and discounts.
                                    </p>
                                    <form className="form-sub mb-16" onSubmit={(e) => e.preventDefault()}>
                                        <fieldset>
                                            <input type="email" placeholder="Enter your e-mail" required />
                                        </fieldset>
                                        <button type="submit" className="btn-action">
                                            <i className="icon icon-ArrowUpRight"></i>
                                        </button>
                                    </form>
                                    <p className="text-remember cl-text-2">
                                        By clicking subcribe, you agree to the
                                        <a href="term-and-condition.html" className=" link link-underline"> Terms of Service </a>
                                        and
                                        <a href="privacy-policy.html" className=" link link-underline"> Privacy Policy</a>.
                                    </p>
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
