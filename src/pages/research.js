import { Box, Text } from "@mantine/core";
import React from "react";
import Header from "../components/Header/Header";
import ResearchContent from "../components/research/ResearchContent";

const Research = () => {
  return (
    <Box px={150} mt={250} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <Header />
      <ResearchContent />
    </Box>
  )
}

export default Research;