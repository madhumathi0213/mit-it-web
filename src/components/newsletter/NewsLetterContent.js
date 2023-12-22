import { Box, Select, Text, Title } from "@mantine/core";
import React, { useState } from "react";
import COLORS from "../../theme/color";

const data = [
  {
    year: 2023,
    file: 'https://drive.google.com/file/d/1hDgOGEpSaS4WsLBkZ080cZw2nFuk8gE6/view?usp=drive_link'
  },
  {
    year:2022,
    file:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  }
]

const NewsLetterContent = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const matchingData = data.find(item => item.year === selectedYear);
  return (
    <Box my={40}>
      <Box mb={40} maw={300}>
        <Select
          label='Select Year'
          placeholder="select..."
          value={selectedYear}
          onChange={(e) => setSelectedYear(e)}
          data={[
            { value: 2023, label: 2023 },
            { value: 2022, label: 2022 },
            { value: 2020, label: 2020 },
            { value: 2019, label: 2019 },
          ]} />
      </Box>
      {matchingData?.file ?(
        <Box>
          <iframe title="News Letter" src={matchingData?.file} width="70%" height="600px"></iframe>
        </Box>) : <Text align="center" size={24}  color={COLORS.textGray}>No file found to show..</Text>
      }

    </Box>
  )
}

export default NewsLetterContent;