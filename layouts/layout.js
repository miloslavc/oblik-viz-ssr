import Link from 'next/link';
import Head from 'next/head';

export default function Layout({ children, title = 'Oblik Viz' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          |
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>© {new Date().getFullYear()}, All rights reserved. </footer>
    </>
  );
}
