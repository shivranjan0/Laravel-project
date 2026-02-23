import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const InfiniteSlide = () => {
    const items = [
        { title: "Modern Minimalism", img: "/assets/images/collection/cls-34.jpg" },
        { title: "Artisan Craftsmanship", img: "/assets/images/collection/cls-35.jpg" },
        { title: "Sustainable Luxury", img: "/assets/images/collection/cls-36.jpg" },
        { title: "Luxe and Livable", img: "/assets/images/collection/cls-37.jpg" },
        { title: "Confidence in Every Step", img: "/assets/images/collection/cls-38.jpg" },
        { title: "Curated Confidence", img: "/assets/images/collection/cls-3.jpg" },
    ];

    return (
        <div className="bg-main-2">
            <div className="infiniteSlide-cls wow fadeInUp">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={40}
                    slidesPerView="auto"
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    speed={5000}
                    className="infiniteSlide"
                    dir="ltr"
                >
                    {[...items, ...items, ...items].map((item, index) => (
                        <SwiperSlide key={index} className="infiniteSlide-item" style={{ width: "auto" }}>
                            <a href="shop-default.html" className="cls-wrap">
                                <h4>{item.title}</h4>
                                <div className="img-cls">
                                    <img loading="lazy" width="80" height="80" src={item.img} alt={item.title} />
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default InfiniteSlide;
