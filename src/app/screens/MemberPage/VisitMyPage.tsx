import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import {
  Box,
  Container,
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";
import  TabList  from "@mui/lab/TabList";
import React, { useEffect, useState } from "react";
// import { MemberPosts } from "./memberPosts";
import { MemberFollowers } from "./memberFollowers";
// import { MemberFollowing } from "./memberFollowing";
// import { MySettings } from "./mySettings";
import SettingsIcon from "@mui/icons-material/Settings";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

//OTHERS

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Tab } from "@mui/material";


export function VisitMyPage(props: any) {
  /**INITIALIZATIONS */
  const [value, setValue] = useState("1");

  /** HANDLERS */
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };


    return (
        <div className={"my_page"}>
          <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
            <Stack className={"my_page_frame"} sx={{ flexDirection: "row" }}>
              <TabContext value={value}>
                <Stack className={"my_page_left"}>
                  <Box display={"flex"} flexDirection={"column"}>
                    <TabPanel value={"1"}>
                      <Box className={"menu_name"}>Mening Maqolalarim</Box>
    
                      <Box className={"menu_content"}>
                        {/* <MemberPosts /> */}
                        <Stack
                          sx={{ my: "40px" }}
                          direction="row"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Box className={"bottom_box"}>
                            <Pagination
                              count={3}
                              page={1}
                              renderItem={(item) => (
                                <PaginationItem
                                  components={{
                                    previous: ArrowBackIcon,
                                    next: ArrowForwardIcon,
                                  }}
                                  {...item}
                                  color={"secondary"}
                                />
                              )}
                            />
                          </Box>
                        </Stack>
                      </Box>
                    </TabPanel>
    
                    <TabPanel value={"2"}>
                      <Box className={"menu_name"}>Followers</Box>
                      <Box className={"menu_content"}>
                        {/* <MemberFollowers /> */}
                      </Box>
                    </TabPanel>
    
                    <TabPanel value={"3"}>
                      <Box className={"menu_name"}>Following</Box>
                      <Box className={"menu_content"}>
                        {/* <MemberFollowing /> */}
                      </Box>
                    </TabPanel>
    
                    <TabPanel value={"4"}>
                      <Box className={"menu_name"}>Maqola yozish</Box>
                      <Box className={"write_content"}>
                      </Box>
                    </TabPanel>
    
                    <TabPanel value={"5"}>
                      <Box className={"menu_name"}>Tanlangan Maqolalar</Box>
                      <Box className={"menu_content"}>
                      </Box>
                    </TabPanel>
    
                    <TabPanel value={"6"}>
                      <Box className={"menu_name"}>Ma'lumotlarni o'zgartirish</Box>
                      <Box className={"menu_content"}>
                      </Box>
                    </TabPanel>
                  </Box>
                </Stack>
    
                <Stack className={"my_page_right"} style={{height: "480px"}}>
                  <Box className={"order_info_box"}>
                    <a onClick={() => setValue("6")} className={"settings_btn"}>
                      <SettingsIcon />
                    </a>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                    >
                      <div className={"order_user_img"}>
                        <img src={"/image/john.jpg"}
                          className={"order_user_avatar"}
                        />
                        <div className={"order_user_icon_box"}
                        style={{ marginLeft: "100px"}}>
                          <img src={"icons/odamcha.png"}/>
                        </div>
                      </div>
                      <span className={"order_user_name"}>Saidamir </span>
                      <span className={"order_user_prof"}>USER</span>
                    </Box>
                    <Box
                      className={"user_media_box"}
                      sx={{
                        color: "#a1a1a1",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <FacebookIcon />
                      <InstagramIcon />
                      <TelegramIcon />
                      <YouTubeIcon />
                    </Box>
                    <Box
                      className={"user_media_box_follow"}
                      sx={{ flexDirection: "row" }}
                    >
                      <p className={"follows"}>Followers: 3</p>
                      <p className={"follows"}>Followings: 2</p>
                    </Box>
                    <p className={"user_desc"} style={{marginBottom: "5px"}}>
                      qushimcha malumotlar mavjud emas
                    </p>
                    <Box
                      display={"flex"}
                      justifyContent={"flex-end"}
                      sx={{ mb: "10px" }}
                    >
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                      >
                        <Tab
                          style={{ flexDirection: "column" }}
                          value={"4"}
                          component={(e) => (
                            <Button
                              variant={"contained"}
                              onClick={() => setValue("4")}
                              style={{ marginTop: "10px"}}
                               >
                              Maqola Yozish
                            </Button>
                          )}
                        />
                      </TabList>
                    </Box> 
                  </Box>
    
                  <Box className={"my_page_menu"}  >
                    <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    >
                      <Stack flexDirection={"column"}>
                        <Tab
                          style={{ flexDirection: "column" }}
                          value={"1"}
                          component={() => (
                            <div
                              className={`menu_box ${value}`}
                              onClick={() => setValue("1")}
                            >
                              <img src={"/icons/Pencil.svg"} alt="" />
                              <span> Mening Maqolalarim</span>
                            </div>
                          )}
                        />
                        <Tab
                          style={{ flexDirection: "column" }}
                          value={"2"}
                          component={() => (
                            <div
                              className={`menu_box ${value}`}
                              onClick={() => setValue("2")}
                            >
                              <img src={"/icons/odamcha.svg"} alt="" />
                              <span>Follower</span>
                            </div>
                          )}
                        />
                        <Tab
                          style={{ flexDirection: "column" }}
                          value={"3"}
                          component={() => (
                            <div
                              className={`menu_box ${value}`}
                              onClick={() => setValue("3")}
                            >
                              <img src={"/icons/odamcha.svg"} alt="" />
                              <span>Following</span>
                            </div>
                          )}
                        />
                      </Stack>
                    </TabList>
                  </Box>
                </Stack>
              </TabContext>
            </Stack>
          </Container>
        </div>
      );
}