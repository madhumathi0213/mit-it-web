import { Box, Table, Text } from "@mantine/core";
import React from "react";
import { researchScolars } from "../../data/research.data";
import COLORS from "../../theme/color";


const ResearchScholars = ({ data }) => {
  return (
    <Box px={20}>
      <Text size={28} color={COLORS.primary} weight={600} mb={20}>Research Scholars</Text>
      <Table  horizontalSpacing={'sm'} verticalSpacing={'sm'} fontSize={20} bgcolor={COLORS.white} sx={{ borderRadius: 12 }} highlightOnHover withColumnBorders>
        <thead>
          <tr>
            <th>S. no.</th>
            <th>Name of the Scholar</th>
            <th>Supervisor</th>
            <th>Mode of Study</th>
            <th>Domain</th>
            <th>Year of Registration</th>
          </tr>
        </thead>
        <tbody>
          {
            researchScolars?.map(item => {
              return (
                <tr key={item?.id}>
                  <td>{item?.id}</td>
                  <td>{item.name}</td>
                  <td>{item?.supervisor}</td>
                  <td>{item.mode_of_study}</td>
                  <td>{
                    item?.domain?.map((d)=> <Text>{d}</Text>)}</td>
                  <td>{item?.yor}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </Box>
  )
}

export default ResearchScholars;