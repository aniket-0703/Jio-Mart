import {  Box, useDisclosure } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Input, Image,Grid,GridItem } from "@chakra-ui/react";
import { useRef } from "react";
import LeftDrawer from "./LeftDrawer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Styles from "./Styles.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const Navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = useRef();
  const [search, setSearch] = useState("");
  const { isAuth } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    // console.log(search)
  };
  const handleEnter = (e) => {
    // console.log(search)
    if (e.key === "Enter") {
      if (
        search === "lipcare" ||
        search === "cosmetics" ||
        search === "accessories" ||
        search === "skincare"
      ) {
        Navigate(`/products/makeup`);
      } else if (
        search === "container" ||
        search === "basket" ||
        search === "storage" ||
        search === "blender"
      ) {
        Navigate(`/products/kitchenware`);
      } else if (
        search === "Mobile and Tablet" ||
        search === "mobile" ||
        search === "tv" ||
        search === "Home Appliances" ||
        search === "Computers"
      ) {
        Navigate(`/products/Electronics`);
      } else {
        <Link to={`/*`}></Link>;
      }
    }
  };

  return (
    <>
    <div className={Styles.navbar}>    
      <Grid
        templateColumns="repeat(6,1fr)"
        
        h="70px"
        gap={["10px","25px"]}
        pr={["5px","10px","70px"]}
        pl={["5px","10px","70px"]}
      >
        <GridItem rowSpan={1} pt="7px"  >
          <IconButton
            colorScheme="#008ecc"
            icon={<HamburgerIcon color="#fff" bg="#008ecc" w={[6,8]} h={[6,8]} />}
            onClick={onOpen}
            ref={btnRef}
            />
        </GridItem>
        <GridItem rowSpan={1} pt="10px"  >
          <Box>
            <Link to={`/`}>
              <Image
                w={["110px"]}
                minWidth={"75px"}
                className={Styles.image}
                cursor={"pointer"}
                src="https://www.jiomart.com/assets/version1664452279/smartweb/images/jiomart_logo_beta.svg"
                alt="Jio Icon"
              />
            </Link>
          </Box>
        </GridItem>
        <GridItem rowSpan={2} pt="10px"  >
          <Input
             w={["75px","150px","200px","250px","400px","650px"]}
            value={search}
            onChange={handleChange}
            onKeyDown={handleEnter}
            placeholder="Search essentials, groceries, and more..."
            bg="#fff"
            
          />
        </GridItem>
        <GridItem rowSpan={2} colStart={4} colEnd={6} pt="15px" pl={["25px","50px","110px"]}  >
          <Box display={"flex"} justifyContent="flex-end" w={["80px","80px","160px"]}>
            <Link to={`/account${isAuth ? "" : "/login"}`}>
              <Box
                display={"flex"}
                color="white"
                cursor={"pointer"}
                mr={"8px"}
                >
                <img
                  src="https://www.jiomart.com/msassets/images/icons/loginicon_be.svg"
                  height="10px"
                  width="24px"
                  alt=""
                />
                {isAuth ? "Account" : "SignIn"}
              </Box>
            </Link>

            <Link to="/checkout/cart">
              <Box display={"flex"} color="white" cursor={"pointer"} pl={["20px"]} >
                <img
                  src="	https://www.jiomart.com/msassets/images/icons/cart-white.svg"
                  height="24px"
                  width="24px"
                  alt=""
                />
                Cart
              </Box>
            </Link>
          </Box>
        </GridItem>
      </Grid>
  </div>

      <LeftDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </>
  );
};
export default Navbar;
