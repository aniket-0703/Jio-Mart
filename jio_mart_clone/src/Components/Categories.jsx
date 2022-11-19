import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Divider,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <Container mb={10} bg={"white"} pt={5} pb={5} width="90%" borderRadius={10}>
      <Heading size="md" fontWeight={"medium"} pb={4}>
        Categories
      </Heading>
      {/* <Divider p={1.5} width={55}/> */}
      <Accordion allowMultiple height={80} overflowY={"scroll"}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <AccordionIcon />
              <Box flex="1" textAlign="left">
                Mobiles & Tablets
              </Box>
            </AccordionButton>
          </h2>
          <Link to={`/products/Electronics`}>
            <AccordionPanel pl={8} pb={4}>
              <Box>Smartphones</Box>
              <Box>Wearable Technology</Box>
              <Box>Tablets & eReaders</Box>
              <Box>Power Bank</Box>
              <Box>Regular Tablets</Box>
            </AccordionPanel>
          </Link>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <AccordionIcon />
              <Box flex="1" textAlign="left">
                Men
              </Box>
            </AccordionButton>
          </h2>
          <Link to={`/products/mens`}>
            <AccordionPanel pl={8} pb={4}>
              <Box>Footwear</Box>
            </AccordionPanel>
          </Link>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <AccordionIcon />
              <Box flex="1" textAlign="left">
                TV & Speakers
              </Box>
            </AccordionButton>
          </h2>
          <Link to={`/products/Electronics`}>
            <AccordionPanel pl={8} pb={4}>
              <Box>Television</Box>
            </AccordionPanel>
          </Link>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <AccordionIcon />
              <Box flex="1" textAlign="left">
                Women
              </Box>
            </AccordionButton>
          </h2>
          <Link to={`/products/mens`}>
            <AccordionPanel pl={8} pb={4}>
              <Box>Ethnic Wear</Box>
              <Box>Western Wear</Box>
            </AccordionPanel>
          </Link>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <AccordionIcon />
              <Box flex="1" textAlign="left">
                Home Appliances
              </Box>
            </AccordionButton>
          </h2>
          <Link to={`/products/kitchenware`}>
            <AccordionPanel pl={8} pb={4}>
              <Box>Vacuum Cleaners</Box>
              <Box>Fans</Box>
              <Box>Geysers</Box>
              <Box>Irons</Box>
            </AccordionPanel>
          </Link>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <AccordionIcon />
              <Box flex="1" textAlign="left">
                Computers
              </Box>
            </AccordionButton>
          </h2>
          <Link to={`/products/Electronics`}>
            <AccordionPanel pl={8} pb={4}>
              <Box>Laptops</Box>
              <Box>Printers</Box>
            </AccordionPanel>
          </Link>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <AccordionIcon />
              <Box flex="1" textAlign="left">
                Girls
              </Box>
            </AccordionButton>
          </h2>
          <Link to={`/products/mens`}>
            <AccordionPanel pl={8} pb={4}>
              <Box>Western Wear</Box>
            </AccordionPanel>
          </Link>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <AccordionIcon />
              <Box flex="1" textAlign="left">
                Staples
              </Box>
            </AccordionButton>
          </h2>
          <Link to={`/products/fruitsNvegies`}>
            <AccordionPanel pl={8} pb={4}>
              <Box>Atta, Flours & Sooji</Box>
              <Box>Dals & Pulses</Box>
              <Box>Rice & Rice Products</Box>
              <Box>Masalas & Spices</Box>
              <Box>Salt, Sugar & Jaggery</Box>
              <Box>Dry Fruits & Nuts</Box>
            </AccordionPanel>
          </Link>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <AccordionIcon />
              <Box flex="1" textAlign="left">
                Kitchen Appliances
              </Box>
            </AccordionButton>
          </h2>
          <Link to={`/products/kitchenware`}>
            <AccordionPanel pl={8} pb={4}>
              <Box>Juicers mixer Grinder</Box>
              <Box>Induction Cooker</Box>
              <Box>Kitchen Hobs</Box>
              <Box>Sandwich Makers</Box>
              <Box>Electric Kettles</Box>
            </AccordionPanel>
          </Link>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <AccordionIcon />
              <Box flex="1" textAlign="left">
                Accessories
              </Box>
            </AccordionButton>
          </h2>
          <Link to={`/products/Electronics`}>
            <AccordionPanel pl={8} pb={4}>
              <Box>Batteries & POwer Banks</Box>
              <Box>Bluetooth & WiFi Speakers</Box>
              <Box>Pendrives</Box>
              <Box>Headphones & Headsets</Box>
            </AccordionPanel>
          </Link>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}
