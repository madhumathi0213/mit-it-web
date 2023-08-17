import { Box, Table } from "@mantine/core";
import React from "react";

const courses = [
  { id: 1, program: 'M.Tech - Information Technology (Full Time)', yos: 2007 },
  { id: 2, program: 'M.Tech - Information Technology (Part Time)', yos: 2011 }
]

const PgProgrammes = () => {
  return (
    <Box  px={20}>
      <Table horizontalSpacing={'md'} verticalSpacing={'md'}>
        <thead>
          <tr>
            <th>Programmes</th>
            <th>Year of start</th>
          </tr>
        </thead>
        <tbody>
          {
            courses.map(item =>{
              return(
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

export default PgProgrammes;