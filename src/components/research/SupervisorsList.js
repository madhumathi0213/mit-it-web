import { Box, Text } from "@mantine/core";
import React from "react";
import { styled } from "styled-components";
import COLORS from "../../theme/color";
import { supervisorsList } from "../../data/research.data";

const Wrapper = styled.div`
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

const SupervisorsList = () => {
  return (
    <Wrapper>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          supervisorsList?.map(item => {
            return (
              <Box sx={{ width: '25%', margin: 20, }}>
                <img
                  src={item?.image}
                  height={250}
                  width={200}
                  style={{ borderRadius: 16 }}
                  alt={item?.name}
                />
                <Text align="center" weight={500} size={20}>{item.name}</Text>
                <Text align="center" className="text" color={COLORS.darkGray} size={14}>{`${item?.designation} | ${item?.recognition_no}`}</Text>
                {/* <Text align="center" className="text" color={COLORS.darkGray} size={14}>{item?.yoa}</Text> */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Text size={12} sx={{ cursor: "pointer" }} color={COLORS.textBlueLight}>scholar profile&nbsp;|&nbsp;</Text>
                  <Text size={12} color={COLORS.textBlueLight}>Domains</Text>
                </Box>
                <Text align="center" color={COLORS.darkGray} size={14}>{item?.mail}</Text>
              </Box>
            )
          })
        }
      </Box>
    </Wrapper>

  )
}

export default SupervisorsList;