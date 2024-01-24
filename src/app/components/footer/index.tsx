import {Box, Container, Stack} from "@mui/material";
import React from "react";

export function Footer() {
    return (
        <div className="footer_config">
            <Container>
                <Stack className="main_footer_container">
                    <Stack flexDirection={"row"} style={{height: "242px"}}>
                        <Stack className="info" flexDirection={"column"}>
                            <Box>
                                <img src={"/icons/logo.svg"}/>
                            </Box>
                            <Box className="main_text">
                            Clevr is a online bookstore website who sells all genres of 
                            books from around the world. Find your book here now
                            </Box>
                            <Stack className="contact_links">
                                <Box>
                                    <img src={"/youtube icons/facebook.png"}/>
                                </Box>
                                <Box>
                                    <img src={"/youtube icons/twiter.png"}/>
                                </Box>
                                <Box>
                                    <img src={"/youtube icons/instagram.png"}/>
                                </Box>
                                <Box>
                                    <img src={"/youtube icons/youtube.png"}/>
                                </Box>
                                <Box>
                                    <img src={"/youtube icons/linked.png"}/>
                                </Box>
                            </Stack>
                        </Stack>
                        <Stack className="parts">
                            <Box className="part_subject">Quick Links</Box>
                            <Box className="divider"></Box>
                            <Box className="targets">
                                About us  Contct us Products  Login  Sign up
                            </Box>
                        </Stack>
                        <Stack className="find_us">
                            <Box className="find">Find Us</Box>
                            <Box className="divider"></Box>
                            <Stack className="details" sx={{mt: "19px"}}>
                                <Box className="details_first">L.</Box>
                                <Box className="details_second">CANADA. Nova Scotia</Box>
                            </Stack>
                            <Stack className="details" sx={{mt: "42px"}}>
                                <Box className="details_first">P.</Box>
                                <Box className="details_second">+1 902 943 9398</Box>
                            </Stack>
                            <Stack className="details" sx={{mt: "9px"}}>
                                <Box className="details_first">E.</Box>
                                <Box className="details_second">bookshop@online.com</Box>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Box className="liner"></Box>
                    <Box className="copyrights">
                    CLEVR  -   © 2020 All Rights Reserved
                    </Box>
                </Stack>
            </Container>
        </div>
    )
}


