import { Box,Text } from "@mantine/core";
import React from "react";
import Header from "../components/Header/Header";
import PeopleContent from "../components/people/PeopleContent";
import Layout from "../components/layout/Layout";

const People = () => {
  return (
    <Layout>
      <Header />
      <PeopleContent />
    </Layout>
  )
}
export default People;