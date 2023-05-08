import React from "react";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Analytics from "../analytics";
import "../styles/base.scss";

const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <Analytics>
      <div className="container">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-7RZQT5M2R9`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-7RZQT5M2R9');
              `,
            }}
          />
        </Head>
        <div className="header-and-content">
          <Header />
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </Analytics >
  );
};

export default App;
