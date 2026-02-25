import React from "react";
import { NavArrowRight } from "iconoir-react";

const PageTitle = ({ title, breadcrumbs, description }) => {
    return (
        <section className="section-page-title text-center flat-spacing-2 pb-0">
            <div className="container">
                <div className="main-page-title">
                    <div className="breadcrumbs">
                        <a href="/" className="text-caption-01 cl-text-3 link">
                            Home
                        </a>
                        <NavArrowRight height={20} width={20} className="cl-text-3" />
                        {breadcrumbs.map((crumb, index) => (
                            <React.Fragment key={index}>
                                {index < breadcrumbs.length - 1 ? (
                                    <>
                                        <a href={crumb.link} className="text-caption-01 cl-text-3 link">
                                            {crumb.text}
                                        </a>
                                        <NavArrowRight height={20} width={20} className="cl-text-3" />
                                    </>
                                ) : (
                                    <p className="text-caption-01">{crumb.text}</p>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <h3>{title}</h3>
                    {description && (
                        <p className="text-body-1 cl-text-2">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PageTitle;
