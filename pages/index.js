import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <p>
          I recently graduated in Applied Mathematics at Ryerson University.
          Currently, I'm looking for a full-time job. I am most keen to enter the field of software dev at a company that will afford me the chance to develop my skills as a front-end software engineer.
        </p>
        <div className={utilStyles.buttons}>
          <Link href="mailto:contact@cphung.com">
            <button className={utilStyles.button}>Email</button>
          </Link>
          <Link href="https://twitter.com/celiaphung">
            <button className={utilStyles.button}>Twitter</button>
          </Link>
          <Link href="https://github.com/celiaphung">
            <button className={utilStyles.button}>Github</button>
          </Link>
          <Link href="https://linkedin.com/in/celiaphung">
            <button className={utilStyles.button}>LinkedIn</button>
          </Link>
        </div>
      </Layout>
  );
}
