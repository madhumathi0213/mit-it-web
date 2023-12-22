import React from "react";
import Layout from "../components/layout/Layout";
import FacilitiesContent from "../components/facilities/FacilitiesContent";
import { MantineProvider } from "@mantine/core";
import defaultTheme from "../theme/defaultTheme";

const Facilities = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={defaultTheme}
    >
      <Layout>
        <FacilitiesContent />
      </Layout>
    </MantineProvider>
  )
}

export default Facilities;