import { Box, Table, Text } from "@mantine/core";
import React from "react";
import COLORS from "../../theme/color";
import { abroadOpportunities } from "../../data/student-corner.data";

const AbroadOpportunities = () => {
  return (
    <Box px={20}>
      <Text pt={10} size={28} color={COLORS.primary} weight={600} mb={20}>Abroad Opportunities</Text>
      <Table horizontalSpacing={'sm'} verticalSpacing={'sm'} fontSize={20} bgcolor={COLORS.white} sx={{ borderRadius: 12 }} highlightOnHover withColumnBorders>
        <thead>
          <tr>
            <th>S no</th>
            <th>University</th>
            <th>Country</th>
            <th>Count</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {
            abroadOpportunities?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.university}</td>
                  <td>{item.country}</td>
                  <td>{item?.count}</td>
                  <td>{item?.year}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </Box>
  )
}

export default AbroadOpportunities