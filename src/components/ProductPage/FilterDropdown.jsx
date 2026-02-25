import React from "react";
import { NavArrowDown, Xmark } from "iconoir-react";

const FilterDropdown = ({ isVisible }) => {
    return (
        <div className={`filter-drawer-wrap canvas-sidebar sidebar-filter canvas-filter left ${isVisible ? 'show' : ''}`} id="filterDropdown">
            <div className="canvas-wrapper">
                <div className="canvas-header bg-main-2 mb-4">
                    <h4 className="title d-none d-xl-block fw-bold">Filters</h4>
                    <h5 className="title d-xl-none">Filters</h5>
                    <Xmark height={24} width={24} className="close-filter d-xl-none" />
                </div>
                <div className="canvas-body">
                    {/* Categories */}
                    <div className="widget-facet">
                        <div className="facet-title" data-bs-target="#drop-category" role="button"
                            data-bs-toggle="collapse" aria-expanded="true" aria-controls="drop-category">
                            <h6>Categories</h6>
                            <NavArrowDown height={20} width={20} className="icon-CaretDown" />
                        </div>
                        <div id="drop-category" className="collapse show">
                            <ul className="collapse-body filter-group-check group-category">
                                {[
                                    { name: "Bags", count: 112 },
                                    { name: "Booking", count: 112 },
                                    { name: "Clothing", count: 112 },
                                    { name: "Women", count: 112 },
                                    { name: "Men", count: 112 },
                                    { name: "Shoes", count: 112 },
                                    { name: "Uncategorized", count: 112 }
                                ].map((cat, idx) => (
                                    <li key={idx} className="list-item">
                                        <a href="#" className="label link">
                                            <span className="cate-text">{cat.name}</span>
                                            <span className="count">({cat.count})</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="br-line d-xl-none"></div>

                    {/* Filter By Price */}
                    <div className="widget-facet">
                        <div className="facet-title" data-bs-target="#price" role="button"
                            data-bs-toggle="collapse" aria-expanded="true" aria-controls="price">
                            <h6>Filter By Price</h6>
                            <NavArrowDown height={20} width={20} className="icon-CaretDown" />
                        </div>
                        <div id="price" className="collapse show">
                            <div className="collapse-body widget-price filter-price">
                                <div className="price-val-range" id="price-value-range" data-min="0"
                                    data-max="200"></div>
                                <div className="price-box tf-grid-layout tf-col-2">
                                    <div className="box-wrap">
                                        <div className="price-val_wrap">
                                            <span className="cl-text-2 text-body-1">$</span>
                                            <div className="price-val" id="price-min-value">0</div>
                                        </div>
                                    </div>
                                    <div className="box-wrap">
                                        <div className="price-val_wrap">
                                            <span className="cl-text-2 text-body-1">$</span>
                                            <div className="price-val" id="price-max-value">200</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="br-line d-xl-none"></div>

                    {/* Size */}
                    <div className="widget-facet">
                        <div className="facet-title" data-bs-target="#size" role="button"
                            data-bs-toggle="collapse" aria-expanded="true" aria-controls="size">
                            <h6>Size</h6>
                            <NavArrowDown height={20} width={20} className="icon-CaretDown" />
                        </div>
                        <div id="size" className="collapse show">
                            <ul className="collapse-body filter-group-size">
                                {['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', 'Free Size'].map((size, idx) => (
                                    <li key={idx}>
                                        <input className="ip-size d-none" type="checkbox" name="size" id={`size-${idx}`} />
                                        <label htmlFor={`size-${idx}`} className={`label-size ${size === 'Free Size' ? 'over-size' : ''}`}>
                                            <span className="size-text fw-medium">{size}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="br-line d-xl-none"></div>

                    {/* Colors */}
                    <div className="widget-facet">
                        <div className="facet-title" data-bs-target="#colors" role="button"
                            data-bs-toggle="collapse" aria-expanded="true" aria-controls="colors">
                            <h6>Colors</h6>
                            <NavArrowDown height={20} width={20} className="icon-CaretDown" />
                        </div>
                        <div id="colors" className="collapse show">
                            <ul className="collapse-body filter-group-check group-check-color">
                                {[
                                    { id: 'pink', name: 'Pink', class: 'bg-peach-blush', count: 16 },
                                    { id: 'blue', name: 'Blue', class: 'bg-cool-gray', count: 7 },
                                    { id: 'beige', name: 'Beige', class: 'bg-cream', count: 24 },
                                    { id: 'orange', name: 'Orange', class: 'bg-flame-orange', count: 17 },
                                    { id: 'gray', name: 'Gray', class: 'bg-sage-gray', count: 5 },
                                    { id: 'purple', name: 'Purple', class: 'bg-rosewood', count: 8 }
                                ].map((color, idx) => (
                                    <li key={idx} className="list-item">
                                        <fieldset className="field-color">
                                            <input type="radio" name="color" className="tf-check" id={`color-${color.id}`} />
                                            <label htmlFor={`color-${color.id}`} className={`color ${color.class}`}></label>
                                        </fieldset>
                                        <label htmlFor={`color-${color.id}`} className="label">
                                            <span className="color-text">{color.name}</span>
                                            <span className="count">({color.count})</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="br-line d-xl-none"></div>

                    {/* Availability */}
                    <div className="widget-facet">
                        <div className="facet-title" data-bs-target="#availability" role="button"
                            data-bs-toggle="collapse" aria-expanded="true" aria-controls="availability">
                            <h6>Availability</h6>
                            <NavArrowDown height={20} width={20} className="icon-CaretDown" />
                        </div>
                        <div id="availability" className="collapse show">
                            <ul className="collapse-body filter-group-check">
                                <li className="list-item">
                                    <input type="checkbox" name="availability" className="tf-check style-2" id="inStock" />
                                    <label htmlFor="inStock" className="label">
                                        <span className="cate-text">In stock</span>
                                        <span className="count">(32)</span>
                                    </label>
                                </li>
                                <li className="list-item">
                                    <input type="checkbox" name="availability" className="tf-check style-2" id="outStock" />
                                    <label htmlFor="outStock" className="label">
                                        <span className="cate-text">Out of stock</span>
                                        <span className="count">(2)</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="br-line d-xl-none"></div>

                    {/* Brands */}
                    <div className="widget-facet">
                        <div className="facet-title" data-bs-target="#brand" role="button"
                            data-bs-toggle="collapse" aria-expanded="true" aria-controls="brand">
                            <h6>Brands</h6>
                            <NavArrowDown height={20} width={20} className="icon-CaretDown" />
                        </div>
                        <div id="brand" className="collapse show">
                            <ul className="collapse-body filter-group-check">
                                {[
                                    { id: 'nike', name: 'Nike', count: 112 },
                                    { id: 'lv', name: 'Louis Vuitton', count: 32 },
                                    { id: 'hermes', name: 'Hermes', count: 42 },
                                    { id: 'gucci', name: 'Gucci', count: 13, disabled: true },
                                    { id: 'zalando', name: 'Zalando', count: 54 },
                                    { id: 'adidas', name: 'Adidas', count: 93, disabled: true }
                                ].map((brand, idx) => (
                                    <li key={idx} className={`list-item ${brand.disabled ? 'disabled' : ''}`}>
                                        <input type="checkbox" name="brand" className="tf-check style-2" id={brand.id} disabled={brand.disabled} />
                                        <label htmlFor={brand.id} className="label">
                                            <span className="brand-text">{brand.name}</span>
                                            <span className="count">({brand.count})</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterDropdown;
