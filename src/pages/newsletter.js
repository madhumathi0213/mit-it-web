import React from "react";
import Layout from "../components/layout/Layout";
import NewsLetterContent from "../components/newsletter/NewsLetterContent";
import { MantineProvider } from "@mantine/core";
import defaultTheme from "../theme/defaultTheme";

const Newsletter = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={defaultTheme}>
      <Layout>
        <NewsLetterContent />
      </Layout>
    </MantineProvider>
  )
}

export default Newsletter;