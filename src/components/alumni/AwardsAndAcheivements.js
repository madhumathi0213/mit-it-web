import { Box, Modal, Text } from "@mantine/core";
import React, { useState } from "react";
import { awards } from "../../data/alumni.data";
import COLORS from "../../theme/color";
import { useDisclosure } from "@mantine/hooks";


const AwardsAndAcheivements = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [data, setData] = useState()
  return (
    <>
      <Text size={28} px={20} color={COLORS.primary} weight={600}>Awards And Acheivements</Text>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          awards?.map(item => {
            return (
              <Box onClick={() => { open(); setData(item) }} sx={{ width: '35%', margin: 20, marginTop: 20,cursor:'pointer' }}>
                <img
                  src={item?.image}
                  height={250}
                  width={250}
                  style={{ borderRadius: 16, objectFit: '' }}
                  alt={item?.name}
                />
                <Text align="center" weight={500} size={20}>{item.name}</Text>
                <Text align="center" className="text" color={COLORS.darkGray} size={16}>{item?.position}</Text>
                <Text mb={8} align="center" color={COLORS.darkGray} size={16}>{item?.event}</Text>
              </Box>
            )
          })
        }
      </div>
      <Modal size={"lg"} opened={opened} onClose={close}>
        <Box onClick={open} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={data?.image}
            height={200}
            width={200}
            style={{ borderRadius: 16, objectFit: '' }}
            alt={data?.name}
          />
          <Text align="center" weight={500} size={20}>{data?.name}</Text>
          <Box style={{ display: 'flex' }}>
            <Text align="center" className="text" color={COLORS.darkGray} size={16}>{data?.position}</Text>
            <Text mb={8} align="center" color={COLORS.darkGray} size={16}>{data?.event}</Text>
          </Box>
          <Text mb={8} align="justify" color={COLORS.text} size={14}>{data?.desc}</Text>
        </Box>
      </Modal>
    </>

  );
}

export default AwardsAndAcheivements;