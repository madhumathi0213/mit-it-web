import { Box, Tabs, Text } from "@mantine/core";
import React from "react";
import COLORS from "../../theme/color";
import ResearchSection from "../commonComponents/ResearchSection";

const ResearchContent = () => {
  return (
    <Box>
      <Text size={32} color={COLORS.primary} weight={600} mb={32}>Research</Text>
      <Tabs
        color={COLORS.primary}
        variant="outline"
        orientation="vertical"
        defaultValue="staff"
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
          <Tabs.Tab value="staff" >Staff</Tabs.Tab>
          <Tabs.Tab value="student">Student</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="staff" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <ResearchSection />
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