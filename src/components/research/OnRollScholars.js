import { Box, Text } from "@mantine/core";
import React from "react";
import { styled } from "styled-components";
import { onRollScholars } from "../../data/research.data";
import COLORS from "../../theme/color";

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

const OnRollScholars = () => {
  return (
    <Wrapper>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          onRollScholars?.map(item => {
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
                <Text align="center" className="text" color={COLORS.darkGray} size={14}>{item?.domain}</Text>
                <Text align="center" className="text" color={COLORS.darkGray} size={14}>{item?.yoa}</Text>
                <Text mb={8} align="center" color={COLORS.darkGray} size={14}>{item?.mail}</Text>
              </Box>
            )
          })
        }
      </Box>
    </Wrapper>

  )
}

export default OnRollScholars;