import React from "react";
import { Box, Text } from "@mantine/core";
import COLORS from "../../theme/color";
import AcademicLabs from "./AcademicLabs";
import ResearchLabs from "./ResearchLabs";
import ServerAndStorage from './Servers&Storage'
import ICTFacilities from "./ICTFacilities";


const FacilitiesContent = () => {
  return (
    <Box mx={40} mb={60}>
      <Text pt={10} size={28} color={COLORS.primary} weight={600} align="center" mb={20}>Academic Labs</Text>
      <AcademicLabs />
      <Text pt={10} size={28} color={COLORS.primary} weight={600} align="center" mb={20}>Research Labs</Text>
      <ResearchLabs />
      <Text pt={10} size={28} color={COLORS.primary} weight={600} align="center" mb={20}>ICT enabled facilities</Text>
      <ICTFacilities />
      <Text pt={10} size={28} color={COLORS.primary} weight={600} align="center" mb={20}>Servers & Storage</Text>
      <ServerAndStorage />
    </Box>
  )
}
export default FacilitiesContent;