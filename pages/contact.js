import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import layoutStyles from "../components/layout.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <Layout>
      <h2 className={utilStyles.headingLg}>Get in Touch</h2>
      <div className={utilStyles.buttons}>
        <Link href="mailto:contact@cphung.com">
          <button className={utilStyles.button}>Say Hello</button>
        </Link>
      </div>
    </Layout>
  );
}
