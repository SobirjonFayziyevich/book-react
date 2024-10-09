import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";

const selectHomePage = (state: AppRootState) => state.homePage; // stateni homepagega tegishli malumotlarni olib bersin.
export const retrieveTopCollections = createSelector(
  selectHomePage, 
  (HomePage) => HomePage.topCollections
);

export const retrieveBestSellers = createSelector(
  selectHomePage, 
  (HomePage) => HomePage.bestSellers
);

export const retrieveTrendProducts = createSelector(
  selectHomePage,
  (HomePage) => HomePage.trendProducts
);

export const retrieveBestBoArticles = createSelector(
  selectHomePage, 
  (HomePage) => HomePage.bestBoArticles
);

export const retrieveTrendBoArticles = createSelector(
  selectHomePage, 
  (HomePage) => HomePage.trendBoArticles
);

export const retrieveNewsBoArticles = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newsBoArticles
);