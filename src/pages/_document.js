import Document, { Html, Head, Main, NextScript } from 'next/document';

const APP_NAME = 'Qivook - QSource Network (QSN)';
const APP_DESCRIPTION =
  'Qivook\'s QSource Network (QSN) platform - A comprehensive solution for cross-border agricultural trade in Africa. Connect with verified suppliers, access market insights, and streamline your trade processes.';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@400;600&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
