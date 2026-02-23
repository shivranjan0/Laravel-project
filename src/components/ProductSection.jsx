import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import ProductCard from "./ProductCard";

function ProductSection() {
    const [activeTab, setActiveTab] = useState("new");

    const swiperConfig = {
        dir: "ltr",
        className: "tf-swiper wrap-sw-over",
        spaceBetween: 10,
        slidesPerView: 2,
        grid: {
            rows: 2,
            fill: 'row'
        },
        breakpoints: {
            768: { slidesPerView: 3, spaceBetween: 20, grid: { rows: 2 } },
            1024: { slidesPerView: 4, spaceBetween: 30, grid: { rows: 2 } },
        },
        pagination: {
            clickable: true,
            el: '.sw-pagination-product',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
        },
        modules: [Grid, Pagination],
    };

    return (
        <div className="flat-spacing pt-0 flat-animate-tab">
            <div className="container">
                <div className="sect-heading type-2 overflow-auto text-nowrap">
                    <ul className="tab-btn-wrap-v3 style-4 justify-content-sm-center mb-0" role="tablist">
                        <li className="nav-tab-item" role="presentation">
                            <a href="#new" onClick={(e) => { e.preventDefault(); setActiveTab("new"); }} className={`tf-btn-tab py-4 ${activeTab === "new" ? "active" : ""}`}>
                                <span className="h4">New Arrivals</span>
                            </a>
                        </li>
                        <li className="nav-tab-item" role="presentation">
                            <a href="#best" onClick={(e) => { e.preventDefault(); setActiveTab("best"); }} className={`tf-btn-tab py-4 ${activeTab === "best" ? "active" : ""}`}>
                                <span className="h4">Best Sellers</span>
                            </a>
                        </li>
                        <li className="nav-tab-item" role="presentation">
                            <a href="#sale" onClick={(e) => { e.preventDefault(); setActiveTab("sale"); }} className={`tf-btn-tab py-4 ${activeTab === "sale" ? "active" : ""}`}>
                                <span className="h4">On Sale</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div className={`tab-pane ${activeTab === "new" ? "active show" : ""}`} id="new" role="tabpanel">
                        <Swiper {...swiperConfig}>
                            <SwiperSlide className="wow fadeInUp">
                                <ProductCard img1="/assets/images/product/fashion-2/product-1.jpg" img2="/assets/images/product/fashion-2/product-1_2.jpg" title="Turtleneck Sweater With Zip" price="$69.99" oldPrice="$99.99" isNew={true} rating={5} colors={[{ name: 'White', colorClass: 'bg-white', img: '/assets/images/product/fashion-2/product-1.jpg' }, { name: 'Blue', colorClass: 'bg-blue', img: '/assets/images/product/fashion-2/product-1_2.jpg' }]} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp" data-wow-delay="0.1s">
                                <ProductCard img1="/assets/images/product/fashion-2/product-2.jpg" img2="/assets/images/product/fashion-2/product-2_2.jpg" title="Mesh Shoe With Heel" price="$29.99" oldPrice="$49.99" sale="-25%" rating={5} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp" data-wow-delay="0.2s">
                                <ProductCard img1="/assets/images/product/fashion-2/product-3.jpg" img2="/assets/images/product/fashion-2/product-3_2.jpg" title="Embossed Wallet With Logo" price="$15.99" oldPrice="$25.99" sale="-25%" rating={5} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp" data-wow-delay="0.3s">
                                <ProductCard img1="/assets/images/product/fashion-2/product-4.jpg" img2="/assets/images/product/fashion-2/product-4_2.jpg" title="Pendant Crystals Earrings" price="$45.99" oldPrice="$79.99" isNew={true} rating={4} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp">
                                <ProductCard img1="/assets/images/product/fashion-2/product-5.jpg" img2="/assets/images/product/fashion-2/product-5_2.jpg" title="Shoulder Bag With Buckle" price="$9.99" oldPrice="$19.99" isNew={true} rating={5} colors={[{ name: 'Beige', colorClass: 'bg-beige', img: '/assets/images/product/fashion-2/product-5.jpg' }, { name: 'Orange', colorClass: 'bg-orange', img: '/assets/images/product/fashion-2/product-5_2.jpg' }]} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp" data-wow-delay="0.1s">
                                <ProductCard img1="/assets/images/product/fashion-2/product-6.jpg" img2="/assets/images/product/fashion-2/product-6_2.jpg" title="Ruched Fitted Dress" price="$34.99" oldPrice="$59.99" sale="-25%" rating={5} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp" data-wow-delay="0.2s">
                                <ProductCard img1="/assets/images/product/fashion-2/product-7.jpg" img2="/assets/images/product/fashion-2/product-7_2.jpg" title="Ribbed Polo-Neck Sweater With Buttons" price="$22.99" oldPrice="$39.99" sale="-25%" marquee={true} rating={5} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp" data-wow-delay="0.3s">
                                <ProductCard img1="/assets/images/product/fashion-2/product-8.jpg" img2="/assets/images/product/fashion-2/product-8_2.jpg" title="Turtleneck Knit Sweater" price="$67.99" oldPrice="$99.99" rating={5} />
                            </SwiperSlide>
                        </Swiper>
                        <div className="sw-dot-default tf-sw-pagination sw-pagination-product"></div>
                    </div>
                    <div className={`tab-pane ${activeTab === "best" ? "active show" : ""}`} id="best" role="tabpanel">
                        <Swiper {...swiperConfig}>
                            <SwiperSlide className="wow fadeInUp">
                                <ProductCard img1="/assets/images/product/fashion-2/product-5.jpg" img2="/assets/images/product/fashion-2/product-5_2.jpg" title="Shoulder Bag With Buckle" price="$9.99" oldPrice="$19.99" isNew={true} rating={5} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp" data-wow-delay="0.1s">
                                <ProductCard img1="/assets/images/product/fashion-2/product-6.jpg" img2="/assets/images/product/fashion-2/product-6_2.jpg" title="Ruched Fitted Dress" price="$34.99" oldPrice="$59.99" sale="-25%" rating={5} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp" data-wow-delay="0.2s">
                                <ProductCard img1="/assets/images/product/fashion-2/product-7.jpg" img2="/assets/images/product/fashion-2/product-7_2.jpg" title="Ribbed Polo-Neck Sweater With Buttons" price="$22.99" oldPrice="$39.99" sale="-25%" marquee={true} rating={5} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp" data-wow-delay="0.3s">
                                <ProductCard img1="/assets/images/product/fashion-2/product-8.jpg" img2="/assets/images/product/fashion-2/product-8_2.jpg" title="Turtleneck Knit Sweater" price="$67.99" oldPrice="$99.99" rating={5} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp">
                                <ProductCard img1="/assets/images/product/fashion-2/product-1.jpg" img2="/assets/images/product/fashion-2/product-1_2.jpg" title="Cotton Short-Sleeved T-Shirt" price="$69.99" oldPrice="$99.99" isNew={true} marquee={true} rating={5} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp" data-wow-delay="0.1s">
                                <ProductCard img1="/assets/images/product/fashion-2/product-2.jpg" img2="/assets/images/product/fashion-2/product-2_2.jpg" title="Fabric Shopping Bag" price="$29.99" oldPrice="$49.99" sale="-25%" rating={5} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp" data-wow-delay="0.2s">
                                <ProductCard img1="/assets/images/product/fashion-2/product-3.jpg" img2="/assets/images/product/fashion-2/product-3_2.jpg" title="Embossed Wallet With Logo" price="$15.99" oldPrice="$25.99" sale="-25%" rating={5} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp" data-wow-delay="0.3s">
                                <ProductCard img1="/assets/images/product/fashion-2/product-4.jpg" img2="/assets/images/product/fashion-2/product-4_2.jpg" title="Pendant Crystals Earrings" price="$45.99" oldPrice="$79.99" isNew={true} rating={4} />
                            </SwiperSlide>
                        </Swiper>
                        <div className="sw-dot-default tf-sw-pagination sw-pagination-product"></div>
                    </div>
                    <div className={`tab-pane ${activeTab === "sale" ? "active show" : ""}`} id="sale" role="tabpanel">
                        <Swiper {...swiperConfig}>
                            <SwiperSlide className="wow fadeInUp" data-wow-delay="0.2s">
                                <ProductCard img1="/assets/images/product/fashion-2/product-7.jpg" img2="/assets/images/product/fashion-2/product-7_2.jpg" title="Ribbed Polo-Neck Sweater With Buttons" price="$22.99" oldPrice="$39.99" sale="-25%" marquee={true} rating={5} colors={[{ name: 'Green', colorClass: 'bg-green', img: '/assets/images/product/fashion-2/product-7.jpg' }, { name: 'Black', colorClass: 'bg-black', img: '/assets/images/product/fashion-2/product-7_2.jpg' }]} countdown={true} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp" data-wow-delay="0.3s">
                                <ProductCard img1="/assets/images/product/fashion-2/product-8.jpg" img2="/assets/images/product/fashion-2/product-8_2.jpg" title="Turtleneck Knit Sweater" price="$67.99" oldPrice="$99.99" rating={5} colors={[{ name: 'Brown', colorClass: 'bg-brown', img: '/assets/images/product/fashion-2/product-8.jpg' }, { name: 'Beige', colorClass: 'bg-beige', img: '/assets/images/product/fashion-2/product-8_2.jpg' }, { name: 'Pink', colorClass: 'bg-pink', img: '/assets/images/product/fashion-2/product-8_3.jpg' }]} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp">
                                <ProductCard img1="/assets/images/product/fashion-2/product-1.jpg" img2="/assets/images/product/fashion-2/product-1_2.jpg" title="Cotton Short-Sleeved T-Shirt" price="$69.99" oldPrice="$99.99" isNew={true} marquee={true} rating={5} colors={[{ name: 'Blue', colorClass: 'bg-blue', img: '/assets/images/product/fashion-2/product-1.jpg' }, { name: 'White', colorClass: 'bg-white', img: '/assets/images/product/fashion-2/product-1_2.jpg' }]} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp" data-wow-delay="0.1s">
                                <ProductCard img1="/assets/images/product/fashion-2/product-2.jpg" img2="/assets/images/product/fashion-2/product-2_2.jpg" title="Fabric Shopping Bag" price="$29.99" oldPrice="$49.99" sale="-25%" rating={5} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp">
                                <ProductCard img1="/assets/images/product/fashion-2/product-5.jpg" img2="/assets/images/product/fashion-2/product-5_2.jpg" title="Shoulder Bag With Buckle" price="$9.99" oldPrice="$19.99" isNew={true} rating={5} colors={[{ name: 'Beige', colorClass: 'bg-beige', img: '/assets/images/product/fashion-2/product-5.jpg' }, { name: 'Orange', colorClass: 'bg-orange', img: '/assets/images/product/fashion-2/product-5_2.jpg' }]} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp" data-wow-delay="0.1s">
                                <ProductCard img1="/assets/images/product/fashion-2/product-6.jpg" img2="/assets/images/product/fashion-2/product-6_2.jpg" title="Ruched Fitted Dress" price="$34.99" oldPrice="$59.99" sale="-25%" rating={5} colors={[{ name: 'Brown', colorClass: 'bg-brown', img: '/assets/images/product/fashion-2/product-6.jpg' }, { name: 'Grey', colorClass: 'bg-grey', img: '/assets/images/product/fashion-2/product-6_2.jpg' }]} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp">
                                <ProductCard img1="/assets/images/product/fashion-2/product-3.jpg" img2="/assets/images/product/fashion-2/product-3_2.jpg" title="Embossed Wallet With Logo" price="$15.99" oldPrice="$25.99" sale="-25%" rating={5} />
                            </SwiperSlide>
                            <SwiperSlide className="wow fadeInUp" data-wow-delay="0.1s">
                                <ProductCard img1="/assets/images/product/fashion-2/product-4.jpg" img2="/assets/images/product/fashion-2/product-4_2.jpg" title="Pendant Crystals Earrings" price="$45.99" oldPrice="$79.99" isNew={true} rating={5} />
                            </SwiperSlide>
                        </Swiper>
                        <div className="sw-dot-default tf-sw-pagination sw-pagination-product"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductSection;
