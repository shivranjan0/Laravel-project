import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function CategorySection() {
    return (
        <section className="flat-spacing">
            <div className="container-layout-right">
                <Swiper
                    dir="ltr"
                    className="tf-swiper"
                    spaceBetween={30}
                    slidesPerView={1.3}
                    breakpoints={{
                        768: {
                            slidesPerView: 2.3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3.3,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 4.3605,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination]}
                    pagination={{ clickable: true, el: ".sw-dot-default" }}
                >
                    <SwiperSlide className="wow fadeInUp">
                        <div className="category-v06 style-2 hover-img4">
                            <a href="shop-default.html" className="cate-image img-style4">
                                <img loading="lazy" width="400" height="533" src="/assets/images/category/fashion-2/cate-1.jpg" alt="Image" />
                            </a>
                            <a href="shop-default.html" className="cate-content">
                                <h6 className="cate_name">Clothing</h6>
                                <p className="cate_quantity">78 items</p>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="wow fadeInUp">
                        <div className="category-v06 style-2 hover-img4">
                            <a href="shop-default.html" className="cate-image img-style4">
                                <img loading="lazy" width="400" height="533" src="/assets/images/category/fashion-2/cate-2.jpg" alt="Image" />
                            </a>
                            <a href="shop-default.html" className="cate-content">
                                <h6 className="cate_name">Jewelry</h6>
                                <p className="cate_quantity">120 items</p>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="wow fadeInUp">
                        <div className="category-v06 style-2 hover-img4">
                            <a href="shop-default.html" className="cate-image img-style4">
                                <img loading="lazy" width="400" height="533" src="/assets/images/category/fashion-2/cate-3.jpg" alt="Image" />
                            </a>
                            <a href="shop-default.html" className="cate-content">
                                <h6 className="cate_name">Shoes</h6>
                                <p className="cate_quantity">48 items</p>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="wow fadeInUp">
                        <div className="category-v06 style-2 hover-img4">
                            <a href="shop-default.html" className="cate-image img-style4">
                                <img loading="lazy" width="400" height="533" src="/assets/images/category/fashion-2/cate-4.jpg" alt="Image" />
                            </a>
                            <a href="shop-default.html" className="cate-content">
                                <h6 className="cate_name">Bags</h6>
                                <p className="cate_quantity">62 items</p>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="wow fadeInUp">
                        <div className="category-v06 style-2 hover-img4">
                            <a href="shop-default.html" className="cate-image img-style4">
                                <img loading="lazy" width="400" height="533" src="/assets/images/category/fashion-2/cate-5.jpg" alt="Image" />
                            </a>
                            <a href="shop-default.html" className="cate-content">
                                <h6 className="cate_name">Wallets</h6>
                                <p className="cate_quantity">36 items</p>
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default CategorySection;
