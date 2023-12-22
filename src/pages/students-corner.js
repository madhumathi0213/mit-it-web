import React from "react";
import Header from "../components/Header/Header";
import Layout from "../components/layout/Layout";
import StudentCornerContent from "../components/studentsCorner/StudentCornerContent";
import { MantineProvider } from "@mantine/core";
import defaultTheme from "../theme/defaultTheme";

const StudentCorner = () => {
  return (
    <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={defaultTheme}>
    <Layout>
      <Header />
      <StudentCornerContent />
    </Layout>
    </MantineProvider>
  )
}
export default StudentCorner;