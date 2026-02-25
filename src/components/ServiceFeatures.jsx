import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Undo, Package, Headset, Percentage } from "iconoir-react";
import 'swiper/css';
import 'swiper/css/pagination';

const ServiceFeatures = () => {
    return (
        <div className="flat-spacing-4">
            <div className="container-full">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    breakpoints={{
                        576: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 30 },
                    }}
                    pagination={{
                        clickable: true,
                        el: '.sw-pagination-service',
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                    }}
                    className="tf-swiper"
                    dir="ltr"
                >
                    {/* slide 1 */}
                    <SwiperSlide>
                        <div className="box-icon_V01 style-3 wow fadeInLeft">
                            <span className="icon">
                                <Undo height={36} width={36} />
                            </span>
                            <div className="content">
                                <h6 className="title">14-Day Returns</h6>
                                <p className="text cl-text-2">Risk-free shopping with easy returns.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* slide 2 */}
                    <SwiperSlide>
                        <div className="box-icon_V01 style-3 wow fadeInLeft">
                            <span className="icon">
                                <Package height={36} width={36} />
                            </span>
                            <div className="content">
                                <h6 className="title">Free Shipping</h6>
                                <p className="text cl-text-2">No extra costs, just the price you see.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* slide 3 */}
                    <SwiperSlide>
                        <div className="box-icon_V01 style-3 wow fadeInLeft">
                            <span className="icon">
                                <Headset height={36} width={36} />
                            </span>
                            <div className="content">
                                <h6 className="title">24/7 Support</h6>
                                <p className="text cl-text-2">24/7 support, always here just for you.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* slide 4 */}
                    <SwiperSlide>
                        <div className="box-icon_V01 style-3 wow fadeInLeft">
                            <span className="icon">
                                <Percentage height={36} width={36} />
                            </span>
                            <div className="content">
                                <h6 className="title">Member Discounts</h6>
                                <p className="text cl-text-2">Special prices for our loyal customers.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="sw-line-default style-2 tf-sw-pagination sw-pagination-service"></div>
            </div>
        </div>
    );
};

export default ServiceFeatures;
