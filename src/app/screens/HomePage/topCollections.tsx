import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import { CardOverflow, IconButton } from "@mui/joy";
import CardContent from "@mui/joy/CardContent";
import CardCover from "@mui/joy/CardCover";
import { Favorite } from "@mui/icons-material";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";

// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTopCollections } from "../../screens/HomePage/selector";
import { Book } from "../../../types/user";
import { serviceApi } from "../../../lib/config";

/** REDUX SELECTOR */
const topCollectionRetriever = createSelector(
  retrieveTopCollections,
  (topCollections) => ({
    topCollections,
  })
);

export function TopCollections() {
  const { topCollections } = useSelector(topCollectionRetriever); //useSelectorga topRestaurantRetrieverni kiritib undan topRestaurantni qabul qilib olayopman.
  console.log("topCollections:::", topCollections);

  return (
    <div className="topcollection_frame">
      <Container>
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          sx={{ mt: "35px" }}
        >
          <Stack
            sx={{ mt: "10px" }}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Box className={"category_title"}>
              <h1 className={"message"}>
                FIND YOUR PLACE AT B&N'S ONLINE BOOKSTORE
              </h1>
              <span className="message_text">
                Over 5 million books ready to ship, 3.6 million eBooks and
                300,000 audiobooks to download right now! Curbside pickup
                available in most stores!
              </span>
            </Box>

            <Stack sx={{ mt: "43px" }} flexDirection={"row"} m={"16px"}>
              {topCollections.map((ele: Book) => {
                const image_path = `${serviceApi}/${ele.mb_image}`;
                return (
                  <CssVarsProvider key={ele._id}>
                    <Card
                      sx={{
                        minHeight: "386px",
                        minWidth: 270,
                        mr: "33px",
                        paddingLeft: "24px",
                      }}
                    >
                      <CardCover>
                        <img src={image_path} loading="lazy" alt="" />
                      </CardCover>
                      <CardCover
                        sx={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                        }}
                      />
                      <CardContent sx={{ justifyContent: "flex-end" }}>
                        <Typography level="title-lg" textColor="#fff">
                          {ele.mb_nick}
                        </Typography>
                        <Typography
                          startDecorator={<LocationOnRoundedIcon />}
                          textColor="neutral.300"
                        >
                          {ele.mb_address}
                        </Typography>
                      </CardContent>
                      <CardOverflow
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: 1.5,
                          py: 1.5,
                          px: "var(--Card-padding)",
                          borderTop: "1px solid",
                        }}
                      >
                        <IconButton
                          aria-label="Like minimal Photography"
                          size="md"
                          variant="solid"
                          color="neutral"
                          sx={{
                            position: "absolute",
                            zIndex: 2,
                            borderRadius: "50%",
                            right: "1rem",
                            bottom: 45,
                            transform: "translateY(50%)",
                            color: "rgba(0,0,0,.4)",
                          }}
                        >
                          <Favorite
                            style={{
                              fill:
                                ele?.mb_liked && ele?.liked[0].my_favorite
                                  ? "red"
                                  : "white",
                            }}
                          />
                        </IconButton>

                        <Typography
                          level="body-sm"
                          sx={{
                            fontSize: "16px",
                            lineHeight: "1.5",
                            fontWeight: "md",
                            color: "neutral.300",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          {ele.mb_views}
                          <VisibilityIcon
                            sx={{ fontSize: 20, marginLeft: "5px" }}
                          />
                        </Typography>
                        <Box sx={{ width: 2, bgcolor: "divider" }} />
                        <Typography
                          sx={{
                            fontWeight: "md",
                            color: "neutral.300",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          <div>{ele.mb_likes}</div>
                          <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                        </Typography>
                      </CardOverflow>
                    </Card>
                  </CssVarsProvider>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
