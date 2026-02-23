import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Instagram = () => {
    return (
        <section className="themesFlat px-10 pb-40">
            <div className="sect-heading type-2 text-center wow fadeInUp">
                <h3 className="s-title">
                    Follow Us On Instagram
                </h3>
                <p className="s-desc text-body-1 cl-text-2">
                    @Amerce
                </p>
            </div>
            <Swiper
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={2}
                breakpoints={{
                    576: { slidesPerView: 3 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
                pagination={{
                    clickable: true,
                    el: '.sw-pagination-instagram',
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                className="tf-swiper"
                dir="ltr"
            >
                {/* slide 1 */}
                <SwiperSlide>
                    <div className="gallery-item style-2 hover-img hover-overlay wow fadeInUp">
                        <div className="image img-style">
                            <img loading="lazy" width="346" height="346" src="/assets/images/gallery/gallery-52.jpg" alt="Image" />
                        </div>
                        <a href="product-detail.html" className="box-icon hover-tooltip rounded-circle">
                            <span className="icon icon-Eye"></span>
                            <span className="tooltip">View product</span>
                        </a>
                    </div>
                </SwiperSlide>
                {/* slide 2 */}
                <SwiperSlide>
                    <div className="gallery-item style-2 hover-img hover-overlay wow fadeInUp">
                        <div className="image img-style">
                            <img loading="lazy" width="346" height="346" src="/assets/images/gallery/gallery-53.jpg" alt="Image" />
                        </div>
                        <a href="product-detail.html" className="box-icon hover-tooltip rounded-circle">
                            <span className="icon icon-Eye"></span>
                            <span className="tooltip">View product</span>
                        </a>
                    </div>
                </SwiperSlide>
                {/* slide 3 */}
                <SwiperSlide>
                    <div className="gallery-item style-2 hover-img hover-overlay wow fadeInUp">
                        <div className="image img-style">
                            <img loading="lazy" width="346" height="346" src="/assets/images/gallery/gallery-54.jpg" alt="Image" />
                        </div>
                        <a href="product-detail.html" className="box-icon hover-tooltip rounded-circle">
                            <span className="icon icon-Eye"></span>
                            <span className="tooltip">View product</span>
                        </a>
                    </div>
                </SwiperSlide>
                {/* slide 4 */}
                <SwiperSlide>
                    <div className="gallery-item style-2 hover-img hover-overlay wow fadeInUp">
                        <div className="image img-style">
                            <img loading="lazy" width="346" height="346" src="/assets/images/gallery/gallery-55.jpg" alt="Image" />
                        </div>
                        <a href="product-detail.html" className="box-icon hover-tooltip rounded-circle">
                            <span className="icon icon-Eye"></span>
                            <span className="tooltip">View product</span>
                        </a>
                    </div>
                </SwiperSlide>
                {/* slide 5 */}
                <SwiperSlide>
                    <div className="gallery-item style-2 hover-img hover-overlay wow fadeInUp">
                        <div className="image img-style">
                            <img loading="lazy" width="346" height="346" src="/assets/images/gallery/gallery-56.jpg" alt="Image" />
                        </div>
                        <a href="product-detail.html" className="box-icon hover-tooltip rounded-circle">
                            <span className="icon icon-Eye"></span>
                            <span className="tooltip">View product</span>
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="sw-dot-default tf-sw-pagination sw-pagination-instagram"></div>
        </section>
    );
};

export default Instagram;
