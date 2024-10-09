/** SELECTOR lar ==> Eng oxirgi qiymatlarni olib berish uchun xizmat qiladi.  */

import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";

const selectBookPage = (state: AppRootState) => state.bookPage;

export const retrieveTargetBooks = createSelector(
    selectBookPage, 
    (BookPage) => BookPage.targetBooks
);

export const retrieveRandomBooks = createSelector(
    selectBookPage, 
    (BookPage) => BookPage.randomBooks
);

export const retrieveChosenBook = createSelector(
    selectBookPage, 
    (BookPage) => BookPage.chosenBook
);

export const retrieveTargetProducts = createSelector(
    selectBookPage, 
    (BookPage) => BookPage.targetProducts
);

export const retrieveChosenProduct = createSelector(
    selectBookPage, 
    (BookPage) => BookPage.chosenProduct
);
