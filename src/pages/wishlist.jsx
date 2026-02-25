import React, { useState } from "react";
import { NavArrowRight, Heart } from "iconoir-react";
import PageTitle from "../components/ProductPage/PageTitle";
import WishlistProductCard from "../components/WishlistProductCard";

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            img1: "/assets/images/product/product-1.jpg",
            img2: "/assets/images/product/product-1_2.jpg",
            title: "Lyocell wrap top",
            price: "$69,99",
            oldPrice: "$99,99",
            isNew: true,
            rating: 5,
            colors: [
                { name: "Brown", colorClass: "bg-warm-beige", img: "/assets/images/product/product-1.jpg" },
                { name: "Dark Blue", colorClass: "bg-midnight-blue", img: "/assets/images/product/product-1_3.jpg" },
                { name: "White", colorClass: "bg-white", img: "/assets/images/product/product-1_4.jpg" }
            ],
            marquee: true
        },
        {
            id: 2,
            img1: "/assets/images/product/product-2.jpg",
            img2: "/assets/images/product/product-2_2.jpg",
            title: "Buttons cotton top",
            price: "$29,99",
            oldPrice: "$49,99",
            sale: "-25%",
            rating: 5,
            colors: [
                { name: "Brown", colorClass: "bg-warm-beige", img: "/assets/images/product/product-2.jpg" },
                { name: "Beige", colorClass: "bg-stone-beige", img: "/assets/images/product/product-2_3.jpg" }
            ]
        },
        {
            id: 3,
            img1: "/assets/images/product/product-3.jpg",
            img2: "/assets/images/product/product-3_2.jpg",
            title: "Wool Midi Coat",
            price: "$15,99",
            oldPrice: "$25,99",
            sale: "-25%",
            rating: 5,
            colors: [
                { name: "Brown", colorClass: "bg-warm-beige", img: "/assets/images/product/product-3.jpg" },
                { name: "Dark Blue", colorClass: "bg-midnight-blue", img: "/assets/images/product/product-3_3.jpg" },
                { name: "Beige", colorClass: "bg-stone-beige", img: "/assets/images/product/product-3_4.jpg" }
            ]
        },
        {
            id: 4,
            img1: "/assets/images/product/product-4.jpg",
            img2: "/assets/images/product/product-4_2.jpg",
            title: "linen slim-fit shirt",
            price: "$45,99",
            oldPrice: "$79,99",
            rating: 5
        },
        {
            id: 5,
            img1: "/assets/images/product/product-5.jpg",
            img2: "/assets/images/product/product-5_2.jpg",
            title: "High neck midi wool coat",
            price: "$9,99",
            oldPrice: "$19,99",
            isNew: true,
            rating: 5,
            colors: [
                { name: "Brown", colorClass: "bg-olive-brown", img: "/assets/images/product/product-5.jpg" },
                { name: "Blue", colorClass: "bg-dark-blue", img: "/assets/images/product/product-5_3.jpg" },
                { name: "Beige", colorClass: "bg-beige", img: "/assets/images/product/product-5_4.jpg" }
            ]
        },
        {
            id: 6,
            img1: "/assets/images/product/product-6.jpg",
            img2: "/assets/images/product/product-6_2.jpg",
            title: "Square metallic frame sunglasses",
            price: "$34,99",
            oldPrice: "$59,99",
            sale: "-25%",
            rating: 5,
            colors: [
                { name: "Brown", colorClass: "bg-warm-brown", img: "/assets/images/product/product-6.jpg" },
                { name: "Blue", colorClass: "bg-cool-gray", img: "/assets/images/product/product-6_3.jpg" }
            ]
        }
    ]);

    const handleRemove = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    const breadcrumbs = [
        { text: "Your Wishlist", link: "#" }
    ];

    return (
        <>
            <PageTitle
                title="Your Wishlist"
                breadcrumbs={breadcrumbs}
                description={<>Explore your saved favorites, manage your wishlist effortlessly,<br className="d-none d-lg-block" /> and keep track of the items you love most.</>}
            />

            <section className="section-wishlist flat-spacing">
                <div className="container">
                    {wishlistItems.length > 0 ? (
                        <>
                            <div className="tf-grid-layout tf-col-2 md-col-3 xl-col-4 wrapper-wishlist">
                                {wishlistItems.map(item => (
                                    <WishlistProductCard
                                        key={item.id}
                                        {...item}
                                        onRemove={() => handleRemove(item.id)}
                                    />
                                ))}
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
                        </>
                    ) : (
                        <div className="text-center flat-spacing">
                            <Heart className="cl-text-3 mb-4" height={60} width={60} style={{ display: "block", margin: "0 auto" }} />
                            <h4>Your wishlist is empty</h4>
                            <p className="text-body-1 cl-text-2 mb-4">You haven't added any products to your wishlist yet.</p>
                            <a href="/product" className="tf-btn btn-fill animate-hover-btn">
                                <span>Continue Shopping</span>
                            </a>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Wishlist;
