import { Box, Img, Slider, Text, WrapItem } from "@chakra-ui/react";
import { useRef } from "react";
import { useEffect } from "react";
import { categorydata } from "../data";
// import styles from "./Shop.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Carousel from "react-elastic-carousel";
import styles from "../HomePageCss/Section.module.css";

function Categorydata() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 406, itemsToShow: 3, itemsToScroll: 3 },
    { width: 800, itemsToShow: 5.5, itemsToScroll: 5 },
    { width: 1200, itemsToShow: 5, itemsToScroll: 5 },
  ];
  const sliderRef = useRef(null);

  //dependency ===>
  useEffect(() => {
    console.log(sliderRef);
  }, []);

  return (
    <div>
      <Box mt={'1rem'} mb={"1rem"} >
        <Text as={"b"} fontSize="xl" m={"5%"}>
          Shop by Categories
        </Text>
      </Box>

      <div className={styles.forflex}>
        <div
          onClick={() => sliderRef.current.slickPrev()}
        ></div>
        <Box bg="white" w="98%" ml={'0.8rem'} >
          <Carousel breakPoints={breakPoints}>
            {categorydata.map((item) => (
              <Box
                m="5px"
                alignItems="center"
                textAlign={"center"}
                key={item.item_id}
                p={"1rem"}
                borderRadius={"1rem"}
                bg={"#efd6da"}
              >
                <Img className={styles.items} src={item.image} />
                <Text as={"b"}>{item.title}</Text>
              </Box>
            ))}
          </Carousel>
        </Box>
        <div onClick={() => sliderRef.current.slickNext()}></div>
      </div>
    </div>
  );
}
export default Categorydata;