import { Box, Table } from "@mantine/core";
import React from "react";


const Programmes = ({data}) => {
  return (
    <Box px={20}>
      <Table horizontalSpacing={'md'} verticalSpacing={'md'}>
        <thead>
          <tr>
            <th>Programmes</th>
            <th>Year of start</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.map(item => {
              return (
                <tr key={item?.id}>
                  <td>{item.program}</td>
                  <td>{item.yos}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </Box>
  )
}

export default Programmes;