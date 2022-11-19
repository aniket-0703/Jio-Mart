import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

const capitalize = (word) =>
  `${word[0].toUpperCase()}${word.substring(1, word.length)}`;

const intiState = {
  Popularity: true,
  desc: false,
  asc: false,
  discount: false,
  all: false,
};

const falsyState = {
  Popularity: false,
  desc: false,
  asc: false,
  discount: false,
  all: false,
};

const filterList = {
  Top_Deals: ["Trending"],
  Electronics: [
    "Mobile and Tablet",
    "TV",
    "Iron",
    "Home Appliances",
    "Kitchen Appliances",
    "Computers",
    "Cameras",
    "Personal Care and Grooming",
  ],
  fruitsNvegies: ["Trending"],
  mens: ["Trending"],
  kitchenware: [
    "container",
    "basket",
    "storage",
    "Blender",
    "Lunch Box",
    "Bowl",
    "Strainer",
  ],
  makeup: ["Lipcare", "Cosmetics", "accessories", "Skincare"],
};

export default function MiniSort({
  product_category,
  handleUrlFilter,
  urlFilter,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hover, setHover] = useState(intiState);
  const [active, setActive] = useState(intiState);
  const [navActive, setNavActive] = useState("Availability");
  const optionList = {
    Availability: ["InStock Products"],
    Categories: filterList[product_category],
  };
  const listOfOptions = optionList[navActive];

  const buttonStyle = {
    backgroundColor: "#E1E0E1",
    color: "black",
    borderRadius: "10px",
    width: "115px",
    height: "35px",
    fontSize: "12px",
    border: "1px solid grey",
  };

  const buttonStyleOnHover = {
    backgroundColor: "white",
    color: "#2EA3D6",
    border: "1px solid #2EA3D6",
    borderRadius: "10px",
    width: "115px",
    height: "35px",
    fontSize: "12px",
  };

  const handleMouseIn = (e) => setHover({ ...hover, [e.target.name]: true });
  const handleMouseOut = (e) => setHover({ ...hover, [e.target.name]: false });

  const handleClick = (e) => {
    // console.log(e.target.name)
    setHover({ ...falsyState });
    setActive({ ...falsyState, [e.target.name]: true });
    const newFilter = {
      Availability: urlFilter.Availability,
      Categories: urlFilter.Categories,
      Price: urlFilter.Price,
      DiscountRange: urlFilter.DiscountRange,
      Discount: e.target.name === "discount" ? true : null,
      sort:
        e.target.name === "asc" || e.target.name === "desc"
          ? e.target.name
          : null,
    };
    handleUrlFilter(newFilter);
  };

  const handleNavClick = (e) => {
    // console.log(e.target.name);
    setNavActive(e.target.name);
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    // console.log(name,checked)
    if (name === "Availability") {
      handleUrlFilter({ ...urlFilter, [name]: checked });
    } else {
      if (checked) {
        handleUrlFilter({
          ...urlFilter,
          ["Categories"]: [...urlFilter.Categories, name],
        });
      } else {
        const newCategories = urlFilter.Categories.filter(
          (category) => category !== name
        );
        handleUrlFilter({ ...urlFilter, ["Categories"]: newCategories });
      }
    }
  };

  // console.log(listOfOptions)
  return (
    <>
      <Flex justify="flex-end" bg="#C8C8C9">
        <Button
          bg="white"
          height={6}
          onClick={onOpen}
          mt={2}
          mb={2}
          ml={5}
          mr={5}
        >
          Sort | Filter
        </Button>
      </Flex>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader height={12} fontSize="md" fontWeight="bold">
            Sort & Filter By
          </DrawerHeader>
          <DrawerBody>
            <ButtonGroup spacing={2} ml={-2.5}>
              <button
                style={
                  hover.Popularity || active.Popularity
                    ? buttonStyleOnHover
                    : buttonStyle
                }
                name="Popularity"
                onMouseOver={handleMouseIn}
                onMouseOut={handleMouseOut}
                onClick={handleClick}
              >
                Popularity
              </button>
              <button
                style={
                  hover.desc || active.desc ? buttonStyleOnHover : buttonStyle
                }
                name="desc"
                onMouseOver={handleMouseIn}
                onMouseOut={handleMouseOut}
                onClick={handleClick}
              >
                High to Low
              </button>
              <button
                style={
                  hover.asc || active.asc ? buttonStyleOnHover : buttonStyle
                }
                name="asc"
                onMouseOver={handleMouseIn}
                onMouseOut={handleMouseOut}
                onClick={handleClick}
              >
                Low to High
              </button>
              <button
                style={
                  hover.discount || active.discount
                    ? buttonStyleOnHover
                    : buttonStyle
                }
                name="discount"
                onMouseOver={handleMouseIn}
                onMouseOut={handleMouseOut}
                onClick={handleClick}
              >
                Discount
              </button>
            </ButtonGroup>

            <Flex mt={5}>
              <Box width="40%">
                <Button
                  borderRadius={0}
                  width="100%"
                  name="Availability"
                  onClick={handleNavClick}
                  bg="#F5F6F7"
                  p={2}
                  fontWeight="bold"
                  borderBottom="1px"
                  borderColor="#E2E8F0"
                >
                  Availability
                </Button>
                <Button
                  borderRadius={0}
                  width="100%"
                  name="Categories"
                  onClick={handleNavClick}
                  bg="#F5F6F7"
                  p={2}
                  fontWeight="bold"
                  borderBottom="1px"
                  borderColor="#E2E8F0"
                >
                  Categories
                </Button>
              </Box>
              <Box width="60%">
                {listOfOptions.map((ele) => (
                  <Box
                    borderBottom={"1px"}
                    p={2}
                    borderColor={"gray.100"}
                    key={ele}
                  >
                    <Checkbox name={ele} onChange={handleChange}>
                      {capitalize(ele)}
                    </Checkbox>
                  </Box>
                ))}
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
