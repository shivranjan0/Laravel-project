import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, EffectFade, Navigation } from 'swiper/modules';
import { ShoppingBag, NavArrowLeft, NavArrowRight } from "iconoir-react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const ShopLook = () => {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);

    return (
        <section className="section-thumbs-v2 tf-sw-thumbs">
            {/* Big Image Column (Right Column in HTML, visually Right or Left depending on CSS) */}
            <div className="col-right">
                <Swiper
                    onSwiper={setFirstSwiper}
                    controller={{ control: secondSwiper }}
                    modules={[Controller, EffectFade]}
                    effect="fade"
                    className="sw-thumb"
                    dir="ltr"
                >
                    <SwiperSlide>
                        <div className="sw-image">
                            <img loading="lazy" width="960" height="960" src="/assets/images/product/fashion-2/square/product-1_2.jpg" alt="Slim Ribbed Cotton T-Shirt" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sw-image">
                            <img loading="lazy" width="960" height="960" src="/assets/images/product/fashion-2/square/product-2_2.jpg" alt="Peplum Top" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sw-image">
                            <img loading="lazy" width="960" height="960" src="/assets/images/product/fashion-2/square/product-4_2.jpg" alt="Embossed Wallet" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Product Details Column (Left Column in HTML) */}
            <div className="col-left">
                <div className="sect-heading type-2 wow fadeInUp">
                    <h3 className="s-title">Slim Ribbed Cotton T-Shirt</h3>
                    <p className="cl-text-2">
                        Slim Ribbed Cotton T-Shirt top’s minimal design focuses on user needs and allows to adapt and support many environments.
                    </p>
                </div>
                <Swiper
                    onSwiper={setSecondSwiper}
                    controller={{ control: firstSwiper }}
                    modules={[Controller, Navigation]}
                    navigation={{
                        nextEl: nextEl,
                        prevEl: prevEl,
                    }}
                    className="sw-main-thumb"
                    dir="ltr"
                >
                    <SwiperSlide>
                        <div className="thumbs-prd wow fadeInUp">
                            <div className="prd-image">
                                <img loading="lazy" width="330" height="440" src="/assets/images/product/fashion-2/product-12.jpg" alt="Product" />
                            </div>
                            <div className="prd-mini">
                                <div className="mini-image">
                                    <img loading="lazy" width="88" height="100" src="/assets/images/product/fashion-2/product-12.jpg" alt="Product" />
                                </div>
                                <div className="mini-infor">
                                    <a href="product-detail.html" className="info_name text-body-1 fw-medium link-underline-primary text-line-clamp-2">
                                        Asymmetrical Long-Sleeved T-Shirt
                                    </a>
                                    <div className="info_price price-wrap">
                                        <span className="price-new text-primary fw-semibold">$34.99</span>
                                        <span className="price-old text-caption-01 cl-text-3">$59.99</span>
                                    </div>
                                </div>
                                <div className="mini-action">
                                    <a href="#shoppingCart" data-bs-toggle="offcanvas" className="btn-action hover-tooltip tooltip-left box-icon">
                                        <ShoppingBag height={20} width={20} />
                                        <span className="tooltip">Add to Cart</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="thumbs-prd">
                            <div className="prd-image">
                                <img loading="lazy" width="330" height="440" src="/assets/images/product/fashion-2/product-13.jpg" alt="Product" />
                            </div>
                            <div className="prd-mini">
                                <div className="mini-image">
                                    <img loading="lazy" width="88" height="100" src="/assets/images/product/fashion-2/product-13.jpg" alt="Product" />
                                </div>
                                <div className="mini-infor">
                                    <a href="product-detail.html" className="info_name text-body-1 fw-medium link-underline-primary text-line-clamp-2">
                                        Peplum Top With Seam Detail
                                    </a>
                                    <div className="info_price price-wrap">
                                        <span className="price-new text-primary fw-semibold">$22.99</span>
                                        <span className="price-old text-caption-01 cl-text-3">$39.99</span>
                                    </div>
                                </div>
                                <div className="mini-action">
                                    <a href="#shoppingCart" data-bs-toggle="offcanvas" className="btn-action hover-tooltip tooltip-left box-icon">
                                        <ShoppingBag height={20} width={20} />
                                        <span className="tooltip">Add to Cart</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="thumbs-prd">
                            <div className="prd-image">
                                <img loading="lazy" width="330" height="440" src="/assets/images/product/fashion-2/product-15.jpg" alt="Product" />
                            </div>
                            <div className="prd-mini">
                                <div className="mini-image">
                                    <img loading="lazy" width="88" height="100" src="/assets/images/product/fashion-2/product-15.jpg" alt="Product" />
                                </div>
                                <div className="mini-infor">
                                    <a href="product-detail.html" className="info_name text-body-1 fw-medium link-underline-primary text-line-clamp-2">
                                        Embossed Wallet With Logo
                                    </a>
                                    <div className="info_price price-wrap">
                                        <span className="price-new text-primary fw-semibold">$67.99</span>
                                        <span className="price-old text-caption-01 cl-text-3">$99.99</span>
                                    </div>
                                </div>
                                <div className="mini-action">
                                    <a href="#shoppingCart" data-bs-toggle="offcanvas" className="btn-action hover-tooltip tooltip-left box-icon">
                                        <ShoppingBag height={20} width={20} />
                                        <span className="tooltip">Add to Cart</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="tes_thumb">
                        <div ref={(node) => setPrevEl(node)} className="tf-sw-nav-circle nav-prev-swiper">
                            <NavArrowLeft height={24} width={24} />
                        </div>
                        <div ref={(node) => setNextEl(node)} className="tf-sw-nav-circle nav-next-swiper">
                            <NavArrowRight height={24} width={24} />
                        </div>
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default ShopLook;
