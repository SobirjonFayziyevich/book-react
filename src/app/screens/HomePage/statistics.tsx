import React from "react";
import { Box, Container, Stack } from "@mui/material";

export function Statistics() {
  return (
    <div className="static_frame">
      <Container>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          style={{ height: "314px" }}
    
        >
          <Stack className={"static_box"} m={"20px"}>
            <div
              className="static_icon"
              style={{ width: "60px", height: "45px", marginBottom: "20px" }}
            >
              <img src="./icons/icon.svg" />
            </div>
            <Box className={"static_info"}>Quick Delivery</Box>
            <Box className={"static_text"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Box>
          </Stack>

          <Stack className={"static_box"}>
            <div
              className="static_icon"
              style={{ width: "60px", height: "45px", marginBottom: "20px" }}
            >
              <img src="./icons/payment.svg" />
            </div>
            <Box className={"static_info"}>Secure Payment</Box>
            <Box className={"static_text"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Box>
          </Stack>

          <Stack className={"static_box"}>
            <div
              className="static_icon"
              style={{ width: "60px", height: "45px", marginBottom: "20px" }}
            >
              <img src="./icons/quality.svg" />
            </div>
            <Box className={"static_info"}>Best Quality</Box>
            <Box className={"static_text"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Box>
          </Stack>

          <Stack className={"static_box"}>
            <div
              className="static_icon"
              style={{ width: "60px", height: "45px", marginBottom: "20px" }}
            >
              <img src="./icons/return.svg" />
            </div>
            <Box className={"static_info"}>Return Guarantee</Box>
            <Box className={"static_text"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
