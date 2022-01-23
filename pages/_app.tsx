import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import Head from 'next/head';
import Layout from '@components/Layout';

import { store } from '@redux/store';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '@styles/global.css';
import '@styles/tailwind.css';
import '@styles/button.css';



export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Head>
                <title>{process.env.NEXT_PUBLIC_APP_NAME} ● Najlepszy Serwer Minecraft</title>
            </Head>

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}