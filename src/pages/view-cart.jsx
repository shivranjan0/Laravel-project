import React, { useState } from "react";
import Link from "next/link";
import ProductCard from "../components/ProductCard";

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "V-neck cotton T-shirt",
            image: "/assets/images/product/product-3.jpg",
            price: 29.99,
            quantity: 1,
            color: "Light Gray",
            size: "Small"
        },
        {
            id: 2,
            name: "Square metallic sunglasses",
            image: "/assets/images/product/product-6.jpg",
            price: 69.99,
            quantity: 1,
            color: "Light Gray",
            size: "Small"
        },
        {
            id: 3,
            name: "Oval shoulder bag",
            image: "/assets/images/product/product-8.jpg",
            price: 49.99,
            quantity: 1,
            color: "Light Gray",
            size: "Small"
        }
    ]);

    const suggestedProducts = [
        {
            id: 101,
            img1: "/assets/images/product/product-1.jpg",
            img2: "/assets/images/product/product-1_2.jpg",
            title: "Ribbed knit sweater",
            price: "$19.99",
            oldPrice: "$29.99",
            colors: [
                { name: "Orange", colorClass: "bg-orange-500", img: "/assets/images/product/product-1.jpg" },
                { name: "Black", colorClass: "bg-black", img: "/assets/images/product/product-1_2.jpg" }
            ]
        },
        {
            id: 102,
            img1: "/assets/images/product/product-2.jpg",
            img2: "/assets/images/product/product-2_2.jpg",
            title: "Ripped denim jacket",
            price: "$39.99",
            oldPrice: "$49.99",
            colors: [
                { name: "Blue", colorClass: "bg-blue-500", img: "/assets/images/product/product-2.jpg" }
            ]
        },
        {
            id: 103,
            img1: "/assets/images/product/product-4.jpg",
            img2: "/assets/images/product/product-4_2.jpg",
            title: "Linen-blend dress",
            price: "$34.99",
            oldPrice: "$44.99",
            colors: [
                { name: "White", colorClass: "bg-white", img: "/assets/images/product/product-4.jpg" }
            ]
        },
        {
            id: 104,
            img1: "/assets/images/product/product-5.jpg",
            img2: "/assets/images/product/product-5_2.jpg",
            title: "Suede ankle boots",
            price: "$59.99",
            oldPrice: "$79.99",
            colors: [
                { name: "Brown", colorClass: "bg-brown-500", img: "/assets/images/product/product-5.jpg" }
            ]
        }
    ];

    const handleQuantityChange = (id, delta) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = 80.00; // Mock discount
    const total = Math.max(0, subtotal - discount);

    return (
        <main id="wrapper">
            {/* Page Title */}
            <section className="section-page-title text-center flat-spacing-2 pb-0">
                <div className="container">
                    <div className="main-page-title">
                        <div className="breadcrumbs">
                            <Link href="/" className="text-caption-01 cl-text-3 link">Home</Link>
                            <i className="icon icon-CaretRightThin cl-text-3"></i>
                            <p className="text-caption-01">Shopping Cart</p>
                        </div>
                        <h3>Shopping Cart</h3>
                        <p className="text-body-1 cl-text-2">
                            Review your selected items, update quantities, and get ready for a smooth and
                            <br className="d-none d-lg-block" />
                            easy checkout experience.
                        </p>
                    </div>
                </div>
            </section>
            {/* /Page Title */}

            {/* Shopping Cart */}
            <section className="section-shoping-cart each-list-prd flat-spacing-2 pb-0">
                <div className="flat-spacing-2 pt-0">
                    <div className="container">
                        <div className="tf-cart-notification">
                            <div className="count-text">
                                <div className="ic">🔥</div>
                                <div>
                                    Your cart will expire in&nbsp;
                                    <div className="js-countdown time-count cd-has-zero cd-no">
                                        04:48
                                    </div>
                                    &nbsp;minutes! Please checkout now before your items sell out!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <form className="form-shop-cart" onSubmit={(e) => e.preventDefault()}>
                                <div className="overflow-auto">
                                    <table className="tf-table-page-cart">
                                        <thead>
                                            <tr>
                                                <th><p className="h6 fw-medium">Products</p></th>
                                                <th><p className="h6 fw-medium">Price</p></th>
                                                <th><p className="h6 fw-medium">Quantity</p></th>
                                                <th className="text-end"><p className="h6 fw-medium">Total Price</p></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map((item) => (
                                                <tr className="tf-cart_item each-prd" key={item.id}>
                                                    <td className="cart_product">
                                                        <Link href="/product" className="img-prd">
                                                            <img loading="lazy" width="100" height="133" src={item.image} alt={item.name} />
                                                        </Link>
                                                        <div className="infor-prd">
                                                            <Link href="/product" className="prd_name fw-medium link lh-24">
                                                                {item.name}
                                                            </Link>
                                                            <div className="prd_select text-caption-01">
                                                                <span className="type-text cl-text-3">Color:&nbsp;</span>
                                                                <div className="type-select">
                                                                    <select className="bg-white" defaultValue={item.color}>
                                                                        <option>Light Gray</option>
                                                                        <option>Charcoal</option>
                                                                        <option>Beige</option>
                                                                        <option>Taupe</option>
                                                                        <option>Sage</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="prd_select text-caption-01">
                                                                <span className="type-text cl-text-3">Size:&nbsp;</span>
                                                                <div className="type-select">
                                                                    <select className="bg-white" defaultValue={item.size}>
                                                                        <option>Small</option>
                                                                        <option>Medium</option>
                                                                        <option>Large</option>
                                                                        <option>Extra Large</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="cart_remove tf-btn-line-3 type-primary remove" onClick={() => handleRemoveItem(item.id)}>
                                                                <span className="text-caption-01 fw-semibold">Remove</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="cart_price each-price fw-semibold text-primary" data-cart-title="Price">
                                                        ${item.price.toFixed(2)}
                                                    </td>
                                                    <td className="cart_quantity" data-cart-title="Quantity">
                                                        <div className="wg-quantity">
                                                            <button type="button" className="btn-quantity minus-quantity" onClick={() => handleQuantityChange(item.id, -1)}>
                                                                <i className="icon icon-minus"></i>
                                                            </button>
                                                            <input className="quantity-product" type="text" name="number" value={item.quantity} readOnly />
                                                            <button type="button" className="btn-quantity plus-quantity" onClick={() => handleQuantityChange(item.id, 1)}>
                                                                <i className="icon icon-plus"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <div className="cart_total fw-semibold text-primary each-subtotal-price">
                                                            ${(item.price * item.quantity).toFixed(2)}
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="ip-discount-code">
                                    <input type="text" placeholder="Add voucher discount" />
                                    <button className="tf-btn animate-btn" type="submit">
                                        Apply Code
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <div className="fl-sidebar-cart mt-lg-0 sticky-top">
                                <div className="box-order-summary ">
                                    <div className="notification-progress">
                                        <p>
                                            Buy <span className="text-primary fw-bold">$70.00</span> more to get freeship
                                        </p>
                                        <div className="progress-cart">
                                            <div className="value" style={{ width: "50%" }}>
                                                <span className="round"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="title mb-20">Order Summary</h5>
                                    <div className="subtotal d-flex justify-content-between align-items-center">
                                        <p className="fw-medium lh-24">Subtotal</p>
                                        <span className="total fw-medium lh-24">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="discount d-flex justify-content-between align-items-center">
                                        <p className="fw-medium lh-24">Discounts</p>
                                        <span className="total fw-medium lh-24">-${discount.toFixed(2)}</span>
                                    </div>
                                    <div className="ship">
                                        <p className="fw-medium lh-24">Shipping</p>
                                        <div className="box-check-payment flex-grow-1">
                                            <fieldset className="ship-item">
                                                <input type="radio" name="ship-check" className="tf-check-rounded" id="free" defaultChecked />
                                                <label htmlFor="free">
                                                    <span>Free Shipping</span>
                                                    <span className="price">$0.00</span>
                                                </label>
                                            </fieldset>
                                            <fieldset className="ship-item">
                                                <input type="radio" name="ship-check" className="tf-check-rounded" id="local" />
                                                <label htmlFor="local">
                                                    <span>Local:</span>
                                                    <span className="price">$35.00</span>
                                                </label>
                                            </fieldset>
                                            <fieldset className="ship-item">
                                                <input type="radio" name="ship-check" className="tf-check-rounded" id="rate" />
                                                <label htmlFor="rate">
                                                    <span>Flat Rate:</span>
                                                    <span className="price">$35.00</span>
                                                </label>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <h5 className="total-order d-flex justify-content-between align-items-center">
                                        <span>Total</span>
                                        <span className="total each-total-price">${total.toFixed(2)}</span>
                                    </h5>
                                    <fieldset className="checkbox-wrap check-agree">
                                        <input type="checkbox" name="agree" className="tf-check-rounded" id="checkOutAgree" />
                                        <label htmlFor="checkOutAgree">
                                            I agree with the
                                            <Link href="#" className="fw-medium text-decoration-underline link"> terms and conditions </Link>
                                        </label>
                                    </fieldset>
                                    <div className="list-ver text-center">
                                        <button type="submit" id="checkout-btn" className="action-checkout tf-btn w-100 animate-btn">
                                            <span className="fw-semibold">Process To Checkout</span>
                                        </button>
                                        <Link href="/product" className="link-underline link">
                                            <span className="fw-semibold ">Or Continue Shopping</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Shopping Cart */}

            {/* May Be */}
            <section className="flat-spacing">
                <div className="container">
                    <div className="sect-heading">
                        <h4>You may be interested in…</h4>
                    </div>
                    <div className="tf-grid-layout tf-col-4">
                        {suggestedProducts.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ShoppingCart;
