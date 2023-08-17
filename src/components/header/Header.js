import React from "react";
import IMAGES from "../../theme/images";
import NavBar from "../commonComponents/NavBar";
import { Box, Image, Text } from "@mantine/core";
import COLORS from "../../theme/color";
import CurrentTime from "./CurrentTime";

const Header = ({ withLayout }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: COLORS.primary }}>
      {
        withLayout && (
          <div style={{ position: 'relative' }}>
            <Image src={IMAGES.heroImage4} width={'100%'} style={{ objectFit: 'contain' }} />
          </div>
        )
      }
      <div style={{ position: 'absolute', top: '0%', width: '100%' }}>
        <Box sx={{ backgroundColor: COLORS.primary }}>
          <Box pt={20} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img src={IMAGES.mitLogo} height={80} width={200} style={{ objectFit: 'contain' }} />
            <CurrentTime />
          </Box>
          <div style={{ width: '100%' }}>
            <NavBar />
          </div>
        </Box>
        {
          withLayout && (
            <div style={{ marginTop: 140 }}>
              <Text color={COLORS.white} align="center" size={42} weight={600}>Department of Information Technology</Text>
              <Text color={COLORS.white} pt={0} mt={-10} align="center" size={36}>Anna University</Text>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Header;