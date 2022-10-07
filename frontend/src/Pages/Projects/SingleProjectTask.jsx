import NavProject2 from '../../Components/NavProject2/NavProject2';
import { Box, Flex } from '@chakra-ui/react';
import SingleProHeader from '../../Components/SingleProHeader/SingleProHeader';
import { getProject } from '../../Components/ProjectReport/Report.Actions.js';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../ContextAPI/AuthContext';

export const SingleProjectTask = ({deleteProjectTask, singleProject, play, setPlay, projectData, addProjectTask, updateProjectTask }) => {
    const { token } = useContext(AuthContext);
    // console.log(projectData, 1);
    return <Box>
        <SingleProHeader singleProject={singleProject} projectData={projectData} play={play} setPlay={setPlay} />
        <NavProject2 deleteProjectTask={deleteProjectTask} addProjectTask={addProjectTask} projectData={projectData} updateProjectTask={updateProjectTask} />
    </Box>
}

// 00:01/01:00