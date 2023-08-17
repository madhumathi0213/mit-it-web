import { Box,Text } from "@mantine/core";
import React from "react";
import Header from "../components/Header/Header";
import PeopleContent from "../components/people/PeopleContent";

const People = () => {
  return (
    <Box px={150}>
      <Header />
      <PeopleContent />
    </Box>
  )
}
export default People;