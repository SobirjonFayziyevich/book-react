import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import {
  AspectRatio,
  Avatar,
  CardOverflow,
  Chip,
  IconButton,
  Link,
} from "@mui/joy";
import CardContent from "@mui/joy/CardContent";
import CardCover from "@mui/joy/CardCover";
import { CreateNewFolder, Favorite, Visibility } from "@mui/icons-material";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";

export function TopCollections() {
  return (
    <div className="topcollection_frame">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"} sx={{mt: "35px"}}>
          <Stack
            sx={{ mt: "10px" }}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Box className={"category_title"}>TopCollections</Box>

            <Stack sx={{ mt: "43px" }} flexDirection={"row"} m={"16px"}>
              <CssVarsProvider>

                <Card sx={{ 
                  minHeight: "386px", 
                  minWidth: 270, 
                  mr: "33px",
                  paddingLeft: "24px"}}
                  >
                  <CardCover>
                    <img src="/book/harrypotter.jpeg" loading="lazy" alt="" />
                  </CardCover>
                  <CardCover
                    sx={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                    }}
                  />
                  <CardContent sx={{ justifyContent: "flex-end" }}>
                    <Typography level="title-lg" textColor="#fff">
                      J.K.Rowling
                    </Typography>
                    <Typography
                      startDecorator={<LocationOnRoundedIcon />}
                      textColor="neutral.300"
                    >
                      California, USA
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
                        <Favorite style={{ fill: "white"}} />
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
                        100
                        {/* {ele.mb_views} */}
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
                        <div>10</div>

                        {/* <div
                          ref={(element) => (refs.current[ele._id] = element)}
                        >
                          {" "}
                          {/* refs.current va ele.id nomli keyga qiymatni tenglashtirib oldim. */}
                          {/* {ele.mb_likes}
                        </div> */}
                        <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                      </Typography>
                  </CardOverflow>
                </Card>

                
                <Card sx={{ minHeight: "386px", minWidth: 270, mr: "33px" }}>
                  <CardCover>
                    <img src="/book/when.webp" loading="lazy" alt="" />
                  </CardCover>
                  <CardCover
                    sx={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                    }}
                  />
                  <CardContent sx={{ justifyContent: "flex-end" }}>
                    <Typography level="title-lg" textColor="#fff">
                    A.Colle
                    </Typography>
                    <Typography
                      startDecorator={<LocationOnRoundedIcon />}
                      textColor="neutral.300"
                    >
                      Canada, Charlotto Town
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
                        <Favorite style={{ fill: "white"}} />
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
                        100
                        {/* {ele.mb_views} */}
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
                        <div>10</div>

                        {/* <div
                          ref={(element) => (refs.current[ele._id] = element)}
                        >
                          {" "}
                          {/* refs.current va ele.id nomli keyga qiymatni tenglashtirib oldim. */}
                          {/* {ele.mb_likes}
                        </div> */}
                        <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                      </Typography>
                  </CardOverflow>
                </Card>

                <Card sx={{ minHeight: "386px", minWidth: 270, mr: "33px" }}>
                  <CardCover>
                    <img src="/book/thriller.jpeg" loading="lazy" alt="" />
                  </CardCover>
                  <CardCover
                    sx={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                    }}
                  />
                  <CardContent sx={{ justifyContent: "flex-end" }}>
                    <Typography level="title-lg" textColor="#fff">
                      L.Jewell
                    </Typography>
                    <Typography
                      startDecorator={<LocationOnRoundedIcon />}
                      textColor="neutral.300"
                    >
                      South Korea
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
                        <Favorite style={{ fill: "white"}} />
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
                        100
                        {/* {ele.mb_views} */}
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
                        <div>10</div>

                        {/* <div
                          ref={(element) => (refs.current[ele._id] = element)}
                        >
                          {" "}
                          {/* refs.current va ele.id nomli keyga qiymatni tenglashtirib oldim. */}
                          {/* {ele.mb_likes}
                        </div> */}
                        <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                      </Typography>
                  </CardOverflow>
                </Card>

                <Card sx={{ minHeight: "386px", minWidth: 270, mr: "33px" }}>
                  <CardCover>
                    <img src="/book/poetry.jpeg" loading="lazy" alt="" />
                  </CardCover>
                  <CardCover
                    sx={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                    }}
                  />
                  <CardContent sx={{ justifyContent: "flex-end" }}>
                    <Typography level="title-lg" textColor="#fff">
                      R.Kaury
                    </Typography>
                    <Typography
                      startDecorator={<LocationOnRoundedIcon />}
                      textColor="neutral.300"
                    >
                      India.New Dehli
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
                        <Favorite style={{ fill: "white"}} />
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
                        100
                        {/* {ele.mb_views} */}
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
                        <div>10</div>

                        {/* <div
                          ref={(element) => (refs.current[ele._id] = element)}
                        >
                          {" "}
                          {/* refs.current va ele.id nomli keyga qiymatni tenglashtirib oldim. */}
                          {/* {ele.mb_likes}
                        </div> */}
                        <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                      </Typography>
                  </CardOverflow>
                </Card>
                
              </CssVarsProvider>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
