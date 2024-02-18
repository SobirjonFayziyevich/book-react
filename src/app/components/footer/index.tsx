import { Box, Container, Stack } from "@mui/material";
import React from "react";

export function Footer() {
  return (
    <div className="footer_config">
      <Container>
        <Stack className="main_footer_container">
          <Stack flexDirection={"row"} style={{ height: "242px" }}>
            <Stack className="info" flexDirection={"column"}>
              <Box>
                <img
                  src="
                      https://rails-assets-us.bookshop.org/ds/images/logo.041f4577edde0efff6b67907832d4c3dfd52407b.svg
                      " alt="Bookshop.org"
                />
              </Box>
              <Box className="main_text">
                Clevr is a online bookstore website who sells all genres of
                books from around the world. Find your book here now
              </Box>
              <Stack className="contact_links_name">
                <p>Follow Us</p>
                <Box className="contact_link">
                  <Box>
                    <img src="https://rails-assets-us.bookshop.org/assets/icon-facebook-573255ba1a893bcc1b0e26d5bb3d26e29950e72079360d7b58e6ca1aa628757c.svg" />
                  </Box>
                  <Box>
                    <img src="https://rails-assets-us.bookshop.org/assets/icon-instagram-015ea6b8500fb243a606a5117772f949603f9d035d5ab677b7d24a6f379e3cbe.svg" />
                  </Box>
                  <Box>
                    <img src="https://rails-assets-us.bookshop.org/assets/icon-threads-eaa5b4d30197b051e856f3476f6280ad90f0a34ec53cc090da4824a7f34713c8.svg" />
                  </Box>
                  <Box>
                    <img src="https://rails-assets-us.bookshop.org/assets/icon-tiktok-f258edd439a6a0ff0def1987359fab63825f9204e5cc105aad9ec2f4e731340a.svg" />
                  </Box>
                  <Box>
                    <img src="https://rails-assets-us.bookshop.org/assets/icon-x-06f2c6421bcff972e6d6da324504104da14c947623f367be696d63f47a0ea451.svg" />
                  </Box>
                </Box>
              </Stack>
            </Stack>
            <Stack className="parts">
              <Box className="part_subject">Q Links</Box>
              <Box className="divider"></Box>
              <Box className="targets">About us Contact us Products Login</Box>
            </Stack>
            <Stack className="find_us">
              <Box className="find">Find Us</Box>
              <Box className="divider"></Box>
              <Stack className="details" sx={{ mt: "19px" }}>
                <Box className="details_first">L.</Box>
                <Box className="details_second">South Korea</Box>
              </Stack>
              <Stack className="details" sx={{ mt: "42px" }}>
                <Box className="details_first">P.</Box>
                <Box className="details_second">+8210 8058 0771</Box>
              </Stack>
              <Stack className="details" sx={{ mt: "9px" }}>
                <Box className="details_first">E.</Box>
                <Box className="details_second">Bookshop@online.com</Box>
              </Stack>

              <Stack className="payment">
                <Box className="pays">
                  Payments Accepted
                  <br></br>
                  <img className="img_pay" src="https://rails-assets-us.bookshop.org/assets/payment_methods-a0a4f59e2dde1469a5f84fa9a6462171db755cdb0dcdf8ce8bd2dc8ecb6fa03f.png" />
                </Box>
              </Stack>
            </Stack>
          </Stack>
          <Box className="liner"></Box>
          <Box className="copyrights">CLEVR - © 2020 All Rights Reserved</Box>
        </Stack>
      </Container>
    </div>
  );
}
