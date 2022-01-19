import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import Layout from '@components/Layout';

import { store } from '@redux/store';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '@styles/tailwind.css';
import '@styles/button.css';



export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}