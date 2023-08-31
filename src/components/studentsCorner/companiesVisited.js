import { Box, Table, Text } from "@mantine/core";
import React from "react";
import COLORS from "../../theme/color";
import { placementCompanies } from "../../data/student-corner.data";


const CompaniesVisited = () => {
  return (
    <Box px={20}>
      <Text pt={10} size={28} color={COLORS.primary} weight={600} mb={20}>Placement Offered</Text>
      <Table horizontalSpacing={'sm'} verticalSpacing={'sm'} fontSize={20} bgcolor={COLORS.white} sx={{ borderRadius: 12 }} highlightOnHover withColumnBorders>
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
            placementCompanies?.map((item, index) => {
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
    </Box>
  )
}

export default CompaniesVisited;