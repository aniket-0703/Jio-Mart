import { GrocerieSlider } from "../data";
import styles from "./Slide.module.css";
import { Box, Img, Text, WrapItem } from "@chakra-ui/react";
import { useRef } from "react";
import { useEffect } from "react";

import Carousel from "react-elastic-carousel";

function TopDealSlides() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 406, itemsToShow: 3, itemsToScroll: 3 },
    { width: 800, itemsToShow: 5.5, itemsToScroll: 5 },
    { width: 1200, itemsToShow: 6, itemsToScroll: 6 },
  ];
  const sliderRef = useRef(null);

  useEffect(() => {
    console.log(sliderRef);
  }, []);

  return (
    <div>
      <Box mt={"1rem"}>
        <Text as={"b"} fontSize="xl" m={"5%"}>
          Top Deals
        </Text>
      </Box>

      <div className={styles.forflex}>
        <div
          className={styles.btnlef}
          onClick={() => sliderRef.current.slickPrev()}
        ></div>
        <Box
          bg="white"
          w="98%"
          height={"24rem"}
          ml={"1rem"}
        
        >
          <Carousel breakPoints={breakPoints}>
            {GrocerieSlider.map((item) => (
              <Box m="6px" key={item.item_id}>
                <div className={styles.grow}>
                  <div className={styles.blow}>
                    <div  className={styles.discountdiv}>
                      <p className={styles.discount}>33 % Off</p>
                      <img
                        className={styles.discountimg}
                        src="https://i.ibb.co/Yd3ZVDg/badge.png"
                        alt="budget"
                      />
                    </div>
                    <img
                      className={styles.imgSrc}
                      src={item.imgSrc}
                      alt="product_Deals"
                    />
                    <p className={styles.heading}>
                      {item.heading} <></>
                    </p>
                    <p className={styles.price}>{item.price} </p>
                    <p className={styles.mrp}>{item.mrp}</p>
                    <p className={styles.rupees}> {item.rupees}</p>
                    <p className={styles.save}>{item.save}</p>

                    <button className={styles.addtocart}>
                      Add to Cart{" "}
                      <Img
                        className={styles.add}
                        src="https://i.ibb.co/QHDtjF4/plus.png"
                        alt="btnAdd"
                        border="0"
                      />
                    </button>
                  </div>
                </div>
              </Box>
            ))}
          </Carousel>
        </Box>
      </div>
      <div onClick={() => sliderRef.current.slickNext()}></div>
    </div>
  );
}
export default TopDealSlides;
