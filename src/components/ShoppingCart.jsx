
const ShoppingCart = () => {
    return (
        <div className="offcanvas offcanvas-end popup-shopping-cart" id="shoppingCart">
            <div className="tf-minicart-recommendations file-delete">
                <div className="title d-flex justify-content-between align-items-center">
                    <h5>You Might Like</h5>
                    <i className="icon icon-X2 link remove fs-24 cs-pointer"></i>
                </div>
                <div className="wrap-recommendations">
                    <div className="list-cart">
                        <div className="list-cart-item">
                            <a href="#" className="image">
                                <img loading="lazy" width="212" height="283" src="/assets/images/product/product-4.jpg" alt="Image" />
                            </a>
                            <div className="content">
                                <a className="name fw-medium link text-line-clamp-1" href="product-detail.html">
                                    High neck midi wool coat
                                </a>
                                <div className="price-wrap">
                                    <span className="price-new text-primary fw-semibold">$29,99</span>
                                    <span className="price-old text-caption-01 cl-text-3">$49,99</span>
                                </div>
                            </div>
                        </div>
                        <div className="list-cart-item">
                            <a href="#" className="image">
                                <img loading="lazy" width="212" height="283" src="/assets/images/product/product-3.jpg" alt="Image" />
                            </a>
                            <div className="content">
                                <a className="name fw-medium link text-line-clamp-1" href="product-detail.html">
                                    100% linen slim-fit shirt
                                </a>
                                <div className="price-wrap">
                                    <span className="price-new text-primary fw-semibold">$29,99</span>
                                    <span className="price-old text-caption-01 cl-text-3">$49,99</span>
                                </div>
                            </div>
                        </div>
                        <div className="list-cart-item">
                            <a href="#" className="image">
                                <img loading="lazy" width="212" height="283" src="/assets/images/product/product-10.jpg" alt="Image" />
                            </a>
                            <div className="content">
                                <a className="name fw-medium link text-line-clamp-1" href="product-detail.html">
                                    Square frame sunglasses
                                </a>
                                <div className="price-wrap">
                                    <span className="price-new text-primary fw-semibold">$29,99</span>
                                    <span className="price-old text-caption-01 cl-text-3">$49,99</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="canvas-wrapper">
                <div className="popup-header">
                    <div className="d-flex align-items-center justify-content-between mb-12">
                        <h5 className="title">Shopping Cart</h5>
                        <span className="icon-X2 icon-close-popup" data-bs-dismiss="offcanvas"></span>
                    </div>
                    <div className="cart-threshold">
                        <p className="text">
                            Buy <span className="text-primary fw-7">$70.00</span> more to get freeship
                        </p>
                        <div className="tf-progress-bar tf-progress-ship">
                            <div className="value" style={{ width: "25%" }}></div>
                        </div>
                    </div>
                </div>
                <div className="wrap">
                    <div className="tf-mini-cart-wrap list-file-delete wrap-empty_text">
                        <div className="tf-mini-cart-main">
                            <div className="tf-mini-cart-sroll">
                                <div className="tf-mini-cart-items">
                                    {/* Cart Item 1 */}
                                    <div className="tf-mini-cart-item file-delete">
                                        <div className="tf-mini-cart-image">
                                            <img loading="lazy" width="100" height="133" src="/assets/images/product/product-3.jpg" alt="Image Product" />
                                        </div>
                                        <div className="tf-mini-cart-info">
                                            <a href="product-detail.html" className="name fw-medium link text-line-clamp-1">
                                                V-neck cotton T-shirt
                                            </a>
                                            <div className="tf-prd-select select-color text-caption-01 mb-4">
                                                <span className="type-text cl-text-3">Color:&nbsp;</span>
                                                <div className="type-select">
                                                    <select className="bg-white" defaultValue="Light Gray">
                                                        <option>Light Gray</option>
                                                        <option>Charcoal</option>
                                                        <option>Beige</option>
                                                        <option>Taupe</option>
                                                        <option>Sage</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="tf-prd-select text-caption-01">
                                                <span className="type-text cl-text-3">Size:&nbsp;</span>
                                                <div className="type-select">
                                                    <select className="bg-white" defaultValue="Small">
                                                        <option>Small</option>
                                                        <option>Medium</option>
                                                        <option>Large</option>
                                                        <option>Extra Large</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tf-mini-cart-price">
                                            <div className="tf-btn-line-3 type-primary remove cs-pointer">
                                                <span className="text-caption-01 fw-semibold">Remove</span>
                                            </div>
                                            <div className="fw-semibold d-flex align-items-center justify-content-between gap-4">
                                                <span className="number">1</span>
                                                <span>x</span>
                                                <span className="price tf-mini-card-price">$36.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Cart Item 2 */}
                                    <div className="tf-mini-cart-item file-delete">
                                        <div className="tf-mini-cart-image">
                                            <img loading="lazy" width="100" height="133" src="/assets/images/product/product-8.jpg" alt="Image Product" />
                                        </div>
                                        <div className="tf-mini-cart-info">
                                            <a href="product-detail.html" className="name fw-medium link text-line-clamp-1">
                                                Oval shoulder bag
                                            </a>
                                            <div className="tf-prd-select select-color text-caption-01 mb-4">
                                                <span className="type-text cl-text-3">Color:&nbsp;</span>
                                                <div className="type-select">
                                                    <select className="bg-white" defaultValue="Light Gray">
                                                        <option>Light Gray</option>
                                                        <option>Charcoal</option>
                                                        <option>Beige</option>
                                                        <option>Taupe</option>
                                                        <option>Sage</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="tf-prd-select text-caption-01">
                                                <span className="type-text cl-text-3">Size:&nbsp;</span>
                                                <div className="type-select">
                                                    <select className="bg-white" defaultValue="Small">
                                                        <option>Small</option>
                                                        <option>Medium</option>
                                                        <option>Large</option>
                                                        <option>Extra Large</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tf-mini-cart-price">
                                            <div className="tf-btn-line-3 type-primary remove cs-pointer">
                                                <span className="text-caption-01 fw-semibold">Remove</span>
                                            </div>
                                            <div className="fw-semibold d-flex align-items-center justify-content-between gap-4">
                                                <span className="number">1</span>
                                                <span>x</span>
                                                <span className="price tf-mini-card-price">$43.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tf-mini-cart-bottom box-empty_clear">
                            <div className="tf-mini-cart-tool">
                                <div className="tf-mini-cart-tool-btn btn-add-note">
                                    <i className="icon icon-NotePencil"></i>
                                    <div className="lh-24">Note</div>
                                </div>
                                <div className="tf-mini-cart-tool-btn btn-estimate-shipping">
                                    <i className="icon icon-Truck"></i>
                                    <div className="lh-24">Shipping</div>
                                </div>
                                <div className="tf-mini-cart-tool-btn btn-add-gift">
                                    <i className="icon icon-SealPercent"></i>
                                    <div className="lh-24">Coupon</div>
                                </div>
                            </div>
                            <div className="tf-mini-cart-bottom-wrap">
                                <div className="tf-mini-cart-total">
                                    <h5 className="text-total d-flex align-content-center justify-content-between">
                                        <span className="subtotal">Subtotal</span>
                                        <span className="total-price tf-totals-total-value">$157.00</span>
                                    </h5>
                                </div>
                                <div className="checkbox-wrap">
                                    <input className="tf-check style-2" type="checkbox" id="agree-term" />
                                    <label htmlFor="agree-term">
                                        I agree with <a href="term-and-condition.html" className="text-decoration-underline">Terms & Conditions</a>
                                    </label>
                                </div>
                                <div className="tf-mini-cart-view-checkout">
                                    <a href="view-cart.html" className="tf-btn btn-stroke">View cart</a>
                                    <a href="checkout.html" className="tf-btn animate-btn">Check Out</a>
                                </div>
                                <a href="shop-default.html" className="d-flex justify-content-center fw-semibold text-center link">
                                    Or Continue Shopping
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
