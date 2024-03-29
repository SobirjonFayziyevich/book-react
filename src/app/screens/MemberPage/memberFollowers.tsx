import React, { useEffect, useState } from "react";
import { Box, Pagination, PaginationItem, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";


import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const followers = [
    {mb_nick: "jonny", following: true},
    {mb_nick: "sam", following: false},
    {mb_nick: "usman", following: true},
];

export function MemberFollowers(props: any) {

    return (
        <div className={"my_followers_page"}>
          <Stack>
            {followers.map((follower) => {
              const image_url = "/auth/odamcha.png";
              return (
                <Box className={"follow_box"}>
                  <Stack flexDirection="row">
                    <Avatar 
                    alt={""} 
                    style={{cursor: 'pointer'}}
                    src={image_url} sx={{ width: 89, height: 89 }} />
                    <div
                      style={{
                        width: "400px",
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "25px",
                        height: "100%",
                        color: "#ffffff",
                      }}
                    >
                      <span className={"username_text"}>USER</span>
                      <span className={"name_text"}
                       style={{cursor: 'pointer'}}>{follower.mb_nick}</span>
                    </div>
                      {props.actions_enabled &&
                        (follower.following ? (
                          <Button
                            style={{
                              background: "#68C5CB",
                              color: "#ffffff",
                              borderRadius: "50px",
                              marginTop: "18px",
                              width: "160px",
                            }}
                            className={"following_already"}
                          >
                            <span>Following</span>
                          </Button>
                        ) : (
                          <Button
                            className={"follow_back"}
                            style={{
                              background: "#30945E",
                              borderRadius: "50px",
                              marginTop: "18px",
                              color: "#ffffff",
                            }}
                            startIcon={
                            <img src={"/icons/follow icon.svg"}
                            style={{ width: "40px" }} 
                            />
                            }
                          >
                            Follow Back
                          </Button>
                        ))}

                  </Stack>
                </Box>
              );
            })}
          </Stack>
        </div>
      );
} 
