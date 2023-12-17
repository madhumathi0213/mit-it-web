import React from "react";
import { Box, Image, Table, Text } from "@mantine/core";
import { HeroSection, associationContent, departmentCount, hodSuccessionList } from "../../data/HeroSection.data";
import COLORS from "../../theme/color";

export const MissionContent = () => {
  return (
    <Box px={20}>
      <Text color={COLORS.primary} align="center" mb={20} weight={600} size={28}>Mission</Text>
      <Text size={16} style={{ textAlign: 'justify' }}>- {HeroSection.mission}</Text>
      <Text size={16} style={{ textAlign: 'justify' }}>- {HeroSection.mission1}</Text>
      <Text size={16} style={{ textAlign: 'justify' }}>- {HeroSection.mission2}</Text>
      <Text size={16} style={{ textAlign: 'justify' }}>- {HeroSection.mission3}</Text>
      <Text size={16} style={{ textAlign: 'justify' }}>- {HeroSection.mission4}</Text>
      <Text size={16} style={{ textAlign: 'justify' }}>- {HeroSection.mission5}</Text>
    </Box>
  )
}

export const AssociationContent = () => {
  return (
    <Box px={20}>
      <Text color={COLORS.primary} mb={12} weight={600} size={28}>Clubs & Associations</Text>
      <Text size={16} mb={20} style={{ textAlign: 'justify' }}>{associationContent.desc}</Text>
      {
        associationContent.clubs.map(item => <Text pl={100} size={16} style={{ textAlign: 'justify' }}>- {item}</Text>)
      }
    </Box>
  )
}

export const DepartmentNumbers = () => {
  return (
    <Box px={20} pt={10}>
      <Text color={COLORS.primary} mb={20} weight={600} size={28}>Student's count</Text>
      <Box>
        <Table horizontalSpacing={'sm'} verticalSpacing={'sm'} fontSize={20} bgcolor={COLORS.white} sx={{ borderRadius: 12 }} highlightOnHover withColumnBorders>
          <thead>
            <tr>
              <th>S. no</th>
              <th>Year</th>
              <th>Male</th>
              <th>Female</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {
              departmentCount.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.year}</td>
                    <td>{item.male}</td>
                    <td>{item.female}</td>
                    <td>{item.total}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Box>
    </Box>
  )
}

export const Academics = () => {
  return (
    <Box p={20}>
      <Text color={COLORS.primary} mb={8} weight={600} size={28}>UG Courses</Text>
      <Text size={20} style={{ textAlign: 'justify' }}>{HeroSection.courseTitle}</Text>
      <Text size={16} style={{ textAlign: 'justify' }}>{HeroSection.ugDesc}</Text>
      <Box mt={20}>
        <Text color={COLORS.primary} mb={8} weight={600} size={28}>PG Courses</Text>
        <Text size={16} style={{ textAlign: 'justify' }}>{HeroSection.pgdesc}</Text>
        <Text mt={16} size={16} style={{ textAlign: 'justify' }}>{HeroSection.pgdesc1}</Text>
      </Box>
      <Box mt={20}>
        <Text color={COLORS.primary} mb={8} weight={600} size={28}>M.S / Ph.D. programmes</Text>
        <Text size={16} style={{ textAlign: 'justify' }}>{HeroSection.phdDesc}</Text>
      </Box>
    </Box>
  )
}

export const HodMessageContent = () => {
  return (
    <Box px={20}>
      <div style={{ marginBottom: 16 }}>
        <Text color={COLORS.primary} align="center" mb={20} weight={600} size={28}>HOD's Message</Text>
      </div>
      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <Box>
          <Image mt={8} src={HeroSection.hodProfile} height={300} width={300} style={{ objectFit: 'contain' }} />
        </Box>
        <Box>
          <Text size={16} ml={24} mt={0} p={0} style={{ textAlign: 'justify' }}>{HeroSection.hodMessage}</Text>
        </Box>
      </Box>
      <Text size={16} mt={20} p={0} style={{ textAlign: 'justify' }}>{HeroSection.hodMessage1}</Text>
      <Text size={16} mt={20} p={0} style={{ textAlign: 'justify' }}>{HeroSection.hodMessage2}</Text>
      <Text size={16} mt={20} p={0} style={{ textAlign: 'justify' }}>{HeroSection.hodMessage3}</Text>
      <Text size={16} mt={20} p={0} style={{ textAlign: 'justify' }}>{HeroSection.hodMessage1}</Text>
      <Box mt={20}>
        <Text color={COLORS.textPink} size={20} weight={600}>Dr. Sumalatha</Text>
        <Text color={COLORS.darkGray}>(Offg. Head of the department)</Text>
      </Box>
    </Box>
  )
}

export const SuccessionList = () => {
  return (
    <Box px={20} pt={10}>
      <Text mt={24} color={COLORS.primary} mb={20} weight={600} size={28}>Succession list of HOD's</Text>
      <Box px={20}>
        <Table horizontalSpacing={'sm'} verticalSpacing={'sm'} fontSize={20} bgcolor={COLORS.white} sx={{ borderRadius: 12 }} highlightOnHover withColumnBorders>
          <thead>
            <tr>
              <th>S. no</th>
              <th>Programmes</th>
              <th>Year of start</th>
            </tr>
          </thead>
          <tbody>
            {
              hodSuccessionList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.year}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Box>
    </Box>
  )
}



const VisionContent = () => {
  return (
    <Box px={20} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <Text color={COLORS.primary} align="center" mb={20} weight={600} size={28}>Vision</Text>
      <Text size={16} style={{ textAlign: 'justify' }}>{HeroSection.vision}</Text>
    </Box>
  )
}

export default VisionContent;