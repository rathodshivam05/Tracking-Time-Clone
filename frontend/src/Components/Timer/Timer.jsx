import { Box, Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { useEffect, useState } from "react";
import { AiFillPauseCircle } from 'react-icons/ai';
import { GoPlay } from "react-icons/go";

export default function Timer({ play, setPlay, projectData }) {
  const [time, setTime] = useState(0)
  // console.log(projectData,2);
  useEffect(() => {
    if (play) {
      let id = setTimeout(() => {
        setTime(time => time + 1)
      }, 1000)
    }
  }, [time, play])

  const toggleTimer = () => {
    if (play) {
      setPlay(false);
    } else {
      setPlay(true);
    }
  }


  function strToSeconds(str) {
    str = str.split(":").map(Number);
    let seconds = (str[0] * 60 * 60) + (str[1] * 60) + str[2]
    return seconds
  }

  function converter(seconds) {
    let hr = seconds / (60 * 60);
    seconds = (hr - Math.floor(hr)) * (60 * 60);
    let min = seconds / 60
    seconds = (min - Math.floor(min)) * (60)
    return `${Math.floor(hr)}:${Math.floor(min)}:${Math.floor(seconds)}`
  }

  return (
    <HStack>
      {play ? <AiFillPauseCircle onClick={() => toggleTimer()} /> : <GoPlay onClick={() => toggleTimer()} />}
      <Box fontSize={"14px"} fontWeight={"light"}>{projectData.hoursCompleted}/{projectData?.data?.estimatedTime}:00</Box>
    </HStack>
  );
}