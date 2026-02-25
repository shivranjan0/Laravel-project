import React, { useState } from "react";
import Link from "next/link";
import { NavArrowRight, Home, Package, MapPin, Settings, LogOut, Hourglass, XmarkCircle } from "iconoir-react";

const MyAccount = () => {
    const [activeTab, setActiveTab] = useState("dashboard");

    const orderStats = [
        { label: "Awaiting Pickup", count: 4, icon: <Hourglass height={32} width={32} /> },
        { label: "Cancelled Orders", count: 12, icon: <XmarkCircle height={32} width={32} /> },
        { label: "Total Number of Orders", count: 200, icon: <Package height={32} width={32} /> }
    ];

    const recentOrders = [
        {
            code: "54312453",
            name: "Faux-leather trousers",
            type: "Women, Clothing",
            price: "$45.00",
            status: "Pending",
            statusClass: "stt-pending",
            image: "/assets/images/product/square/product-1_2.jpg"
        },
        {
            code: "54312452",
            name: "Contrasting sweatshirt",
            type: "Women, Clothing",
            price: "$45.00",
            status: "Delivery",
            statusClass: "stt-delivery",
            image: "/assets/images/product/square/product-2.jpg"
        },
        {
            code: "54312452",
            name: "V-neck knitted top",
            type: "Women, Clothing",
            price: "$45.00",
            status: "Completed",
            statusClass: "stt-completed",
            image: "/assets/images/product/square/product-4_2.jpg"
        }
    ];

    return (
        <>
            {/* Page Title */}
            <section className="section-page-title text-center flat-spacing-2 pb-0">
                <div className="container">
                    <div className="main-page-title">
                        <div className="breadcrumbs">
                            <Link href="/" className="text-caption-01 cl-text-3 link">Home</Link>
                            <NavArrowRight className="cl-text-3" height={16} width={16} />
                            <p className="text-caption-01">My Account</p>
                        </div>
                        <h3>My Account</h3>
                        <p className="text-body-1 cl-text-2">
                            Manage your profile, track orders, and easily update your personal details anytime,
                            <br className="d-none d-lg-block" />
                            all in one convenient place.
                        </p>
                    </div>
                </div>
            </section>

            {/* Account Section */}
            <section className="flat-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-xl-3">
                            <div className="sidebar-account-wrap sidebar-content-wrap sticky-top d-lg-block">
                                <div className="my-account-nav">
                                    <button
                                        onClick={() => setActiveTab("dashboard")}
                                        className={`link-account border-0 bg-transparent text-start w-100 ${activeTab === "dashboard" ? "active" : ""}`}
                                    >
                                        <Home height={20} width={20} />
                                        <span className="text h6 fw-medium">Dashboard</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("orders")}
                                        className={`link-account border-0 bg-transparent text-start w-100 ${activeTab === "orders" ? "active" : ""}`}
                                    >
                                        <Package height={20} width={20} />
                                        <span className="text h6 fw-medium">Your Orders</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("address")}
                                        className={`link-account border-0 bg-transparent text-start w-100 ${activeTab === "address" ? "active" : ""}`}
                                    >
                                        <MapPin height={20} width={20} />
                                        <span className="text h6 fw-medium">My Address</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("setting")}
                                        className={`link-account border-0 bg-transparent text-start w-100 ${activeTab === "setting" ? "active" : ""}`}
                                    >
                                        <Settings height={20} width={20} />
                                        <span className="text h6 fw-medium">Setting</span>
                                    </button>
                                    <Link href="/login" className="link-account text-decoration-none">
                                        <LogOut height={20} width={20} />
                                        <span className="text h6 fw-medium">Logout</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 ms-auto">
                            <div className="my-account-content">
                                {activeTab === "dashboard" && (
                                    <>
                                        <h4 className="account-title text-capitalize">Dashboard</h4>
                                        <div className="acount-order_stats mt-24">
                                            <div className="row g-20">
                                                {orderStats.map((stat, index) => (
                                                    <div className="col-md-4" key={index}>
                                                        <div className="order-box d-flex justify-content-between align-items-center p-24 bg-surface rounded-12">
                                                            <div className="order_info">
                                                                <p className="info__label cl-text-2 mb-4">{stat.label}</p>
                                                                <h5 className="info__count fw-semibold">{stat.count}</h5>
                                                            </div>
                                                            <div className="order_icon fs-32 cl-text-2">
                                                                {stat.icon}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="account-my_recent mt-40">
                                            <h6 className="title-case mb-20">Recent Orders</h6>
                                            <div className="overflow-auto border rounded-4">
                                                <table className="table table-borderless table-my_recent mb-0">
                                                    <thead className="bg-surface">
                                                        <tr>
                                                            <th className="py-12 px-20">Order</th>
                                                            <th className="py-12 px-20">Products</th>
                                                            <th className="py-12 px-20">Pricing</th>
                                                            <th className="py-12 px-20">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {recentOrders.map((order, index) => (
                                                            <tr className="tb-order-item border-bottom" key={index}>
                                                                <td className="tb-order_code fw-medium py-20 px-20">{order.code}</td>
                                                                <td className="py-20 px-20">
                                                                    <div className="tb-order_product d-flex align-items-center gap-12">
                                                                        <Link href="/product" className="img-prd flex-shrink-0">
                                                                            <img loading="lazy" width="48" height="48" src={order.image} alt={order.name} className="rounded-4" />
                                                                        </Link>
                                                                        <div className="infor-prd">
                                                                            <Link href="/product" className="prd_name link fw-medium lh-24 text-decoration-none">{order.name}</Link>
                                                                            <p className="prd_type cl-text-2 text-caption-01 mb-0">{order.type}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="tb-order_price fw-medium py-20 px-20">{order.price}</td>
                                                                <td className="py-20 px-20">
                                                                    <div className={`tb-order_status text-label ${order.statusClass}`}>
                                                                        {order.status}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {activeTab === "orders" && (
                                    <div>
                                        <h4 className="account-title">Your Orders</h4>
                                        <p className="mt-20">No orders found.</p>
                                    </div>
                                )}

                                {activeTab === "address" && (
                                    <div>
                                        <h4 className="account-title">My Address</h4>
                                        <p className="mt-20">No addresses saved yet.</p>
                                    </div>
                                )}

                                {activeTab === "setting" && (
                                    <div>
                                        <h4 className="account-title">Account Settings</h4>
                                        <p className="mt-20">Profile settings go here.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyAccount;
