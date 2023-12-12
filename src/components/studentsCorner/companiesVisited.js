import { Box, Table, Tabs, Text } from "@mantine/core";
import React, { useState } from "react";
import COLORS from "../../theme/color";
import { placementCompanies2018, placementCompanies2019, placementCompanies2020, placementCompanies2021, placementCompanies2022, placementCompanies2023 } from "../../data/student-corner.data";

export const PlacementTableWrapper = ({ data }) => (
  <Table horizontalSpacing={'sm'} mt={20} verticalSpacing={'sm'} fontSize={20} bgcolor={COLORS.white} sx={{ borderRadius: 12 }} highlightOnHover withColumnBorders>
    <thead>
      <tr>
        <th>S no</th>
        <th>Name of Company</th>
        <th>Number of Students</th>
        <th>Package (CTC) in Lakhs</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      {
        data?.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.company_name}</td>
              <td>{item.student_count}</td>
              <td>{item?.ctc}</td>
              <td>{item?.year}</td>
            </tr>
          )
        })
      }
    </tbody>
  </Table>
)

const CompaniesVisited = () => {
  return (
    <Box px={20}>
      <Text pt={10} size={28} color={COLORS.primary} weight={600} mb={20}>Placement Offered</Text>
      <Tabs
        defaultValue={"first"}
        color={COLORS.primary}
        // variant="outline"
        // orientation="vertical"
        radius="xs"
        styles={(theme) => ({
          tab: {
            fontSize: 14,
            padding: '14px 16px',
            // "&:is(:first-of-type)": {
            //   borderTopLeftRadius: 8,
            // },
            // "&:is(:last-of-type)": {
            //   borderTopRightRadius: 8,
            // },
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
          <Tabs.Tab value="first">AY 2022-2023</Tabs.Tab>
          <Tabs.Tab value="second">AY 2021-2022</Tabs.Tab>
          <Tabs.Tab value="third">AY 2020-2021</Tabs.Tab>
          <Tabs.Tab value="fourth">AY 2019-2020</Tabs.Tab>
          <Tabs.Tab value="fifth">AY 2018-2019</Tabs.Tab>
          <Tabs.Tab value="sixth">AY 2017-2018</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="first">
          <PlacementTableWrapper data={placementCompanies2023} />
        </Tabs.Panel>
        <Tabs.Panel value="second">
          <PlacementTableWrapper data={placementCompanies2022} />
        </Tabs.Panel>
        <Tabs.Panel value="third">
          <PlacementTableWrapper data={placementCompanies2021} />
        </Tabs.Panel>
        <Tabs.Panel value="fourth">
          <PlacementTableWrapper data={placementCompanies2020} />
        </Tabs.Panel>
        <Tabs.Panel value="fifth">
          <PlacementTableWrapper data={placementCompanies2019} />
        </Tabs.Panel>
        <Tabs.Panel value="sixth">
          <PlacementTableWrapper data={placementCompanies2018} />
        </Tabs.Panel>
      </Tabs>

    </Box>
  )
}

export default CompaniesVisited;