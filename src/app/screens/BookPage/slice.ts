/** SILICE ==> malumotlarni Reduce Store ga yozish uchun xizmat qiladi. */
import { createSlice } from "@reduxjs/toolkit";
import { BookPageState } from "../../../types/screen";

const initialState: BookPageState = {
    targetBooks: [],
    randomBooks: [],
    chosenBook: null,
    targetProducts: [],
    chosenProduct: null,

};

const bookPageSlice = createSlice({
    name: 'bookPage',
    initialState,
    reducers: {
        setTargetBooks: (state, action) => {
            state.targetBooks = action.payload;
        },
        setRandomBooks: (state, action) => { 
            state.randomBooks = action.payload;  
         }, 

        setChosenBook: ( state, action) => {
            state.chosenBook = action.payload;
        },
        setTargetProducts: ( state, action) => {
            state.targetProducts = action.payload;
        },
        setChosenProduct: ( state, action) => {
            state.chosenProduct = action.payload;
        },
        
    },
});



export const {
    setTargetBooks,
    setRandomBooks,
    setChosenBook,
    setTargetProducts,
    setChosenProduct,
} = bookPageSlice.actions;

const BookPageReducer = bookPageSlice.reducer;
export default BookPageReducer;