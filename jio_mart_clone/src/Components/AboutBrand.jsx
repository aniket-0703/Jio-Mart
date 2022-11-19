import { Box, Button, Collapse, Heading } from "@chakra-ui/react"
import React from "react"

export default function AboutBrand() {
    const [show, setShow] = React.useState(false)
  
    const handleToggle = () => setShow(!show)
  
    return (
      <Box m='auto' width='90%'>

        <Heading size='80px'>About Brand</Heading>
        <Collapse startingHeight={20} in={show}>
        A brand is a product, service or concept that is publicly distinguished from other products, services or concepts so that it can be easily communicated and usually marketed. Branding is the process of creating and disseminating the brand name, its qualities and personality.
        </Collapse>
        <Button color={'red'} bg='white' ml='92%' size='sm' onClick={handleToggle} mt='1rem'>
          Show {show ? 'Less' : 'More'}
        </Button>

      

      </Box>
    )
  }