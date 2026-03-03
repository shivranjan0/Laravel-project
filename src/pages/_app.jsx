import Header from "../components/Header";
import Footer from "../components/Footer";
import ShoppingCart from "../components/ShoppingCart";
import MobileToolbar from "../components/MobileToolbar";
import MobileMenu from "../components/MobileMenu";
import SearchModal from "../components/SearchModal";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";

import "../index.css";

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const isAdminPage = router.pathname.startsWith("/admin");

    // Admin pages: skip the storefront layout entirely
    if (isAdminPage || Component.getLayout) {
        if (Component.getLayout) {
            return Component.getLayout(<Component {...pageProps} />);
        }
        return <Component {...pageProps} />;
    }

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

            {/* Global JS Plugins */}
            <Script src="/assets/js/plugin/bootstrap.bundle.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/plugin/swiper-bundle.min.js" strategy="afterInteractive" />

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
