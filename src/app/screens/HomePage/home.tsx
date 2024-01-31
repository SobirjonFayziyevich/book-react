import React from "react";
import {Box, Button, Container, Stack} from "@mui/material";

export function Home() {
    return (
        <div className="search_home_frame">
            <Container>
                <Stack className="head_information">
                    <Stack justifyContent={"column"} style={{marginTop:"100px",marginLeft: "50px"}}>
                        <Box className="users">
                            Find over 20 million 
                             book in Clevr.
                        </Box>
                  </Stack>
                  </Stack>
            </Container>
        </div>
    );
}