import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAPICall from "../CustomHooks/useAPICall";
import { Login } from "../Redux/Login/action";

const initMsg = {
  status: false,
  notice: "",
};

const LoginForm = ({
  handleOtp,
  resetOtp,
  sendOtp,
  handleInputOtp,
  inputOtp,
  setPhoneNumber,
  phoneNumber,
}) => {
  const [otpRequestSend, setOtpRequestSend] = useState(false);
  const [msg, setMsg] = useState(initMsg);
  const navigate = useNavigate();
  const { baseUrl, getData } = useAPICall();
  const dispatch = useDispatch()
  // let data = null;

  const handleOtpSend = async () => {
    if (
      parseInt(phoneNumber) > 6700000000 &&
      parseInt(phoneNumber) < 10000000000
    ) {
      handleMsg(initMsg);
      const data = await getData(`${baseUrl}/users?number=${phoneNumber}`);
      if (data.length === 0) {
        navigate("/account/register");
      } else {
        setOtpRequestSend(!otpRequestSend);
      }
      // console.log(phoneNumber);
      sendOtp();
    } else {
      handleMsg({ status: true, notice: "invalid phone number!!!" });
    }
  };

  const VerifyOtp = () => {
    if (inputOtp === "") {
      handleMsg({ status: true, notice: "Please enter the OTP!!!!" });
    } else {
      if (handleOtp()) {
        dispatch(Login(`${baseUrl}/users?number=${phoneNumber}`))
        navigate("/");
      } else {
        handleMsg({ status: true, notice: "invalid otp!!!" });
      }
    }
  };

  const handleMsg = (obj) => {
    setMsg(obj);
  };

  const handleNumberChange = ()=>{
    setOtpRequestSend(!otpRequestSend);
    setPhoneNumber("")
  }

  return (
    <Box m={10}>
      <Heading fontSize="25px" as="h2">
        Sign in
      </Heading>
      <Text mb="50px">Sign in to access your Orders, Offers and Wishlist.</Text>

      <Stack spacing={4}>
        <InputGroup>
          <InputLeftAddon
            bg={"white"}
            fontWeight={"bold"}
            color="black"
            children="+91"
          />
          <Input
            type="tel"
            placeholder="Enter your mobile no"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {otpRequestSend && (
            <InputRightElement width="4.5rem">
              <Button bg='white' size="xs" color='crimson' onClick={handleNumberChange}>
                change
              </Button>
            </InputRightElement>
          )}
        </InputGroup>

        {!otpRequestSend ? (
          <>
            {msg.status ? (
              <Text fontSize="xs" color="crimson">
                {msg.notice}
              </Text>
            ) : null}
            <Box pl={"50%"}>
              <Button
                fontSize={"30px"}
                width={"50px"}
                size="lg"
                borderRadius="50%"
                colorScheme="blue"
                onClick={handleOtpSend}
              >
                <ChevronRightIcon />
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Input
              mb={"10px"}
              placeholder="Enter your OTP"
              value={inputOtp}
              onChange={handleInputOtp}
            />
            <Button
              fontSize={"13px"}
              color="#e23911"
              boder="0"
              bg="white"
              onClick={resetOtp}
            >
              Resend OTP
            </Button>
            {msg.status ? (
              <Text fontSize="xs" color="crimson">
                {msg.notice}
              </Text>
            ) : null}
            <Button
              w={"100%"}
              mb={"10px"}
              mt="30px"
              colorScheme="blue"
              onClick={VerifyOtp}
            >
              Verify
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default LoginForm;
