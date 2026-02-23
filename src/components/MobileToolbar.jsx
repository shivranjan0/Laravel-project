function MobileToolbar() {
    return (
        <div className="tf-toolbar-bottom">
            <div className="toolbar-item">
                <a href="/shop">
                    <span className="toolbar-icon">
                        <i className="icon icon-storefront"></i>
                    </span>
                    <span className="toolbar-label">Shop</span>
                </a>
            </div>
            <div className="toolbar-item">
                <a href="#search" data-bs-toggle="modal">
                    <span className="toolbar-icon">
                        <i className="icon icon-MagnifyingGlass"></i>
                    </span>
                    <span className="toolbar-label">Search</span>
                </a>
            </div>
            <div className="toolbar-item">
                <a href="/account">
                    <span className="toolbar-icon">
                        <i className="icon icon-User"></i>
                    </span>
                    <span className="toolbar-label">Account</span>
                </a>
            </div>
            <div className="toolbar-item">
                <a href="/wishlist">
                    <span className="toolbar-icon">
                        <i className="icon icon-HeartStraight"></i>
                    </span>
                    <span className="toolbar-label">Wishlist</span>
                </a>
            </div>
            <div className="toolbar-item">
                <a href="#shoppingCart" data-bs-toggle="offcanvas">
                    <span className="toolbar-icon">
                        <i className="icon icon-Handbag"></i>
                        <span className="toolbar-count">12</span>
                    </span>
                    <span className="toolbar-label">Cart</span>
                </a>
            </div>
        </div>
    );
}

export default MobileToolbar;
