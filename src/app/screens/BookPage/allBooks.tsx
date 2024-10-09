import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  FormControlLabel,
  FormGroup,
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/joy/Typography";
import SearchIcon from "@mui/icons-material/Search";
import {
  AspectRatio,
  Card,
  CardOverflow,
  CssVarsProvider,
  IconButton,
  Link,
} from "@mui/joy";
import Button from "@mui/material/Button";

import { Favorite, Visibility } from "@mui/icons-material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Container } from "@mui/system";
import Slider, { sliderClasses } from "@mui/joy/Slider";
import Checkbox from "@mui/material/Checkbox";
import { Swiper, SwiperSlide } from "swiper/react";
import Marginer from "../../components/marginer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import BookApiService from "../../apiServices/bookApiService";
import { SearchObj } from "../../../types/others";
import { serverApi } from "../../../lib/config";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import { verifiedMemberData } from "../../apiServices/verify";
import MemberApiService from "../../apiServices/memberApiService";
import { useHistory } from "react-router-dom";


//REDUX
import { Book } from "../../../types/user";
import { setTargetBooks } from "../../screens/BookPage/slice";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { retrieveTargetBooks } from "../../screens/BookPage/selector";
import { useDispatch, useSelector } from "react-redux";

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setTargetBooks: (data: Book[]) => dispatch(setTargetBooks(data)),
});

//  REDUX SELECTOR */
const targetBooksRetriever = createSelector(
  retrieveTargetBooks,
  (targetBooks) => ({
    targetBooks,
  })
);

