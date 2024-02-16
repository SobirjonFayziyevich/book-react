import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);

export function Recommendation() {
  const events_list = [
    {
      title: "Children book",
      desc: "enjoying read this book",
      author: "Diana Gabaldon",
      date: "2023/11/16",
      location: "pusan,",
      img: "/book/diana.png",
    },

    {
      title: "Thriller",
      desc: "Her book is a powerful",
      author: "James Baldwin",
      date: "2023/11/16",
      location: "tashkent, nurafshon ko'cha",
      img: "/book/negro.png",
    },

    {
      title: "Poetry",
      desc: "New York Times bestseller milk and honey",
      author: "Gentle Chaos",
      date: "2023/11/16",
      location: "Canada",
      img: "/book/chaos.png",
    },

    {
      title: "Biography",
      desc: "This Penguin Classics Deluxe Edition",
      author: "james Joyce",
      date: "2023/11/16",
      location: "Nova Scoita",
      img: "/book/dubliners.png",
    },
  ];

  return (
    <div className={"recom_frame"}>
      <Container sx={{ overflow: "hidden" }}>
        <Stack className={"recom_main"}>
          <Box className={"recom_text"}>
            <span className={"category_title"}>Recommendation</span>
          </Box>
          <Swiper
            className={"recom_info swiper-wrapper"}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            {events_list.map((value, number) => { 
              return (
                <SwiperSlide className={"recom_info_frame"}>
                  <div className={"recom_img"}>
                    <img src={value.img} className={"recom_img"} />
                    {/* <img src={"/book/diana.png"} className={"recom_img"} /> */}
                  </div>
                  <Box className={"recom_desc"}>
                    <Box className={"recom_bott"}>
                      <Box className={"bott_left"}>
                        <div className={"recomm_title_speaker"}>
                          <strong>{value.title}</strong>
                          <div className={"recomm_organizator"}>
                            <img
                              src={"/icons/naushnik odam.svg"}
                              style={{ width: "20px", marginRight: "10px" }}
                            />
                            <p className={"spec_text_author"}>{value.author}</p>
                          </div>
                        </div>
                        <p
                          className={"text_desc"}
                          style={{ marginTop: "10px" }}
                        >
                          {" "}
                          {value.desc}{" "}
                        </p>
                        <div
                          className={"bott_info"}
                          style={{ marginTop: "10px" }}
                        >
                          <div className={"bott_info_main"}>
                            <img
                              src={"/icons/Calendar.svg"}
                              style={{ marginRight: "10px" }}
                            />
                            {value.date}
                          </div>
                          <div className={"bott_info_main"}>
                            <img
                              src={"/icons/location.svg"}
                              style={{ marginRight: "5px" }}
                            />
                            {value.location}
                          </div>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
      </Container>
    </div>
  );
}
