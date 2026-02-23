import React, { useState, useEffect } from 'react';

const ProductCard = ({ img1, img2, title, price, oldPrice, isNew, sale, marquee, rating, userSizes, colors, countdown, sizes }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 12,
        hours: 15,
        minutes: 0,
        seconds: 34
    });

    useEffect(() => {
        if (!countdown) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        } else {
                            hours = 23;
                            if (days > 0) {
                                days--;
                            }
                        }
                    }
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [countdown]);

    return (
        <div className={`card-product ${sizes ? "has-size" : ""}`}>
            <div className="card-product_wrapper">
                <a href="product-detail.html" className="product-img">
                    <img className="img-product" loading="lazy" width="330" height="440" src={img1} alt="Product" />
                    <img className="img-hover" loading="lazy" width="330" height="440" src={img2} alt="Product" />
                </a>
                <ul className="product-action_list">
                    <li className="wishlist">
                        <a href="#;" className="hover-tooltip tooltip-left box-icon">
                            <span className="icon icon-HeartStraight"></span>
                            <span className="tooltip">Add to Wishlist</span>
                        </a>
                    </li>
                    <li className="compare">
                        <a href="#compare" data-bs-toggle="offcanvas" className="hover-tooltip tooltip-left box-icon">
                            <span className="icon icon-ArrowsLeftRight"></span>
                            <span className="tooltip">Compare</span>
                        </a>
                    </li>
                    <li>
                        <a href="#quickView" data-bs-toggle="offcanvas" className="hover-tooltip tooltip-left box-icon">
                            <span className="icon icon-Eye"></span>
                            <span className="tooltip">Quick view</span>
                        </a>
                    </li>
                </ul>
                <ul className="product-badge_list">
                    {isNew && <li className="product-badge_item text-caption-01 new">NEW</li>}
                    {sale && <li className="product-badge_item text-caption-01 sale">{sale}</li>}
                </ul>
                <div className="product-action_bot">
                    <a
                        href={sizes ? "#quickAdd" : "#shoppingCart"}
                        data-bs-toggle={sizes ? "modal" : "offcanvas"}
                        className="tf-btn btn-white small w-100"
                    >
                        {sizes ? "Quick Add" : "Add to Cart"}
                    </a>
                </div>
                {countdown ? (
                    <div className="product-countdown">
                        <div className="countdown__timer">
                            <span className="countdown__item">{timeLeft.days}D :</span>
                            <span className="countdown__item ms-1">{timeLeft.hours}H :</span>
                            <span className="countdown__item ms-1">{timeLeft.minutes}M :</span>
                            <span className="countdown__item ms-1">{timeLeft.seconds}S</span>
                        </div>
                    </div>
                ) : sizes ? (
                    <div className="variant-box">
                        <ul className="product-size_list">
                            {sizes.map((size, index) => (
                                <li key={index} className="size-item text-caption-01">{size}</li>
                            ))}
                        </ul>
                    </div>
                ) : marquee ? (
                    <div className="product-marquee_sale">
                        <div className="marquee-wrapper">
                            <div className="initial-child-container">
                                {[...Array(10)].map((_, index) => (
                                    <div key={index} className="d-flex align-items-center gap-10">
                                        <div className="marquee-child-item">HOT SALE 25% OFF</div>
                                        <i className="icon icon-Star2"></i>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className="card-product_info">
                <a href="product-detail.html" className="name-product lh-24 fw-medium link-underline-text">{title}</a>
                {rating && (
                    <div className="star-wrap d-flex align-items-center">
                        {[...Array(5)].map((_, i) => (
                            <i key={i} className={`icon icon-Star ${i < rating ? "" : "text-muted"}`}></i>
                        ))}
                    </div>
                )}
                <div className="price-wrap">
                    <span className="price-new text-primary fw-semibold">{price}</span>
                    {oldPrice && <span className="price-old text-caption-01 cl-text-3">{oldPrice}</span>}
                </div>
                {colors && colors.length > 0 && (
                    <ul className="product-color_list">
                        {colors.map((color, index) => (
                            <li key={index} className="product-color-item color-swatch hover-tooltip tooltip-bot">
                                <span className="tooltip color-filter">{color.name}</span>
                                <span className={`swatch-value ${color.colorClass}`}></span>
                                <img src={color.img} alt={title} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
