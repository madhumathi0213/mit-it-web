import { Box, Table, Text } from "@mantine/core";
import React from "react";
import COLORS from "../../theme/color";


const Regulations = ({ data }) => {
  return (
    <Box px={20}>
      <Table  horizontalSpacing={'sm'} verticalSpacing={'sm'} fontSize={20} bgcolor={COLORS.white} sx={{ borderRadius: 12 }} highlightOnHover withColumnBorders>
        <thead>
          <tr>
            <th>Regulation</th>
            <th>Courses</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.map(item => {
              return (
                <tr key={item?.id}>
                  <td>{item.regulation}</td>
                  <td>
                    {
                      item?.courses.map(course => <Text>{course}</Text>)
                    }
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </Box>
  )
}

export default Regulations;