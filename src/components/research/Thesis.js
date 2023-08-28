import { Box, Table, Text } from "@mantine/core";
import React from "react";
import { patent, thesis } from "../../data/research.data";
import COLORS from "../../theme/color";


const Thesis = () => {
  return (
    <Box px={20} miw={'65vw'}>
      <Text size={28} color={COLORS.primary} weight={600} mb={20}>Thesis</Text>
      <Box>
        <Table horizontalSpacing={'sm'} verticalSpacing={'sm'} fontSize={20} bgcolor={COLORS.white} sx={{ borderRadius: 12 }} highlightOnHover withColumnBorders>
          <thead>
            <tr>
              <th>S. no.</th>
              <th>Title of the thesis</th>
              <th>Names of the Supervisor</th>
              <th>Name of the Scholar</th>
              <th>Year of Completion</th>
            </tr>
          </thead>
          <tbody>
            {
              thesis?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item?.supervisor}</td>
                    <td>{item.scholar}</td>
                    <td>{item?.yoc}</td>
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

export default Thesis;