import React from "react";
import { Box, Container, Slider, Stack } from "@mui/material";


export function BestBook() {
  return (
    <div className={"best_book_frame"}>
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className={"top_book_title"}>Top Rated Books</Box>
          <Stack sx={{ flexDirection: "row", marginTop: '30px', justifyContent: "space-between" }}>
            
              <Box className={"book_box"} sx={{marginRight: "50px"}}>
                <span className={"book_image"}>
                  <img src={"/book/book.jpeg"} />
                </span>
                <span className="book_icons">
                  <img src={"/icons/yulduzcha.svg"} />
                  <p>Harry Potter</p>
                  <p>John Deo</p>
                </span>
                <Box className="book_price_box">
                  <span className="book_price">$19,23</span>
                </Box>
              </Box>


              <Box className={"book_box"} sx={{marginRight: "50px"}}>
                <span className={"book_image"}>
                  <img src={"/book/book.jpeg"} />
                </span>
                <span className="book_icons">
                  <img src={"/icons/yulduzcha.svg"} />
                  <p>Harry Potter</p>
                  <p>John Deo</p>
                </span>
                <Box className="book_price_box">
                  <span className="book_price">$19,23</span>
                </Box>
              </Box>

              <Box className={"book_box"} sx={{marginRight: "50px"}}>
                <span className={"book_image"}>
                  <img src={"/book/book.jpeg"} />
                </span>
                <span className="book_icons">
                  <img src={"/icons/yulduzcha.svg"} />
                  <p>Harry Potter</p>
                  <p>John Deo</p>
                </span>
                <Box className="book_price_box">
                  <span className="book_price">$19,23</span>
                </Box>
              </Box>

              <Box className={"book_box"} sx={{marginRight: "50px"}}>
                <span className={"book_image"}>
                  <img src={"/book/book.jpeg"} />
                </span>
                <span className="book_icons">
                  <img src={"/icons/yulduzcha.svg"} />
                  <p>Harry Potter</p>
                  <p>John Deo</p>
                </span>
                <Box className="book_price_box">
                  <span className="book_price">$19,23</span>
                </Box>
              </Box>
           
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}


