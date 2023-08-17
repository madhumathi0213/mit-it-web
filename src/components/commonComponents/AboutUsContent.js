import { Box, Tabs } from "@mantine/core";
import React from "react";
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import VisionContent, { Academics, AssociationContent, HodMessageContent, MissionContent } from "./MissionVision";
import COLORS from "../../theme/color";


const AboutUsContent = () => {
  return (
    <Box px={150} mt={250} style={{ justifyContent: 'space-between', alignItems: 'center' }} >
      <Tabs
        color={COLORS.primary}
        variant="outline"
        orientation="vertical"
        defaultValue="mission"
        radius="xs"
        styles={(theme) => ({
          tab: {
            fontSize: 14,
            padding: '14px 16px',
            "&:is(:first-of-type)": {
              borderTopLeftRadius: 8,
            },
            "&:is(:last-of-type)": {
              borderTopRightRadius: 8,
            },
            "&:is([aria-selected=true])": {
              fontWeight: 600,
              fontSize: 14,
              color: COLORS.white,
              backgroundColor: COLORS.primary,
            },
          },
        })}
      >
        <Tabs.List>
          <Tabs.Tab value="mission" >Mission</Tabs.Tab>
          <Tabs.Tab value="vision">Vision</Tabs.Tab>
          <Tabs.Tab value="message">HOD's Message</Tabs.Tab>
          <Tabs.Tab value="academics">Academics</Tabs.Tab>
          <Tabs.Tab value="clubs">Clubs & Associations</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="mission" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <MissionContent />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="vision" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <VisionContent />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="message" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <HodMessageContent />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="academics" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <Academics />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="clubs" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <AssociationContent />
          </Box>
        </Tabs.Panel>
      </Tabs>
    </Box>


  )
}
export default AboutUsContent;