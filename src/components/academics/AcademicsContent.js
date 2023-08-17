import { Box, Tabs, Text } from "@mantine/core";
import React from "react";
import COLORS from "../../theme/color";
import UgProgrammes from "./UgPrograms";
import PgProgrammes from "./PgProgrammes";

const AcademicsContent = () => {
  return (
    <Box>
      <Text size={32} color={COLORS.primary} weight={600} mb={32}>Programmes Offered</Text>
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
            <UgProgrammes />
            <Text p={20} size={24}>PG Programmes</Text>
            <PgProgrammes />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="regulations" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            {/* <VisionContent /> */}
          </Box>
        </Tabs.Panel>
      </Tabs>

    </Box>
  )
}

export default AcademicsContent;