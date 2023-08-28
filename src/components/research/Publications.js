import { Box, Table, Text } from "@mantine/core";
import React from "react";
import { publications, } from "../../data/research.data";
import COLORS from "../../theme/color";


const Publications = ({ data }) => {
  return (
    <Box px={20} miw={'65vw'}>
      <Text size={28} color={COLORS.primary} weight={600} mb={20}>patent</Text>
      <Box maw={'63vw'} mah={400} sx={{ overflow: 'auto' }}>
        <Table horizontalSpacing={'sm'} verticalSpacing={'sm'} fontSize={20} bgcolor={COLORS.white} sx={{ borderRadius: 12 }} highlightOnHover withColumnBorders>
          <thead>
            <tr>
              <th>S. no.</th>
              <th>Name of the Faculty</th>
              <th>Title</th>
              <th>Author</th>
              <th>Journal</th>
              <th>DOI</th>
              <th>Volume/Issue/Page no</th>
              <th>Year of Publication</th>
              <th>Impact Factor</th>
            </tr>
          </thead>
          <tbody>
            {
              publications?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.faculty_name}</td>
                    <td>{item?.title}</td>
                    <td>
                      {
                        item?.author?.map((d) => <Text>{d}</Text>)
                      }
                    </td>
                    <td>{item.journal}</td>
                    <td>{item?.doi}</td>
                    <td>{item?.vip_no}</td>
                    <td>{item?.yop}</td>
                    <td>{item?.impact_factor}</td>
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

export default Publications;