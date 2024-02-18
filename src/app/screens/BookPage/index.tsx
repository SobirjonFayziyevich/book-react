import React from "react";
import { Container } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { OneBook } from "./oneBook";
import { ChosenBook } from "./chosenBook";
import { AllBooks } from "./allBooks";
import "../../../css/book.css";

export function BookPage() {
  let book = useRouteMatch();
  console.log(book);
  return (
    <div className="book_page">
      <Switch>
        <Route path={`${book.path}/book/:book_id`}>
          <ChosenBook/>
        </Route>
        <Route path={`${book.path}/:book_id`}>
          <OneBook />
        </Route>
        <Route path={`${book.path}`}>
          <AllBooks />
        </Route>
      </Switch>
    </div>
  );
}
