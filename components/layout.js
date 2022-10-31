import Head from "next/head";
import layoutStyles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

const name = "Celia Phung";
export const siteTitle = "Celia Phung";

export default function Layout({ children, home }) {
  return (
    // Use the class as the className
    <div className={layoutStyles.content}>
      <div className={layoutStyles.container}>
        <Head>
          {/* Used to describe a page's content */}
          <meta
            name="description"
            content="Building personal website using Next.js"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <header>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={192}
            width={192}
            alt={name}
          />
        </header>

        <div>
          <h1 className={utilStyles.headingXl}>Hi, I'm {name}</h1>
        </div>

        <main className={utilStyles.description}>{children}</main>
      </div>
    </div>
  );
}
