import React from 'react';
import '../src/styles/main.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <Layout>

      <Head>
        <title> Comic Web </title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Component {...pageProps} />


    </Layout>
  )
}

export default MyApp;