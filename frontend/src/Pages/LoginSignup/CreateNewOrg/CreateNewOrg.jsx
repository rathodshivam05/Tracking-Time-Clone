import { Box, Image, Text, Input,Flex, Button, Slide, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'
import styles from "../CreateNewOrg/CreateNewOrg.module.css"

const CreateNewOrg = () => {
   const navigate = useNavigate();
  const [success, setSuccess] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
        setTimeout(()=>{
            setSuccess(false);
            navigate('/project')
        },2000)
    // navigate("/project");
  }



  return (
    <Box className={styles.CreateMainBox} >

      <Slide in={success} direction='left' position='fixed' top='0px' style={{ zIndex: 10 }}>
            <Alert status='success'  w='80vw' mx='10vw' >
                <AlertIcon />
                <AlertTitle>Succesfully created account!</AlertTitle>
                <AlertDescription>Now you can start your new project.</AlertDescription>
            </Alert>
        </Slide>


    {/* leftBox */}
    <Box className={styles.leftBox} >
       <Image src="https://pro.trackingtime.co/img/onboarding/onboarding-join-account.svg"></Image>
    </Box>

    {/* rightBox */}
    <Box className={styles.rightBox} > 

      <Box className={styles.rightBox2}>
       <Image  src="time-white-logo.svg"></Image>

     
    <form onSubmit={handleSubmit}> 
       <Box className={styles.inputBox}>
        
          <Text className={styles.lets}>Create your organization</Text>
          
          <Text className={styles.welcome}>Set up your company in TrackingTime.</Text>
          
         <Text className={styles.orgName}>Organization name</Text>
         <Input required className={styles.inp}></Input>

         <Text className={styles.orgName}>Team size</Text>
         <Flex className={styles.BtnFlex}>
            <Button>solo (1)</Button>
            <Button>2-5</Button>
            <Button>5-15</Button>
            <Button>+15</Button>
         </Flex>

         <Text className={styles.orgName}>Your name</Text>
         <Input required className={styles.inp}></Input>

         <Text className={styles.orgName}>Last name</Text>
         <Input required className={styles.inp}></Input>

         <Flex className={styles.getStarted}>
            <Button className={styles.back}>BACK</Button>
            {/* <Link to="/project"> */}
              <Button type='submit' className={styles.started}>GET STARTED</Button>
            {/* </Link> */}
         </Flex>
       </Box>

       </form>
       </Box>
    </Box>

  </Box>
  )
}

export default CreateNewOrg
