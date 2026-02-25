import React from "react";
import Link from "next/link";
import { NavArrowRight, ArrowUpRight } from "iconoir-react";

const Collection = () => {
    const categories = [
        { name: "Outerwear", image: "/assets/images/collection/cls-19.jpg", link: "/product" },
        { name: "Tops & Shirts", image: "/assets/images/collection/cls-20.jpg", link: "/product" },
        { name: "Bottoms", image: "/assets/images/collection/cls-21.jpg", link: "/product" },
        { name: "Dresses", image: "/assets/images/collection/cls-22.jpg", link: "/product" },
        { name: "Underwear", image: "/assets/images/collection/cls-23.jpg", link: "/product" },
        { name: "Shoes", image: "/assets/images/collection/cls-24.jpg", link: "/product" },
        { name: "Bags", image: "/assets/images/collection/cls-25.jpg", link: "/product" },
        { name: "Accessories", image: "/assets/images/collection/cls-26.jpg", link: "/product" }
    ];

    return (
        <main id="wrapper">
            {/* Page Title */}
            <section className="section-page-title text-center flat-spacing-2 pb-0">
                <div className="container">
                    <div className="main-page-title">
                        <div className="breadcrumbs">
                            <Link href="/" className="text-caption-01 cl-text-3 link">Home</Link>
                            <NavArrowRight height={20} width={20} className="cl-text-3" />
                            <p className="text-caption-01">All Categories</p>
                        </div>
                        <h3>All Categories</h3>
                        <p className="text-body-1 cl-text-2">
                            Step into our all categories, where elegance meets confidence in styles that
                            <br className="d-none d-lg-block" />
                            empower and inspire every moment.
                        </p>
                    </div>
                </div>
            </section>
            {/* /Page Title */}

            {/* Collection */}
            <div className="flat-spacing">
                <div className="container">
                    <div className="tf-grid-layout ssm-col-2 xl-col-4 gap-lg-30">
                        {categories.map((category, index) => (
                            <div className="category-v03 style-2 hover-img4" key={index}>
                                <Link href={category.link} className="cate-image img-style4">
                                    <img loading="lazy" width="330" height="440" src={category.image} alt={category.name} />
                                </Link>
                                <div className="cate-content text-center">
                                    <Link href={category.link} className="cate_name h5 fw-medium">
                                        {category.name}
                                        <ArrowUpRight height={20} width={20} />
                                    </Link>
                                </div>
                            </div>
                        ))}

                        <div className="wd-full">
                            <div className="tf-page-pagination justify-content-center">
                                <Link href="#" className="pag-item">1</Link>
                                <p className="pag-item active">2</p>
                                <Link href="#" className="pag-item">3</Link>
                                <Link href="#" className="pag-item">
                                    <NavArrowRight height={20} width={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Collection */}
        </main>
    );
};

export default Collection;
