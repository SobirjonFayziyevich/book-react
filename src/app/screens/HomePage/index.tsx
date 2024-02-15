import React, { useEffect } from "react";
import { Statistics } from "./statistics";
import { TopCollections } from "./topCollections";
import { BestSellers } from "./bestSellers";
import { Recommendation } from "./recommendation";
import { Advertisements } from "./advertisements";
import { Comment } from "./comment";
import { BestBook } from "./bestBook";
import { Events } from "./events";
import "../../../css/home.css";
import "../../../css/navbar.css";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import {
  setBestSellers,
  setTopCollections,
} from "../../screens/HomePage/slice";
import { Book } from "../../../types/user";
import BookApiService from "../../apiServices/bookApiService";


/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setTopCollections: (data: Book[]) => dispatch(setTopCollections(data)), // setTopCollectiong adata berayopman, datani type book array buladi.va slicedagi setTopCollectiong yuborayopman.
  setBestSellers: (data: Book[]) => dispatch(setBestSellers(data)),
});

export function HomePage() {
  /** INITIALIZATION */
  const { setTopCollections ,setBestSellers } = actionDispatch(useDispatch()); //HomePage slicedan setTopCollectionnni chaqirib oldim.

  useEffect(() => {
    //backend data request=> data;
    const bookService = new BookApiService();
    bookService
      .getTopCollections()
      .then((data) => {
        setTopCollections(data);
      })
      .catch((err) => console.log(err));
    bookService 
      .getBookshop({ page: 2, limit: 1, order: "mb_point" })
      .then((data) => {
        // console.log("best", data);
        setBestSellers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="homepage">
      <TopCollections />
      <Statistics />
      <BestSellers />
      <BestBook />
      <Events />
      <Advertisements />
      <Recommendation />
      <Comment />
    </div>
  );
}
