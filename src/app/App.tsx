import React from 'react';
import '../css/App.css';
import {BrowserRouter as Router, Route, Link,} from "react-router-dom";

import {BookPage} from "./screens/BookPage";
import {CommunityPage} from "./screens/CommunityPage";
import {MemberPage} from "./screens/MemberPage";
import {HelpPage} from "./screens/HelpPage";
import {LoginPage} from "./screens/LoginPage";
import {HomePage} from "./screens/HomePage";
import {OrdersPage} from "./screens/OrdersPage";
// import {Footer} from "./components/footer";
// import "../css/navbar.css";
// import "../css/footer.css";
import { Switch } from '@mui/base';

function App() {
  const main_path = window.location.pathname;
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/book">BookPage</Link>
            </li>
            <li>
              <Link to="/community">CommunityPage</Link>
            </li>
            <li>
              <Link to="/orders">OrdersPage</Link>
            </li>
            <li>
              <Link to="/member-page">MemberPage</Link>
            </li>
            <li>
              <Link to="/help">HelpPage</Link>
            </li>
            <li>
              <Link to="/login">LoginPage</Link>
            </li>
            <li>
              <Link to="/">HomePage</Link>
            </li>
          </ul>
        </nav> */}

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
          <Route path="/member">
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
        {/* <Footer /> */}
      </div>
    </Router>
  );

}

export default App;





