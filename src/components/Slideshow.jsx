import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import { NavArrowLeft, NavArrowRight } from "iconoir-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

function Slideshow() {
    return (
        <div className="tf-slideshow tf-btn-swiper-main hover-sw-nav">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade, Navigation]}
                className="tf-swiper sw-slide-show slider_effect_fade"
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                pagination={{ clickable: true, el: ".tf-sw-pagination" }}
                navigation={{
                    nextEl: ".nav-next-swiper",
                    prevEl: ".nav-prev-swiper",
                }}
            >
                {/* Item 1 */}
                <SwiperSlide>
                    <div className="slideshow-wrap">
                        <div className="sld_image">
                            <img
                                loading="lazy"
                                width="1920"
                                height="730"
                                src="/assets/images/slider/fashion-2/slider-1.jpg"
                                alt="Image"
                            />
                        </div>
                        <div className="sld_content pst-5">
                            <div className="container">
                                <div className="content-sld_wrap">
                                    <div className="heading">
                                        <p className="sub-text_sld text-body-1 fade-item fade-item-1 mb-15">
                                            DISCOVER THE ART OF MODERN DRESSING
                                        </p>
                                        <p className="title_sld text-display fw-medium fade-item fade-item-2">
                                            Find Your <br />
                                            Signature Style
                                        </p>
                                    </div>
                                    <div className="fade-item fade-item-3">
                                        <a href="shop-default.html" className="tf-btn animate-btn">
                                            Shop Styles
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Item 2 */}
                <SwiperSlide>
                    <div className="slideshow-wrap">
                        <div className="sld_image">
                            <img
                                loading="lazy"
                                width="1920"
                                height="730"
                                src="/assets/images/slider/fashion-2/slider-2.jpg"
                                alt="Image"
                            />
                        </div>
                        <div className="sld_content pst-5">
                            <div className="container">
                                <div className="content-sld_wrap">
                                    <div className="heading">
                                        <p className="sub-text_sld text-body-1 fade-item fade-item-1 mb-15">
                                            DISCOVER THE ART OF MODERN DRESSING
                                        </p>
                                        <p className="title_sld text-display fw-medium fade-item fade-item-2">
                                            Your Ultimate <br />
                                            Style Destination
                                        </p>
                                    </div>
                                    <div className="fade-item fade-item-3">
                                        <a href="shop-default.html" className="tf-btn animate-btn">
                                            Shop Styles
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Item 3 */}
                <SwiperSlide>
                    <div className="slideshow-wrap">
                        <div className="sld_image">
                            <img
                                loading="lazy"
                                width="1920"
                                height="730"
                                src="/assets/images/slider/fashion-2/slider-3.jpg"
                                alt="Image"
                            />
                        </div>
                        <div className="sld_content pst-5">
                            <div className="container">
                                <div className="content-sld_wrap">
                                    <div className="heading">
                                        <p className="sub-text_sld text-body-1 fade-item fade-item-1 mb-15">
                                            DISCOVER THE ART OF MODERN DRESSING
                                        </p>
                                        <p className="title_sld text-display fw-medium fade-item fade-item-2">
                                            Find Your <br />
                                            Signature Style
                                        </p>
                                    </div>
                                    <div className="fade-item fade-item-3">
                                        <a href="shop-default.html" className="tf-btn animate-btn">
                                            Shop Styles
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="sw-line-default tf-sw-pagination"></div>
            </Swiper>

            <div className="group-nav-action">
                <div className="container-full">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="tf-sw-nav-2 d-lg-flex d-none nav-prev-swiper">
                            <NavArrowLeft height={24} width={24} />
                        </div>
                        <div className="tf-sw-nav-2 d-lg-flex d-none nav-next-swiper">
                            <NavArrowRight height={24} width={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slideshow;
