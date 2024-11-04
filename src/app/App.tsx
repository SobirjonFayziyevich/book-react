import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";

import {BookPage} from "./screens/BookPage";
import { CommunityPage } from './screens/CommunityPage';
import {MemberPage} from "./screens/MemberPage";
import { HelpPage } from './screens/HelpPage';
import {LoginPage} from "./screens/LoginPage";
import {HomePage} from "./screens/HomePage";
import {OrdersPage} from "./screens/OrdersPage";
import "../css/navbar.css";
import "../css/App.css";
import "../css/footer.css";

import { NavbarHome } from './components/header';
import { NavbarBook } from './components/header/book';
import { NavbarOthers } from './components/header/others';
import {Footer} from "./components/footer";
import Car from './screens/testCar';
import AuthenticationModel from "./components/auth";
import { Member } from '../types/user';
import { serverApi } from '../lib/config';
import { sweetFailureProvider, sweetTopSmallSuccessAlert } from '../lib/sweetAlert';
import { Definer } from '../lib/Definer';
import MemberApiService from './apiServices/memberApiService';
import "./apiServices/verify";
import { CartItem } from '../types/others';
import { Product } from '../types/product';


function App() {
  /**  INITIALIZATIONS */
  
  const  [verifiedMemberData, setVerifiedMemberdata] = useState<Member | null>(
    null
  );
  const  [path, setPath] = useState();
  const main_path = window.location.pathname;
  const [signUpOpen, setSignUpOpen] = useState(false); // signUpOpen ni qiymati false bulgani un shu qiymatni pass qildim.
  const [loginOpen, setLoginOpen] = useState(false);
  const [orderRebuild, setOrderRebuild] = useState<Date>(new Date());

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl); // anchorEl true, yoki false beradi.
  
  const cartJson: any = localStorage.getItem("cart_data");  // boshlangich qiymatni shakillantirish un getItem mathodi orqali amalga oshiriladi.
  const current_cart: CartItem[] = JSON.parse(cartJson) ?? []; //

  const [cartItems,setCartItems] = useState<CartItem[]>(current_cart);





  useEffect(() => {
    console.log("===== useEffect: App ===");
    const memberDataJson: any = localStorage.getItem("member_data")
    ? localStorage.getItem("member_data")
    : null;
    const member_data = memberDataJson ? JSON.parse(memberDataJson) : null;
    if(member_data) {
      member_data.mb_image = member_data.mb_image 
      ? `${serverApi}/${member_data.mb_image}`
      : "/auth/odamcha.png";
      setVerifiedMemberdata(member_data);
    }
  }, [signUpOpen,  loginOpen]);


    /** HANDLERS */
const handleSignUpOpen = () => setSignUpOpen(true);  //setSignUpOpen true bulganda faqat signup ishga tushishi kerak.
const handleSignUpClose = () => setSignUpOpen(true);
const handleLoginOpen = () => setLoginOpen(true);
const handleLoginClose = () => setLoginOpen(false);

