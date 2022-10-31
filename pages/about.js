import Link from "next/link";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import layoutStyles from "../components/layout.module.css";

export default function About() {
  return (
    <Layout>
      <p>
        I recently graduated in Applied Mathematics at Ryerson University.
        Currently, I'm looking for a full-time job as a sofware engineer.
      </p>
      <div className={utilStyles.buttons}>
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
