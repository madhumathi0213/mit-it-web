import { Box, Tabs } from "@mantine/core";
import React from "react";
import COLORS from "../../theme/color";
import AlumniAssociation from "./AlumniAssociation";
import Homecoming from "./HomeComing";
import AwardsAndAcheivements from "./AwardsAndAcheivements";

const AlumniContent = () => {
  return (
    <Box my={40}>
      <Tabs
        color={COLORS.primary}
        variant="outline"
        orientation="vertical"
        defaultValue="association"
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
          <Tabs.Tab value="association" >Association</Tabs.Tab>
          <Tabs.Tab value="home-comming" >Homecoming</Tabs.Tab>
          <Tabs.Tab value="awards">Awards & Achievements</Tabs.Tab>
          {/* <Tabs.Tab value="testimonials" >Testimonials</Tabs.Tab> */}
          {/* <Tabs.Tab value="notable-alumni">Notable Alumni</Tabs.Tab> */}
        </Tabs.List>
        <Tabs.Panel value="association" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <AlumniAssociation />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="home-comming" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <Homecoming />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="awards" pl="xs">
          <Box mb={20} ml={40} sx={{ backgroundColor: COLORS.background, borderRadius: 16, paddingBottom: 20 }}>
            <AwardsAndAcheivements />
          </Box>
        </Tabs.Panel>
      </Tabs>

    </Box>
  )
}

export default AlumniContent;