import { Box, Card, Image, Text } from "@mantine/core";
import React from "react";
import COLORS from "../../theme/color";
import { research } from "../../data/HeroSection.data";
import { Carousel } from "@mantine/carousel";

const ResearchSection = () => {
  return (
    <div>
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        <Text color={COLORS.textPink} align='center' size={60}>Research Papers</Text>
      </div>
      <div style={{ display: 'flex',flexWrap:'wrap' }}>
        {/* <Carousel
          withIndicators={false}
          withKeyboardEvents={true}
          height={400}
          slideSize="20%"
          controlSize={36}
          slideGap="xl"
          styles={{
            control: {
              backgroundColor:COLORS.textBlueLight,
              color: COLORS.textPink,
              borderColor:COLORS.textBlueLight,
            },
          }}
          containScroll={'trimSnaps'}
          // loop
          align="start"
        >
          { */}

        {/* }
        </Carousel> */}
        {
          research?.map((item) => {
            return (
              // <Carousel.Slide sx={{width:'100%'}}>
              <Box m={10} style={{ width: '30%'}}>
                <Card shadow="sm" sx={{ height: 500, maxHeight: 300, paddingBottom: 20 }} radius="md" withBorder>
                  <Card.Section>
                    <Image
                      src={item?.image}
                      height={160}
                      sx={{ objectFit: 'cover' }}
                      alt={item?.title}
                    />
                  </Card.Section>
                  <Text mb={8} weight={500}>{item?.title}</Text>
                  <Text size="sm" color="dimmed">{item?.description}</Text>
                </Card>
              </Box>
              // </Carousel.Slide>
            )
          })
        }
      </div>
    </div>
  )
}

export default ResearchSection;