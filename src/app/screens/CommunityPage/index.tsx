import React, { useState } from "react";
import { Badge, Box, Button, Checkbox, Container, Pagination, PaginationItem } from "@mui/material";
import { Stack } from "@mui/system";
import "../../../css/community.css";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { TabPanel } from "@mui/lab";
import { ExpandMore, FavoriteBorder } from "@mui/icons-material";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const product_list = Array.from(Array(4).keys());

export function CommunityPage() {
  const [value, setValue] = useState("1");
  return (
    <div className="community_page">
      <div className="community_frame">
        <Container sx={{ mt: "50px", mb: "50px" }}>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <Stack
              className="community_all_frame"
              inputMode={"text"}
              style={{ border: "1px solid #fff" }}
            >
              <TabContext value={value}>
                <Box className="article_tabs">
                  <Box
                    className="community_table"
                    sx={{ borderBottom: 1, borderColor: "divider" }}
                  >
                    <TabList
                      aria-label="lab API tabs example"
                      style={{ borderColor: "blue" }}
                    >
                      <Tab label="New Books" value="1"></Tab>
                      <Tab label="BestSellers" value="2"></Tab>
                      <Tab label="TopCollecions" value="3"></Tab>
                    </TabList>
                  </Box>
                </Box>

                <Stack className="article_main" overflow={"hidden"}>
                  <TabPanel value="1">
                    <Stack
                      className={"article_wrapper"}
                      style={{ flexDirection: "row", marginRight: "50px" }}
                    >
                      <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                          avatar={
                            <Avatar
                              sx={{ bgcolor: red[500] }}
                              aria-label="recipe"
                            >
                              J
                            </Avatar>
                          }
                          title="I am not Your Negro"
                          subheader="September 14, 2016"
                        />
                        <CardMedia
                          component="img"
                          height="294"
                          image="/book/negro.png"
                          alt="James Boldwin"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                          </IconButton>
                          <IconButton aria-label="share">
                            <ShareIcon />
                          </IconButton>
                        </CardActions>
                        <Collapse timeout="auto" unmountOnExit>
                        </Collapse>
                      </Card>

                      <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                          avatar={
                            <Avatar
                              sx={{ bgcolor: red[500] }}
                              aria-label="recipe"
                            >
                              J
                            </Avatar>
                          }
                          title="I am not Your Negro"
                          subheader="September 14, 2016"
                        />
                        <CardMedia
                          component="img"
                          height="294"
                          image="/book/negro.png"
                          alt="James Boldwin"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                          </IconButton>
                          <IconButton aria-label="share">
                            <ShareIcon />
                          </IconButton>
                        </CardActions>
                        <Collapse timeout="auto" unmountOnExit>
                        </Collapse>
                      </Card>

                      <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                          avatar={
                            <Avatar
                              sx={{ bgcolor: red[500] }}
                              aria-label="recipe"
                            >
                              J
                            </Avatar>
                          }
                          title="I am not Your Negro"
                          subheader="September 14, 2016"
                        />
                        <CardMedia
                          component="img"
                          height="294"
                          image="/book/negro.png"
                          alt="James Boldwin"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                          </IconButton>
                          <IconButton aria-label="share">
                            <ShareIcon />
                          </IconButton>
                        </CardActions>
                        <Collapse timeout="auto" unmountOnExit>
                        </Collapse>
                      </Card>

                      <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                          avatar={
                            <Avatar
                              sx={{ bgcolor: red[500] }}
                              aria-label="recipe"
                            >
                              J
                            </Avatar>
                          }
                          title="I am not Your Negro"
                          subheader="September 14, 2016"
                        />
                        <CardMedia
                          component="img"
                          height="294"
                          image="/book/negro.png"
                          alt="James Boldwin"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                          </IconButton>
                          <IconButton aria-label="share">
                            <ShareIcon />
                          </IconButton>
                        </CardActions>
                        <Collapse timeout="auto" unmountOnExit>
                        </Collapse>
                      </Card>

                      <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                          avatar={
                            <Avatar
                              sx={{ bgcolor: red[500] }}
                              aria-label="recipe"
                            >
                              J
                            </Avatar>
                          }
                          title="I am not Your Negro"
                          subheader="September 14, 2016"
                        />
                        <CardMedia
                          component="img"
                          height="294"
                          image="/book/negro.png"
                          alt="James Boldwin"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                          </IconButton>
                          <IconButton aria-label="share">
                            <ShareIcon />
                          </IconButton>
                        </CardActions>
                        <Collapse timeout="auto" unmountOnExit>
                        </Collapse>
                      </Card>

                      <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                          avatar={
                            <Avatar
                              sx={{ bgcolor: red[500] }}
                              aria-label="recipe"
                            >
                              J
                            </Avatar>
                          }
                          title="I am not Your Negro"
                          subheader="September 14, 2016"
                        />
                        <CardMedia
                          component="img"
                          height="294"
                          image="/book/negro.png"
                          alt="James Boldwin"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                          </IconButton>
                          <IconButton aria-label="share">
                            <ShareIcon />
                          </IconButton>
                        </CardActions>
                        <Collapse timeout="auto" unmountOnExit>
                        </Collapse>
                      </Card>
                    </Stack>
                  </TabPanel>
                </Stack>

                <Box className="article_bott">
                  <Pagination
                  />
                </Box>
              </TabContext>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
