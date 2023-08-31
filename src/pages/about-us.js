import React from "react";
import { Box } from "@mantine/core";
import AboutUsContent from "../components/commonComponents/AboutUsContent";
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