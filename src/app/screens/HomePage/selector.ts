import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";

const selectHomePage = (state: AppRootState) => state.homePage; // stateni homepagega tegishli malumotlarni olib bersin.
export const retrieveTopCollections = createSelector(
  selectHomePage, // menga homepageni olib bersin
  (HomePage) => HomePage.topCollections
);

export const retrieveBestSellers = createSelector(
  selectHomePage, // menga homepageni olib bersin
  (HomePage) => HomePage.bestSellers
);

export const retrieveTrendProducts = createSelector(
  selectHomePage, // menga homepageni olib bersin
  (HomePage) => HomePage.trendProducts
);

export const retrieveBestBoArticles = createSelector(
  selectHomePage, // menga homepageni olib bersin
  (HomePage) => HomePage.bestBoArticles
);

export const retrieveTrendBoArticles = createSelector(
  selectHomePage, // menga homepageni olib bersin
  (HomePage) => HomePage.trendBoArticles
);

export const retrieveNewsBoArticles = createSelector(
  selectHomePage, // menga homepageni olib bersin
  (HomePage) => HomePage.newsBoArticles
);
