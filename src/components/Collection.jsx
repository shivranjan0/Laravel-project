import { useState } from 'react';
import { NavArrowRight } from "iconoir-react";

const Collection = () => {
    const [activeTab, setActiveTab] = useState('tabCls1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <section className="flat-spacing flat-animate-tab-2">
            <div className="container">
                <div className="banner-collect-v01 style-2 st-2_2 tf-grid-layout lg-col-2">
                    <div className="col-left">
                        <div className="heading wow fadeInUp">
                            <h3 className="mb-8">Curated Collections For Style</h3>
                            <p className="text-body-1 cl-text-2">
                                Thoughtfully designed fashion pieces defining modern elegance.
                            </p>
                        </div>
                        <ul className="list-btn-tab-accordion style-2 wow fadeInUp" role="tablist">
                            <li className={`nav-tab-item ${activeTab === 'tabCls1' ? 'active' : ''}`} onClick={() => handleTabClick('tabCls1')}>
                                <div className={`accordion-title ${activeTab === 'tabCls1' ? '' : 'collapsed'}`} role="button" aria-expanded={activeTab === 'tabCls1'}>
                                    <span className="h5 fw-medium">Fresh Seasonal Designs</span>
                                    <NavArrowRight height={24} width={24} className="icon-ArrowRight" />
                                </div>
                                <div className={`collapse ${activeTab === 'tabCls1' ? 'show' : ''}`}>
                                    <p className="accordion-content cl-text-2">
                                        A carefully curated selection of timeless essentials designed for effortless daily styling, a refined look that seamlessly adapts to your everyday lifestyle.
                                    </p>
                                </div>
                            </li>
                            <li className="br-line"></li>
                            <li className={`nav-tab-item ${activeTab === 'tabCls2' ? 'active' : ''}`} onClick={() => handleTabClick('tabCls2')}>
                                <div className={`accordion-title ${activeTab === 'tabCls2' ? '' : 'collapsed'}`} role="button" aria-expanded={activeTab === 'tabCls2'}>
                                    <span className="h5 fw-medium">Sparkling Diamond Favorites</span>
                                    <NavArrowRight height={24} width={24} className="icon-ArrowRight" />
                                </div>
                                <div className={`collapse ${activeTab === 'tabCls2' ? 'show' : ''}`}>
                                    <p className="accordion-content cl-text-2">
                                        Dazzling diamond pieces that capture light beautifully, adding timeless elegance to any outfit, perfect for special occasions or everyday sophisticated style.
                                    </p>
                                </div>
                            </li>
                            <li className="br-line"></li>
                            <li className={`nav-tab-item ${activeTab === 'tabCls3' ? 'active' : ''}`} onClick={() => handleTabClick('tabCls3')}>
                                <div className={`accordion-title ${activeTab === 'tabCls3' ? '' : 'collapsed'}`} role="button" aria-expanded={activeTab === 'tabCls3'}>
                                    <span className="h5 fw-medium">Bold Designs That Elevate Looks</span>
                                    <NavArrowRight height={24} width={24} className="icon-ArrowRight" />
                                </div>
                                <div className={`collapse ${activeTab === 'tabCls3' ? 'show' : ''}`}>
                                    <p className="accordion-content cl-text-2">
                                        Bold designs that capture attention and elevate your look with a touch of modern sophistication and unique flair.
                                    </p>
                                </div>
                            </li>
                            <li className="br-line"></li>
                            <li className={`nav-tab-item ${activeTab === 'tabCls4' ? 'active' : ''}`} onClick={() => handleTabClick('tabCls4')}>
                                <div className={`accordion-title ${activeTab === 'tabCls4' ? '' : 'collapsed'}`} role="button" aria-expanded={activeTab === 'tabCls4'}>
                                    <span className="h5 fw-medium">Responsibly Made Conscious Fashion</span>
                                    <NavArrowRight height={24} width={24} className="icon-ArrowRight" />
                                </div>
                                <div className={`collapse ${activeTab === 'tabCls4' ? 'show' : ''}`}>
                                    <p className="accordion-content cl-text-2">
                                        Fashion that cares, featuring responsibly made pieces that combine style with sustainability for a conscious wardrobe.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div className="wow fadeInUp">
                            <a href="shop-default.html" className="tf-btn animate-btn">
                                Shop Collections
                            </a>
                        </div>
                    </div>
                    <div className="col-right">
                        <div className="tab-content">
                            <div className={`tab-pane ${activeTab === 'tabCls1' ? 'active show' : ''}`} role="tabpanel">
                                <div className="collect-image">
                                    <img loading="lazy" width="705" height="705" src="/assets/images/collection/fashion-2/cls-1.jpg" alt="Fresh Seasonal Designs" />
                                </div>
                            </div>
                            <div className={`tab-pane ${activeTab === 'tabCls2' ? 'active show' : ''}`} role="tabpanel">
                                <div className="collect-image">
                                    <img loading="lazy" width="705" height="705" src="/assets/images/collection/fashion-2/cls-2.jpg" alt="Sparkling Diamond Favorites" />
                                </div>
                            </div>
                            <div className={`tab-pane ${activeTab === 'tabCls3' ? 'active show' : ''}`} role="tabpanel">
                                <div className="collect-image">
                                    <img loading="lazy" width="705" height="705" src="/assets/images/collection/fashion-2/cls-3.jpg" alt="Bold Designs" />
                                </div>
                            </div>
                            <div className={`tab-pane ${activeTab === 'tabCls4' ? 'active show' : ''}`} role="tabpanel">
                                <div className="collect-image">
                                    <img loading="lazy" width="705" height="705" src="/assets/images/collection/fashion-2/cls-4.jpg" alt="Conscious Fashion" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collection;
