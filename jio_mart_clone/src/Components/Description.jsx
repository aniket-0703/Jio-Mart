import { Box, Button, Collapse, Heading } from "@chakra-ui/react"
import React from "react"

export default function Description() {
    const [show, setShow] = React.useState(false)
  
    const handleToggle = () => setShow(!show)
  
    return (
      <Box m='auto' width='90%'>

        

        <Heading size='80px'>Description</Heading>
        <Collapse startingHeight={20} in={show}>
        A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they're compelled to buy.
        </Collapse>
        <Button color={'red'} bg='white' ml='92%' size='sm' onClick={handleToggle} mt='1rem'>
          Show {show ? 'Less' : 'More'}
        </Button>

        

      </Box>
    )
  }