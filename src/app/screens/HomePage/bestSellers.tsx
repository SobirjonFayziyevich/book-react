import React, { useRef } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import { AspectRatio, CardOverflow, IconButton, Link } from "@mui/joy";
import { Favorite, Visibility } from "@mui/icons-material";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";


// REDUX tegishli bulgan importlar.
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
 import { retrieveBestSellers } from "../../screens/HomePage/selector";
import { Book } from "../../../types/user";
import { serverApi } from "../../../lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { useHistory } from "react-router-dom";
import { verifiedMemberData } from "../../apiServices/verify";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiService";



/** REDUX SELECTOR */
const bestSellerRetriever = createSelector(
  retrieveBestSellers,
  (bestSellers) => ({
    bestSellers,
  })
);

export function BestSellers() {
  /** INITIALIZATION */
  const history = useHistory();
  const { bestSellers } = useSelector(bestSellerRetriever); //useSelectorga topRestaurantRetrieverni kiritib undan topRestaurantni qabul qilib olayopman.
  const refs: any = useRef([]);

/**HANDLERS */
const chosenBookHandler = (id: string) => {
  history.push(`/book/book/${id}`); // historyni push qilayopman pushga locationni kiritib olgan holatda.
};

 /** saw all Books section */
const goBookHandler = () => history.push('/book');
  const targetLikeBest = async (e: any, id: string) => {
    try {
      assert.ok(verifiedMemberData, Definer.auth_err1);
      const memberService = new MemberApiService();
      const like_result: any = await memberService.memberLikeTarget({
        like_ref_id: id,
        group_type: "member",
      });
      assert.ok(like_result, Definer.general_err1);

      if (like_result.like_status > 0) {
        // like resultni icidan statusni check qilayopman va > 0 bu like bosildi degani
        e.target.style.fill = "red";
        refs.current[like_result.like_ref_id].innerHTML++; //likelar sonni modify qildim
      } else {
        e.target.style.fill = "white";
        refs.current[like_result.like_ref_id].innerHTML--;
      }
      await sweetTopSmallSuccessAlert("success", 700, false);
    } catch (err: any) {
      console.log("targetLikeBest, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div className="best_seller_frame">
      <Container sx={{ paddingTop: "25px" }}>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">The bestselling collection</Box>

          
          <Stack
            sx={{ mt: "43px" }}
            flexDirection={"row"}
            alignItems={"center"}
          >
          {bestSellers.map((ele: Book) => {
              const image_path = `${serverApi}/${ele.mb_image}`;
              return (
                <CssVarsProvider>
                  <Card
                    onClick={() => chosenBookHandler(ele._id)}
                    variant="outlined"
                    sx={{
                      minHeight: 483,
                      minWidth: 320,
                      mr: "35px",
                      cursor: "pointer",
                    }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio="1">
                        <img src={image_path} alt="" />
                      </AspectRatio>

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
                          bottom: 1,
                          transform: "translateY(50%)",
                          color: "rgba(0,0,0,.4)",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Favorite
                          onClick={(e) => targetLikeBest(e, ele._id)}
                          style={{
                            fill:
                              ele?.me_liked && ele?.me_liked[0]?.my_favorite
                                ? "red"
                                : "white",
                          }}
                        />
                      </IconButton>
                    </CardOverflow>
                    <Typography level="h2" sx={{ fontSize: "md", mt: 0.1 }}>
                      {ele.mb_nick}
                    </Typography>
                    <Typography level="body-sm" sx={{ mt: 0.5, mb: 0.1 }}>
                      <Link
                        href=""
                        startDecorator={<LocationOnRoundedIcon />}
                        textColor="neutral.700"
                      >
                        {ele.mb_address}
                      </Link>
                    </Typography>
                    <Typography level="body-sm" sx={{ mt: 0.5, mb: 0.1 }}>
                      <Link
                        href=""
                        startDecorator={<CallIcon />}
                        textColor="neutral.700"
                      >
                        {ele.mb_phone}
                      </Link>
                    </Typography>

                    <CardOverflow
                      variant="soft"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1.5,
                        py: 1.5,
                        px: "var(--Card-padding)",
                        borderTop: "1px solid",
                        borderColor: "neutral.outlinedBorder",
                        bgcolor: "background.level1",
                      }}
                    >
                      <Typography
                        level="body-sm"
                        sx={{
                          fontSize: "16px",
                          lineHeight: "1.5",
                          fontWeight: "md",
                          color: "black",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        {ele.mb_views}
                        <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                      </Typography>
                      <Box sx={{ width: 2, bgcolor: "divider" }} />
                      <Typography
                        level="body-sm"
                        sx={{
                          fontWeight: "md",
                          color: "black",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div
                          ref={(element) => (refs.current[ele._id] = element)} // like bosilgan payt success bulishimi taminlaydi
                        >
                          {ele.mb_likes}
                        </div>

                        <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                      </Typography>
                    </CardOverflow>
                  </Card>
                </CssVarsProvider>
              );
            })}
            ;
          </Stack>

          <Stack
            flexDirection={"row"}
            justifyContent={"flex-end"}
            style={{
              width: "100%",
              marginTop: "16px",
            }}
          >
            <Button
              style={{ background: "#1976d2", color: "#ffffff" }}
              onClick={goBookHandler}
            >
              see all
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

