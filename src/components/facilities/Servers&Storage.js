import { Box, Table, Text } from "@mantine/core";
import React from "react";
import COLORS from "../../theme/color";
import { servers } from "../../data/facilities.data";


const ServerAndStorage = ({ data }) => {
  return (
    <Box px={20}>
      <Table horizontalSpacing={'sm'} verticalSpacing={'sm'} fontSize={20} bgcolor={COLORS.white} sx={{ borderRadius: 12 }} highlightOnHover withBorder withColumnBorders>
        <thead>
          <tr>
            <th>S no</th>
            <th>Server Model & Operating System</th>
            <th>RAM</th>
            <th>Hard Disk</th>
            <th>Processor</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          {
            servers?.map((item,index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.modal_and_os}</td>
                  <td>{item.ram}</td>
                  <td>{item?.hard_disk}</td>
                  <td>{item?.processor}</td>
                  <td>{item?.purpose}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </Box>
  )
}

export default ServerAndStorage;