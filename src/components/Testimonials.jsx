import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Star, CheckCircle } from 'iconoir-react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    return (
        <section className="flat-spacing pt-0">
            <div className="flat-spacing bg-main">
                <div className="container-full">
                    <div className="sect-heading type-2 has-col-right wow fadeInUp">
                        <div>
                            <h3 className="s-title">
                                What Our Customers Say
                            </h3>
                            <p className="s-desc cl-text-2">
                                Real stories from people who love our products.
                            </p>
                        </div>
                        <div className="col-right">
                            <a href="shop-default.html" className="tf-btn-line-2 py-4 style-primary">
                                <span className="fw-semibold">
                                    Read All Reviews
                                </span>
                            </a>
                        </div>
                    </div>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={15}
                        slidesPerView={1}
                        breakpoints={{
                            600: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 40 },
                        }}
                        pagination={{
                            clickable: true,
                            el: '.sw-pagination-testimonials',
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                        }}
                        className="tf-swiper"
                        dir="ltr"
                    >
                        {/* slide 1 */}
                        <SwiperSlide>
                            <div className="testimonial-v04 style-2 wow fadeInUp">
                                <div className="star-wrap d-flex align-items-center mb-12">
                                    <Star height={24} width={24} className="text-primary" />
                                    <Star height={24} width={24} className="text-primary" />
                                    <Star height={24} width={24} className="text-primary" />
                                    <Star height={24} width={24} className="text-primary" />
                                    <Star height={24} width={24} className="text-primary" />
                                </div>
                                <div className="tes_author d-flex align-items-center gap-8 mb-20">
                                    <h6 className="author-name">Emma Collins</h6>
                                    <div className="author-verified d-flex align-items-center gap-4">
                                        <CheckCircle height={20} width={20} className="text-primary" />
                                        <span className="cl-text-2">
                                            Verified Buyer
                                        </span>
                                    </div>
                                </div>
                                <p className="tes_text h6 text-capitalize mb-20">
                                    "I am extremely satisfied with this T-shirt! The cotton material is softer and
                                    more breathable than I expected. After many washes, the shirt still holds its
                                    shape very well and does not pill or stretch. I like the product material.”
                                </p>
                                <div className="br-line mb-20"></div>
                                <div className="tes_product">
                                    <div className="product-image">
                                        <img loading="lazy" width="60" height="60"
                                            src="/assets/images/product/fashion-2/square/product-1.jpg" alt="Image" />
                                    </div>
                                    <div className="product-infor">
                                        <a href="product-detail.html"
                                            className="link-underline-primary fw-medium lh-24">
                                            Asymmetrical Long-Sleeved T-Shirt
                                        </a>
                                        <div className="prd_price text-caption-01">
                                            $60.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* slide 2 */}
                        <SwiperSlide>
                            <div className="testimonial-v04 style-2 wow fadeInUp">
                                <div className="star-wrap d-flex align-items-center mb-12">
                                    <Star height={24} width={24} className="text-primary" />
                                    <Star height={24} width={24} className="text-primary" />
                                    <Star height={24} width={24} className="text-primary" />
                                    <Star height={24} width={24} className="text-primary" />
                                    <Star height={24} width={24} className="text-primary" />
                                </div>
                                <div className="tes_author d-flex align-items-center gap-8 mb-20">
                                    <h6 className="author-name">Evelyn Taylor</h6>
                                    <div className="author-verified d-flex align-items-center gap-4">
                                        <CheckCircle height={20} width={20} className="text-primary" />
                                        <span className="cl-text-2">
                                            Verified Buyer
                                        </span>
                                    </div>
                                </div>
                                <p className="tes_text h6 text-capitalize mb-20">
                                    “The fit is fantastic—I ordered my usual size (Small) and it's just the right
                                    length and fitted perfectly without being too tight. The neckline and armholes
                                    are cut modestly, which is a huge plus. I am extremely satisfied.”
                                </p>
                                <div className="br-line mb-20"></div>
                                <div className="tes_product">
                                    <div className="product-image">
                                        <img loading="lazy" width="60" height="60"
                                            src="/assets/images/product/fashion-2/square/product-2.jpg" alt="Image" />
                                    </div>
                                    <div className="product-infor">
                                        <a href="product-detail.html"
                                            className="link-underline-primary fw-medium lh-24">
                                            Peplum Top With Seam Detail
                                        </a>
                                        <div className="prd_price text-caption-01">
                                            $39.99
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* slide 3 */}
                        <SwiperSlide>
                            <div className="testimonial-v04 style-2 wow fadeInUp">
                                <div className="star-wrap d-flex align-items-center mb-12">
                                    <Star height={24} width={24} className="text-primary" />
                                    <Star height={24} width={24} className="text-primary" />
                                    <Star height={24} width={24} className="text-primary" />
                                    <Star height={24} width={24} className="text-primary" />
                                    <Star height={24} width={24} className="text-primary" />
                                </div>
                                <div className="tes_author d-flex align-items-center gap-8 mb-20">
                                    <h6 className="author-name">Cara Wang</h6>
                                    <div className="author-verified d-flex align-items-center gap-4">
                                        <CheckCircle height={20} width={20} className="text-primary" />
                                        <span className="cl-text-2">
                                            Verified Buyer
                                        </span>
                                    </div>
                                </div>
                                <p className="tes_text h6 text-capitalize mb-20">
                                    “I am genuinely impressed with this jacket. The material is fantastic—it feels durable
                                    and high-quality, and the outer shell provides great wind and light water
                                    resistance, which is perfect for my morning commute.”
                                </p>
                                <div className="br-line mb-20"></div>
                                <div className="tes_product">
                                    <div className="product-image">
                                        <img loading="lazy" width="60" height="60"
                                            src="/assets/images/product/fashion-2/square/product-3.jpg" alt="Image" />
                                    </div>
                                    <div className="product-infor">
                                        <a href="product-detail.html"
                                            className="link-underline-primary fw-medium lh-24">
                                            Faux-Laether Jacket With Pockets
                                        </a>
                                        <div className="prd_price text-caption-01">
                                            $89.99
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="sw-line-default style-2 sw-pagination-testimonials"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
