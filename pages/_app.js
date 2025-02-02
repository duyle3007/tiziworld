import Head from "next/head";

import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "@/components/Layout/Layout";

import "antd/dist/reset.css";
import "styles/globals.scss";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Head>
          <title>Tizi World</title>
          <link rel="icon" href="/images/favicon.ico" sizes="any" />
          <link rel="mask-icon" href="/images/favicon.ico" color="#fa1249" />

          <link rel="shortcut icon" href="/images/favicon.ico" sizes="any" />
          <link rel="icon shortcut " href="/images/favicon.ico" />

          <link rel="apple-touch-icon" href="/images/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>

        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
