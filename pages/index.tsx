import React, { FC } from "react";

import { Layout } from "../components";
import { StyledIndexPage } from "../components/styles/home.styles";
import { getContentList } from "../lib/content";

/**
 * Index page `/index`
 */

//@ts-ignore
const Index: FC = ({ selectedWorks }) => {
  return (
    <Layout pathname={"/"} pageTitle="Nextjs Starter Peacock">
      <StyledIndexPage>
      </StyledIndexPage>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const works = await getContentList("work");
  const selectedWorks = works.filter((work) => work.selectedWork);

  return {
    props: {
      selectedWorks,
    },
  };
};

export default Index;
