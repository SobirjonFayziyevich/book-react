import React, { useEffect } from "react";
import { Statistics } from "./statistics";
import { TopCollections } from "./topCollections";
import { BestSellers } from "./bestSellers";
import { Recommendation } from "./recommendation";
import { Advertisements } from "./advertisements";
import { Comment } from "./comment";
import { BestBook } from "./bestBook";
import { Home } from "./home";
import { Events } from "./events";
import "../../../css/home.css";
import "../../../css/navbar.css";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setTopCollections } from "../../screens/HomePage/slice";
import { retrieveTopCollections } from "../../screens/HomePage/selector";
import { Book } from "../../../types/user";
import BookApiService from "../../apiServices/bookApiService";

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  //actiondispatchni hosil qilayopman va dispatchni interfacen kursatayopmamn
  setTopCollections: (data: Book[]) => dispatch(setTopCollections(data)), // setTopCollectiong adata berayopman, datani type book array buladi.va slicedagi setTopCollectiong yuborayopman.
});

// /** REDUX SELECTOR */
// const topCollectionRetriever = createSelector(
//   retrieveTopCollections,
//   (topCollections) => ({
//     topCollections,
//   })
// );

export function HomePage() {

      /** INITIALIZATION */
// const {setTopCollections} = actionDispatch(useDispatch()); //HomePage slicedan setTopCollectionnni chaqirib oldim.
// const {topCollections} = useSelector(topCollectionRetriever) // useSelectordagi topCollectionRetrieverdan topCollectionsni qabul qilib olayopman.


  // useEffect(() => {
  //   //backend data request=> data;
  //   const bookService = new BookApiService();
  //     setTopCollections([]);
  // }, []);

  return (
    <div className="homepage">
      <Home />
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
function data(data: any) {
    throw new Error("Function not implemented.");
}

