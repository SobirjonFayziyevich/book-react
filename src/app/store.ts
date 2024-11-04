import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import BookPageReducer from './screens/BookPage/slice';
import HomePageReducer from './screens/HomePage/slice';
import OrdersPageReducer from './screens/OrdersPage/slice';
import { CommunityPage } from './screens/CommunityPage';


export const store = configureStore({
  reducer: {
    homePage: HomePageReducer,
    bookPage: BookPageReducer,
    ordersPage: OrdersPageReducer,
    // communityPage : CommunityPageReducer,
    // memberPage: MemberPageReducer
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
