import { Box, Image, Text } from "@mantine/core";
import React from "react";
import { HeroSection, testimonials } from "../../data/HeroSection.data";
import COLORS from "../../theme/color";
import { styled } from "styled-components";
import { Carousel } from "@mantine/carousel";
const TestimonialWrapper = styled.div`
.container {
  box-shadow: 4px 8px 21px 7px rgba(0,0,0,0.2);
  background-color:#fff;
  border:1px solid transparent;
  border-radius:16px;
}
`

const Testimonials = () => {
  return (
    <TestimonialWrapper>

      <Box style={{ marginTop: 20, justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ marginBottom: 16 }}>
          <Text color={COLORS.primary} align='center' size={60}>What our Student Says</Text>
        </div>
        <div style={{ paddingLeft: 200, paddingRight: 200 }}>
          <Carousel
            maw={'100%'}
            withIndicators={false}
            height={500}
            controlSize={44}
            mah={500}
            styles={{
              control: {
                backgroundColor: COLORS.textBlueLight,
                color: COLORS.primary,
                borderColor: COLORS.textBlueLight,
              },
            }}
          >
            {
              testimonials.map((item, index) => (
                <Carousel.Slide key={index}>
                  <Box
                    mx='auto'
                    mt={20}
                    style={{ minWidth: '50%', maxWidth: '50%' }}
                  >
                    <Box align='center' className="container" p={30}>
                      <Box sx={{ borderRadius: '50%' }}>
                        <Image
                          src={item.photo}
                          height={160}
                          width={160}
                          radius={'100%'}
                          fit='contain'
                          alt={item.name}
                        />
                      </Box>
                      <Text weight={500} mt={20} color={COLORS.textPink} align='center' size={20}>
                        {item.name}
                      </Text>
                      <Text color={COLORS.text} align='center' size={16}>
                        {item.affiliation}
                      </Text>
                      <Text mt={20} color={COLORS.textGray}
                       sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        WebkitLineClamp: 3, // Number of lines before truncation
                        WebkitBoxOrient: 'vertical',
                      }}
                       align='justify' size={14}>
                        {item.message}
                      </Text>
                    </Box>
                  </Box>
                </Carousel.Slide>
              ))
            }
          </Carousel>
        </div>
      </Box>
    </TestimonialWrapper>
  )
}

export default Testimonials;