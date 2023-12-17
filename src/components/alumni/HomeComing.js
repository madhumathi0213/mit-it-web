import { Box, Text } from "@mantine/core";
import React from "react";
import COLORS from "../../theme/color";
import { alumniData } from "../../data/alumni.data";

const Homecoming = () => {
  return (
    <Box px={10}>
      <Box mb={20}>
        <Text size={28} mb={4} color={COLORS.primary} weight={600}>Home Comming</Text>
        <Text size={16} style={{ textAlign: 'justify' }}><strong>{alumniData.homeComming?.title} </strong>{alumniData.homeComming?.desc}</Text>
      </Box>
      <Box>
        <Text size={24} color={COLORS.primary} mb={4} weight={600}>Alumni Contribution</Text>
        {
          alumniData?.contribution.map((item) => <Text size={16} style={{ textAlign: 'justify' }}><strong>- </strong>{item}</Text>)
        }
      </Box>

    </Box>
  )
}

export default Homecoming;