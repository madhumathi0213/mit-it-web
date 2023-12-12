// // src/templates/teacher.js
import { Box, Image, Text, Tooltip } from '@mantine/core';
import React from 'react';
import Header from '../components/Header/Header';
import { Link } from 'gatsby';
import COLORS from '../theme/color';


const TeacherTemplate = ({ pageContext }) => {
  const item = pageContext;
  return (

    <Box>
      <Header />
      <Box px={150} mt={250} style={{ justifyContent: 'space-between', alignItems: 'center' }} >
        <Box bg={COLORS.background} p={20}>

          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Image mt={8} src={item?.photo} height={400} width={300} style={{ objectFit: 'contain' }} />
            <Box sx={{ flex: 1 }}>
              <Text align="center" size={32}>{item?.name}</Text>
              <Text align="center" size={24}>{item?.role}</Text>
              <Text align="center" size={20}>{item?.email}</Text>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text align="center" ml={20} size={20}>{item?.mobile}</Text>
                <Text mx={20} size={20}>|</Text>
                <Tooltip label={item?.orchid_id} withArrow offset={-6}>
                  <Text align="center" color={COLORS.textBlueLight} size={20}>Orchid ID</Text>
                </Tooltip>
                <Text mx={20} size={20}>|</Text>
                <Link target="_blank" to={item.profile} style={{ textDecoration: 'none' }}>
                  <Text align="center" size={20} color={COLORS.textBlueLight}>Profile</Text>
                </Link>
              </Box>
              <Text align="center" size={20}>{item?.address?.town} {item?.address?.city}, {item?.address?.state}, {item?.address?.country} - {item?.address?.pincode}</Text>
              <Box m={40}>
                <Box>
                  <Text color={COLORS.primaryBg} size={32}>Expertise</Text>
                  {
                    item?.expertise?.map((expertise, i) => {
                      return (
                        <Box key={i} mt={12} ml={48}>
                          <Text size={24}>{expertise?.title}</Text>
                          <Text size={16}>{expertise?.desc}</Text>
                        </Box>
                      )
                    })
                  }
                </Box>
                <Box mt={20}>
                  <Text color={COLORS.primaryBg} size={32}>Experience</Text>
                  {
                    item?.experience?.map((experience, j) => {
                      return (
                        <Box key={j} mt={20} ml={48}>
                          <Text size={24}>{experience?.role} ({experience?.from} - {experience?.to})</Text>
                          <Text size={16}>{experience?.college_name}, {experience.location}</Text>
                        </Box>
                      )
                    })
                  }
                </Box>
                <Box mt={20}>
                  <Text color={COLORS.primaryBg} size={32}>Experience</Text>
                  {
                    item?.education?.map((education, j) => {
                      return (
                        <Box key={j} mt={20} ml={48}>
                          <Text size={24}>{education?.course} ({education?.from})</Text>
                          <Text size={16}>{education?.college}, {education.location}</Text>
                        </Box>
                      )
                    })
                  }
                </Box>
                <Box mt={20}>
                  <Text color={COLORS.primaryBg} size={32}>Publications</Text>
                  {
                    item?.publication?.map((publication, j) => {
                      return (
                        <Box key={j} mt={20} ml={48}>
                          <Text size={24}>{publication?.title}</Text>
                          <Text size={16}>{publication?.desc}</Text>
                        </Box>
                      )
                    })
                  }
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TeacherTemplate;
