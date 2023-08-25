import React from "react";
import { Box, Text } from "@mantine/core";
import { HeroSection } from "../../data/HeroSection.data";
import COLORS from "../../theme/color";


const AboutContent = () => {
  return (
    <Box style={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <Box style={{ marginBottom: 16 }}>
        <Text color={COLORS.primary} align='center' size={60}>Overview</Text>
      </Box>
      <Box>
        <Text size={20} style={{ textAlign: 'justify' }}>{HeroSection.overview}</Text>
      </Box>
    </Box>
  )
}

export default AboutContent;