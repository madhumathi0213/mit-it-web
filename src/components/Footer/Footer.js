import { Box, Text } from "@mantine/core";
import React from "react";
import COLORS from "../../theme/color";
import { Link } from "gatsby";
import { footerData, socialMediaLinks } from "../../data/Footer.data";

const Footer = () => {
  return (
    <Box pb={20} pt={20} sx={{ backgroundColor: COLORS.primary }}>
      <div style={{ marginBottom: 20 }}>
        <Text color={COLORS.textPink} align='center' size={40}>Stay connected</Text>
      </div>
      <Box align='center'>
        <Text c={COLORS.white} weight={500} size={24}>{footerData.department}</Text>
        <Text c={COLORS.white} size={14}>{footerData.university}</Text>
        <Text c={COLORS.white} size={14}>{footerData.address}</Text>
        <Text c={COLORS.white} size={14}>{footerData.state}</Text>
        <Text c={COLORS.white} size={14}>{footerData.pincode}</Text>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
          {
            socialMediaLinks.map((item) => (
              <Link target="_blank" to={item.link} style={{ margin: 8 }}>
                {item.icon}
              </Link>
            ))
          }
        </div>
      </Box>
    </Box>
  )
}

export default Footer