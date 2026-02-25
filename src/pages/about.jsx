import React from "react";
import Link from "next/link";

const About = () => {
    const teamMembers = [
        {
            name: "Annette Black",
            role: "Founder/CEO",
            image: "/assets/images/member/member-1.jpg"
        },
        {
            name: "Brooklyn Simmons",
            role: "Manager",
            image: "/assets/images/member/member-2.jpg"
        },
        {
            name: "Jane Cooper",
            role: "Sales Director",
            image: "/assets/images/member/member-3.jpg"
        },
        {
            name: "Lisa Bonet",
            role: "Sales Director",
            image: "/assets/images/member/member-4.jpg"
        }
    ];

    const counters = [
        {
            label: "Products Available",
            value: "8.2k",
            desc: "We offer a wide selection of high-quality products to meet every need."
        },
        {
            label: "Happy Customers",
            value: "10k",
            desc: "Serving over 10,000 delighted customers who trust us for quality and service."
        },
        {
            label: "Partner Brand",
            value: "96",
            desc: "Our top-brand partnerships bring a trusted collection for your kitchen and home."
        },
        {
            label: "Products For Sale",
            value: "16k",
            desc: "That's why we strive to offer a diverse range of products that cater to all styles."
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
                            <i className="icon icon-CaretRightThin cl-text-3"></i>
                            <p className="text-caption-01">About Us</p>
                        </div>
                        <h3>About Us</h3>
                        <p className="text-body-1 cl-text-2">
                            With over 15 years of experience, we craft timeless collections that transcend
                            <br className="d-none d-lg-block" />
                            trends and inspire lasting elegance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main About */}
            <section className="section-main-about flat-spacing pt-0">
                <div className="container">
                    <div className="flat-spacing-2">
                        <div className="hero-image">
                            <img loading="lazy" width="1410" height="600" src="/assets/images/section/s-contact-1.jpg" alt="About Hero" />
                        </div>
                    </div>
                    <div className="row align-items-center gy-4">
                        <div className="col-md-6">
                            <h2 className="text-capitalize">
                                Design, attention to detail &<br />
                                efficiency to delight the world
                            </h2>
                        </div>
                        <div className="col-md-6">
                            <p className="text-body-1">
                                From the moment it is conceived to the moment it is worn, every one of our garments follows this path. We could do it at a fast pace. However, at Mango, we choose to take care of all those who are walking this path with us.
                            </p>
                        </div>
                    </div>

                    <div className="flat-spacing pb-0">
                        <div className="position-relative flat-spacing pb-0">
                            <div className="br-line fake-class top-0"></div>
                            <div className="row">
                                {counters.map((counter, index) => (
                                    <div className="col-lg-3 col-md-6" key={index}>
                                        <div className="box-why couter-side">
                                            <p className="h1 fw-medium">{counter.value}</p>
                                            <p className="title h5 fw-medium">{counter.label}</p>
                                            <p className="sub cl-text-2">{counter.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner Why Choose */}
            <section className="themesFlat flat-spacing pt-0">
                <div className="container">
                    <div className="banner-why-choose">
                        <div className="bn-image">
                            <img loading="lazy" width="640" height="480" src="/assets/images/section/s-contact-2.jpg" alt="Why Choose Us" />
                        </div>
                        <div className="bn-content">
                            <h3 className="mb-12">Offering Rare And Beautiful Items Worldwide</h3>
                            <div className="accordion-v2" id="accordion-v2">
                                <div className="accordion-item_v2">
                                    <div className="accordion-action lh-24 fw-medium" data-bs-target="#faq-1" data-bs-toggle="collapse" aria-expanded="true" aria-controls="faq-1" role="button">
                                        <span>Introduction</span>
                                        <span className="icon ic-accordion-custom cl-2"></span>
                                    </div>
                                    <div id="faq-1" className="collapse show" data-bs-parent="#accordion-v2">
                                        <p className="faq-content cl-text-2">
                                            Welcome to Amerce Store, your premier destination for fashion-forward clothing accessories. We pride ourselves on offering a curated selection of rare beautiful items sourced both locally and globally. Our mission is to bring you the latest trends & timeless styles, ensuring every piece reflects quality and elegance.
                                        </p>
                                    </div>
                                </div>
                                <div className="accordion-item_v2">
                                    <div className="accordion-action collapsed lh-24 fw-medium" data-bs-target="#faq-2" data-bs-toggle="collapse" aria-expanded="false" aria-controls="faq-2" role="button">
                                        <span>Our Vision</span>
                                        <span className="icon ic-accordion-custom cl-2"></span>
                                    </div>
                                    <div id="faq-2" className="collapse" data-bs-parent="#accordion-v2">
                                        <p className="faq-content cl-text-2">
                                            Our vision is to become the leading global marketplace for unique fashion. We aim to empower individuals to express their personal style through items that are as unique as they are.
                                        </p>
                                    </div>
                                </div>
                                <div className="accordion-item_v2">
                                    <div className="accordion-action collapsed lh-24 fw-medium" data-bs-target="#faq-3" data-bs-toggle="collapse" aria-expanded="false" aria-controls="faq-3" role="button">
                                        <span>What Sets Us Apart</span>
                                        <span className="icon ic-accordion-custom cl-2"></span>
                                    </div>
                                    <div id="faq-3" className="collapse" data-bs-parent="#accordion-v2">
                                        <p className="faq-content cl-text-2">
                                            We focus on ethical sourcing and sustainable fashion. Every piece in our collection is handpicked for its quality, story, and impact on the world.
                                        </p>
                                    </div>
                                </div>
                                <div className="accordion-item_v2">
                                    <div className="accordion-action collapsed lh-24 fw-medium" data-bs-target="#faq-4" data-bs-toggle="collapse" aria-expanded="false" aria-controls="faq-4" role="button">
                                        <span>Our Commitment</span>
                                        <span className="icon ic-accordion-custom cl-2"></span>
                                    </div>
                                    <div id="faq-4" className="collapse" data-bs-parent="#accordion-v2">
                                        <p className="faq-content cl-text-2">
                                            Welcome to Amerce Store, your premier destination for fashion-forward clothing accessories. We pride ourselves on offering a curated selection of rare beautiful items sourced both locally and globally.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Member Section */}
            <section className="flat-spacing pt-0">
                <div className="container">
                    <div className="sect-heading type-2 text-center">
                        <h3 className="s-title">Meet Our Teams</h3>
                        <p className="s-desc text-body-1 cl-text-2">Experts committed to excellence in every detail.</p>
                    </div>
                    <div className="row g-20 mt-40">
                        {teamMembers.map((member, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div className="card-member-v01 hover-img">
                                    <div className="member-image">
                                        <div className="image img-style">
                                            <img loading="lazy" width="330" height="440" src={member.image} alt={member.name} />
                                        </div>
                                        <div className="social-wrap">
                                            <ul className="tf-social-icon-2 style-2 d-grid">
                                                <li><a href="https://www.facebook.com/"><i className="icon icon-FacebookLogo"></i></a></li>
                                                <li><a href="https://x.com/"><i className="icon icon-XLogo"></i></a></li>
                                                <li><a href="https://www.instagram.com/"><i className="icon icon-InstagramLogo"></i></a></li>
                                                <li><a href="https://www.tiktok.com/"><i className="icon icon-TiktokLogo"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="member-info text-center">
                                        <a href="#" className="name h5 fw-medium link-underline link">
                                            {member.name}
                                        </a>
                                        <p className="duty cl-text-2">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
