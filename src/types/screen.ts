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
    targetBooks: Book[];    // kitoblar ruyxati 
    randomBooks: Book[];
    chosenBook: Book | null;  // kitoblar haqidagi malumotlarni joylashtirdim.
    targetProducts: Product[];
    chosenProduct: Product | null;
}