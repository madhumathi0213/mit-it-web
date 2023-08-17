import React from "react";
import { Text } from "@mantine/core";
import { HeroSection } from "../../data/HeroSection.data";
import COLORS from "../../theme/color";


const AboutContent = () => {
  return (
    <div style={{ marginTop: 20, paddingLeft: 150, paddingRight: 150, justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ marginBottom: 16 }}>
        <Text color={COLORS.primary} align='center' size={60}>Overview</Text>
      </div>
      <div>
        <Text size={20} style={{ textAlign: 'justify' }}>{HeroSection.overview}</Text>
      </div>
    </div>
  )
}

export default AboutContent;