import { Box, Text, Title } from "@mantine/core";
import React from "react";
import { styled } from "styled-components";
import { teachers } from "../../data/teachers.data";
import COLORS from "../../theme/color";


const Wrapper = styled.div`
margin-top:170px;
img {
  // filter: grayscale(100%);
},
.text {
  cursor:pointer
  :hover {
    color:green;
  }
}
`

const PeopleContent = () => {
  return (
    <Wrapper>
      {/* <CommonHeader title={'Our Teachers'} /> */}
      <Box align='center' w={'100%'}>
      <Title align="center" color={COLORS.primary} size={40} weight={500} mt={40} mb={4}>Our People</Title>
      <Box w={'10%'} mb={40} sx={{borderBottom:'4px solid', borderHeight:20, borderColor:COLORS.textPink}}></Box>

      </Box>
      <Box style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        {
          teachers?.map(item => {
            return (
              <Box m={20} sx={{cursor:'pointer'}}>
                <img
                  src={item?.image}
                  height={300}
                  width={250}
                  style={{borderRadius:16}}
                  alt={item?.name}
                />
                <Text align="center" weight={500} size={20}>{item.name}</Text>
                <Text align="center" className="text" color={COLORS.darkGray} size={16}>{`${item?.role} | ${item?.id}`}</Text>
                <Text mb={8} align="center" color={COLORS.darkGray} size={16}>{item?.mail}</Text>
                <Text></Text>
              </Box>
            )
          })
        }
      </Box>
    </Wrapper>

  );
}

export default PeopleContent;