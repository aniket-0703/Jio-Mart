import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProduct from "../Pages/AllProduct";
import Checkout from './Checkout';
import SignIn_SignUp from "../Pages/SignIn_SignUp";
import ProductDetails from '../Pages/ProductDetails';
import AccountPage from '../Pages/AccountPage'
import Index from "../Pages/Index";

export default function AllRoutes() {
  return (
    <Box mt='24'>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/products/:product_category" element={<AllProduct />} />
        <Route path='/checkout/:id' element={<Checkout/>} />
        <Route path="/account/:page" element={<SignIn_SignUp/>}/>
        <Route path="/products/:product_category/:product_id" element={<ProductDetails/>}/>
        <Route path="/account" element={<AccountPage/>}/>
      </Routes>
    </Box>
  );
}
