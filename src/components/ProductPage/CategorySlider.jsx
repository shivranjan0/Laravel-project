import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const CategorySlider = ({ categories }) => {
    return (
        <section className="flat-spacing pb-0">
            <div className="container">
                <Swiper
                    dir="ltr"
                    className="tf-swiper"
                    spaceBetween={30}
                    slidesPerView={2}
                    breakpoints={{
                        576: { slidesPerView: 3, spaceBetween: 15 },
                        768: { slidesPerView: 4, spaceBetween: 15 },
                        1024: { slidesPerView: 6, spaceBetween: 30 },
                    }}
                    modules={[Pagination]}
                    pagination={{ clickable: true, el: ".sw-line-default" }}
                >
                    {categories.map((cat, index) => (
                        <SwiperSlide key={index}>
                            <a href={cat.link} className="category-v01 hover-img">
                                <div className="cate-image img-style">
                                    <img loading="lazy" width="210" height="210" src={cat.img} alt={cat.name} />
                                </div>
                                <h5 className="cate-name text-center link link-underline">{cat.name}</h5>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="sw-line-default style-2 tf-sw-pagination"></div>
            </div>
        </section>
    );
};

export default CategorySlider;
