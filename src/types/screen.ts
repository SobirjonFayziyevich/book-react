import { BoArticle } from "./boArticle";
import { Product } from "./product";
import { Book } from "./user";

/** REACT APP STATE */
export interface AppRootState {
    homePage: HomePageState;
}


/** HOMEPAGE */
export interface HomePageState {
    topCollections: Book[];  
   bestSellers: Book[];
   trendProducts: Product[];
   bestBoArticles: BoArticle[];
   trendBoArticles: BoArticle[];
   newsBoArticles: BoArticle[]; 
}