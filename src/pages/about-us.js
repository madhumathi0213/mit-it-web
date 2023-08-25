import React from "react";
import { Box, Tabs } from "@mantine/core";
import Header from "../components/Header/Header";
import AboutUsContent from "../components/commonComponents/AboutUsContent";
import Footer from "../components/Footer/Footer"
import Layout from "../components/layout/Layout";


const AboutUs = () => {
  return (
    <Box>
      <Layout withLayout={false}>
        <Box mb={100}>
          <AboutUsContent />
        </Box>
      </Layout>
    </Box>
  )
}

export default AboutUs;