export function AllBooks(props: any) {
  /** INITIALIZATION */

 
  const refs: any = useRef([]);
  const history = useHistory();
  const { setTargetBooks } = actionDispatch(useDispatch());
  const { targetBooks } = useSelector(targetBooksRetriever);
  const [targetSearchObject, setTargetSearchObject] = useState<SearchObj>({
    page: 1,
    limit: 10,
    order: "mb_point",
  });
  

  useEffect(() => {
    const bookService = new BookApiService();
    bookService
      .getBookshop(targetSearchObject)
      .then((data) => setTargetBooks(data))
      .catch((err) => console.log(err));
  }, [targetSearchObject]);

  /** HANDLERS */

  const chosenBookHandler = (id: string) => {
    history.push(`/book/${id}`);
  };

  const searchHandler = (category: string) => {
    targetSearchObject.page = 1;
    targetSearchObject.order = category;
    setTargetSearchObject({ ...targetSearchObject });
  };

  const handlePaginationChange = (event: any, value: number) => {
    targetSearchObject.page = value;
    setTargetSearchObject({ ...targetSearchObject }); //
  };

  const targetLikeHandler = async (e: any, id: string) => {
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
      console.log("targetLikeHandler, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div className="all_book">
      <Container>
         <Stack flexDirection={"row"}>
          <Stack className={"fil_search_box"}>
            
            <Box
              className={"fil_box"}
              style={{ cursor: "pointer", marginLeft: "20px" }}
            >
              <div className="fil_box_name"> Sub Categories:</div>

              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  onClick={() => searchHandler("mb_point")}
                  label="History"
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  onClick={() => searchHandler("mb_views")}
                  label="Thriller"
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  onClick={() => searchHandler("mb_follow_cnt")}
                  label="Poetry"
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  onClick={() => searchHandler("mb_status")}
                  label="Children"
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  onClick={() => searchHandler("mb_likes")}
                  label="Detective"
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  onClick={() => searchHandler("createdAt")}
                  label="New"
                />
              </FormGroup>
            </Box>
            <CssVarsProvider>
              <Box
                className={"price_range"}
                style={{ cursor: "pointer", marginLeft: "20px" }}
              >
                Price Range:
                <Box sx={{ width: 200, marginTop: "20px", color: "black" }}>
                  <Slider
                    track={false}
                    defaultValue={[0, 100]}
                    getAriaLabel={() => "Amount"}
                    onClick={() => searchHandler("mb_price")}
                    // getAriaValueText={valueText}
                    marks={[
                      {
                        value: 0,
                        label: "0$",
                      },
                      {
                        value: 100,
                        label: "100$",
                      },
                    ]}
                    valueLabelDisplay="on"
                    sx={{
                      // Need both of the selectors to make it works on the server-side and client-side
                      [`& [style*="left:0%"], & [style*="left: 0%"]`]: {
                        [`&.${sliderClasses.markLabel}`]: {
                          transform: "none",
                        },
                        [`& .${sliderClasses.valueLabel}`]: {
                          left: "calc(var(--Slider-thumbSize) / 2)",
                          borderBottomLeftRadius: 0,
                          "&::before": {
                            left: 0,
                            transform: "translateY(100%)",
                            borderLeftColor: "currentColor",
                          },
                        },
                      },
                      [`& [style*="left:100%"], & [style*="left: 100%"]`]: {
                        [`&.${sliderClasses.markLabel}`]: {
                          transform: "translateX(-100%)",
                        },
                        [`& .${sliderClasses.valueLabel}`]: {
                          right: "calc(var(--Slider-thumbSize) / 2)",
                          borderBottomRightRadius: 0,
                          "&::before": {
                            left: "initial",
                            right: 0,
                            transform: "translateY(100%)",
                            borderRightColor: "currentColor",
                          },
                        },
                      },
                    }}
                  />
                </Box>
              </Box>
            </CssVarsProvider>

            <Box className={"search_big_box"} style={{ marginBottom: "70px" }}>
              <form className={"search_form"} action={""} method={""}>
                <input
                  type={"search"}
                  className={"searchInput"}
                  name={"resSearch"}
                  placeholder={"Find books here..."}
                />
                <Button
                  className={"button_search"}
                  variant="contained"
                  endIcon={<SearchIcon />}
                   onClick={() => searchHandler('mb_point')}
                >
                  Find
                </Button>
              </form>
            </Box>
          </Stack>

          <Stack className={"all_book_box"}>
            <CssVarsProvider>
              {targetBooks.map((ele: Book) => {
                const image_path = `${serverApi}/${ele.mb_image}`;
                return (
                  <Card
                    onClick={() => chosenBookHandler(ele._id)}
                    variant="outlined"
                    sx={{
                      minHeight: 410,
                      minWidth: 290,
                      mx: "17px",
                      my: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio="1">
                        <img src={image_path} alt="" />
                      </AspectRatio>
                      <IconButton
                        aria-label="Like minimal photography"
                        size="md"
                        variant="solid"
                        color="neutral"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                          borderRadius: "50%",
                          right: "1rem",
                          marginBottom: "50px",
                          bottom: 0,
                          transform: "translateY(50%)",
                          color: "rgba(0,0,0, .04)",
                        }}
                      >
                        <Favorite
                          onClick={(e) => targetLikeHandler(e, ele._id)}
                          style={{
                            fill:
                              ele?.me_liked && ele?.me_liked[0]?.my_favorite
                                ? "red"
                                : "white",
                          }}
                        />
                      </IconButton>
                      <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                        {ele.mb_nick}
                      </Typography>
                      <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                        <Link
                          href=""
                          startDecorator={<LocationOnRoundedIcon />}
                          textColor="black"
                        >
                          {ele.mb_address}
                        </Link>
                      </Typography>

                      <Typography level="body-sm" sx={{ mt: 0.5, mb: 0.5 }}>
                        <Link
                          href=""
                          startDecorator={<CallIcon />}
                          textColor="black"
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
                          bgcolor: "background.level1",
                        }}
                      >
                        <Typography
                          level="body-sm"
                          sx={{
                            fontWeight: "md",
                            color: "text.secondary",
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
                          level="body-sm"
                          sx={{
                            fontWeight: "md",
                            color: "text.secondary",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          <div
                            ref={(element) => (refs.current[ele._id] = element)}
                          >
                            {""}
                            {ele.mb_likes}
                          </div>

                          <FavoriteIcon
                            sx={{ fontSize: 20, marginLeft: "5px" }}
                          />
                        </Typography>
                      </CardOverflow>
                    </CardOverflow>
                  </Card>
                );
              })}
            </CssVarsProvider>
          </Stack>
        </Stack>

      </Container>

      <Stack className={"bottom_box"}>
        <Pagination
          count={targetSearchObject.page >= 3 ? targetSearchObject.page + 1 : 3}
          page={targetSearchObject.page}
          renderItem={(item) => (
            <PaginationItem
              components={{
                previous: ArrowBackIcon,
                next: ArrowForwardIcon,
              }}
              sx={{ color: "blue" }}
              {...item}
            />
          )}
          onChange={handlePaginationChange}
        />
      </Stack>

      <Box className="picture_box">
        <div className="picture_main">
          <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2024/01/30/28606_BB_B_OMP_02-01_b.jpg" />
        </div>
      </Box>
    </div>
  );
}


