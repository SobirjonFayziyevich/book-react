import React, { useEffect, useState } from "react";
import { Box, Container, fontSize, Stack } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import { useParams } from "react-router-dom";
import { Product } from "../../../types/product";
import { Book } from "../../../types/user";
import Marginer from "../../components";

const chosen_list = Array.from(Array(3).keys()); // creat Array function

export function ChosenBook() {
  return (
    <div className="chosen_book_page">
      <Container className="book_container" sx={{ display: "flex" }}>
        <Stack className="chosen_book_slider">
          <Swiper
            className="book_swiper"
            loop={true}
            spaceBetween={4}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {chosen_list.map((ele) => {
              const image_path = `/book/karlove.png`;
              return (
                <SwiperSlide>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={image_path}
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Swiper
            className="book_swiper_two"
            loop={true}
            spaceBetween={40}
            slidesPerView={3}
            navigation={{
              nextEl: null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {chosen_list.map((ele) => {
              const image_path = `/book/family.png`;
            return (
            <SwiperSlide>
              <img
                style={{ width: "100%", height: "100%" }}
                src={image_path}
              />
            </SwiperSlide>
            );
            })}
          </Swiper>
        </Stack>
        
        <Stack className={"chosen_book_info_container"}>
          <Box className={"chosen_book_info_box"}>
            <strong className={"book_txt"}>My Family and Other Animals</strong>
            <span className={"book_name"}>My Family</span>
            <Box className={"rating_box"}>
              <Rating
                name="half_rating"
                defaultValue={3.5}
                precision={0.5}
                style={{ fontSize: "30px" }}
              />
              <div className={"evaluation_box"}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "20px",
                  }}
                >
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite style={{ color: "red" }} />}
                    /*@ts-ignore*/
                    checked={false}
                  />
                  <span>98ta</span>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                  <span>2ta</span>
                </div>
              </div>
            </Box>
            <p className={"book_desc_info"}> very good book</p>

            <Marginer
              direction="horizontal"
              height="1"
              width="100%"
              bg="#000000"
            />
            <div className={"book_price_box"}>
              <span>Cost:</span>
              <span>10$</span>
            </div>
            <div className={"button_box"}>
              <Button>ADD TO CART</Button>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
