import { BoArticle } from "./boArticle";
import { Product } from "./product";
import { Book } from "./user";

/** REACT APP STATE */
export interface AppRootState {
    homePage: HomePageState;
    bookPage: BookPageState;
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

/** BOOK PAGE */


export interface BookPageState {
    randomBooks: Book[];
    targetBooks: Book[];
    chosenBook: Book | null;
    targetProducts: Product[];
    chosenProduct: Product | null;
}