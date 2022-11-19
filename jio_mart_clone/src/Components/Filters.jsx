import {
  Box,
  Checkbox,
  Container,
  Divider,
  Heading,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

const capitalize = (word) =>
  `${word[0].toUpperCase()}${word.substring(1, word.length)}`;

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

export default function Filters({
  product_category,
  urlFilter,
  handleUrlFilter,
  urlFilterInit
}) {
  const filters = filterList[product_category];
  // handleUrlFilter(urlFilterInit)

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

  const handlePriceChange = (val) => {
    handleUrlFilter({ ...urlFilter, ["Price"]: { min: val[0], max: val[1] } });
  };

  const handleDiscountChange = (val) => {
    handleUrlFilter({
      ...urlFilter,
      ["DiscountRange"]: { min: val[0], max: val[1] },
    });
  };

  useEffect(()=>{
    handleUrlFilter(urlFilterInit)
    // console.log(1)
  },[filters])
  // console.log(2)
  return (
    <Container mt={10} bg={"white"} pt={5} pb={5} width="90%" borderRadius={10}>
      <Heading size="md" fontWeight={"medium"} pb={4}>
        Filters
      </Heading>
      <Divider />
      <Box>
        <Heading size="sm" fontWeight={"medium"} pt={6} pb={4}>
          Availability
        </Heading>
        <Box>
          <Checkbox name="Availability" onChange={handleChange}>
            InStock Products
          </Checkbox>
        </Box>
      </Box>
      <Box>
        <Heading size="sm" fontWeight={"medium"} pt={4} pb={4}>
          Categories
        </Heading>
        <Box height={40} overflowY={"scroll"}>
          {filters.map((filter) => (
            <Box
              borderBottom={"1px"}
              pt={2}
              pb={2}
              borderColor={"gray.100"}
              key={filter}
            >
              <Checkbox name={filter} onChange={handleChange}>
                {capitalize(filter)}
              </Checkbox>
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Heading size="sm" fontWeight={"medium"} pt={4} pb={4}>
          Price
        </Heading>
        <RangeSlider
          defaultValue={[0, 99848]}
          min={0}
          max={100000}
          step={10}
          onChangeEnd={(val) => handlePriceChange(val)}
        >
          <RangeSliderTrack bg="red.100">
            <RangeSliderFilledTrack bg="tomato" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} />
          <RangeSliderThumb boxSize={6} index={1} />
        </RangeSlider>
      </Box>
      <Box>
        <Heading size="sm" fontWeight={"medium"} pt={4} pb={4}>
          Discount
        </Heading>
        <RangeSlider
          defaultValue={[0, 100]}
          min={0}
          max={100}
          step={1}
          onChangeEnd={(val) => handleDiscountChange(val)}
        >
          <RangeSliderTrack bg="red.100">
            <RangeSliderFilledTrack bg="tomato" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} />
          <RangeSliderThumb boxSize={6} index={1} />
        </RangeSlider>
      </Box>
    </Container>
  );
}
