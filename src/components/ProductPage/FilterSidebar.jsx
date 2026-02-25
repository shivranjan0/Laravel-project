import React from "react";

const FilterSidebar = () => {
    return (
        <div className="offcanvas offcanvas-start canvas-sidebar sidebar-filter" id="filterSidebar">
            <div className="canvas-wrapper">
                <div className="canvas-header">
                    <h4 className="title d-none d-xl-block">Filters</h4>
                    <h5 className="title d-xl-none">Filters</h5>
                    <span className="icon-X2 fs-24 close-filter d-xl-none" data-bs-dismiss="offcanvas"></span>
                </div>
                <div className="canvas-body">
                    {/* Categories */}
                    <div className="widget-facet">
                        <div className="facet-title" data-bs-target="#drop-category" role="button" data-bs-toggle="collapse">
                            <h6>Categories</h6>
                            <span className="icon icon-CaretDown"></span>
                        </div>
                        <div id="drop-category" className="collapse show">
                            <ul className="collapse-body filter-group-check group-category">
                                {['Bags', 'Booking', 'Clothing', 'Women', 'Men', 'Shoes', 'Uncategorized'].map((cat, idx) => (
                                    <li key={idx} className="list-item">
                                        <a href="#" className="label link">
                                            <span className="cate-text">{cat}</span>
                                            <span className="count">({Math.floor(Math.random() * 100)})</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="br-line"></div>

                    {/* Price Filter */}
                    <div className="widget-facet">
                        <div className="facet-title" data-bs-target="#price" role="button" data-bs-toggle="collapse">
                            <h6>Filter By Price</h6>
                            <span className="icon icon-CaretDown"></span>
                        </div>
                        <div id="price" className="collapse show">
                            <div className="collapse-body widget-price filter-price">
                                <div className="price-val-range" id="price-value-range" data-min="0" data-max="200"></div>
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
                    <div className="br-line"></div>

                    {/* Size Filter */}
                    <div className="widget-facet">
                        <div className="facet-title" data-bs-target="#size" role="button" data-bs-toggle="collapse">
                            <h6>Size</h6>
                            <span className="icon icon-CaretDown"></span>
                        </div>
                        <div id="size" className="collapse show">
                            <ul className="collapse-body filter-group-size">
                                {['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', 'Free Size'].map((size, idx) => (
                                    <li key={idx}>
                                        <input className="ip-size d-none" type="checkbox" name="size" id={`size-${idx}`} />
                                        <label htmlFor={`size-${idx}`} className="label-size">
                                            <span className="size-text fw-medium">{size}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="br-line"></div>

                    {/* Color Filter */}
                    <div className="widget-facet">
                        <div className="facet-title" data-bs-target="#colors" role="button" data-bs-toggle="collapse">
                            <h6>Colors</h6>
                            <span className="icon icon-CaretDown"></span>
                        </div>
                        <div id="colors" className="collapse show">
                            <ul className="collapse-body filter-group-check group-check-color">
                                {[
                                    { id: 'pink', name: 'Pink', class: 'bg-peach-blush' },
                                    { id: 'blue', name: 'Blue', class: 'bg-cool-gray' },
                                    { id: 'black', name: 'Black', class: 'bg-black' }
                                ].map((color, idx) => (
                                    <li key={idx} className="list-item">
                                        <fieldset className="field-color">
                                            <input type="radio" name="color" className="tf-check" id={`color-${color.id}`} />
                                            <label htmlFor={`color-${color.id}`} className={`color ${color.class}`}></label>
                                        </fieldset>
                                        <label htmlFor={`color-${color.id}`} className="label">
                                            <span className="color-text">{color.name}</span>
                                            <span className="count">(16)</span>
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

export default FilterSidebar;
