import { Box, Container, Stack } from "@mui/system";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Badge, Button, Checkbox } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import { FavoriteBorder } from "@mui/icons-material";
import Favorite from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const book_list = Array.from(Array(3).keys());
const product_list = Array.from(Array(1).keys());

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
        </Stack>
      </Container>

      <div className={"main_box"}>
        <Container
          sx={{ mt: "80px" }}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Stack>
            <Stack
              className={"main_category"}
              style={{ flexDirection: "row", margin: "20px" }}
            >
              <Stack className={"category_title"}>
                <a>So You Want To Talk About Race</a>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.{" "}
                </p>
                <span className={"category_title_price"}>$16,65</span>
                <div className={"add_box"}>
                  <div className={"add_number"}>
                    <img className={"icons"} src={"/icons/minus.png"}></img>
                    <b className={"number_one"}>1</b>
                    <img className={"icons_pls"} src={"/icons/plus.svg"}></img>
                  </div>
                  <button className={"add_button"}>
                    <img src="/icons/savat.svg"></img>
                    <s className={"bought"}>BUY</s>
                  </button>
                  <div className={"yurakcha"}>
                    <img src={"/icons/yurakcha.svg"}></img>
                  </div>
                </div>
              </Stack>

              <Stack
                className={"dish_wrapper"}
                style={{ flexDirection: "column", marginRight: "50px" }}
              >
                {product_list.map((ele, index) => {
                  const size_volume = " Best Seller ";
              return (
                    <Box className={"dish_box"} key={`${index}`}>
                      <Box
                        className={"dish_img"}
                        sx={{
                          backgroundImage: `url("/book/world.his.jpeg")`,
                        }}
                      >
                        <div className={"dish_sale"}>{size_volume}</div>
                        <Button
                          className={"like_view_btn"}
                          style={{ left: "36px" }}
                        >
                          <Badge badgeContent={1} color="primary">
                            <Checkbox
                              icon={
                                <FavoriteBorder style={{ color: "white" }} />
                              }
                              id={`${index}`}
                              checkedIcon={
                                <Favorite style={{ color: "red" }} />
                              }
                              checked={true}
                            />
                          </Badge>
                        </Button>
                        <Button className={"view_btn"}>
                          <img
                            src={"/icons/shopping-cart.png"}
                            style={{ display: "flex" }}
                          />
                        </Button>
                        <Button
                          className={"like_view_btn"}
                          style={{ right: "36px" }}
                        >
                          <Badge badgeContent={1000} color="primary">
                            <Checkbox
                              icon={
                                <RemoveRedEyeIcon style={{ color: "white" }} />
                              }
                            />
                          </Badge>
                        </Button>
                      </Box>
                      <Box className={"dish_desc"}>
                        <span className={"dish_title_text"}>History</span>
                        <div className={"dish_desc_text"}>
                          <MonetizationOnIcon />
                          12
                        </div>
                      </Box>
                    </Box>
                  );
                })}
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </div>

      <Stack
        style={{ width: "100%", display: "flex", minHeight: "600px" }}
        flexDirection={"row"}
      >
          <Box className={"books_category_box"}>
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
          </Box>
      </Stack>

    </div>
  );
}
