import { Box, Container, Stack } from "@mui/system";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Badge, Button, Checkbox } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const book_list = Array.from(Array(3).keys());
// const product_list = Array.from(Array(8).keys());

export function OneBook() {
  return (
    <div className="single_page">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"big_box"}>
            <Box className={"top_text"}>
              <p>Welcome to Clevr Online Book Store</p>
              <Box className={"Single_search_big_box"}>
                <form className={"Single_search_form"} action={""} method={""}>
                  <input
                    type={"search"}
                    className={"Single_searchInput"}
                    name={"Single_resSearch"}
                    placeholder={"Findend"}
                  />
                  <Button
                    className={"Single_button_search"}
                    variant="contained"
                    endIcon={<SearchIcon />}
                  >
                    Find
                  </Button>
                </form>
              </Box>
            </Box>
          </Stack>

          <Stack
            className={"static_frame"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack className={"static_box"} m={"85px"}>
              <div
                className="static_icon"
                style={{
                  width: "60px",
                  height: "45px",
                  marginBottom: "20px",
                }}
              >
                <img src="/community/book 1.png" />
              </div>
              <Box className={"static_info"}>68+K</Box>
              <Box className={"static_text"}>Book Collections</Box>
            </Stack>
            <Stack className={"static_box"} m={"20px"}>
              <div
                className="static_icon"
                style={{
                  width: "60px",
                  height: "45px",
                  marginBottom: "20px",
                }}
              >
                <img src="/community/shop 1.png" />
              </div>
              <Box className={"static_info"}>268</Box>
              <Box className={"static_text"}>Our stores around the world</Box>
            </Stack>
            <Stack className={"static_box"} m={"20px"}>
              <div
                className="static_icon"
                style={{
                  width: "60px",
                  height: "45px",
                  marginBottom: "20px",
                }}
              >
                <img src="/community/group 1.png" />
              </div>
              <Box className={"static_info"}>25,634</Box>
              <Box className={"static_text"}>Our happy customersnt.</Box>
            </Stack>
          </Stack>

          <Stack
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"flex-end"}
            width={"75%"}
            sx={{ mt: "65px" }}
          >
            <Box className={"dishs_filter_box"}>
              <Button variant={"contained"} color="secondary">
                new
              </Button>
              <Button variant={"contained"} color="secondary">
                price
              </Button>
              <Button variant={"contained"} color="secondary">
                likes
              </Button>
              <Button variant={"contained"} color="secondary">
                views
              </Button>
            </Box>
          </Stack>

          <Stack
            style={{ width: "100%", display: "flex", minHeight: "600px" }}
            flexDirection={"row"}
          >
            <Stack className={"dish_category_box"}>
              <div className={"dish_category_main"}>
                <Button variant={"contained"} color="secondary">
                  Others
                </Button>
                <Button variant={"contained"} color="secondary">
                  Threller
                </Button>
                <Button variant={"contained"} color="secondary">
                  History
                </Button>
                <Button variant={"contained"} color="secondary">
                  Biography
                </Button>
                <Button variant={"contained"} color="secondary">
                  Children
                </Button>
                <Button variant={"contained"} color="secondary">
                  Poetry
                </Button>
              </div>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
