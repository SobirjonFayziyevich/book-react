import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);

export function Events() {
  const events_list = [
    {
      title: "enjoying read books",
      desc: "Read and learn and always increase our knowledge",
      author: "John Deo",
      date: "2022/10/01",
      location: "Canada, Charlotto Town",
      img: "/book/bookPage.jpg.webp",
    },

    {
      title: "enjoying read books",
      desc: "Read and learn and always increase our knowledge",
      author: "J.K.Rowling",
      date: "2023/11/16",
      location: "USA, Chicago",
      img: "/book/harrypotter.jpeg",
    },

    {
      title: "enjoying read books",
      desc: "Read and learn and always increase our knowledge",
      author: "Lisa Jewell",
      date: "2023/09/10",
      location: "Tashkent, nurafshon street",
      img: "/book/thriller.webp",
    },

    {
      title: "enjoying read books",
      desc: "Read and learn and always increase our knowledge",
      author: "Pushkin",
      date: "2021/11/15",
      location: "Russia, Lomonovskiy street",
      img: "/book/sher.jpeg",
    },
  ];

  return (
    <div className={"events_frame"}>
      <Container sx={{ overflow: "hidden" }}>
        <Stack className={"events_main"}>
          <Box className={"events_text"}>
            <span className={"category_title"}>Lates News</span>
          </Box>
          <Swiper
            className={"events_info swiper-wrapper"}
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
              delay: 2000, // bu rasmlarni harakat tezligini belgilaydi.
              disableOnInteraction: true, // buni manosi rasmlar harakatini tuxtatma degani.
            }}
          >
            {events_list.map((value, number) => {
              return (
                <SwiperSlide className={"events_info_frame"}>
                  <div className={"events_img"}>
                    <img src={value.img} className={"events_img"} />
                  </div>
                  <Box className={"events_desc"}>
                    <Box className={"events_bott"}>
                      <Box className={"bott_left"}>
                        <div className={"event_title_speaker"}>
                          <strong>{value.title}</strong>
                          <div className={"event_organizator"}>
                            <img
                              src={"/icons/speaker.svg"}
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
