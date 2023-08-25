import { Box, Table, Text } from "@mantine/core";
import React from "react";


const Regulations = ({ data }) => {
  return (
    <Box px={20}>
      <Table horizontalSpacing={'md'} verticalSpacing={'md'}>
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