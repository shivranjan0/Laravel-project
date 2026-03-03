import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="UTF-8" />
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
                {/* Global Assets */}
                <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/css/animate.css" />
                <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
                <link rel="stylesheet" href="/assets/fonts/fonts.css" />
                <link rel="stylesheet" href="/assets/icon/icomoon/style.css" />
                <link rel="stylesheet" href="/assets/css/styles.css" />
                {/* Hide storefront mobile toolbar on admin pages */}
                <style>{`
                    html[data-nav-layout="vertical"] .tf-toolbar-bottom {
                        display: none !important;
                    }
                `}</style>
            </Head>
            <body>
                {/*
                  * Runs SYNCHRONOUSLY before React hydration and before any CSS applies.
                  * For admin pages: reads the saved theme from localStorage, sets the correct
                  * data attributes AND background color on <html> so there is zero flash of
                  * wrong colors (no red storefront background, correct dark/light bg from px 1).
                */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                if (window.location.pathname.startsWith('/admin')) {
                                    var theme = localStorage.getItem('adminThemeMode') || 'light';
                                    var bg = theme === 'dark' ? '#1a1c2b' : '#f3f4f9';
                                    var el = document.documentElement;
                                    el.setAttribute('data-nav-layout', 'vertical');
                                    el.setAttribute('data-theme-mode', theme);
                                    el.style.backgroundColor = bg;
                                    document.body.style.backgroundColor = bg;
                                }
                            })();
                        `
                    }}
                />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

