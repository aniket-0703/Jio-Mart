import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'

function CheckLocation() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button bg={'white'} color={'red'} border='0' onClick={onOpen}>Check</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Avilablity</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             
            <Text color='green'>Delivery avilable on your location. <br />
             Delivery Between 2 to 4 days</Text> 
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Ok
              </Button>
             
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default CheckLocation