import React, { useState, useEffect } from 'react';
import { DataTransferBoth, Eye, Trash, Star } from "iconoir-react";

const WishlistProductCard = ({
    img1,
    img2,
    title,
    price,
    oldPrice,
    isNew,
    sale,
    marquee,
    rating,
    colors,
    onRemove
}) => {
    return (
        <div className="card-product">
            <div className="card-product_wrapper">
                <a href="product-detail.html" className="product-img">
                    <img className="img-product" loading="lazy" width="330" height="440" src={img1} alt="Product" />
                    <img className="img-hover" loading="lazy" width="330" height="440" src={img2} alt="Product" />
                </a>
                <ul className="product-action_list">
                    <li className="compare">
                        <a href="#compare" data-bs-toggle="offcanvas" className="hover-tooltip tooltip-left box-icon">
                            <DataTransferBoth height={18} width={18} />
                            <span className="tooltip">Compare</span>
                        </a>
                    </li>
                    <li>
                        <a href="#quickView" data-bs-toggle="offcanvas" className="hover-tooltip tooltip-left box-icon">
                            <Eye height={18} width={18} />
                            <span className="tooltip">Quick view</span>
                        </a>
                    </li>
                </ul>
                <ul className="product-badge_list">
                    {isNew && <li className="product-badge_item text-caption-01 new">NEW</li>}
                    {sale && <li className="product-badge_item text-caption-01 sale">{sale}</li>}
                </ul>
                <span
                    className="product-action_remove remove box-icon hover-tooltip tooltip-left"
                    onClick={onRemove}
                    style={{ cursor: 'pointer' }}
                >
                    <Trash height={18} width={18} />
                    <span className="tooltip">Remove</span>
                </span>
                <div className="product-action_bot">
                    <a href="#quickAdd" data-bs-toggle="modal" className="tf-btn btn-white small w-100">
                        Quick Add
                    </a>
                </div>
                {marquee && (
                    <div className="product-marquee_sale">
                        <div className="marquee-wrapper">
                            <div className="initial-child-container">
                                {[...Array(10)].map((_, index) => (
                                    <div key={index} className="d-flex align-items-center gap-10">
                                        <div className="marquee-child-item">HOT SALE 25% OFF</div>
                                        <Star height={18} width={18} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="card-product_info">
                <a href="product-detail.html" className="name-product lh-24 fw-medium link-underline-text">{title}</a>
                <div className="star-wrap d-flex align-items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} height={18} width={18} className={i < (rating || 0) ? "" : "cl-text-3"} />
                    ))}
                </div>
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

export default WishlistProductCard;
