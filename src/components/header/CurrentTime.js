import { Box, Text } from "@mantine/core";
import React, { useState, useEffect } from "react";
import COLORS from "../../theme/color";
import dayjs from "dayjs"

export const TimeFormat = (time, format = 'hh:mm:ss A') => {
  if (time) {
    return dayjs(time).format(format)
  } else {
    return
  }
}

export const dateFormat = (date, format = 'DD/MM/YYYY') => {
    if (date) {
        return dayjs(date).format(format)
    } else {
        return date
    }
}

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Box mr={20} sx={{display:'flex'}}>
      <Text size={14} color={COLORS.darkGray} weight={600}>Calendar Time: </Text>
      <Text size={12} mt={2} ml={8} color={COLORS.white}>
        {dateFormat(currentTime, 'MMM D YYYY')} {TimeFormat(currentTime)}
      </Text>
    </Box>
  );
};

export default CurrentTime;