const handleLogOutClick = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event?.currentTarget);
}
const handleCloseLogOut = (event: React.MouseEvent<HTMLElement>) => {
   setAnchorEl(null); //bizni menuni yopishi kerak.
};
const handleLogOutRequest = async () => {
  try{
      // nay qiymatni null boshlangich qiymat bn olyabman
      const memberApiService = new MemberApiService();
      await memberApiService.logOutRequest(); // memberApiService ni  logOutRequest methodini chaqirib olyabman
      await sweetTopSmallSuccessAlert('success', 700, true);
      localStorage.removeItem("member_data");
  } catch(err: any) {
      console.log(err);
      sweetFailureProvider(Definer.general_err1);
  }
};
const onAdd = (product: Product) => { //mahsulot qushish, bosganda productni olib bersin.onAdd restaurant pagega child sifatida pass buladi.
  const exist: any = cartItems.find(
      (item: CartItem) => item._id === product._id); // itemning Id teng bulsin Productning Idsiga.
  if(exist) { // agar mavjud bulsa;
      const cart_updated = cartItems.map((item: CartItem) =>
      item._id === product._id  //itemning idsi productning idsiga teng bulgan holatda.
      ? { ...exist, quantity: exist.quantity + 1 } // existni uzidan qiymatni olib, existni ichiagi quantityni qiymatini bittaga oshirsin.
      : item // aks holat itemni qaytarsin.
);
    setCartItems(cart_updated);
    localStorage.setItem("cart_data", JSON.stringify(cart_updated));

  } else { //qiymatlar mavjud bulmsaa:
      const new_item: CartItem = {
       _id: product._id,
       quantity: 1,
       name: product.product_name,
       price: product.product_price,
       image: product.product_images[0],
      };
      const cart_updated = [...cartItems, { ...new_item }];
        setCartItems(cart_updated);
        localStorage.setItem("cart_data", JSON.stringify(cart_updated));
  }
};
const onRemove = (item: CartItem) => {
  const item_data: any = cartItems.find(
    (ele: CartItem) => ele._id === item._id
  );
  if (item_data.quantity === 1) {
    const cart_updated = cartItems.filter(
      (ele: CartItem) => ele._id !== item._id
    );
    setCartItems(cart_updated);
    localStorage.setItem("cart_data", JSON.stringify(cart_updated));
  } else {
    const cart_updated = cartItems.map((ele: CartItem) =>
      ele._id === item._id
        ? { ...item_data, quantity: item_data.quantity - 1 }
        : ele
    );
    setCartItems(cart_updated);
    localStorage.setItem("cart_data", JSON.stringify(cart_updated));
  }
};
const onDelete = (item: CartItem) => {
  const cart_updated = cartItems.filter(
    (ele: CartItem) => ele._id !== item._id
  );
  setCartItems(cart_updated);
  localStorage.setItem("cart_data", JSON.stringify(cart_updated));
};                              // mahsulotni birtaga kamaytirsin,
                               // mahsulotni uchirsin
const onDeleteAll = () => { // buyurtma amalga oshgach cartimni tozalab bersin 
  setCartItems([]);
  localStorage.removeItem("cart_data");
};  

  return (
    <Router>
      {main_path == "/" ? (
        <NavbarHome 
        setPath={setPath}
        handleSignUpOpen={handleSignUpOpen} 
        handleLoginOpen={handleLoginOpen}
        anchorEl={anchorEl}
        open={open}
        handleLogOutClick={handleLogOutClick}
        handleCloseLogOut={handleCloseLogOut}
        handleLogOutRequest={handleLogOutRequest}
        verifiedMemberData={verifiedMemberData}
         />

      ): main_path.includes("book") ? (

         <NavbarBook 
         setPath={setPath} 
         handleSignUpOpen={handleSignUpOpen} 
         handleLoginOpen={handleLoginOpen}
         anchorEl={anchorEl}
         open={open}
         handleLogOutClick={handleLogOutClick}
         handleCloseLogOut={handleCloseLogOut}
         handleLogOutRequest={handleLogOutRequest}
         verifiedMemberData={verifiedMemberData}
         />
      ) : (
         <NavbarOthers 
         setPath={setPath} 
         handleSignUpOpen={handleSignUpOpen} 
         handleLoginOpen={handleLoginOpen}
         anchorEl={anchorEl}
         open={open}
         handleLogOutClick={handleLogOutClick}
         handleCloseLogOut={handleCloseLogOut}
         handleLogOutRequest={handleLogOutRequest}
         verifiedMemberData={verifiedMemberData}
         />
      )}
        <Switch>
          <Route path="/book">
            <BookPage />
          </Route>
          <Route path="/community">
            <CommunityPage />
          </Route>
          <Route path="/orders">
            <OrdersPage  
            orderRebuild={orderRebuild} 
            setOrderRebuild={setOrderRebuild}
             />
          </Route>
          <Route path="/member-page">
            <MemberPage />
          </Route>
          <Route path="/help">
            <HelpPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
    
     <AuthenticationModel 

     signUpOpen={signUpOpen} 
     handleSignUpOpen={handleSignUpOpen}
     handleSignUpClose={handleSignUpClose}

     loginOpen={loginOpen}
     handleLoginOpen={handleLoginOpen}
     handleLoginClose={handleLoginClose}  

     />
    </Router>
  );

}

export default App;





