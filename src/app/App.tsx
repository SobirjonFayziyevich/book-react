import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";

import {BookPage} from "./screens/BookPage";
import {CommunityPage} from "./screens/CommunityPage";
import {MemberPage} from "./screens/MemberPage";
import { AboutPage } from './screens/AboutPage';
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

function App() {
  const main_path = window.location.pathname;
  return (
    <Router>
      {main_path === "/" ? (
        <NavbarHome />
      ): main_path.includes("book") ? (
         <NavbarBook/>
      ) : (
         <NavbarOthers />
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
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
    
    </Router>
  );

}

export default App;





