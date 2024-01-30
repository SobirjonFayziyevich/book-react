import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../types/screen";

const initialState: HomePageState = { //initialState=> boshlang'ich state degani.

    topCollections: [],  
    bestSellers: [],
    trendProducts: [],
    bestBoArticles: [],
    trendBoArticles: [],
    newsBoArticles: [],

};

const HomePageSlice = createSlice({
    name: 'homePage',
    initialState, // initialState yuqoridagidek bulishi kerak 
    reducers: { //  malumotni borib Redux Store ga yozadigan actionlar buladi.
        setTopCollections: (state, action) => { //setTopRestaurant faqat topRestaurantni qiymatini uzgartiradi.
           state.topCollections = action.payload  //InitialStateni olib beradi. actiondan kelayotgan datani payload orqali olaman.
        },
        setBestSellers: (state, action) => { 
           state.bestSellers = action.payload  
        }, 
        setTrendProducts: (state, action) => { 
           state.trendProducts = action.payload  
        },
        setBestBoArticles: (state, action) => { 
           state.bestBoArticles = action.payload  
        },
        setTrendBoArticles: (state, action) => { 
           state.trendBoArticles = action.payload  
        },
        setNewsBoArticles: (state, action) => { 
            state.newsBoArticles = action.payload  
       },
    },
});

export const {
    setTopCollections,
    setBestSellers,
    setTrendProducts,
    setBestBoArticles,
    setTrendBoArticles,
    setNewsBoArticles
    } = HomePageSlice.actions;

    const HomePageReducer = HomePageSlice.reducer;
    export default HomePageReducer;
