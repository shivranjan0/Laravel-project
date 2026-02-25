import Link from "next/link";
import { Xmark, Search, Heart, DataTransferBoth, Eye, Star } from "iconoir-react";

const SearchModal = () => {
    return (
        <div className="modal modalCentered fade modal-search" id="search" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="d-flex align-items-center justify-content-between gap-10">
                        <h3>Search</h3>
                        <span className="icon-close-popup flex-shrink-0" data-bs-dismiss="modal">
                            <Xmark height={24} width={24} />
                        </span>
                    </div>
                    <form action="#" className="form-search-nav style-2" onSubmit={(e) => e.preventDefault()}>
                        <fieldset>
                            <input type="text" placeholder="Searching..." required />
                        </fieldset>
                        <button type="submit" className="btn-action">
                            <Search height={24} width={24} />
                        </button>
                    </form>
                    <div className="search-feature">
                        <p className="h5 mb-16">Feature Keywords Today</p>
                        <div className="tf-list-tag">
                            <Link href="#" className="link-tag">Dresses</Link>
                            <Link href="#" className="link-tag">Dresses women</Link>
                            <Link href="#" className="link-tag">Dresses midi</Link>
                            <Link href="#" className="link-tag">Dress summer</Link>
                        </div>
                    </div>
                    <div className="recently-view">
                        <p className="h5 mb-16">Recently Viewed Products</p>
                        <div className="row">
                            {/* Product 1 */}
                            <div className="col-6 mb-3">
                                <div className="card-product">
                                    <div className="card-product_wrapper">
                                        <Link href="/product" className="product-img">
                                            <img className="img-product" loading="lazy" src="/assets/images/product/product-1.jpg" alt="Product" />
                                            <img className="img-hover" loading="lazy" src="/assets/images/product/product-1_2.jpg" alt="Product" />
                                        </Link>
                                        <ul className="product-action_list">
                                            <li className="wishlist">
                                                <a href="#;" className="hover-tooltip tooltip-left box-icon">
                                                    <Heart height={20} width={20} />
                                                    <span className="tooltip">Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li className="compare">
                                                <a href="#compare" data-bs-toggle="offcanvas" className="hover-tooltip tooltip-left box-icon">
                                                    <DataTransferBoth height={20} width={20} />
                                                    <span className="tooltip">Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#quickView" data-bs-toggle="offcanvas" className="hover-tooltip tooltip-left box-icon">
                                                    <Eye height={20} width={20} />
                                                    <span className="tooltip">Quick view</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="product-badge_list">
                                            <li className="product-badge_item text-caption-01 new">NEW</li>
                                        </ul>
                                        <div className="product-action_bot">
                                            <a href="#quickAdd" data-bs-toggle="modal" className="tf-btn btn-white small w-100">
                                                Quick Add
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-product_info">
                                        <Link href="/product" className="name-product lh-24 fw-medium link-underline-text">
                                            Lyocell wrap top
                                        </Link>
                                        <div className="star-wrap d-flex align-items-center">
                                            <Star height={14} width={14} />
                                            <Star height={14} width={14} />
                                            <Star height={14} width={14} />
                                            <Star height={14} width={14} />
                                            <Star height={14} width={14} />
                                        </div>
                                        <div className="price-wrap">
                                            <span className="price-new text-primary fw-semibold">$69,99</span>
                                            <span className="price-old text-caption-01 cl-text-3">$99,99</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Product 2 */}
                            <div className="col-6 mb-3">
                                <div className="card-product">
                                    <div className="card-product_wrapper">
                                        <Link href="/product" className="product-img">
                                            <img className="img-product" loading="lazy" src="/assets/images/product/product-2.jpg" alt="Product" />
                                            <img className="img-hover" loading="lazy" src="/assets/images/product/product-2_2.jpg" alt="Product" />
                                        </Link>
                                        <ul className="product-action_list">
                                            <li className="wishlist">
                                                <a href="#;" className="hover-tooltip tooltip-left box-icon">
                                                    <Heart height={20} width={20} />
                                                    <span className="tooltip">Add to Wishlist</span>
                                                </a>
                                            </li>
                                            <li className="compare">
                                                <a href="#compare" data-bs-toggle="offcanvas" className="hover-tooltip tooltip-left box-icon">
                                                    <DataTransferBoth height={20} width={20} />
                                                    <span className="tooltip">Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#quickView" data-bs-toggle="offcanvas" className="hover-tooltip tooltip-left box-icon">
                                                    <Eye height={20} width={20} />
                                                    <span className="tooltip">Quick view</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="product-badge_list">
                                            <li className="product-badge_item text-caption-01 sale">-25%</li>
                                        </ul>
                                        <div className="product-action_bot">
                                            <a href="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn btn-white small w-100">
                                                Quick Add
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-product_info">
                                        <Link href="/product" className="name-product lh-24 fw-medium link-underline-text">
                                            Buttons cotton top
                                        </Link>
                                        <div className="star-wrap d-flex align-items-center">
                                            <Star height={14} width={14} />
                                            <Star height={14} width={14} />
                                            <Star height={14} width={14} />
                                            <Star height={14} width={14} />
                                            <Star height={14} width={14} />
                                        </div>
                                        <div className="price-wrap">
                                            <span className="price-new text-primary fw-semibold">$29,99</span>
                                            <span className="price-old text-caption-01 cl-text-3">$49,99</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
