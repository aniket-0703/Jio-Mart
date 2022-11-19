import { Box, Img, Slider, Text, WrapItem } from "@chakra-ui/react";
import { useRef } from "react";
import { useEffect } from "react";
import { KidsFashion } from "../data";
import styles from "./Shop.module.css";
import Carousel from "react-elastic-carousel";

function Kids() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 406, itemsToShow: 2, itemsToScroll: 2 },
    { width: 800, itemsToShow: 4.5, itemsToScroll: 4 },
    { width: 1200, itemsToShow: 5, itemsToScroll: 5 },
  ];
  const sliderRef = useRef(null);
  //dependency ===>
  useEffect(() => {
    console.log(sliderRef);
  }, []);

  return (
    <div>
      <Box mt={"1rem"} mb={'1rem'}>
        <Text as={"b"} fontSize="xl" m={"4%"} mt={'2rem'}>
          Kids Fashion
        </Text>
      </Box>

      <div>
        <div
          onClick={() => sliderRef.current.slickPrev()}
        ></div>
        <Box bg="white" w="98%" ml={'0.8rem'}>
          <Carousel breakPoints={breakPoints}>
            {KidsFashion.map((item) => (
              <Box
                key={item.item_id}
                border={"1px solid gray"} p={'1rem'} m={1} borderRadius={"1rem"} bg={'#f9f0ab'} mt={0}>
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
export default Kids;