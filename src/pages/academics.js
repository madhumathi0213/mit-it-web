import React from "react";
import AcademicsContent from "../components/academics/AcademicsContent";
import Layout from "../components/layout/Layout";
import { MantineProvider } from "@mantine/core";
import defaultTheme from "../theme/defaultTheme";

const Academics = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={defaultTheme}
    >
      <Layout>
        <AcademicsContent />
      </Layout>
    </MantineProvider>
  )
}

export default Academics;