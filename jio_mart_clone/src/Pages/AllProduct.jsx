import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Categories from "../Components/Categories";
import ListOfProducts from "../Components/ListOfProducts";
import Path from "../Components/Path";
import Filters from "../Components/Filters";
import ProductBanner from "../Components/ProductBanner";
import Sort from "../Components/Sort";
import MiniSort from "../Components/MiniSort";
import { useParams } from "react-router-dom";

const urlFilterInit = {
  Availability: null,
  Categories: [],
  Price: null,
  DiscountRange: null,
  Discount: null,
  sort: null,
};

export default function AllProduct() {
  const [windowWidth, setWindowWidth] = useState(window.outerWidth);
  const [urlFilter, setUrlFilter] = useState(urlFilterInit);
  const { product_category } = useParams();

  const handleResize = () => {
    if (
      (windowWidth > 768 && window.outerWidth < 768) ||
      (windowWidth < 768 && window.outerWidth > 768)
    ) {
      setWindowWidth(window.outerWidth);
    }
    // console.log(windowWidth,window.outerWidth,"hihihih")
  };

  const handleUrlFilter = (newUrlFilter) => {
    setUrlFilter({ ...newUrlFilter });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <Box bg={"#F3F3F3"}>
      <Path product_category={product_category} />
      <Flex justify="space-between">
        {windowWidth > 768 ? (
          <Box width="23%" mt={5} mb={5}>
            <Categories />
            <Filters
              product_category={product_category}
              handleUrlFilter={handleUrlFilter}
              urlFilter={urlFilter}
              urlFilterInit ={urlFilterInit}
            />
          </Box>
        ) : null}
        <Box width={windowWidth > 768 ? "76%" : "100%"} mt={5} mb={5}>
          {windowWidth > 768 ? (
            <>
              <ProductBanner product_category={product_category} />
              <Sort handleUrlFilter={handleUrlFilter} urlFilter={urlFilter} />
            </>
          ) : (
            <MiniSort
              product_category={product_category}
              handleUrlFilter={handleUrlFilter}
              urlFilter={urlFilter}
            />
          )}
          <ListOfProducts
            windowWidth={windowWidth}
            product_category={product_category}
            urlFilter={urlFilter}
          />
        </Box>
      </Flex>
    </Box>
  );
}
