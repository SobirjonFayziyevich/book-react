import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import BookPageReducer from './screens/BookPage/slice';
import HomePageReducer from './screens/HomePage/slice';


export const store = configureStore({
  reducer: {
    homePage: HomePageReducer,
    bookPage: BookPageReducer,
   },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
