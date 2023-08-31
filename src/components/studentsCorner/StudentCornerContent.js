import { Box, Tabs, Text } from "@mantine/core";
import React from "react";
import COLORS from "../../theme/color";
import Awards from "./Awards";
import CompaniesVisited from "./companiesVisited";
import AbroadOpportunities from "./abroadOpportunities";
import InternshipList from "./InternshipsList";

const StudentCornerContent = () => {
  return (
    <Box my={40}>
      <Tabs
        color={COLORS.primary}
        variant="outline"
        orientation="vertical"
        defaultValue="awards"
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
          <Tabs.Tab value="awards" >Awards</Tabs.Tab>
          <Tabs.Tab value="placements" >Placements</Tabs.Tab>
          <Tabs.Tab value="opportunities">Opportunities Abroad</Tabs.Tab>
          <Tabs.Tab value="internship" >Internships</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="awards" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <Awards />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="placements" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <CompaniesVisited />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="opportunities" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <AbroadOpportunities />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="internship" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <InternshipList />
          </Box>
        </Tabs.Panel>
      </Tabs>

    </Box>
  )
}

export default StudentCornerContent;