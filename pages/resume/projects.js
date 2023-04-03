import Head from "next/head";
import Layout from "../../components/layout";
import List from "../../components/list";
import { Display, ResumeBox } from "../../components/styled";

export default function Projects() {
  const projects = [
    {
      company: "React",
      role: "Book Tracker",
      detail:
        "A book tracking application built using React. Users can organize the books they currently, want to or have read.",
      url: "https://github.com/celiaphung/react-book-tracker",
    },
    {
      company: "React, Redux",
      role: "Would You Rather",
      detail:
        "Users can create a questionnaire for other users to answer. Implements basic authentication and a leaderboard to track scores.",
      url: "https://github.com/celiaphung/would-you-rather-project-redux",
    },
    {
      company: "React Native",
      role: "Mobile Flashcards",
      detail:
        "Mobile application for iOS and Android that allows users to study with collections of Flashcards they create.",
      url: "https://github.com/celiaphung/react-native-flashcard-app",
    },
    {
      company: "NextJS",
      role: "Personal Site",
      detail:
        "Built personal portfolio website using NextJS to employ and understand server side rendering and static site generation.",
      url: "https://github.com/celiaphung/personal-website-nextjs",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <Display>
        <ResumeBox>
          <List list={projects} />
        </ResumeBox>
      </Display>
    </Layout>
  );
}
