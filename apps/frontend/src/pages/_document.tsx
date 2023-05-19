import { createGetInitialProps } from '@mantine/next';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  render(): ReactElement<HTMLHtmlElement> {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static getInitialProps = getInitialProps;
}
