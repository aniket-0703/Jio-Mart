import React from "react";
import {
  Box,
  Spacer,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
  GridItem,
  Image,
  Heading,
  Text,
  Button,
  Input,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { ChevronRightIcon, AddIcon } from "@chakra-ui/icons";
import Description from "../Components/Description";
import { useEffect } from "react";
import { useState } from "react";
import Review from "../Components/Review";
import AboutBrand from "../Components/AboutBrand";
import FeatureDetails from "../Components/Feature&Details";
import CheckLocation from "../Components/CheckLocation";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../Redux/SingleProduct/action";
import useAPICall from "../CustomHooks/useAPICall";
import { JioButton, PlusMinusBtn } from "../Components/JioButton";
import { updateCart } from "../Redux/Cart/actions";

const default_image =
  "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { loading, error, product } = useSelector((state) => state.singleProduct);
  const { cartItems: cart } = useSelector((state) => state.cart);
  const { baseUrl } = useAPICall();
  const { product_id } = useParams();

  useEffect(() => {
    const url = `${baseUrl}/products/${product_id}`;
    dispatch(getSingleProduct(url));
  }, []);

  console.log(loading, error, product);

  if (loading) {
    return (
      <Center m={5}>
        <Spinner />
      </Center>
    );
  }

  if (error) {
    return (
      <Center>
        Something Went wrong....... <br /> Please Refresh
      </Center>
    );
  }

  return (
    // <h1>{JSON.stringify(product)}</h1>
    <Box>
      <Breadcrumb
        m="auto"
        mt='28'
        pl="10px"
        w="90%"
        fontSize="14px"
        spacing="3px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">All Categories</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Product Page</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Flex h="500px" m="auto" mt="20px" w="90%">
        <Box w="50%" p="1">
          <Flex m="auto" mt="20px" w="90%">
            <Box w="25%" p="1">
              <Box borderRadius="5px">
                <Image
                  boxShadow="dark-lg"
                  rounded="md"
                  bg="white"
                  borderRadius="10px"
                  m="5px"
                  w="70%"
                  src={default_image}
                />
              </Box>
              <Box borderRadius="5px">
                <Image
                  boxShadow="dark-lg"
                  rounded="md"
                  bg="white"
                  borderRadius="10px"
                  m="5px"
                  w="70%"
                  src={default_image}
                />
              </Box>
              <Box borderRadius="5px">
                <Image
                  boxShadow="dark-lg"
                  rounded="md"
                  bg="white"
                  borderRadius="10px"
                  m="5px"
                  w="70%"
                  src={default_image}
                />
              </Box>
              <Box borderRadius="5px">
                <Image
                  boxShadow="dark-lg"
                  rounded="md"
                  bg="white"
                  borderRadius="10px"
                  m="5px"
                  w="70%"
                  src={default_image}
                />
              </Box>
            </Box>

            <Box w="75%">
              <Box width='100%'>
                {" "}
                <Image boxShadow="lg" src={product.item_img_url} width="100%" />{" "}
              </Box>
            </Box>
          </Flex>
        </Box>

        <Box w="50%" p="4">
          <Heading as={"h3"} size="md" mb={"15px"}>
            {product.item_name}
          </Heading>
          <Text as="samp" color="gray.500">
            Price
          </Text>
          <Heading as={"h3"} size="md">
            ₹ {product.item_final_price}{" "}
            <Text ml={"20px"} as="samp" color="gray.700">
              MRP:{" "}
            </Text>{" "}
            <Text as="del">{product.item_price}</Text>{" "}
          </Heading>
          <Text mb={"15px"} fontSize={"15px"} as={"samp"}>
            You Save:{" "}
            <Text as={"b"} color="green">
              ₹{product.item_disc_price}
            </Text>{" "}
            Inclusive of all taxes
          </Text>
          <Spacer />
          <Text as={"b"} color="green">
            {product.item_stock ? "In Stock" : "Out of Stock"}
          </Text>
          <Spacer />
          <Text as={"samp"}>
            Sold by{" "}
            <Text as={"b"} color="blue">
              {" "}
              Reliance Retail
            </Text>
          </Text>
          <Spacer />
          <Text color={"gray.700"} as={"samp"}>
            Inaugural Offer
            <Text color={"black"} as={"b"}>
              {" "}
              Free Shipping
            </Text>
          </Text>
          <Spacer />
          <Image
            w="120px"
            src="https://e7.pngegg.com/pngimages/739/826/png-clipart-logo-credit-card-payment-card-american-express-credit-card-text-display-advertising.png"
          />
          <Box mt={5} width='20%' mb={5}>
            {product.id in cart ? (
              <PlusMinusBtn product={product} />
            ) : (
              <span
                onClick={() => {
                  // setcartPopUpVisible(true);
                  dispatch(updateCart({ product, quantity: 1 }));
                }}
              >
                <JioButton myProduct={product} />
              </span>
            )}
          </Box>
          <Spacer />
          <Text mt={"20px"} color={"black"} as={"b"}>
            Delivery
          </Text>
          <Spacer />
          <Input
            border="0"
            borderBottom="2px solid gray"
            mt={"10px"}
            addon="Pin"
            h="30px"
            w="180px"
            placeholder="Enter Your PinCode"
          />
          <CheckLocation />
          {/* <Text as='b' color='red' fontSize='15px'>CHECK</Text> */}
          <Text fontSize="12px">Check for estimated delivery date</Text>
        </Box>
      </Flex>

      <hr
        style={{
          color: "black",
          width: "90%",
          margin: "auto",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      />

      <AboutBrand />
      <Description />
      <FeatureDetails />
      <Review />
    </Box>
  );
}
