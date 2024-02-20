import React from "react";
import { Box, Button, Container, IconButton, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";

export function NavbarBook(props: any) {
  return (
    <div className="format_book home_navbar">
      <Container>
        <Stack
          flexDirection={"row"}
          className="navbar_config"
          justifyContent={"space-between"}
        >
          <Box>
          <img className={"logo_img"} src="https://rails-assets-us.bookshop.org/assets/bcorp_logo-dbd633d3bd3540edec0d2271427738792bd79e1aae13585deec0b658d29ddc08.png" />
          </Box>
          <Stack
            flexDirection={"row"}
            justifyContent="space-evenly"
            alignItems={"center"}
            className="navbar_links"
          >
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/" activeClassName="uderline">
                Home
              </NavLink>
            </Box>
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/book" activeClassName="uderline">
                BookStore
              </NavLink>
            </Box>
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/orders">Order</NavLink>
            </Box>
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/community" activeClassName="uderline">
                Community
              </NavLink>
            </Box>
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/help" activeClassName="uderline">
                About
              </NavLink>
            </Box>

            <Box className="hover-line">
              <IconButton
                aria-label="cart"
                id="basic-button"
                aria-controls={undefined}
                aria-haspopup="true"
                aria-expanded={undefined}
              >
                <Badge badgeContent={1} color="secondary">
                  <img className={"icon_img"} src={"/icons/sav.png"} />
                </Badge>
              </IconButton>
            </Box>
            <Box>
              <Button
                className="navbar_button"
                style={{ color: "#FFFFFF", background: "#8D28AD" }}
              >
                SignUp
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                style={{ color: "#FFFFFF", background: "#1976d2 " }}
              >
                Login
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
