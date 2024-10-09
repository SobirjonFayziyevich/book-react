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


function App() {
  /**  INITIALIZATIONS */
  
  const  [verifiedMemberData, setVerifiedMemberdata] = useState<Member | null>(
    null
  );
  const  [path, setPath] = useState();
  const main_path = window.location.pathname;
  const [signUpOpen, setSignUpOpen] = useState(false); // signUpOpen ni qiymati false bulgani un shu qiymatni pass qildim.
  const [loginOpen, setLoginOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl); // anchorEl true, yoki false beradi.
  






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
            <OrdersPage />
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





