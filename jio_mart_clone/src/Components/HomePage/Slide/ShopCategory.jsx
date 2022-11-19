import { Box, Img, Link, Slider, Text, WrapItem } from "@chakra-ui/react";
import { useRef } from "react";
import { useEffect } from "react";
import { shopCategory } from "../data";
import styles from "./Shop.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Carousel from "react-elastic-carousel";

function ShopCategory() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 406, itemsToShow: 3, itemsToScroll: 3 },
    { width: 800, itemsToShow: 5.5, itemsToScroll: 5.5 },
    { width: 1200, itemsToShow: 6, itemsToScroll: 6 },
  ];
  const sliderRef = useRef(null);

  //dependency ===>
  useEffect(() => {
    console.log(sliderRef);
  }, []);

  return (
    <div>
      <Link to="/">
        <Box>
          <Text as={"b"} fontSize="xl" m={"5%"}>
            Shop from Top Categories
          </Text>
        </Box>
      </Link>
      <div className={styles.forflex}>
        <div onClick={() => sliderRef.current.slickPrev()}></div>
        <Box bg="white" w="98%" ml={'0.8rem'}>
          <Carousel breakPoints={breakPoints}>
            {shopCategory.map((item) => (
              <Box
                m="5px"
                alignItems="center"
                textAlign={"center"}
                key={item.item_id}
              >
                <Img className={styles.items} src={item.image} />
              </Box>
            ))}
          </Carousel>
        </Box>
        <div onClick={() => sliderRef.current.slickNext()}></div>
      </div>
    </div>
  );
}
export default ShopCategory;