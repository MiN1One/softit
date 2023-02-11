import '../sass/index.scss';
import type { AppProps } from 'next/app';
import { GlobalContextProvider } from '@/contexts/GlobalContext';
import 'swiper/swiper-bundle.css';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider headData={pageProps.headData}>
      <Component {...pageProps} />
    </GlobalContextProvider>
  );
}

export default appWithTranslation(App);