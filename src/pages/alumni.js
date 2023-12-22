import { Box, MantineProvider } from "@mantine/core";
import React from "react";
import Layout from "../components/layout/Layout";
import AlumniContent from "../components/alumni/AlumniContent";
import defaultTheme from "../theme/defaultTheme";

const Alumni = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={defaultTheme}
    >
      <Layout>
        <AlumniContent />
      </Layout>
    </MantineProvider>
  )
}

export default Alumni;