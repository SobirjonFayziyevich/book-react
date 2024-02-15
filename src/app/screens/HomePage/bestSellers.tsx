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
// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveBestSellers } from "../../screens/HomePage/selector";
import { Book } from "../../../types/user";
import { serviceApi } from "../../../lib/config";

// /** REDUX SELECTOR */
const bestSellerRetriever = createSelector(
  retrieveBestSellers,
  (bestSellers) => ({
    bestSellers,
  })
);

export function BestSellers() {
  /** INITIALIZATIONS */
  const { bestSellers } = useSelector(bestSellerRetriever);
  console.log("bestSellers:::", bestSellers);
  return (
    <div className="best_seller_frame">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="seller_frame_box">BestSellers</Box>
        </Stack>

        {bestSellers.map((ele: Book) => {
          const image_path = `${serviceApi}/${ele.mb_image}`;
          console.log("ele::::", ele);
          return (
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
                      {ele.mb_nick} <p>Author:</p>
                    </Typography>
                    <Typography textColor="primary.200">{ele.mb_status}</Typography>
                  </CardOverflow>
                  <CardContent sx={{ gap: 1.5, minWidth: 200 }}>
                    <AspectRatio
                      ratio="19/8"
                      objectFit="contain"
                      variant="plain"
                    >
                      <img alt="" src={image_path} />
                    </AspectRatio>
                    <CardContent>
                      <Typography level="title-lg">{ele.mb_nick}</Typography>
                      <Typography fontSize="sm" sx={{ mt: 0.5 }}>
                        {ele.mb_description}
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
                      {ele.mb_point}
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
                <Button style={{ background: "#1976d2", color: "#ffffff" }}>
                  See All
                </Button>
              </Stack>
            </CssVarsProvider>
          );
        })}
      </Container>
    </div>
  );
}
