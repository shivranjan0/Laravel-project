import { useState } from "react";
import Link from "next/link";
import { Xmark, Search, NavArrowDown } from "iconoir-react";

const MobileMenu = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection((prev) => (prev === section ? null : section));
    };

    const menuItems = [
        {
            id: "new-featured",
            label: "New & Featured",
            path: "/collection",
            className: "text cus-text"
        },
        {
            id: "men",
            label: "Men",
            path: "/collection",
        },
        {
            id: "women",
            label: "Women",
            path: "/collection",
        },
        {
            id: "product",
            label: "Product",
            links: [
                { label: "Product Detail", path: "/product" },
                { label: "Product Grid", path: "/product" },
            ],
        },
        {
            id: "blog",
            label: "Blog",
            path: "/blog",
        },
        {
            id: "about",
            label: "About Us",
            path: "/about",
        },
        {
            id: "contact",
            label: "Contact Us",
            path: "/contact",
        },
        {
            id: "account",
            label: "My Account",
            path: "/my-account",
        },
    ];

    return (
        <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
            <div className="canvas-header">
                <span className="icon-close-popup" data-bs-dismiss="offcanvas">
                    <Xmark height={24} width={24} />
                </span>
                <form className="form-search-nav" onSubmit={(e) => e.preventDefault()}>
                    <fieldset>
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            required
                        />
                    </fieldset>
                    <button type="submit" className="btn-action">
                        <Search height={20} width={20} />
                    </button>
                </form>
            </div>
            <div className="canvas-body">
                <div className="mb-content-top">
                    <ul className="nav-ul-mb" id="wrapper-menu-navigation">
                        {menuItems.map((item) => (
                            <li className="nav-mb-item" key={item.id}>
                                {item.links ? (
                                    <>
                                        <a
                                            href={`#${item.id}`}
                                            className={`mb-menu-link ${activeSection === item.id ? "" : "collapsed"}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggleSection(item.id);
                                            }}
                                            aria-expanded={activeSection === item.id}
                                        >
                                            <span className={item.className || ""}>{item.label}</span>
                                            <NavArrowDown height={20} width={20} style={{ transform: activeSection === item.id ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }} />
                                        </a>
                                        <div className={`tf-collapse-content ${activeSection === item.id ? "open" : ""}`}>
                                            <div>
                                                <ul className="sub-nav-menu">
                                                    {item.links.map((link, idx) => (
                                                        <li key={idx}>
                                                            <Link href={link.path} className="sub-nav-link">
                                                                {link.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link href={item.path} className="mb-menu-link">
                                        <span className={item.className || ""}>{item.label}</span>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="need-help-wrap">
                    <div className="h4 fw-bold text-black">Need Help?</div>
                    <p className="lh-26 cl-text-2 mb-4">
                        600 N Michigan Ave, Chicago, IL <br /> 60611, USA
                    </p>
                    <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer"
                        className="open-in-maps lh-26 mb-16 d-block">
                        Open in Maps
                    </a>
                    <a href="mailto:hi.amere@gmail.com" className="cl-text-2 link mb-8 d-block">
                        hi.amere@gmail.com
                    </a>
                    <a href="tel:3156666688" className="cl-text-2 link">
                        315-666-6688
                    </a>
                </div>
            </div>
            <div className="canvas-footer border-top">
                <div className="d-flex justify-content-center align-items-center border-end w-50">
                    <div className="d-flex align-items-center gap-2">
                        <img src="/assets/images/country/us.png" alt="US" width="20" height="14" />
                        <span>(USD $)</span>
                        <NavArrowDown height={16} width={16} />
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center w-50">
                    <div className="d-flex align-items-center gap-2">
                        <span>English</span>
                        <NavArrowDown height={16} width={16} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
