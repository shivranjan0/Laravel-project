import React, { useState } from "react";
import { NavArrowRight } from "iconoir-react";
import PageTitle from "../components/ProductPage/PageTitle";
import CategorySlider from "../components/ProductPage/CategorySlider";
import ShopControl from "../components/ProductPage/ShopControl";
import FilterDropdown from "../components/ProductPage/FilterDropdown";
import ProductCard from "../components/ProductCard";

const Product = () => {
    const [layout, setLayout] = useState('tf-col-4');
    const [sort, setSort] = useState('best-selling');
    const [showDropdown, setShowDropdown] = useState(false);

    const categories = [
        { name: "Outerwear", img: "/assets/images/category/cate-1.jpg", link: "#" },
        { name: "Tops & Shirts", img: "/assets/images/category/cate-2.jpg", link: "#" },
        { name: "Bottoms", img: "/assets/images/category/cate-3.jpg", link: "#" },
        { name: "Dresses", img: "/assets/images/category/cate-4.jpg", link: "#" },
        { name: "Footwear", img: "/assets/images/category/cate-5.jpg", link: "#" },
        { name: "Accessories", img: "/assets/images/category/cate-6.jpg", link: "#" },
    ];

    const breadcrumbs = [
        { text: "Tops & Shirts", link: "#" }
    ];

    // Mock products data
    const products = [
        {
            id: 1,
            img1: "/assets/images/product/fashion-2/product-1.jpg",
            img2: "/assets/images/product/fashion-2/product-1_2.jpg",
            title: "High neck midi wool coat",
            price: "$9,99",
            oldPrice: "$19,99",
            rating: 0,
            colors: [
                { name: "Khaki", colorClass: "bg-warm-brown", img: "/assets/images/product/fashion-2/product-1.jpg" },
                { name: "Blue", colorClass: "bg-midnight-blue", img: "/assets/images/product/fashion-2/product-1_2.jpg" },
                { name: "Beige", colorClass: "bg-beige", img: "/assets/images/product/fashion-2/product-1.jpg" }
            ],
            sizes: ["S", "M", "L", "XL"]
        },
        {
            id: 2,
            img1: "/assets/images/product/fashion-2/product-2.jpg",
            img2: "/assets/images/product/fashion-2/product-2_2.jpg",
            title: "Square metallic frame sunglasses",
            price: "$34,99",
            oldPrice: "$59,99",
            rating: 0,
            colors: [
                { name: "Khaki", colorClass: "bg-warm-brown", img: "/assets/images/product/fashion-2/product-2.jpg" },
                { name: "Gray", colorClass: "bg-cool-gray", img: "/assets/images/product/fashion-2/product-2_2.jpg" }
            ]
        },
        {
            id: 3,
            img1: "/assets/images/product/fashion-2/product-3.jpg",
            img2: "/assets/images/product/fashion-2/product-3_2.jpg",
            title: "Leather shopper bag with stitching",
            price: "$22,99",
            oldPrice: "$39,99",
            rating: 0,
            marquee: "HOT SALE 25% OFF",
            colors: [
                { name: "Brown", colorClass: "bg-warm-brown", img: "/assets/images/product/fashion-2/product-3.jpg" },
                { name: "Beige", colorClass: "bg-beige", img: "/assets/images/product/fashion-2/product-3_2.jpg" },
                { name: "Pink", colorClass: "bg-peach-blush", img: "/assets/images/product/fashion-2/product-3.jpg" }
            ]
        },
        {
            id: 4,
            img1: "/assets/images/product/fashion-2/product-4.jpg",
            img2: "/assets/images/product/fashion-2/product-4_2.jpg",
            title: "Leather shopper bag with stitching",
            price: "$67,99",
            oldPrice: "$99,99",
            rating: 0,
            countdown: true,
            colors: [
                { name: "Pink", colorClass: "bg-peach-blush", img: "/assets/images/product/fashion-2/product-4.jpg" },
                { name: "Blue", colorClass: "bg-midnight-blue", img: "/assets/images/product/fashion-2/product-4_2.jpg" },
                { name: "Beige", colorClass: "bg-beige", img: "/assets/images/product/fashion-2/product-4.jpg" }
            ]
        }
    ];

    return (
        <>
            <PageTitle
                title="Tops & Shirts"
                breadcrumbs={breadcrumbs}
                description="Step into our Tops & Shirts Collection, where elegance meets confidence in styles that inspire every moment."
            />

            <CategorySlider categories={categories} />

            <section className="flat-spacing">
                <div className="container">
                    <ShopControl
                        activeLayout={layout}
                        onLayoutChange={setLayout}
                        currentSort={sort}
                        onSortChange={setSort}
                        onToggleFilters={() => setShowDropdown(!showDropdown)}
                        isFilterVisible={showDropdown}
                    />

                    <div className="tf-grid-layout wrapper-shop" id="product-grid-list">
                        <div className={`tf-grid-layout ${layout}`}>
                            {products.map(product => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="wd-full d-flex justify-content-center mt-5">
                        <div className="tf-page-pagination">
                            <a href="#" className="pag-item">1</a>
                            <p className="pag-item active">2</p>
                            <a href="#" className="pag-item">3</a>
                            <a href="#" className="pag-item">
                                <NavArrowRight height={20} width={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Product;