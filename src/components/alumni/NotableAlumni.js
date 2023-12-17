import { Box, Text } from "@mantine/core";
import React from "react";
import {  notableAlumni } from "../../data/alumni.data";
import COLORS from "../../theme/color";


const NotableAlumni = () => {
  return (
    <>
      <Text size={28} px={20} color={COLORS.primary} weight={600}>Notable Alumni</Text>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          notableAlumni?.map(item => {
            return (
              <Box sx={{ width: '35%', margin: 20, marginTop: 20 }}>
                <img
                  src={item?.photo}
                  height={250}
                  width={250}
                  style={{ borderRadius: 16, objectFit: '' }}
                  alt={item?.name}
                />
                <Text align="center" weight={500} size={20}>{item.name}</Text>
                <Text align="center" className="text" color={COLORS.darkGray} size={16}>{item?.role} | {item.company}</Text>
                <Text mb={8} align="center" color={COLORS.textBlueLight} size={14} sx={{cursor:'pointer'}} underline>View linkedin</Text>
              </Box>
            )
          })
        }
      </div>
      
    </>

  );
}

export default NotableAlumni;