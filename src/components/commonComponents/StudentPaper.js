import { Carousel } from "@mantine/carousel";
import { Image, Text } from "@mantine/core";
import React from "react";
import COLORS from "../../theme/color";
import { StudentResearch } from "../../data/HeroSection.data";
import { styled } from "styled-components";

const Wrapper = styled.div`
img:{
  filter: grayscale(0%);
}
`


const StudentPaper = () => {
  return (
    <div>
      <div style={{marginTop:20,marginBottom:20}}>
        <Text color={COLORS.textPink} align='center' size={60}>Student Papers</Text>
      </div>
      <Carousel
        withIndicators={false}
        withKeyboardEvents={true}
        height={400}
        slideSize="40%"
        controlSize={36}
        slideGap="xl"
        styles={{
          marginBottom: 500,
          control: {
            backgroundColor: COLORS.textBlueLight,
            color: COLORS.primary,
            borderColor: COLORS.textBlueLight,
          },
        }}
        containScroll={'trimSnaps'}
        align="start"
      >
        {
          StudentResearch?.map((item) => {
            return (
              <Carousel.Slide>
                <div style={{ width: '100%', marginLeft: 10, marginRight: 10 }}>
                  <Image
                    src={item}
                    height={400}
                    sx={{ objectFit: 'contain',}}
                    alt={item?.title}
                  />
                </div>
              </Carousel.Slide>
            )

          })
        }
      </Carousel>
    </div>
  )
}

export default StudentPaper;