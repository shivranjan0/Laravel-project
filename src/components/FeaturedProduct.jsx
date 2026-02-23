import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ProductCard from './ProductCard';

const FeaturedProduct = () => {
    return (
        <section className="flat-spacing">
            <div className="container-full">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="sect-heading wow fadeInUp">
                            <h3 className="s-title mb-8">
                                Featured Sweaters and Knits
                            </h3>
                            <p className="text-body-1 cl-text-2">
                                Our curated knitwear collection for maximum warmth and flawless style.
                            </p>
                        </div>
                        <a href="shop-default.html" className="tf-btn animate-btn wow fadeInUp mb-30">
                            View All Products
                        </a>
                    </div>
                    <div className="col-lg-9">
                        <Swiper
                            dir="ltr"
                            className="tf-swiper wrap-sw-over"
                            spaceBetween={30}
                            slidesPerView={2}
                            breakpoints={{
                                1024: { slidesPerView: 3 },
                                768: { slidesPerView: 2 },
                                0: { slidesPerView: 2 }
                            }}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                        >
                            <SwiperSlide className="wow fadeInUp">
                                <ProductCard
                                    img1="/assets/images/product/fashion-2/product-9.jpg"
                                    img2="/assets/images/product/fashion-2/product-9_2.jpg"
                                    title="Turtleneck Sweater With Zip"
                                    price="$69.99"
                                    oldPrice="$99.99"
                                    isNew={true}
                                    rating={5}
                                    colors={[
                                        { name: 'Gray', colorClass: 'bg-soft-gray', img: '/assets/images/product/fashion-2/product-9.jpg' },
                                        { name: 'Blue', colorClass: 'bg-sky-blue', img: '/assets/images/product/fashion-2/product-9_3.jpg' }
                                    ]}
                                    marquee={true}
                                    countdown={true}
                                />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp" data-wow-delay="0.1s">
                                <ProductCard
                                    img1="/assets/images/product/fashion-2/product-10.jpg"
                                    img2="/assets/images/product/fashion-2/product-10_2.jpg"
                                    title="Mesh Shoe With Heel"
                                    price="$29.99"
                                    oldPrice="$49.99"
                                    sale="-25%"
                                    rating={5}
                                />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp" data-wow-delay="0.2s">
                                <ProductCard
                                    img1="/assets/images/product/fashion-2/product-11.jpg"
                                    img2="/assets/images/product/fashion-2/product-11_2.jpg"
                                    title="Turtleneck Knit Sweater"
                                    price="$67.99"
                                    oldPrice="$99.99"
                                    rating={5}
                                    sizes={["XS", "S", "M"]}
                                />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp" data-wow-delay="0.3s">
                                <ProductCard
                                    img1="/assets/images/product/fashion-2/product-1.jpg"
                                    img2="/assets/images/product/fashion-2/product-1_2.jpg"
                                    title="Cotton Short-Sleeved T-Shirt"
                                    price="$69.99"
                                    oldPrice="$99.99"
                                    isNew={true}
                                    rating={5}
                                    marquee={true}
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProduct;
