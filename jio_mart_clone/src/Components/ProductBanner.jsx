import { Box, Image } from "@chakra-ui/react";
import React from "react";

const BannerLink = {
  fruitsNvegies:
    "https://www.jiomart.com/images/category/2/groceries-20210201.jpeg",
  kitchenware:
    "https://www.jiomart.com/images/category/1687/home-kitchen-20220519.jpeg",
  mens: "https://www.jiomart.com/images/category/3/fashion-20200902.jpeg",
  Electronics:
    "https://i.pinimg.com/originals/2b/17/31/2b17312951cd68af2d37266a04974073.jpg",
    makeup : "https://cdn.britannica.com/35/222035-050-C68AD682/makeup-cosmetics.jpg"
};

export default function ProductBanner({ product_category }) {
  const banner = BannerLink[product_category];

  return (
    <Box bg={"teal.100"} width="98%" height={250}>
      <Image
        src={banner}
        boxSize="100%"
        alt="Electronics"
        objectFit="cover"
      />
    </Box>
  );
}
