import { Box, Tabs, Text } from "@mantine/core";
import React from "react";
import COLORS from "../../theme/color";
import ResearchSection from "./ResearchSection";
import ResearchScholars from "./ResearchScholars";
import OnRollScholars from "./OnRollScholars";
import Publications from "./Publications";
import Patents from "./Patent";
import Thesis from "./Thesis";
import SupervisorsList from "./SupervisorsList";

const ResearchContent = () => {
  return (
    <Box my={40}>
      <Tabs
        color={COLORS.primary}
        variant="outline"
        orientation="vertical"
        defaultValue="thrust-areas"
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
          <Tabs.Tab value="thrust-areas" >Thrust Areas</Tabs.Tab>
          <Tabs.Tab value="supervisors" >Supervisors</Tabs.Tab>
          <Tabs.Tab value="scholars">Research Scholars</Tabs.Tab>
          <Tabs.Tab value="on-roll-scholars" >Research Scholars (on-roll)</Tabs.Tab>
          <Tabs.Tab value="publications">Publications</Tabs.Tab>
          <Tabs.Tab value="patents">Patents</Tabs.Tab>
          <Tabs.Tab value="theses">Theses</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="thrust-areas" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <ResearchSection />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="supervisors" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <SupervisorsList />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="scholars" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <ResearchScholars />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="on-roll-scholars" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <OnRollScholars />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="publications" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <Publications />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="patents" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <Patents />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="theses" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <Thesis />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="student" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
          </Box>
        </Tabs.Panel>
      </Tabs>

    </Box>
  )
}

export default ResearchContent;