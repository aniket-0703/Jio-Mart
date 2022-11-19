import { dataSeller } from "../data";
import styles from "./Slide.module.css";
import { Box, Img, Text, WrapItem } from "@chakra-ui/react";
import { useRef } from "react";
import { useEffect } from "react";

import Carousel from "react-elastic-carousel";

function RecomendedSlide() {
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
          Rcommended
        </Text>
      </Box>

      <div className={styles.forflex}>
        <div
          className={styles.btnlef}
          onClick={() => sliderRef.current.slickPrev()}
        ></div>
        <Box bg="white" w="98%" ml={"1rem"} height={"24rem"}>
          <Carousel breakPoints={breakPoints}>
            {dataSeller.map((item) => (
              <Box
                m="5px"
                key={item.item_id}
               
              >
                <div className={styles.grow}>
                  <div className={styles.blow}>
                    <div className={styles.discountdiv}>
                      <p className={styles.discount}>33 % Off</p>
                      <img
                        className={styles.discountimg}
                        src="https://i.ibb.co/Yd3ZVDg/badge.png"
                        alt=""
                      />
                    </div>
                    <img
                      className={styles.imgSrc}
                      src={item.imgSr}
                      alt="product"
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
                      <img
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
export default RecomendedSlide;
