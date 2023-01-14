import App, { AppContext, AppProps } from "next/app";

const NextApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  );
};

NextApp.getInitialProps = (context: AppContext) => {
  const appProps = App.getInitialProps(context);
  return { ...appProps, };
};

export default NextApp;