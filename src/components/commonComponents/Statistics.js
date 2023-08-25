import { Box, Text } from "@mantine/core";
import React from "react";
import Icons from "./Icons";
import Tag from '../../assets/tag.svg';
import FacultyIcon from '../../assets/faculty.svg';
import LaboratoryIcon from '../../assets/laboratory.svg';
import StudentIcon from '../../assets/student.svg';
import ScholarsIcon from '../../assets/scholars.svg';
import PlacementIcon from '../../assets/placement.svg';
import COLORS from "../../theme/color";

const data = [
  {
    icon: <StudentIcon height='50px' width='50px' />,
    desc: 'UG Students',
    count: 420
  },
  {
    icon: <StudentIcon height='50px' width='50px' />,
    desc: 'PG Students',
    count: 4
  },
  {
    icon: <ScholarsIcon height='50px' width='50px' />,
    desc: 'UG Programmes',
    count: 2
  },
  {
    icon: <ScholarsIcon height='50px' width='50px' />,
    desc: 'PG Programmes',
    count: 1
  },
  {
    icon: <PlacementIcon height='50px' width='50px' />,
    desc: 'Placement',
    count: '89%'
  },
  {
    icon: <LaboratoryIcon height='50px' width='50px' />,
    desc: 'Research Scholars',
    count: 21
  },
  {
    icon: <Tag height='50px' width='50px' />,
    desc: 'Awards',
    count: 8
  },
  {
    icon: <FacultyIcon height='50px' width='50px' />,
    desc: 'Faculty',
    count: 20
  },
  {
    icon: <FacultyIcon height='50px' width='50px' />,
    desc: 'Staff',
    count: 7
  },
  {
    icon: <ScholarsIcon height='50px' width='50px' />,
    desc: 'Publications',
    count: 105
  },
  {
    icon: <ScholarsIcon height='50px' width='50px' />,
    desc: 'Citations',
    count: 2575
  },
  {
    icon: <ScholarsIcon height='50px' width='50px' />,
    desc: 'Patents',
    count: 5
  },
  {
    icon: <ScholarsIcon height='50px' width='50px' />,
    desc: 'H-index',
    count: 100
  },
  {
    icon: <ScholarsIcon height='50px' width='50px' />,
    desc: 'I-index',
    count: 63
  },
]

const Statistics = () => {
  return (
    <Box>
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        <Text color={COLORS.primary} align='center' size={60}>Statistics</Text>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        {
          data?.map((item) => {
            return (
              <div style={{ padding: 20, width: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Icons icon={item.icon} />
                <div>
                  <Text size={40} color={COLORS.primary} align="center" my={8} weight={500}>{item.count}</Text>
                  <div style={{ border: '2px solid', borderColor: COLORS.primaryYellow, alignItems: 'center', justifyContent: 'center', display: 'flex' }}></div>
                  <Text size={24} align="center" c={COLORS.darkGray} weight={500}>{item.desc}</Text>
                </div>
              </div>
            )
          })
        }
      </div>
    </Box>
  )
}

export default Statistics;