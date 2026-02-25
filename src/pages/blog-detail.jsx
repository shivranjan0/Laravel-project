import React from "react";
import Link from "next/link";
import BlogCard from "../components/BlogCard";

const BlogDetail = () => {
    const relatedPosts = [
        {
            image: "/assets/images/blog/blog-1.jpg",
            date: "13 August",
            title: "How to Build a Capsule Wardrobe That Fits Your Lifestyle",
            description: "Learn the art of mixing timeless basics with statement pieces for effortless, everyday style."
        },
        {
            image: "/assets/images/blog/blog-2.jpg",
            date: "15 August",
            title: "The Secret to Effortless Elegance in Every Season",
            description: "Discover key layering techniques and fabric choices that keep you chic year-round."
        },
        {
            image: "/assets/images/blog/blog-3.jpg",
            date: "18 August",
            title: "Why Accessories Define More Than Just Your Outfit",
            description: "Explore how small details like jewelry and bags can transform your entire look."
        }
    ];

    return (
        <>
            {/* Breadcrumbs and Post Nav */}
            <div className="section-page-title-single flat-spacing-3">
                <div className="container">
                    <div className="main-page-title">
                        <div className="breadcrumbs">
                            <Link href="/" className="text-caption-01 cl-text-3 link">Home</Link>
                            <i className="icon icon-CaretRightThin cl-text-3"></i>
                            <Link href="/blog" className="text-caption-01 cl-text-3 link">Blog</Link>
                            <i className="icon icon-CaretRightThin cl-text-3"></i>
                            <p className="text-caption-01">High neck midi wool coat</p>
                        </div>
                        <div className="nav-post-list">
                            <Link href="/blog-detail" className="link nav-post-item nav-post-prev">
                                <i className="icon icon-CaretLeft"></i>
                            </Link>
                            <Link href="/blog" className="link nav-all-post nav-post-link">
                                <i className="icon icon-SquaresFour"></i>
                            </Link>
                            <Link href="/blog-detail" className="link nav-post-item nav-post-next">
                                <i className="icon icon-CaretRightThin"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Content */}
            <section className="section-blog-single">
                <div className="main-blog-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="blog-image">
                                    <img loading="lazy" width="1410" height="600" src="/assets/images/blog/detail-1.jpg" alt="Blog Feature" />
                                </div>
                            </div>
                            <div className="col-lg-8 mx-auto">
                                <div className="blog-content">
                                    <div className="blog-heading text-center">
                                        <div className="entry-tag fw-medium">Fashion Trends</div>
                                        <h3 className="entry-title">
                                            Sustainable Fashion Choices That <br className="d-none d-md-block" />
                                            Never Go Out of Style
                                        </h3>
                                        <div className="entry-meta d-flex justify-content-center align-items-center gap-12">
                                            <div className="meta-item meta-date d-flex align-items-center gap-4">
                                                <i className="icon icon-CalendarBlank"></i>
                                                <span className="text-body-1">January 20, 2026</span>
                                            </div>
                                            <div className="br-line type-vertical"></div>
                                            <div className="meta-item meta-author d-flex align-items-center gap-4">
                                                <i className="icon icon-User"></i>
                                                <span className="text-body-1">by Themesflat</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-grid gap-12 mt-40">
                                        <p className="text text-body-1">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed mauris eu
                                            imperdiet. Donec congue orci nec mi luctus, ut faucibus mauris scelerisque.
                                            Donec orci lorem, volutpat a mauris nec, sodales imperdiet urna. Sed dictum
                                            enim libero. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                            Maecenas ligula libero, pharetra non dolor et, tempor bibendum magna. Mauris
                                            a efficitur nisi.
                                        </p>
                                        <p className="text text-body-1">
                                            Praesent interdum lacus ac est viverra hendrerit. Aliquam dapibus, ante
                                            vitae mattis gravida, purus sapien interdum magna, convallis volutpat est
                                            turpis pulvinar dui. Aenean eu turpis est. In hac habitasse platea dictumst.
                                            Integer at lobortis metus. Proin molestie eget massa vel gravida.
                                            Suspendisse nec ante vel.
                                        </p>
                                    </div>
                                    <div className="tf-grid-layout sm-col-2 gap-30 mt-30">
                                        <div className="blog-image-2">
                                            <img loading="lazy" width="450" height="320" src="/assets/images/blog/detail-2.jpg" alt="Detail 1" />
                                        </div>
                                        <div className="blog-image-2">
                                            <img loading="lazy" width="450" height="320" src="/assets/images/blog/detail-3.jpg" alt="Detail 2" />
                                        </div>
                                    </div>
                                    <div className="d-grid gap-16 mt-30">
                                        <h4 className="mini-title text-capitalize">How to deal with employee quitting</h4>
                                        <p className="text text-body-1">
                                            Donec eu dui condimentum, laoreet nulla vitae, venenatis ipsum. Donec luctus
                                            sem sit amet varius laoreet. Aliquam fermentum sit amet urna fringilla
                                            tincidunt. Vestibulum ullamcorper nec lacus ac molestie. Curabitur congue
                                            neque sed nisi auctor consequat. Pellentesque rhoncus tortor vitae ipsum
                                            sagittis tempor.
                                        </p>
                                        <ul className="tf-list vertical gap-12">
                                            <li className="text-body-1">
                                                15+ years of industry experience designing, building, and supporting
                                                large-scale distributed systems in production.
                                            </li>
                                            <li className="text-body-1">
                                                Deep knowledge and experience with different security areas like
                                                identity and access management, cryptography.
                                            </li>
                                            <li className="text-body-1">
                                                Experience with database systems and database internals.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="box-social-tag mt-40">
                                        <div className="tags-right d-flex align-items-center flex-wrap gap-8">
                                            <p>Tags:</p>
                                            <Link href="/blog" className="tag-item text-caption-01">fashion</Link>
                                            <Link href="/blog" className="tag-item text-caption-01">style</Link>
                                        </div>
                                        <div className="social-left">
                                            <p>Share this post: </p>
                                            <ul className="tf-social-icon-2">
                                                <li><a href="#"><i className="icon icon-FacebookLogo"></i></a></li>
                                                <li><a href="#"><i className="icon icon-XLogo"></i></a></li>
                                                <li><a href="#"><i className="icon icon-InstagramLogo"></i></a></li>
                                                <li><a href="#"><i className="icon icon-TiktokLogo"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="group-direc">
                                        <Link href="/blog-detail" className="btn-direc prev link">
                                            <p className="fw-semibold text-decoration-underline">Previous</p>
                                            <p className="name-post h6 fw-medium">From Work To Weekend: Outfits That Do It All</p>
                                        </Link>
                                        <span className="br-line type-vertical"></span>
                                        <Link href="/blog-detail" className="btn-direc next link">
                                            <p className="fw-semibold text-decoration-underline">Next</p>
                                            <p className="name-post h6 fw-medium">Why Accessories Define More Than Outfit</p>
                                        </Link>
                                    </div>

                                    {/* Comments */}
                                    <div className="wg-comment mt-50">
                                        <h4 className="title">03 Comments</h4>
                                        <div className="comment-list">
                                            <div className="box-comment">
                                                <div className="comment_info d-flex gap-16">
                                                    <div className="info_image">
                                                        <img loading="lazy" width="60" height="60" src="/assets/images/avatar/avatar-2.jpg" alt="Avatar" className="rounded-circle" />
                                                    </div>
                                                    <div className="info_author">
                                                        <h6 className="author__name">Guy Hawkins</h6>
                                                        <p className="author_date text-caption-01 cl-text-3">August 13, 2024</p>
                                                    </div>
                                                </div>
                                                <p className="comment_text text-body-1 mt-12">
                                                    I absolutely loved this article! The styling tips were super practical, and
                                                    I finally understand how to mix streetwear pieces without overdoing it.
                                                </p>
                                                <div className="comment_reply mt-20 ms-40">
                                                    <div className="comment_info d-flex gap-16">
                                                        <div className="info_image">
                                                            <img loading="lazy" width="60" height="60" src="/assets/images/avatar/avatar-1.jpg" alt="Avatar" className="rounded-circle" />
                                                        </div>
                                                        <div className="info_author">
                                                            <h6 className="author__name">Reply From Amerce</h6>
                                                            <p className="author_date text-caption-01 cl-text-3">1 day ago</p>
                                                        </div>
                                                    </div>
                                                    <p className="comment_text text-body-1 mt-12">
                                                        Thank you so much! We’re glad you found it helpful — streetwear is all
                                                        about confidence and balance. Stay tuned for next week’s trend guide!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Leave a Comment */}
                                    <div className="wg-leave-comment mt-50">
                                        <h4 className="title">Leave A Comment</h4>
                                        <form className="form-leave-comment mt-24" onSubmit={(e) => e.preventDefault()}>
                                            <div className="form-content">
                                                <div className="tf-grid-layout sm-col-2 gap-20">
                                                    <fieldset className="tf-field">
                                                        <label htmlFor="name" className="tf-lable fw-medium">Your Name <span className="text-primary">*</span></label>
                                                        <input type="text" id="name" placeholder="Your Name" required />
                                                    </fieldset>
                                                    <fieldset className="tf-field">
                                                        <label htmlFor="email" className="tf-lable fw-medium">Your Email <span className="text-primary">*</span></label>
                                                        <input type="email" id="email" placeholder="Your email (private)" required />
                                                    </fieldset>
                                                </div>
                                                <fieldset className="tf-field mt-20">
                                                    <label htmlFor="comment" className="tf-lable fw-medium">Your Message <span className="text-primary">*</span></label>
                                                    <textarea id="comment" placeholder="Write your comment" required></textarea>
                                                </fieldset>
                                                <div className="checkbox-wrap mt-20 d-flex align-items-center gap-8">
                                                    <input className="tf-check" type="checkbox" id="save" />
                                                    <label htmlFor="save" className="cl-text-2 mb-0">
                                                        Save my name, email, and website in this browser for the next time I comment.
                                                    </label>
                                                </div>
                                            </div>
                                            <button type="submit" className="tf-btn animate-btn mt-30">
                                                <span className="btn-text">Post Comment</span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            <section className="section-related flat-spacing">
                <div className="container">
                    <div className="sect-heading text-center">
                        <h3 className="s-title">Related Posts</h3>
                        <p className="s-desc text-body-1 cl-text-2">
                            Discover more stories and style tips to keep your fashion inspiration flowing.
                        </p>
                    </div>
                    <div className="tf-grid-layout sm-col-3 gap-30 mt-40">
                        {relatedPosts.map((post, index) => (
                            <BlogCard key={index} {...post} link="/blog-detail" />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetail;
