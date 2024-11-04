import { BoArticle } from "./boArticle";
import { Order } from "./order";
import { Product } from "./product";
import { Book } from "./user";

/** REACT APP STATE */
export interface AppRootState {
    homePage: HomePageState;
    bookPage: BookPageState;
    ordersPage: OrdersPageState;
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

/** ORDERS PAGE */
export interface OrdersPageState {
    pausedOrders: Order[];
    processOrders: Order[];
    finishedOrders: Order[];
}