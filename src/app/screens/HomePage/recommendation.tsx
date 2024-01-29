import React from "react";
import { Box, Container, Stack } from "@mui/material";

export function Recommendation() {
  return (
    <div className="recomend_frame">
      <Container>
        <Stack className="recomendation_box" sx={{ flexDirection: "column" }}>
          <Box className="recomendation_top">
            <h1>Recommendation</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </Box>

          <Stack className="recom_middle_box" sx={{ flexDirection: "row"}}>
            <Stack className="recom_main_box" sx={{ flexDirection: "column", marginRight: "40px" }}>
              <Box className="img_box">
                <img src="/book/poem.jpeg"></img>
              </Box>
              <Box className="book_def">
                <h4>Why reading is important for our children?</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                  eiusmod tempor incididunt ut labore et dolore...
                </p>
              </Box>
              <Box className="author_book">
                <Box>
                  <img src="/icons/odamcha.png"></img>
                  <p>James Wong</p>
                </Box>
              </Box>
            </Stack>

            <Stack className="recom_main_box" sx={{ flexDirection: "column", marginRight: "40px"}}>
              <Box className="img_box">
                <img src="/book/poem.jpeg"></img>
              </Box>
              <Box className="book_def">
                <h4>Why reading is important for our children?</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                  eiusmod tempor incididunt ut labore et dolore...
                </p>
              </Box>
              <Box className="author_book">
                <Box>
                  <img src="/icons/odamcha.png"></img>
                  <p>James Wong</p>
                </Box>
              </Box>
            </Stack>

            <Stack className="recom_main_box" sx={{ flexDirection: "column",marginRight: "40px",}}>
              <Box className="img_box">
                <img src="/book/poem.jpeg"></img>
              </Box>
              <Box className="book_def">
                <h4>Why reading is important for our children?</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                  eiusmod tempor incididunt ut labore et dolore...
                </p>
              </Box>
              <Box className="author_book">
                <Box>
                  <img src="/icons/odamcha.png"></img>
                  <p>James Wong</p>
                </Box>
              </Box>
            </Stack>

          </Stack>
          
        </Stack>
      </Container>
    </div>
  );
}
