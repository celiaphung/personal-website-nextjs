import Head from "next/head";
import Button from "../components/button";
import { Buttons, Intro, LinkButton } from "../components/styled";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Intro>
        I recently graduated in Applied Mathematics at Ryerson University.
        Currently, I'm looking for a full-time job. I am most keen to enter the
        field of software dev at a company that will afford me the chance to
        develop my skills as a front-end software engineer.
      </Intro>
      <Buttons>
        <Button name="Email" url="mailto:contact@cphung.com" />
        <Button name="Twitter" url="https://twitter.com/celiaphung" />
        <Button name="Github" url="https://github.com/celiaphung" />
        <Button name="LinkedIn" url="https://linkedin.com/in/celiaphung" />
        <Button name="Resume" url="/resume" />
      </Buttons>
    </Layout>
  );
}
