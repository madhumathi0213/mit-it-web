import { MantineProvider } from "@mantine/core"
import * as React from "react"
import { styled } from "styled-components"
import Statistics from "../components/commonComponents/Statistics"
import AboutContent from "../components/commonComponents/About"
import Testimonials from "../components/commonComponents/Testimonials"
import CompaniesVisited from "../components/commonComponents/CompaniesVisited"
import Layout from "../components/layout/Layout"

const HomepageWrapper = styled.div`
img {
  // filter: grayscale(100%);
}
.icon {
  max-width:12%;
  min-width:10%;
  height:10%;
  padding: 12px;
  border: 2px solid #888888;
  border-radius:50%;
}
`

const IndexPage = () => {
  return (
    <HomepageWrapper>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Layout withLayout={true}>
          <AboutContent />
          <Statistics />
          <Testimonials />
          <CompaniesVisited />
        </Layout>
      </MantineProvider>
    </HomepageWrapper>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
