import React from "react";
import { Box, Tabs } from "@mantine/core";
import Header from "../components/Header/Header";
import AboutUsContent from "../components/commonComponents/AboutUsContent";
import Footer from "../components/Footer/Footer"


const AboutUs = () => {
  return (
    <Box>
      <Header />
      <Box mb={100}>
        <AboutUsContent />
      </Box>
      <Footer />
    </Box>
  )
}

export default AboutUs;