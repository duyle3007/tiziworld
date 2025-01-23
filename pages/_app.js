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
          <title>Gnosis TMS</title>
          <link rel="icon" href="/images/favicon.ico" sizes="any" />
          <link rel="mask-icon" href="/images/favicon.ico" color="#fa1249" />

          <link rel="shortcut icon" href="/images/favicon.ico" sizes="any" />
          <link rel="icon shortcut " href="/images/favicon.ico" />

          <link rel="apple-touch-icon" href="/images/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
        </Head>

        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
