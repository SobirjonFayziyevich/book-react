import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Pagination,
  Stack,
} from "@mui/material";
import Typography from "@mui/joy/Typography";
import SearchIcon from "@mui/icons-material/Search";
import {
  AspectRatio,
  Card,
  CardOverflow,
  CssVarsProvider,
  IconButton,
  Link,
} from "@mui/joy";
import { Favorite, Visibility } from "@mui/icons-material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Container } from "@mui/system";
import Slider, { sliderClasses } from "@mui/joy/Slider";
import Checkbox from "@mui/material/Checkbox";

import { Book } from "../../../types/user";
import { Swiper, SwiperSlide } from "swiper/react";
import Marginer from "../../components";

const order_list = Array.from(Array(8).keys());
console.log(order_list);

export function AllBooks() {
  return (
    <div className="all_book">
      <Container>
        <Stack flexDirection={"row"}>
          <Stack className={"fil_search_box"}>
            <Box
              className={"fil_box"}
              style={{ cursor: "pointer", marginLeft: "20px" }}
            >
              <div className="fil_box_name"> Sub Categories:</div>

              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="History"
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="Threller"
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="Poetry"
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="Children"
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="ArtPhotography"
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="Advanture"
                />
              </FormGroup>
            </Box>
            <CssVarsProvider>
              <Box
                className={"price_range"}
                style={{ cursor: "pointer", marginLeft: "20px" }}
              >
                Price Range:
                <Box sx={{ width: 200, marginTop: "20px", color: "black" }}>
                  <Slider
                    track={false}
                    defaultValue={[0, 100]}
                    getAriaLabel={() => "Amount"}
                    // getAriaValueText={valueText}
                    marks={[
                      {
                        value: 0,
                        label: "0$",
                      },
                      {
                        value: 100,
                        label: "100$",
                      },
                    ]}
                    valueLabelDisplay="on"
                    sx={{
                      // Need both of the selectors to make it works on the server-side and client-side
                      [`& [style*="left:0%"], & [style*="left: 0%"]`]: {
                        [`&.${sliderClasses.markLabel}`]: {
                          transform: "none",
                        },
                        [`& .${sliderClasses.valueLabel}`]: {
                          left: "calc(var(--Slider-thumbSize) / 2)",
                          borderBottomLeftRadius: 0,
                          "&::before": {
                            left: 0,
                            transform: "translateY(100%)",
                            borderLeftColor: "currentColor",
                          },
                        },
                      },
                      [`& [style*="left:100%"], & [style*="left: 100%"]`]: {
                        [`&.${sliderClasses.markLabel}`]: {
                          transform: "translateX(-100%)",
                        },
                        [`& .${sliderClasses.valueLabel}`]: {
                          right: "calc(var(--Slider-thumbSize) / 2)",
                          borderBottomRightRadius: 0,
                          "&::before": {
                            left: "initial",
                            right: 0,
                            transform: "translateY(100%)",
                            borderRightColor: "currentColor",
                          },
                        },
                      },
                    }}
                  />
                </Box>
              </Box>
            </CssVarsProvider>

            <Box className={"search_big_box"} style={{ marginBottom: "70px" }}>
              <form className={"search_form"} action={""} method={""}>
                <input
                  type={"search"}
                  className={"searchInput"}
                  name={"resSearch"}
                  placeholder={"Find books here..."}
                />
                <Button
                  className={"button_search"}
                  variant="contained"
                  endIcon={<SearchIcon />}
                >
                  Find
                </Button>
              </form>
            </Box>
          </Stack>
          <Stack className={"all_book_box"}>
            <CssVarsProvider>
              {order_list.map((ele) => {
                return (
                  <Card
                    variant="outlined"
                    sx={{
                      minHeight: 410,
                      minWidth: 290,
                      mx: "17px",
                      my: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio="1">
                        <img src={"/book/thriller.webp"} alt="" />
                      </AspectRatio>
                      <IconButton
                        aria-label="Like minimal photography"
                        size="md"
                        variant="solid"
                        color="neutral"
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                          borderRadius: "50%",
                          right: "1rem",
                          marginBottom: "50px",
                          bottom: 0,
                          transform: "translateY(50%)",
                          color: "rgba(0,0,0, .04)",
                        }}
                      >
                        <Favorite
                          style={{ color: "white" }}
                          //   style={{
                          //     fill:
                          //       ele?.me_liked && ele?.me_liked[0]?.my_favorite
                          //         ? "red"
                          //         : "white",
                          //   }}
                        />
                      </IconButton>
                      {/* </CardOverflow> */}
                      <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                        The Hard
                      </Typography>
                      <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                        <Link
                          href=""
                          startDecorator={<LocationOnRoundedIcon />}
                          textColor="black"
                        >
                          USA, Chicago.
                        </Link>
                      </Typography>

                      <Typography level="body-sm" sx={{ mt: 0.5, mb: 0.5 }}>
                        <Link
                          href=""
                          startDecorator={<CallIcon />}
                          textColor="black"
                        >
                          +8210 8058 0771
                        </Link>
                      </Typography>
                      <CardOverflow
                        variant="soft"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: 1.5,
                          py: 1.5,
                          px: "var(--Card-padding)",
                          borderTop: "1px solid",
                          bgcolor: "background.level1",
                        }}
                      >
                        <Typography
                          level="body-sm"
                          sx={{
                            fontWeight: "md",
                            color: "text.secondary",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          100{" "}
                          <VisibilityIcon
                            sx={{ fontSize: 20, marginLeft: "5px" }}
                          />
                        </Typography>
                        <Box sx={{ width: 2, bgcolor: "divider" }} />
                        <Typography
                          level="body-sm"
                          sx={{
                            fontWeight: "md",
                            color: "text.secondary",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          <div>12</div>
                          <FavoriteIcon
                            sx={{ fontSize: 20, marginLeft: "5px" }}
                          />
                        </Typography>
                      </CardOverflow>
                    </CardOverflow>
                  </Card>
                );
              })}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>

      <Box className="picture_box">
        <div className="picture_main">
          <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2024/01/30/28606_BB_B_OMP_02-01_b.jpg" />
        </div>
      </Box>
    </div>
  );
}
