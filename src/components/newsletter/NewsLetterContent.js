import { Box, Select } from "@mantine/core";
import React from "react";

const data = [
  {}
]

const NewsLetterContent = () => {
  return (
    <Box my={40}>
      <Box maw={300}>
        <Select
          label='Select Year'
          placeholder="select..."
          data={[
            { value: 2023, label: 2023 },
            { value: 2022, label: 2022 },
            { value: 2020, label: 2020 },
            { value: 2019, label: 2019 },
          ]} />
      </Box>
    </Box>
  )
}

export default NewsLetterContent;