import { Box, Text } from "@mantine/core";
import React from "react";
import Header from "../components/Header/Header";
import ResearchContent from "../components/research/ResearchContent";
import Layout from "../components/layout/Layout";

const Research = () => {
  return (
    <Layout>
      <Header />
      <ResearchContent />
    </Layout>
  )
}

export default Research;