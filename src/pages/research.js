import { Box, MantineProvider, Text } from "@mantine/core";
import React from "react";
import Header from "../components/Header/Header";
import ResearchContent from "../components/research/ResearchContent";
import Layout from "../components/layout/Layout";
import defaultTheme from "../theme/defaultTheme";

const Research = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={defaultTheme}
      >
      <Layout>
        <Header />
        <ResearchContent />
      </Layout>
    </MantineProvider>
  )
}

export default Research;