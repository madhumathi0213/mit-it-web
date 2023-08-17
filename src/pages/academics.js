import { Box, Text } from "@mantine/core";
import React from "react";
import Header from "../components/Header/Header";
import AcademicsContent from "../components/academics/AcademicsContent";

const Academics = () => {
  return (
    <Box px={150} mt={250} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <Header />
      <AcademicsContent />
    </Box>
  )
}

export default Academics;