import Head from "next/head";
import Layout from "../../components/layout";
import List from "../../components/list";
import { Display, ResumeBox } from "../../components/styled";

export default function Education() {
  const education = [
    {
      company: "Ryerson University",
      date: "2019-2021",
      role: "Honours Mathematics and its Applications (BSc)",
      detail: "GPA: 3.90, Distinction, Deans list (3rd and 4th year)",
    },
    {
      company: "Udacity",
      date: "2020-2021",
      role: "React Nanodegree",
      detail:
        "Learned the basics of the React framework, Redux and React Native to build web and mobile applications.",
    },
    {
      company: "Udacity",
      date: "2019",
      role: "Introduction to Programming Nanodegree",
      detail:
        "Learned the basics of programming and using languages such as Python, Javascript, HTML and CSS. Was additionally introduced to basic programming fundamentals.",
    },
    {
      company: "Ryerson University",
      date: "2017-2019",
      role: "Honours Chemistry (BSc)",
      detail:
        "Studied chemistry at Ryerson University for three years before transferring to Mathematics and its applications.",
    },
  ];
  return (
    <Layout>
      <Head>
        <title>Education</title>
      </Head>
      <Display>
        <ResumeBox>
          <List list={education} />
        </ResumeBox>
      </Display>
    </Layout>
  );
}
