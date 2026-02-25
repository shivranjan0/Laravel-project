import Header from "../components/Header";
import Footer from "../components/Footer";
import ShoppingCart from "../components/ShoppingCart";
import MobileToolbar from "../components/MobileToolbar";
import MobileMenu from "../components/MobileMenu";
import SearchModal from "../components/SearchModal";
import Head from "next/head";

import "../assets/css/bootstrap.min.css";
import "../assets/css/animate.css";
import "../assets/css/swiper-bundle.min.css";
import "../assets/fonts/fonts.css";
import "../assets/icon/icomoon/style.css";
import "../assets/css/styles.css";
import "../index.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Amerce - Premium E-Commerce Store</title>
                <meta name="description" content="Shop the latest trends in fashion. Premium clothing and accessories for men and women." />
                <meta name="keywords" content="ecommerce, fashion, clothing, shop, online store, fast delivery, quality products" />
                <meta property="og:title" content="Amerce - Premium E-Commerce Store" />
                <meta property="og:description" content="Shop the latest trends in fashion. Premium clothing and accessories for men and women." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>
            <main id="wrapper">
                <Header />
                <Component {...pageProps} />
                <ShoppingCart />
                <MobileToolbar />
                <MobileMenu />
                <SearchModal />
                <Footer />
            </main>
        </>
    );
}
