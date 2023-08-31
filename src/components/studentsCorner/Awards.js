import { Box, Table, Text } from "@mantine/core";
import React from "react";
import COLORS from "../../theme/color";
import { ugAwards } from "../../data/student-corner.data";


const Awards = () => {
  return (
    <Box px={20}>
      <Text pl={20} pt={10} size={28} color={COLORS.primary} weight={600} mb={20}>UG Rank Holders</Text>
      <Table  horizontalSpacing={'sm'} verticalSpacing={'sm'} fontSize={20} bgcolor={COLORS.white} sx={{ borderRadius: 12 }} highlightOnHover withColumnBorders>
        <thead>
          <tr>
            <th>S no</th>
            <th>Name</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {
            ugAwards?.map((item,index) => {
              return (
                <tr key={index}>
                  <td>{index +1}</td>
                  <td>{item.name}</td>
                  <td>{item.year}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </Box>
  )
}

export default Awards;