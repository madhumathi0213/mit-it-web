import { Carousel } from "@mantine/carousel";
import { Badge, Box, Card, Group, Image, Text } from "@mantine/core";
import React from "react";

const data = [
  {
    hall_count: 1,
    facilities: ['Smart Board', 'Speakers with Michrophone', 'OHP', 'Desktop PC',],
    seatings: 40,
    image: ['https://imgur.com/XCIAxH8.jpg', 'https://imgur.com/2BJ7t1A.jpg', 'https://imgur.com/nWUMOAD.jpg']
  },
]

const ICTFacilities = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
      {
        data?.map((item, index) => {
          return (
            <Card key={index} miw={'40%'} maw={'40%'} m={20} withBorder>
              <Card.Section>
                <Carousel
                  height={200}
                  // slideSize="20%"
                  controlsOffset={'xl'}
                  controlSize={36}
                  withIndicators={false}
                  slideGap={150}
                  loop
                  mx={'auto'}>
                  {
                    item?.image.map((img, i) => {
                      return (
                        <Carousel.Slide>
                          <Image
                            src={img}
                            height={260}
                            fit="contain"
                            alt="lab"
                          />
                        </Carousel.Slide>
                      )
                    })
                  }
                </Carousel>
              </Card.Section>
              <Box mt={20}>
                <Box>
                  <Text weight={500} size={16}>{item?.seatings}</Text>
                  <Text size="sm" color="dimmed">Seating capacity</Text>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} mt={10}>
                  {
                    item?.facilities.map((facility, index) => {
                      return (
                        <Text mr={10} align="justify" size={16}>{facility},</Text>
                      )
                    })
                  }
                </Box>
              </Box>
            </Card>
          )
        })
      }

    </Box>
  )
}

export default ICTFacilities;