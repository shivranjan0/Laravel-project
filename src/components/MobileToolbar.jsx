import Link from "next/link";
import { Shop, Search, User, Heart, ShoppingBag } from "iconoir-react";

function MobileToolbar() {
    return (
        <div className="tf-toolbar-bottom">
            <div className="toolbar-item">
                <Link href="/product">
                    <span className="toolbar-icon">
                        <Shop height={24} width={24} />
                    </span>
                    <span className="toolbar-label">Shop</span>
                </Link>
            </div>
            <div className="toolbar-item">
                <a href="#search" data-bs-toggle="modal">
                    <span className="toolbar-icon">
                        <Search height={24} width={24} />
                    </span>
                    <span className="toolbar-label">Search</span>
                </a>
            </div>
            <div className="toolbar-item">
                <Link href="/my-account">
                    <span className="toolbar-icon">
                        <User height={24} width={24} />
                    </span>
                    <span className="toolbar-label">Account</span>
                </Link>
            </div>
            <div className="toolbar-item">
                <Link href="/wishlist">
                    <span className="toolbar-icon">
                        <Heart height={24} width={24} />
                    </span>
                    <span className="toolbar-label">Wishlist</span>
                </Link>
            </div>
            <div className="toolbar-item">
                <a href="#shoppingCart" data-bs-toggle="offcanvas">
                    <span className="toolbar-icon">
                        <ShoppingBag height={24} width={24} />
                        <span className="toolbar-count">12</span>
                    </span>
                    <span className="toolbar-label">Cart</span>
                </a>
            </div>
        </div>
    );
}

export default MobileToolbar;
