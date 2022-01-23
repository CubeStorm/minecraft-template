import Document, { Html, Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pl">
                <Head />

                <body className="bg-background scrollbar-thin scrollbar-thumb-primary-100">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}