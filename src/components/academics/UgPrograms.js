import { Box, Table } from "@mantine/core";
import React from "react";

const courses = [
  { id: 1, program: 'B.Tech - Information Technology', yos: 2001 },
  { id: 2, program: 'B.Tech - Artificial Intelligence & Data Science', yos: 2022 }
]

const UgProgrammes = () => {
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

export default UgProgrammes;