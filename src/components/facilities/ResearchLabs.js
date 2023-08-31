import { Badge, Box, Card, Group, Image, Text } from "@mantine/core";
import React from "react";

const data = [
  {
    name: 'Media Research Lab',
    supervisor: 'Dr. Dhananjay kumar',
    sponsor: 'UGC',
    computer_count: 2,
    image: 'https://imgur.com/dBGOgFe.jpg'
  }
]

const ResearchLabs = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
      {
        data?.map((item, index) => {
          return (
            <Card miw={'40%'} maw={'40%'} m={20} withBorder>
              <Card.Section>
                <Image
                  src={item?.image}
                  height={260}
                  alt="Norway"
                />
              </Card.Section>
              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{item?.name}</Text>
                <Badge color="pink" variant="light">{item?.supervisor}</Badge>
              </Group>
              <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}} mt={20}>
                <Box>
                  <Text weight={500} size={16}>{item?.computer_count}</Text>
                  <Text size="sm" color="dimmed">Computers</Text>
                </Box>
                <Box>
                <Text weight={500} size={16}>{item?.sponsor}</Text>
                  <Text size="sm" color="dimmed">Sponsors</Text>
                </Box>
              </Box>
            </Card>
          )
        })
      }

    </Box>
  )
}

export default ResearchLabs;