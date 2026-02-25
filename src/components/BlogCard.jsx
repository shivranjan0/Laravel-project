import React from "react";
import Link from "next/link";

const BlogCard = ({ image, date, title, description, link = "/blog-detail" }) => {
    return (
        <article className="article-blog hover-img">
            <Link href={link} className="blog-image img-style">
                <img loading="lazy" width="450" height="307" src={image} alt={title} />
            </Link>
            <div className="blog-content">
                <p className="entry-date text-caption-01 fw-semibold cl-text-3">{date}</p>
                <h5 className="entry-title">
                    <Link href={link} className="link-underline link">
                        {title}
                    </Link>
                </h5>
                <p className="entry-desc cl-text-2">
                    {description}
                </p>
            </div>
        </article>
    );
};

export default BlogCard;
