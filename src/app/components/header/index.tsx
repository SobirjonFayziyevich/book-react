import React from "react";
import {Box, Button, Container, IconButton, Stack} from "@mui/material";
import {NavLink} from "react-router-dom";
import Badge from "@mui/material/Badge";


export function NavbarHome(props: any) {
    return (
        <div className="format home_navbar">
            <Container>
                <Stack
                    className="navbar_config"
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                >
                    <Box className="header_logo">
                        <img src={"/icons/"}/>
                    </Box>
                    <Stack
                        flexDirection={"row"}
                        justifyContent="space-evenly"
                        alignItems={"center"}
                        className="navbar_links"
                    >
                        <Box className="hover-line" onClick={props.setPath}>
                            <NavLink to="/" activeClassName="uderline" >
                                Home
                            </NavLink>
                        </Box>
                        <Box className="hover-line" onClick={props.setPath}>
                            <NavLink to="/book" activeClassName="uderline">
                                BookStore
                            </NavLink>
                        </Box>
                        <Box className="hover-line" onClick={props.setPath}>
                            <NavLink to="/orders" activeClassName="uderline">
                                Order
                            </NavLink>
                        </Box>
                        <Box className="hover-line" onClick={props.setPath}>
                            <NavLink to="/community" activeClassName="uderline">
                                Community
                            </NavLink>
                        </Box>
                        <Box className="hover-line" onClick={props.setPath}>
                            <NavLink to="/help" activeClassName="uderline">
                                Help
                            </NavLink>
                        </Box>


                    </Stack>

                    <Box className="hover-line">
                        <IconButton
                            aria-label="cart"
                            id="basic-button"
                            aria-controls={undefined}
                            aria-haspopup="true"
                            aria-expanded={undefined}
                        >
                            <Badge badgeContent={3} color="secondary">
                                <img src={"/icons/basket.png"}/>
                            </Badge>
                        </IconButton>
                    </Box>
                        <Box>
                            <Button className="navbar_button"
                                style={{color: "#FFFFFF", background: "#8D28AD"}}
                            >
                                Login
                            </Button>
                        </Box>
                </Stack>
                
            </Container>
        </div>
    );
} 