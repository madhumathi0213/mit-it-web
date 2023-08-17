import React from "react";
import { Box, Image, Text } from "@mantine/core";
import { HeroSection, associationContent } from "../../data/HeroSection.data";
import COLORS from "../../theme/color";

export const MissionContent = () => {
  return (
    <Box px={20}>
      <Text color={COLORS.primary} align='center' size={60}>Mission</Text>
      <Text size={20} style={{ textAlign: 'justify' }}>{HeroSection.mission}</Text>
    </Box>
  )
}

export const AssociationContent = () => {
  return (
    <Box px={20}>
      <Text color={COLORS.primary} mb={20} weight={600} size={28}>Clubs & Associations</Text>
      <Text size={20} mb={32} style={{ textAlign: 'justify' }}>{associationContent.desc}</Text>
      {
        associationContent.clubs.map(item => <Text pl={100} size={20} style={{ textAlign: 'justify' }}>- {item}</Text>)
      }
    </Box>
  )
}

export const Academics = () => {
  return (
    <Box p={20}>
      <Text mt={20} color={COLORS.primary} align='left' size={32}>UG Courses</Text>
      <Text size={20} style={{ textAlign: 'justify' }}>{HeroSection.courseTitle}</Text>
      <Text size={16} style={{ textAlign: 'justify' }}>{HeroSection.ugDesc}</Text>
      <Box mt={20}>
        <Text mt={20} color={COLORS.primary} align='left' size={32}>PG Courses</Text>
        <Text mt={20} size={16} style={{ textAlign: 'justify' }}>{HeroSection.pgdesc}</Text>
        <Text mt={40} size={16} style={{ textAlign: 'justify' }}>{HeroSection.pgdesc1}</Text>
      </Box>
    </Box>
  )
}

export const HodMessageContent = () => {
  return (
    <Box px={20}>
      <div style={{ marginBottom: 16 }}>
        <Text color={COLORS.primary} align='center' size={60}>HOD's Message</Text>
      </div>
      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <Box>
          <Image mt={8} src={HeroSection.hodProfile} height={350} width={300} style={{ objectFit: 'contain' }} />
          {/* <Text mt={12} align="center" size={20} color={COLORS.textPink} weight={600}>Dr. Sumalatha</Text>
          <Text color={COLORS.textGray} size={20} align="center">Professor and Head</Text>
          <Text color={COLORS.textGray} size={14} align="center">sumalathaaramachandran@gmail.com</Text> */}
        </Box>
        <Box>
          <Text size={20} ml={24} mt={0} p={0} style={{ textAlign: 'justify' }}>{HeroSection.hodMessage}</Text>
        </Box>
      </Box>
      <Text size={20} mt={24} p={0} style={{ textAlign: 'justify' }}>{HeroSection.hodMessage1}</Text>
      <Box mt={20}>
        <Text color={COLORS.textPink} size={20} weight={600}>Dr. Sumalatha</Text>
        <Text color={COLORS.darkGray}>(Offg. Head of the department)</Text>
      </Box>
    </Box>
  )
}



const VisionContent = () => {
  return (
    <Box px={20} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <Text color={COLORS.primary} align='center' size={60}>Vision</Text>
      <Text size={20} style={{ textAlign: 'justify' }}>{HeroSection.vision}</Text>
    </Box>
  )
}

export default VisionContent;