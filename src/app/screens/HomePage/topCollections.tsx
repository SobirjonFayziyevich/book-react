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

export function TopCollections() {
  return (
    <div className="topcollection_frame">
      <Container>
        <Stack
         className="top_collection_main_box"
         >
       <Stack
          sx={{ mt: "10px" }}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Box className={"category_title"}>TopCollections</Box>

          <Stack sx={{ mt: "43px" }} flexDirection={"row"} m={"16px"}>
            <CssVarsProvider>
              <Card
                variant="plain"
                sx={{
                  minWidth: 320,
                  minHeight: 483,
                  mr:"37px",
                  bgcolor: "initial",
                  p: 0,
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <AspectRatio ratio="4/3">
                    <figure>
                      <img
                        src="book/sheri.jpeg"
                        loading="lazy"
                        alt="Yosemite by Casey Horner"
                      />
                    </figure>
                  </AspectRatio>
                  <CardCover
                    className="gradient-cover"
                    sx={{
                      "&:hover, &:focus-within": {
                        opacity: 1,
                      },
                      opacity: 0,
                      transition: "0.1s ease-in",
                      background:
                        "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                    }}
                  >
                    {/* The first box acts as a container that inherits style from the CardCover */}
                    <div>
                      <Box
                        sx={{
                          p: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          flexGrow: 1,
                          alignSelf: "flex-end",
                        }}
                      >
                        <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                          <Link
                            href="#dribbble-shot"
                            overlay
                            underline="none"
                            sx={{
                              color: "#fff",
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              display: "block",
                            }}
                          >
                            The Hart
                          </Link>
                        </Typography>
                        <IconButton
                          size="sm"
                          variant="solid"
                          color="neutral"
                          sx={{ ml: "auto", bgcolor: "rgba(0 0 0 / 0.2)" }}
                        >
                          <CreateNewFolder />
                        </IconButton>
                        <IconButton
                          size="sm"
                          variant="solid"
                          color="neutral"
                          sx={{ bgcolor: "rgba(0 0 0 / 0.2)" }}
                        >
                          <Favorite />
                        </IconButton>
                      </Box>
                    </div>
                  </CardCover>
                </Box>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <Avatar
                    src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                    size="sm"
                    sx={{ "--Avatar-size": "1.5rem" }}
                  />
                  <Typography sx={{ fontSize: "sm", fontWeight: "md" }}>
                    R.A.HART
                  </Typography>
                  <Chip
                    variant="outlined"
                    color="neutral"
                    size="sm"
                    sx={{
                      borderRadius: "sm",
                      py: 0.25,
                      px: 0.5,
                    }}
                  >
                    Featured
                  </Chip>
                  <Link
                    href="#dribbble-shot"
                    level="body-xs"
                    underline="none"
                    startDecorator={<Favorite />}
                    sx={{
                      fontWeight: "md",
                      ml: "auto",
                      color: "text.secondary",
                      "&:hover": { color: "danger.plainColor" },
                    }}
                  >
                    117
                  </Link>
                  <Link
                    href="#dribbble-shot"
                    level="body-xs"
                    underline="none"
                    startDecorator={<Visibility />}
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      "&:hover": { color: "primary.plainColor" },
                    }}
                  >
                    10.4k
                  </Link>
                </Box>
              </Card>
              <Card
                variant="plain"
                sx={{
                  minWidth: 320,
                  minHeight: 483,
                  mr:"37px",
                  bgcolor: "initial",
                  p: 0,
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <AspectRatio ratio="4/3">
                    <figure>
                      <img
                        src="book/harrypotter.jpeg"
                        loading="lazy"
                        alt="Yosemite by Casey Horner"
                      />
                    </figure>
                  </AspectRatio>
                  <CardCover
                    className="gradient-cover"
                    sx={{
                      "&:hover, &:focus-within": {
                        opacity: 1,
                      },
                      opacity: 0,
                      transition: "0.1s ease-in",
                      background:
                        "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                    }}
                  >
                    {/* The first box acts as a container that inherits style from the CardCover */}
                    <div>
                      <Box
                        sx={{
                          p: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          flexGrow: 1,
                          alignSelf: "flex-end",
                        }}
                      >
                        <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                          <Link
                            href="#dribbble-shot"
                            overlay
                            underline="none"
                            sx={{
                              color: "#fff",
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              display: "block",
                            }}
                          >
                            Harry Potter
                          </Link>
                        </Typography>
                        <IconButton
                          size="sm"
                          variant="solid"
                          color="neutral"
                          sx={{ ml: "auto", bgcolor: "rgba(0 0 0 / 0.2)" }}
                        >
                          <CreateNewFolder />
                        </IconButton>
                        <IconButton
                          size="sm"
                          variant="solid"
                          color="neutral"
                          sx={{ bgcolor: "rgba(0 0 0 / 0.2)" }}
                        >
                          <Favorite />
                        </IconButton>
                      </Box>
                    </div>
                  </CardCover>
                </Box>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <Avatar
                    // src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                    size="sm"
                    sx={{ "--Avatar-size": "1.5rem" }}
                  />
                  <Typography sx={{ fontSize: "sm", fontWeight: "md" }}>
                  J.K.ROWLING
                  </Typography>
                  <Chip
                    variant="outlined"
                    color="neutral"
                    size="sm"
                    sx={{
                      borderRadius: "sm",
                      py: 0.25,
                      px: 0.5,
                    }}
                  >
                    Featured
                  </Chip>
                  <Link
                    href="#dribbble-shot"
                    level="body-xs"
                    underline="none"
                    startDecorator={<Favorite />}
                    sx={{
                      fontWeight: "md",
                      ml: "auto",
                      color: "text.secondary",
                      "&:hover": { color: "danger.plainColor" },
                    }}
                  >
                    117
                  </Link>
                  <Link
                    href="#dribbble-shot"
                    level="body-xs"
                    underline="none"
                    startDecorator={<Visibility />}
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      "&:hover": { color: "primary.plainColor" },
                    }}
                  >
                    10.4k
                  </Link>
                </Box>
              </Card>
              <Card
                variant="plain"
                sx={{
                  minWidth: 320,
                  minHeight: 483,
                  mr:"37px",
                  bgcolor: "initial",
                  p: 0,
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <AspectRatio ratio="4/3">
                    <figure>
                      <img
                        src="book/thriller.jpeg"
                        loading="lazy"
                        alt="Yosemite by Casey Horner"
                      />
                    </figure>
                  </AspectRatio>
                  <CardCover
                    className="gradient-cover"
                    sx={{
                      "&:hover, &:focus-within": {
                        opacity: 1,
                      },
                      opacity: 0,
                      transition: "0.1s ease-in",
                      background:
                        "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                    }}
                  >
                    {/* The first box acts as a container that inherits style from the CardCover */}
                    <div>
                      <Box
                        sx={{
                          p: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          flexGrow: 1,
                          alignSelf: "flex-end",
                        }}
                      >
                        <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                          <Link
                            href="#dribbble-shot"
                            overlay
                            underline="none"
                            sx={{
                              color: "#fff",
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              display: "block",
                            }}
                          >
                            Then She Was Gone
                          </Link>
                        </Typography>
                        <IconButton
                          size="sm"
                          variant="solid"
                          color="neutral"
                          sx={{ ml: "auto", bgcolor: "rgba(0 0 0 / 0.2)" }}
                        >
                          <CreateNewFolder />
                        </IconButton>
                        <IconButton
                          size="sm"
                          variant="solid"
                          color="neutral"
                          sx={{ bgcolor: "rgba(0 0 0 / 0.2)" }}
                        >
                          <Favorite />
                        </IconButton>
                      </Box>
                    </div>
                  </CardCover>
                </Box>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <Avatar
                    // src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                    size="sm"
                    sx={{ "--Avatar-size": "1.5rem" }}
                  />
                  <Typography sx={{ fontSize: "sm", fontWeight: "md" }}>
                    L.JEWELL
                  </Typography>
                  <Chip
                    variant="outlined"
                    color="neutral"
                    size="sm"
                    sx={{
                      borderRadius: "sm",
                      py: 0.25,
                      px: 0.5,
                    }}
                  >
                    Featured
                  </Chip>
                  <Link
                    href="#dribbble-shot"
                    level="body-xs"
                    underline="none"
                    startDecorator={<Favorite />}
                    sx={{
                      fontWeight: "md",
                      ml: "auto",
                      color: "text.secondary",
                      "&:hover": { color: "danger.plainColor" },
                    }}
                  >
                    117
                  </Link>
                  <Link
                    href="#dribbble-shot"
                    level="body-xs"
                    underline="none"
                    startDecorator={<Visibility />}
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      "&:hover": { color: "primary.plainColor" },
                    }}
                  >
                    10.4k
                  </Link>
                </Box>
              </Card>
              <Card
                variant="plain"
                sx={{
                  minWidth: 320,
                  minHeight: 483,
                  mr:"37px",
                  bgcolor: "initial",
                  p: 0,
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <AspectRatio ratio="4/3">
                    <figure>
                      <img
                        src="book/ajdar.jpeg"
                        loading="lazy"
                        alt="Yosemite by Casey Horner"
                      />
                    </figure>
                  </AspectRatio>
                  <CardCover
                    className="gradient-cover"
                    sx={{
                      "&:hover, &:focus-within": {
                        opacity: 1,
                      },
                      opacity: 0,
                      transition: "0.1s ease-in",
                      background:
                        "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                    }}
                  >
                    {/* The first box acts as a container that inherits style from the CardCover */}
                    <div>
                      <Box
                        sx={{
                          p: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          flexGrow: 1,
                          alignSelf: "flex-end",
                        }}
                      >
                        <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                          <Link
                            href="#dribbble-shot"
                            overlay
                            underline="none"
                            sx={{
                              color: "#fff",
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              display: "block",
                            }}
                          >
                            Harry Potter
                          </Link>
                        </Typography>
                        <IconButton
                          size="sm"
                          variant="solid"
                          color="neutral"
                          sx={{ ml: "auto", bgcolor: "rgba(0 0 0 / 0.2)" }}
                        >
                          <CreateNewFolder />
                        </IconButton>
                        <IconButton
                          size="sm"
                          variant="solid"
                          color="neutral"
                          sx={{ bgcolor: "rgba(0 0 0 / 0.2)" }}
                        >
                          <Favorite />
                        </IconButton>
                      </Box>
                    </div>
                  </CardCover>
                </Box>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <Avatar
                    // src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                    size="sm"
                    sx={{ "--Avatar-size": "1.5rem" }}
                  />
                  <Typography sx={{ fontSize: "sm", fontWeight: "md" }}>
                    J.K.ROWLING
                  </Typography>
                  <Chip
                    variant="outlined"
                    color="neutral"
                    size="sm"
                    sx={{
                      borderRadius: "sm",
                      py: 0.25,
                      px: 0.5,
                    }}
                  >
                    Featured
                  </Chip>
                  <Link
                    href="#dribbble-shot"
                    level="body-xs"
                    underline="none"
                    startDecorator={<Favorite />}
                    sx={{
                      fontWeight: "md",
                      ml: "auto",
                      color: "text.secondary",
                      "&:hover": { color: "danger.plainColor" },
                    }}
                  >
                    117
                  </Link>
                  <Link
                    href="#dribbble-shot"
                    level="body-xs"
                    underline="none"
                    startDecorator={<Visibility />}
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      "&:hover": { color: "primary.plainColor" },
                    }}
                  >
                    10.4k
                  </Link>
                </Box>
              </Card>
              <Card
                variant="plain"
                sx={{
                  minWidth: 320,
                  minHeight: 483,
                  mr:"37px",
                  mb:"20px",
                  bgcolor: "initial",
                  p: 0,
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <AspectRatio ratio="4/3">
                    <figure>
                      <img
                        src="book/book.jpeg"
                        loading="lazy"
                        alt="Yosemite by Casey Horner"
                      />
                    </figure>
                  </AspectRatio>
                  <CardCover
                    className="gradient-cover"
                    sx={{
                      "&:hover, &:focus-within": {
                        opacity: 1,
                      },
                      opacity: 0,
                      transition: "0.1s ease-in",
                      background:
                        "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                    }}
                  >
                    {/* The first box acts as a container that inherits style from the CardCover */}
                    <div>
                      <Box
                        sx={{
                          p: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          flexGrow: 1,
                          alignSelf: "flex-end",
                        }}
                      >
                        <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                          <Link
                            href="#dribbble-shot"
                            overlay
                            underline="none"
                            sx={{
                              color: "#fff",
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              display: "block",
                            }}
                          >
                            Summary And Analysis
                          </Link>
                        </Typography>
                        <IconButton
                          size="sm"
                          variant="solid"
                          color="neutral"
                          sx={{ ml: "auto", bgcolor: "rgba(0 0 0 / 0.2)" }}
                        >
                          <CreateNewFolder />
                        </IconButton>
                        <IconButton
                          size="sm"
                          variant="solid"
                          color="neutral"
                          sx={{ bgcolor: "rgba(0 0 0 / 0.2)" }}
                        >
                          <Favorite />
                        </IconButton>
                      </Box>
                    </div>
                  </CardCover>
                </Box>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <Avatar
                    // src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                    size="sm"
                    sx={{ "--Avatar-size": "1.5rem" }}
                  />
                  <Typography sx={{ fontSize: "sm", fontWeight: "md" }}>
                    MARJORIE.J
                  </Typography>
                  <Chip
                    variant="outlined"
                    color="neutral"
                    size="sm"
                    sx={{
                      borderRadius: "sm",
                      py: 0.25,
                      px: 0.5,
                    }}
                  >
                    Featured
                  </Chip>
                  <Link
                    href="#dribbble-shot"
                    level="body-xs"
                    underline="none"
                    startDecorator={<Favorite />}
                    sx={{
                      fontWeight: "md",
                      ml: "auto",
                      color: "text.secondary",
                      "&:hover": { color: "danger.plainColor" },
                    }}
                  >
                    117
                  </Link>
                  <Link
                    href="#dribbble-shot"
                    level="body-xs"
                    underline="none"
                    startDecorator={<Visibility />}
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      "&:hover": { color: "primary.plainColor" },
                    }}
                  >
                    10.4k
                  </Link>
                </Box>
              </Card>
            </CssVarsProvider>
          </Stack>
        </Stack>
        </Stack>
      </Container>
    </div>
  );
}
