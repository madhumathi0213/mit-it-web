import { Box, Table, Text } from "@mantine/core";
import React from "react";
import { patent } from "../../data/research.data";
import COLORS from "../../theme/color";


const Patents = () => {
  return (
    <Box px={20} miw={'65vw'}>
      <Text size={28} color={COLORS.primary} weight={600} mb={20}>Patents</Text>
      <Box>
        <Table horizontalSpacing={'sm'} verticalSpacing={'sm'} fontSize={20} bgcolor={COLORS.white} sx={{ borderRadius: 12 }} highlightOnHover withColumnBorders>
          <thead>
            <tr>
              <th>S. no.</th>
              <th>Name(s) of the Investor(s)</th>
              <th>Title</th>
              <th>Year of Granted </th>
            </tr>
          </thead>
          <tbody>
            {
              patent?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.inventor_name}</td>
                    <td>{item?.title}</td>
                    <td>{item.granted_year}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Box>
    </Box>
  )
}

export default Patents;