import React from "react";
import { Filter, List, ViewColumns2, ViewColumns3, ViewGrid, NavArrowDown } from "iconoir-react";
import FilterDropdown from "./FilterDropdown";

const ShopControl = ({ activeLayout, onLayoutChange, currentSort, onSortChange, onToggleFilters, isFilterVisible }) => {
    const sortOptions = [
        { value: "best-selling", label: "Best Selling" },
        { value: "a-z", label: "Alphabetically, A-Z" },
        { value: "z-a", label: "Alphabetically, Z-A" },
        { value: "price-low-high", label: "Price, low to high" },
        { value: "price-high-low", label: "Price, high to low" },
    ];

    return (
        <div className="tf-shop-control wrapper-filter-dropdown position-relative">
            <button
                type="button"
                className="btn-filterDropdown tf-btn-filter"
                onClick={onToggleFilters}
            >
                <Filter height={20} width={20} className="icon-filter" />
                <span className="text">{isFilterVisible ? 'Hide Filters' : 'Show Filters'}</span>
            </button>

            <ul className="tf-control-layout">
                <li
                    className={`tf-view-layout-switch sw-layout-list list-layout ${activeLayout === 'list' ? 'active' : ''}`}
                    onClick={() => onLayoutChange('list')}
                >
                    <List height={20} width={20} />
                </li>
                {[2, 3, 4].map(num => (
                    <li
                        key={num}
                        className={`tf-view-layout-switch sw-layout-${num} ${num > 2 ? 'd-none d-md-flex' : ''} ${num === 4 ? 'd-lg-flex' : ''} ${activeLayout === `tf-col-${num}` ? 'active' : ''}`}
                        onClick={() => onLayoutChange(`tf-col-${num}`)}
                    >
                        {num === 2 && <ViewColumns2 height={20} width={20} />}
                        {num === 3 && <ViewColumns3 height={20} width={20} />}
                        {num === 4 && <ViewGrid height={20} width={20} />}
                    </li>
                ))}
            </ul>

            <div className="tf-control-sorting">
                <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
                    <div className="btn-select">
                        <span className="text-sort-value">{sortOptions.find(o => o.value === currentSort)?.label || "Best Selling"}</span>
                        <NavArrowDown height={20} width={20} className="icon-CaretDown" />
                    </div>
                    <div className="dropdown-menu">
                        {sortOptions.map(option => (
                            <div
                                key={option.value}
                                className={`select-item ${currentSort === option.value ? 'active' : ''}`}
                                onClick={() => onSortChange(option.value)}
                            >
                                <span className="text-value-item">{option.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <FilterDropdown isVisible={isFilterVisible} />
        </div>
    );
};

export default ShopControl;
