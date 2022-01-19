import Document, { Html, Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />

                <body className="scrollbar-thin scrollbar-thumb-primary-100">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}