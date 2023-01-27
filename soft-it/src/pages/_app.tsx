import '../sass/index.scss';
import type { AppProps } from 'next/app';
import FontProvider from '@components/Common/FontProvider';
import { GlobalContextProvider } from '@/contexts/GlobalContext';
import 'swiper/swiper-bundle.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <FontProvider>
        <Component {...pageProps} />
      </FontProvider>
    </GlobalContextProvider>
  );
}
