import '../sass/index.scss';
import type { AppProps } from 'next/app';
import FontProvider from '@components/Common/FontProvider';
import { GlobalContextProvider } from '@/contexts/GlobalContext';
import 'swiper/swiper-bundle.css';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider headData={pageProps.headData}>
      <FontProvider>
        <Component {...pageProps} />
      </FontProvider>
    </GlobalContextProvider>
  );
}

export default appWithTranslation(App);