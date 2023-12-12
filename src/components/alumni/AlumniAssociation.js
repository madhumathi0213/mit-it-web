import { Box, Text } from "@mantine/core";
import React from "react";
import COLORS from "../../theme/color";
import { alumniData } from "../../data/alumni.data";

const AlumniAssociation = () => {
  return (
    <Box px={10}>
      <Box style={{ marginBottom: 20 }}>
        <Text size={32} color={COLORS.primary} weight={600}>Association</Text>
        <Text size={20} style={{ textAlign: 'justify' }}>{alumniData.association}</Text>
      </Box>
      
    </Box>
  )
}

export default AlumniAssociation;