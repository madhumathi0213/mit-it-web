import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box, Drawer, Text } from "@mantine/core";
import { styled } from "styled-components";
import COLORS from "../../theme/color";
import { useDisclosure } from "@mantine/hooks";

const LayoutWrapper = styled.div`
.events-box {
  padding: 10px 32px;
  display: flex;
  align-items: center;
  background-color: ${COLORS.primaryBg};
  cursor: pointer;
  // position: fixed;
  position:absolute;
  right: -13.7%;
  bottom: 50px;
  padding: 12px 16px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  border-radius: 8px 8px 0px 0px;
  // z-index: 9999;
  opacity: 1;
  visibility: visible;
}
.link {
  text-decoration:none;
}
`

const Layout = ({ children }) => {
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <LayoutWrapper>
      <Header withLayout={path === '/'} />
      <Box px={150} mt={path === '/' ? 0 : 250} style={{ justifyContent: 'space-between', alignItems: 'center' }} >
        {children}
      </Box>
      <Footer />
      {/* <Box>
        <Box
          className="events-box"
          onClick={open}
        >
          <Box className="link">
            <Text color={COLORS.white} size={20} weight={600}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Announcements &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
          </Box>
        </Box>
      </Box> */}
      <Drawer opened={opened} size={'md'} onClose={close} position="right" title="Events">
        {/* Drawer content */}
      </Drawer>
    </LayoutWrapper>
  )
}

export default Layout;