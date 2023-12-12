import { Box, Table, Text } from "@mantine/core";
import React from "react";
import COLORS from "../../theme/color";
import { abroadOpportunities, internshipList } from "../../data/student-corner.data";

const InternshipList = () => {
  return (
    <Box px={20}>
      <Text pt={10} size={28} color={COLORS.primary} weight={600} mb={20}>Abroad Opportunities</Text>
      <Table horizontalSpacing={'sm'} verticalSpacing={'sm'} fontSize={20} bgcolor={COLORS.white} sx={{ borderRadius: 12 }} highlightOnHover withColumnBorders>
        <thead>
          <tr>
            <th>S no</th>
            <th>Company</th>
            <th>Count</th>
            <th>Salary</th>
            <th>Duration</th>
            <th>Batch</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {
            internshipList?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.company_name}</td>
                  <td>{item.count}</td>
                  <td>{item?.salary}</td>
                  <td>{item?.duration}</td>
                  <td>{item?.batch}</td>
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

export default InternshipList