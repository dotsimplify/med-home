import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="">
        <Head>
          <link rel="icon" type="favicon" href="/favicon.svg" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className="font-OpenSans ">
          <Main />
          {/* Modal will be mounted here */}
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
