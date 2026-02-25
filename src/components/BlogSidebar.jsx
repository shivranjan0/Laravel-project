import React from "react";
import Link from "next/link";

const BlogSidebar = () => {
    const categories = [
        { name: "Style Inspiration", count: 112 },
        { name: "Fashion Tips", count: 32 },
        { name: "Trends & News", count: 42 },
        { name: "Outfit Guides", count: 65 },
        { name: "Sustainable Living", count: 13 }
    ];

    const recentPosts = [
        {
            image: "/assets/images/blog/recent-1.jpg",
            date: "25 August",
            title: "Must-Have Wardrobe Staples for Every Season",
            link: "/blog-detail"
        },
        {
            image: "/assets/images/blog/recent-2.jpg",
            date: "27 August",
            title: "Essential Styling Rules Every Woman Should Know",
            link: "/blog-single"
        },
        {
            image: "/assets/images/blog/recent-3.jpg",
            date: "26 August",
            title: "Top Streetwear Trends Dominating This Year",
            link: "/blog-single"
        },
        {
            image: "/assets/images/blog/recent-4.jpg",
            date: "28 August",
            title: "Modern Accessories That Instantly Elevate Your Look",
            link: "/blog-single"
        }
    ];

    const tags = [
        "fashion", "style", "outfit", "trend", "elegance", "minimal", "luxury", "casual", "accessories", "sustainable", "wardrobe"
    ];

    return (
        <div className="blog-sidebar sidebar-content-wrap sticky-top">
            <div className="sidebar-item">
                <div className="sb-search">
                    <form className="form-search-blog" onSubmit={(e) => e.preventDefault()}>
                        <fieldset>
                            <input className="style-stroke-bottom" type="text" placeholder="Search..." required />
                        </fieldset>
                        <button type="submit" className="btn-action link">
                            <i className="icon icon-MagnifyingGlass"></i>
                        </button>
                    </form>
                </div>
            </div>

            <div className="sidebar-item">
                <h5 className="sb-title">Categories</h5>
                <ul className="sb-category">
                    {categories.map((cat, index) => (
                        <li key={index}>
                            <Link href="/blog">
                                {cat.name}
                                <span className="count"> ({cat.count})</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sidebar-item">
                <h5 className="sb-title">Recent Posts</h5>
                <ul className="sb-recent">
                    {recentPosts.map((post, index) => (
                        <li className="recent-item" key={index}>
                            <Link href={post.link} className="image">
                                <img loading="lazy" width="90" height="90" src={post.image} alt={post.title} />
                            </Link>
                            <div className="meta">
                                <p className="meta-date text-caption-01 cl-text-2">{post.date}</p>
                                <Link href={post.link} className="meta-name link-underline link fw-medium">
                                    {post.title}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sidebar-item">
                <h5 className="sb-title">Popular Tag</h5>
                <ul className="sb-tag">
                    {tags.map((tag, index) => (
                        <li key={index}>
                            <Link href="/blog" className="text-caption-01">{tag}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BlogSidebar;
