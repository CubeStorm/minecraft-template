import { useEffect } from 'react';

import Head from 'next/head';
import { Provider } from 'react-redux';
import Layout from '@components/Layout';

import AOS from 'aos';
import { store } from '@redux/store';

import type { AppProps } from 'next/app';

import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@styles/global.css';
import '@styles/tailwind.css';
import '@styles/button.css';


export default function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init();
    });

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