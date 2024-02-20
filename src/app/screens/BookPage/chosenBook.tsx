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
import Marginer from "../../components/marginer";

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
            <strong className={"book_title"}>
              My Family and Other Animals <br></br>{" "}
            </strong>
            <span className={"book_name"}>
              <a>
                <strong> Author(s): </strong>
                Susan Kellogg
                <br></br>
              </a>
            </span>
            <strong className="ISNB">ISNB: </strong>
            <span className="variant-barcode">
              6523472947
              <br></br>
              <strong>Publication Data: </strong>
              5/01/24
              <br></br>
              <strong>Pages: </strong>
              218
              <br></br>
            </span>
            <strong className="format">Format: Paperback</strong>
            <br></br>
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
            <div className={"price"}>
              12 $
              <div className={"button_box"}>
              <Button className="button_name">ADD TO CART</Button>
              </div>
            </div>

            <Marginer
              direction="horizontal"
              height="1"
              width="100%"
              bg="#000000"
            />
            <p className="book_description">
            Susan Kellogg's history of the Aztecs offers a concise yet comprehensive assessment of 
            Aztec history and civilization, emphasizing how material life and the economy functioned 
            in relation to politics, religion, and intellectual and artistic developments. Appreciating the vast number of 
            sources available but also their limitations. 
            </p>
          </Box>
        </Stack>
      </Container>

      <Stack 
      sx={{ mt: "60px" }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      >
      <Box className={"category_titla"}> Store Address </Box>
          <iframe
            style={{ marginTop: "60px" }}
            src="https://image.cnbcfm.com/api/v1/image/100416482-google-map-maker-north-korea-google-youtube.jpg?v=1359477081&w=1600&h=900"
            width="1320"
            height="500"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </Stack>
    </div>
  );
}
