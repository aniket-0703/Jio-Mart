import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import JioMartReview from './JioMartReview.png'

export default function Review()  {
  return (
    <Box m={'auto'} w={'90%'}>
       <Heading fontSize={'30px'}>Review</Heading> 
       <Image width={"450px"} src={JioMartReview} />
    </Box>
  )
}
