import React from "react";
import { Container, Stack } from "@mui/material";

export function Events() {
  return (
    <div className="events_frame">
      <Container>
        <Stack className={"black_book"}>
          <img className="img_even"
            src="https://assets-global.website-files.com/6267f35934aa8b1795cf1a9f/6596c51a582c7cdddb072c80_BHM-2024-header5.jpg"
            loading="lazy"
            width="852"
            sizes="(max-width: 991px) 100vw, 852px"
            alt=""
          />
          <div>
            <p className="paragraph">
              <strong>Bookshop.org</strong>" celebrates "
            </p>
            <h1 className="heading">Black History Month</h1>
            <p className="text">
              Join us in honoring Black History Month by purchasing a new book
              by a Black author. Throughout February, choose any of the below
              select titles* and receive
              <strong>
                {" "}
                15% off at checkout with code: BHM24<br></br>
              </strong>
              <br></br>
              During Black History Month and always, we encourage you to visit a
              Black-owned bookstore in-person. Black-owned bookstores are
              essential community hubs that foster culture, preserve Black
              history, and nourish a love of reading. If you can’t visit a store
              in-person, choose to support a Black-owned bookstore on
            </p>
            <p className="text_border">
            Use the code 
            <span className="text_span">
              <strong className="bold_text"> BHM24 </strong>
            </span>
            to get
            <strong> 15% OFF </strong>
            select titles!
            </p>
            <p className="stic_text">
              <em> *Discount valid on select titles February 1st–29th </em>
            </p>
          </div>
        </Stack>
      </Container>
    </div>
  );
}

