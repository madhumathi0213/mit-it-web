import { Badge, Box, Card, Group, Image, Text } from "@mantine/core";
import React from "react";

let data = [
  {
    name: 'Programming lab 1',
    computer_count: 58,
    incharge: 'Mr. V. Saravanan',
    image: 'https://imgur.com/Wp6WVMe.jpg'
  },
  {
    name: 'Programming lab 2',
    computer_count: 66,
    incharge: 'Mr. V. Kannan',
    image: 'https://imgur.com/PzT3ATq.jpg'
  },
  {
    name: 'Hardware lab',
    computer_count: 58,
    incharge: 'Mr. V. Saravanan',
    image: 'https://imgur.com/Ddrb9Ds.jpg'
  },
  {
    name: 'Project Lab',
    computer_count: 70,
    incharge: 'Mr. J. Babu',
    image: 'https://imgur.com/djqx3gw.jpg'
  },
  {
    name: 'PG Laboratory',
    computer_count: 58,
    incharge: 'Ms.G.Senbagam',
    image: 'https://imgur.com/djqx3gw.jpg'
  },
  {
    name: 'Data Analytics Laboratory',
    computer_count: 56,
    incharge: 'Ms.G.Senbagam',
    image: 'https://imgur.com/6nFZ6x6.jpg'
  },
  {
    name: 'Sensor Network Lab',
    computer_count: 26,
    incharge: 'Mr. V. Saravanan',
    image: 'https://imgur.com/fAamXyO.jpg'
  },
]

const AcademicLabs = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
      {
        data?.map((item, index) => {
          return (
            <Card miw={'40%'} maw={'40%'} m={20} shadow="sm" radius="md" withBorder>
              <Card.Section>
                <Image
                  src={item?.image}
                  height={260}
                  alt="Norway"
                />
              </Card.Section>
              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{item?.name}</Text>
              </Group>
              <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Box>
                  <Text weight={500} size={16}>{item?.computer_count}</Text>
                  <Text size="sm" color="dimmed">Computers</Text>
                </Box>
                <Box>
                  <Text weight={500} size={16}>{item?.incharge}</Text>
                  <Text size="sm" color="dimmed">Lab incharge</Text>
                </Box>
              </Box>
            </Card>
          )
        })
      }
    </Box>
  )
}

export default AcademicLabs;