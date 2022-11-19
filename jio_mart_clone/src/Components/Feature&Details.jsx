import { Box, Button, Collapse, Heading } from "@chakra-ui/react"
import React from "react"

export default function FeatureDetails() {
    const [show, setShow] = React.useState(false)
  
    const handleToggle = () => setShow(!show)
  
    return (
      <Box m='auto' width='90%'>


        <Heading size='80px'>Features & Details</Heading>
        <Collapse startingHeight={20} in={show}>
        How do features, user stories, requirements, and epics work together? Let's look at an example from a fictitious cycling application. In the screenshot below, our epic is related to "Rider reporting" — this is a group of capabilities that will enhance the rider's ability to report on their performance. This is a broad scope of work that needs to be broken down into multiple features or user stories, like "Bike mileage tracking" shown here. This single feature then contains multiple requirements, including the design of the mileage report and integrating with an existing analytics engine.
        </Collapse>
        <Button color={'red'} bg='white' ml='92%' size='sm' onClick={handleToggle} mt='1rem'>
          Show {show ? 'Less' : 'More'}
        </Button>

      </Box>
    )
  }