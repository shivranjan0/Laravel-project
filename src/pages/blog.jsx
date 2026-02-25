import React from "react";
import PageTitle from "../components/ProductPage/PageTitle";
import BlogCard from "../components/BlogCard";
import BlogSidebar from "../components/BlogSidebar";

const Blog = () => {
    const blogPosts = [
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
        },
        {
            image: "/assets/images/blog/blog-4.jpg",
            date: "19 August",
            title: "From Work to Weekend: Outfits That Do It All",
            description: "Find versatile looks that transition seamlessly from office hours to after-hours fun."
        },
        {
            image: "/assets/images/blog/blog-5.jpg",
            date: "22 August",
            title: "Mastering Color Palettes for a Modern Wardrobe",
            description: "Understand how to blend tones and textures to express your personality through fashion."
        },
        {
            image: "/assets/images/blog/blog-6.jpg",
            date: "24 August",
            title: "Sustainable Fashion Choices That Never Go Out of Style",
            description: "Learn how to shop smarter with eco-friendly pieces that look good and do good."
        }
    ];

    const breadcrumbs = [
        { text: "Blog", link: "/blog" }
    ];

    return (
        <>
            <PageTitle
                title="Blog"
                breadcrumbs={breadcrumbs}
                description={<>Discover inspiring stories, expert tips, and the latest trends designed to keep you<br className="d-none d-lg-block" /> informed, inspired, and always in style.</>}
            />

            <section className="section-blog flat-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="tf-grid-layout sm-col-2">
                                {blogPosts.map((post, index) => (
                                    <BlogCard key={index} {...post} />
                                ))}

                                <div className="wd-full">
                                    <div className="tf-page-pagination">
                                        <a href="#" className="pag-item">1</a>
                                        <p className="pag-item active">2</p>
                                        <a href="#" className="pag-item">3</a>
                                        <a href="#" className="pag-item">
                                            <i className="icon icon-CaretRightThin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-none d-lg-block">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
