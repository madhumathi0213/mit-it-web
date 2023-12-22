import React from "react";
import { Box, MantineProvider } from "@mantine/core";
import AboutUsContent from "../components/commonComponents/AboutUsContent";
import Layout from "../components/layout/Layout";
import defaultTheme from "../theme/defaultTheme";


const AboutUs = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={defaultTheme}
    >
      <Box>
        <Layout withLayout={false}>
          <Box mb={100}>
            <AboutUsContent />
          </Box>
        </Layout>
      </Box>
    </MantineProvider>

  )
}

export default AboutUs;