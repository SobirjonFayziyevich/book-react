import React from "react";
import {Box, Button, Container, Stack} from "@mui/material";

export function Home() {
    return (
        <div className="search_home_frame">
            <Container>
                <Stack className="sing_up_frame">
                    <Box className="signup_text">
                    <Stack className="head_information">
                    <Stack justifyContent={"column"} style={{marginTop:"100px",marginLeft: "50px"}}>
                        <Box className="users">
                            Find over 20 million 
                             book in Clevr.
                        </Box>
                        <Box className="users_describtion">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        </Box>
                  </Stack>
                  </Stack>
                    </Box>
                    <Box className="collection_botton">
                        <Button 
                        style={{ background: "#1976d2", color: "#ffffff", marginTop: "36px"}}
                        >
                            Go to Collections
                        </Button>
                    </Box>
                </Stack>
            </Container>
        </div>
    );
}