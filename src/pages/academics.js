import { Box, Text } from "@mantine/core";
import React from "react";
import Header from "../components/Header/Header";
import AcademicsContent from "../components/academics/AcademicsContent";
import Footer from "../components/Footer/Footer"
import Layout from "../components/layout/Layout";

const Academics = () => {
  return (
    <Layout>
      <AcademicsContent />
    </Layout>
  )
}

export default Academics;