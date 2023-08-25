import { Box, Card, Image, Text } from "@mantine/core";
import React from "react";
import { research, thurstAreas } from "../../data/research.data";
import COLORS from "../../theme/color";

const ResearchSection = () => {
  return (
    <Box>
      <Box style={{ marginBottom: 20 }}>
        <Text size={32} color={COLORS.primary} weight={600}>Thrust Areas</Text>
      </Box>
      <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          thurstAreas?.map((item) => {
            return (
              <Box m={10} style={{ width: '30%' }}>
                <Card shadow="sm" sx={{ height: 350, maxHeight: 600, paddingBottom: 20 }} radius="md" withBorder>
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
            )
          })
        }
      </Box>
    </Box>
  )
}

export default ResearchSection;