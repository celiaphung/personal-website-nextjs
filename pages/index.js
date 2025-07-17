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
         Full-stack engineer at Rose Rocket with experience delivering scalable B2B SaaS features using React, TypeScript, and Postgres. Passionate about building user-centric tools, integrating LLMs, and improving system reliability through automated workflows and testing.
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
