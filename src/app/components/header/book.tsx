import React from "react";
import { Box, Button, Container, IconButton, ListItemIcon, Menu, MenuItem, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { Logout } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import { verifiedMemberData } from "../../apiServices/verify";
import Basket from "./basket";

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
            {props.verifiedMemberData ? (
            <Box className="hover-line" onClick={props.setPath}>
            <NavLink to="/orders" activeClassName="uderline">
              Order
            </NavLink>
          </Box>
            ) : null}
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/community" activeClassName="uderline">
                Community
              </NavLink>
            </Box>
            {props.verifiedMemberData ? (
            <Box className="hover-line" onClick={props.setPath}>
            <NavLink to="/member-page" activeClassName="uderline">
              MyPage
            </NavLink>
          </Box>
            ) : null}
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/help" activeClassName="uderline">
                About
              </NavLink>
            </Box>
            
            <Basket 
            cartItems={props.cartItems} 
            onAdd={props.onAdd} 
            onRemove={props.onRemove}
            />

            {/* <Box className="hover-line">
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
            </Box> */}
            
            <Box>
            {!props.verifiedMemberData ? (
            <Box>
            <Button
              className="navbar_button"
              style={{ color: "#FFFFFF", background: "#8D28AD" }}
              onClick={props.handleLoginOpen}
            >
              Login
            </Button>
          </Box>
 
          ) : (
            <img style={{width: '48px', height: '48px', borderRadius: '24px'}} 
                  src={props.verifiedMemberData.mb_image}
                  onClick={props.handleLogOutClick}
            />
            )}
            </Box>
            
            <Menu
                anchorEl={props.anchorEl}
                open={props.open}
                onClose={props.handleCloseLogOut}
                onClick={props.handleCloseLogOut}
                // Use slotProps instead of PaperProps
                PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                <MenuItem onClick={props.handleLogOutRequest}> 
                  <ListItemIcon>
                    <Logout fontSize="small" style={{ color: "brown" }} />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
