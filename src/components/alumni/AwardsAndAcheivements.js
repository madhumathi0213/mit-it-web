import { Box, Text } from "@mantine/core";
import React from "react";
import COLORS from "../../theme/color";
import { alumniData } from "../../data/alumni.data";

const AwardsAndAcheivements = () => {
  return (
    <Box px={10}>
      <Box style={{ marginBottom: 20 }}>
        <Text size={32} color={COLORS.primary} weight={600}>Awards And Acheivements</Text>
        <Text size={20} style={{ textAlign: 'justify' }}><strong>{alumniData.homeComming?.title} </strong>{alumniData.homeComming?.desc}</Text>
      </Box>
      <Box>
        <Text size={24} color={COLORS.primary} mb={12} weight={600}>Alumni Contribution</Text>
        {
          alumniData?.contribution.map((item) => <Text size={20} style={{ textAlign: 'justify' }}><strong>- </strong>{item}</Text>)
        }
      </Box>

    </Box>
  )
}

export default AwardsAndAcheivements;