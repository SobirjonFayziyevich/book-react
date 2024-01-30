import { CssVarsProvider } from "@mui/joy";
import { Box, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

export function BestSellers() {
  return (
    <div className="best_seller_frame">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="seller_frame_box">BestSellers</Box>
        </Stack>
        <CssVarsProvider>
          <Stack sx={{ flexDirection: "row", margin: "20px" }}>
            <Card
              size="lg"
              variant="plain"
              orientation="horizontal"
              sx={{
                textAlign: "center",
                maxWidth: "100%",
                width: 500,
                // to make the demo resizable
                resize: "horizontal",
                overflow: "auto",
                margin: "15px",
                flexDirection: "row",
              }}
            >
              <CardOverflow
                variant="solid"
                color="primary"
                sx={{
                  flex: "0 0 200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  px: "var(--Card-padding)",
                }}
              >
                <Typography fontSize="xl4" fontWeight="xl" textColor="#fff">
                  Thriller <p>Author:</p>
                </Typography>
                <Typography textColor="primary.200">J.K.Rowling</Typography>
              </CardOverflow>
              <CardContent sx={{ gap: 1.5, minWidth: 200 }}>
                <AspectRatio ratio="19/8" objectFit="contain" variant="plain">
                  <img alt="" src="book/harrypotter.jpeg" />
                </AspectRatio>
                <CardContent>
                  <Typography level="title-lg">Harry Potter</Typography>
                  <Typography fontSize="sm" sx={{ mt: 0.5 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </Typography>
                </CardContent>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    "--variant-borderWidth": "2px",
                    borderRadius: 40,
                    borderColor: "primary.500",
                    mx: "auto",
                  }}
                >
                  55$
                </Button>
              </CardContent>
            </Card>

            <Card
              size="lg"
              variant="plain"
              orientation="horizontal"
              sx={{
                textAlign: "center",
                maxWidth: "100%",
                width: 500,
                // to make the demo resizable
                resize: "horizontal",
                overflow: "auto",
                margin: "15px",
                flexDirection: "row",
              }}
            >
              <CardOverflow
                variant="solid"
                color="primary"
                sx={{
                  flex: "0 0 200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  px: "var(--Card-padding)",
                }}
              >
                <Typography fontSize="xl4" fontWeight="xl" textColor="#fff">
                  Love Poems <p>Author:</p>
                </Typography>
                <Typography textColor="primary.200">Sh.Kameroon</Typography>
              </CardOverflow>
              <CardContent sx={{ gap: 1.5, minWidth: 200 }}>
                <AspectRatio ratio="19/8" objectFit="contain" variant="plain">
                  <img alt="" src="book/sher.jpeg" />
                </AspectRatio>
                <CardContent>
                  <Typography level="title-lg">Poetry Boo</Typography>
                  <Typography fontSize="sm" sx={{ mt: 0.5 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </Typography>
                </CardContent>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    "--variant-borderWidth": "2px",
                    borderRadius: 40,
                    borderColor: "primary.500",
                    mx: "auto",
                  }}
                >
                  15$
                </Button>
              </CardContent>
            </Card>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"flex-end"}
            style={{
              width: "100%",
              marginBottom: "16px",
            }}
          >
            <Button
              style={{ background: "#1976d2", color: "#ffffff"}}
            >
              See All
            </Button>
          </Stack>
        </CssVarsProvider>
      </Container>
    </div>
  );
}
