import { Carousel } from "@mantine/carousel";
import { Box, Text } from "@mantine/core";
import React from "react"
import { CompanyLogo } from "../../theme/images";
import COLORS from "../../theme/color";

const CompaniesVisited = () => {
  return (
    <Box mb={100}>
      <div style={{ marginBottom: 16 }}>
        <Text color={COLORS.primary} align='center' size={60}>Companies Visited</Text>
      </div>
      <Carousel
        height={200}
        slideSize="20%"
        controlsOffset={'xl'}
        controlSize={36}
        withIndicators={false}
        slideGap={150}
        loop
        align="start"
        styles={{
          control: {
            backgroundColor: COLORS.textBlueLight,
            color: COLORS.primary,
            borderColor: COLORS.textBlueLight,
          },
        }}
        breakpoints={[
          { maxWidth: 'md', slideSize: '20%' },
          { maxWidth: 'sm', slideSize: '20%', slideGap: 0 },
        ]}
      >
        {
          CompanyLogo?.map(item => (
            <Box mx={40} sx={{ height: 200, width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Carousel.Slide>
                <img src={item} className="grayscale-image" width={100} height={100} objectFit={'cover'} />
              </Carousel.Slide>
            </Box>
          ))
        }
      </Carousel>
    </Box>
  )
}

export default CompaniesVisited;

