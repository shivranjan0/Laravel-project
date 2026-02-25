import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="UTF-8" />
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <script src="/assets/js/plugin/jquery.min.js"></script>
                <script src="/assets/js/plugin/bootstrap.min.js"></script>
            </body>
        </Html>
    )
}
