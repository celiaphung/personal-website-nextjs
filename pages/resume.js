import Head from "next/head";
import Button from "../components/button";
import Layout from "../components/layout";
import { Buttons } from "../components/styled";

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>Resume</title>
      </Head>
      <p>Let's get to know me! Shall we?</p>
      <Buttons>
        <Button name="Education" url="/resume/education" />
        <Button name="Projects" url="/resume/projects" />
      </Buttons>
    </Layout>
  );
}
