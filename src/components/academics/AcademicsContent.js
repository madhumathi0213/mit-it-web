import { Box, Tabs, Text } from "@mantine/core";
import React from "react";
import COLORS from "../../theme/color";
import Programmes from "./Programmes";
import { pgCourses, pgRegulations, ugCourses, ugRegulations } from "../../data/academics.data";
import Regulations from "./Regulations";

const AcademicsContent = () => {
  return (
    <Box mb={150}>
      {/* <Text size={32} color={COLORS.primary} weight={600} mb={32}>Programmes Offered</Text> */}
      <Tabs
        color={COLORS.primary}
        variant="outline"
        orientation="vertical"
        defaultValue="programmes"
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
          <Tabs.Tab value="programmes" >Programmes</Tabs.Tab>
          <Tabs.Tab value="regulations">Regulations</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="programmes" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <Text p={20} size={24}>UG Programmes</Text>
            <Programmes data={ugCourses} />
            <Text p={20} size={24}>PG Programmes</Text>
            <Programmes data={pgCourses} />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="regulations" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <Text p={20} size={24}>UG Regulation</Text>
            <Regulations data={ugRegulations} />
            <Text p={20} size={24}>PG Regulation</Text>
            <Regulations data={pgRegulations} />
          </Box>
        </Tabs.Panel>
      </Tabs>

    </Box >
  )
}

export default AcademicsContent;