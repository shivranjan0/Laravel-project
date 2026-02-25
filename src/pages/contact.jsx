import React from "react";
import Link from "next/link";

const Contact = () => {
    return (
        <main id="wrapper">
            {/* Page Title */}
            <section className="section-page-title text-center flat-spacing-2 pb-0">
                <div className="container">
                    <div className="main-page-title">
                        <div className="breadcrumbs">
                            <Link href="/" className="text-caption-01 cl-text-3 link">Home</Link>
                            <i className="icon icon-CaretRightThin cl-text-3"></i>
                            <p className="text-caption-01">Contact Us</p>
                        </div>
                        <h3>Contact Us</h3>
                        <p className="text-body-1 cl-text-2">
                            Get in touch with us for inquiries, support, or collaboration we’re here to help you.
                        </p>
                    </div>
                </div>
            </section>
            {/* /Page Title */}

            {/* Map */}
            <div className="section-map flat-spacing-2 pb-0">
                <div className="container">
                    <div className="wg-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7880.148272329334!2d151.20657421407668!3d-33.858885268389294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae682c546039%3A0x16da940d587922a1!2sCircular%20Quay!5e0!3m2!1sen!2s!4v1745205798630!5m2!1sen!2s"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps"
                        ></iframe>
                    </div>
                </div>
            </div>
            {/* /Map */}

            {/* Contact */}
            <section className="section-contact flat-spacing">
                <div className="container">
                    <div className="row gy-5 flex-wrap-reverse">
                        <div className="col-md-6">
                            <div className="col-left">
                                <div className="heading d-grid gap-8">
                                    <h4>Information</h4>
                                    <h5 className="d-none">Perfect Heading SEO</h5>
                                    <p className="cl-text-2">
                                        Have a question? Please contact us using the customer support channels below.
                                    </p>
                                </div>
                                <div className="grid-info tf-grid-layout sm-col-2">
                                    <div className="d-grid gap-8">
                                        <h6>Phone:</h6>
                                        <p>
                                            <a href="tel:0112348888" className="cl-text-2 link">
                                                (+01) 1234 8888
                                            </a>
                                        </p>
                                    </div>
                                    <div className="d-grid gap-8">
                                        <h6>Email:</h6>
                                        <p>
                                            <a href="mailto:hi.amere@gmail.com" className="cl-text-2 link">
                                                hi.amere@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                    <div className="wd-full d-grid gap-8">
                                        <h6>Address:</h6>
                                        <p>
                                            <a href="https://www.google.com/maps?q=600+N+Michigan+Ave+Chicago,+IL+60611+USA"
                                                target="_blank" rel="noopener noreferrer" className="cl-text-2 link">
                                                600 N Michigan Ave, Chicago, IL 60611, USA
                                            </a>
                                        </p>
                                    </div>
                                    <div className="wd-full d-grid gap-8">
                                        <h6>Open Time:</h6>
                                        <ul className="open-text">
                                            <li className="d-flex gap-4 mb-4">
                                                <span className="cl-text-2">Mon - Sat:</span>7:30am - 8:00pm PST
                                            </li>
                                            <li className="d-flex gap-4">
                                                <span className="cl-text-2">Sunday:</span>9:00am - 5:00pm PST
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h4 className="mb-8">Get In Touch</h4>
                            <p className="mb-24 cl-text-2">
                                Use the form below to get in touch with the sales team
                            </p>
                            <form className="form-get" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-content">
                                    <div className="tf-grid-layout sm-col-2">
                                        <fieldset className="tf-field">
                                            <label htmlFor="your-name" className="tf-lable fw-medium">
                                                Your Name
                                                <span className="text-primary">*</span>
                                            </label>
                                            <input type="text" id="your-name" placeholder="Your Name*" required />
                                        </fieldset>
                                        <fieldset className="tf-field">
                                            <label htmlFor="your-email" className="tf-lable fw-medium">
                                                Your Email
                                                <span className="text-primary">*</span>
                                            </label>
                                            <input type="email" id="your-email" placeholder="Your Email*" required />
                                        </fieldset>
                                    </div>
                                    <fieldset className="tf-field">
                                        <label htmlFor="your-message" className="tf-lable fw-medium">
                                            Your Message
                                            <span className="text-primary">*</span>
                                        </label>
                                        <textarea id="your-message" placeholder="Your Message*" required></textarea>
                                    </fieldset>
                                    <div className="checkbox-wrap">
                                        <input className="tf-check flex-shrink-0" type="checkbox" id="agree-term-2" />
                                        <label htmlFor="agree-term-2">
                                            Save my name, email, and website in this browser for the next time I comment.
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="tf-btn animate-btn">
                                    Send message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Contact */}
        </main>
    );
};

export default Contact;
