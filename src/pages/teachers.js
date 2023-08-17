import { Text } from "@mantine/core";
import React from "react";
import { teachers } from "../data/teachers.data";
import { styled } from "styled-components";
import COLORS from "../theme/color";


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

const Teachers = () => {
  return (
    <Wrapper>
      <div style={{display:'flex',flexWrap:'wrap'}}>
        {
          teachers?.map(item => {
            return (
              <div style={{ width: '20%', margin: 20, }}>
                <img
                  src={item?.image}
                  height={350}
                  width={250}
                  style={{borderRadius:16}}
                  alt={item?.name}
                />
                <Text align="center" weight={500} size={20}>{item.name}</Text>
                <Text align="center" className="text" color={COLORS.darkGray} size={16}>{`${item?.role} | ${item?.id}`}</Text>
                <Text mb={8} align="center" color={COLORS.darkGray} size={16}>{item?.mail}</Text>
                <Text></Text>
              </div>
            )
          })
        }
      </div>
    </Wrapper>

  );
}

export default Teachers;