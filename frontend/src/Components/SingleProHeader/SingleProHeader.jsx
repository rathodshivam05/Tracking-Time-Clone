import React, { useEffect } from 'react'
import { Box, Flex } from "@chakra-ui/react";
import Timer from '../Timer/Timer'
const SingleProHeader = ({ singleProject, projectData, play, setPlay }) => {
  // console.log(singleProject,'single')

  useEffect(() => {
    console.log(projectData);
  }, [projectData])
  
  return (
    <Box>
      <Flex color={"white"}
        fontSize={"18px"} fontWeight={"bold"}
        h={"52px"}
        w={"80%"}
        ml={"5%"}
        gap={"18px"}
      //    padding={"5px"}
      >
        <Box h='20px' w='20px' mt={"17px"} borderRadius='3px' bg='lightgray'></Box>
        <Box mt={"10px"} ml={"-10px"}>{singleProject.projectName}</Box>
        <Box mt={"17px"}><Timer play={play} setPlay={setPlay} projectData={projectData} /></Box>
      </Flex>
    </Box>
  )
}

export default SingleProHeader
