import Slideshow from "../components/Slideshow";
import CategorySection from "../components/CategorySection";
import ProductSection from "../components/ProductSection";
import ShopLook from "../components/ShopLook";
import Collection from "../components/Collection";
import InfiniteSlide from "../components/InfiniteSlide";
import FeaturedProduct from "../components/FeaturedProduct";
import Testimonials from "../components/Testimonials";
import Instagram from "../components/Instagram";

function Home() {
    return (
        <>
            <Slideshow />
            <CategorySection />
            <ProductSection />
            <ShopLook />
            <Collection />
            <InfiniteSlide />
            <FeaturedProduct />
            <Testimonials />
            <Instagram />
        </>
    );
}

export default Home;
