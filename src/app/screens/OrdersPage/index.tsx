import React, { useState, useEffect } from "react";
import "../../../css/order.css";
import { Box, Container, Stack } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import PausedOrders from "../../components/orders/pausedOrders";
import ProcessOrders from "../../components/orders/processOrders";
import FinishedOrders from "../../components/orders/finishedOrders";
import { Order } from "../../../types/order";

export function OrdersPage() {
  // Initializations
  const [value, setValue] = useState("1");
  // Handlers
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className={"order_page"}>
      <Container
        maxWidth="lg"
        style={{ display: "flex", flexDirection: "row" }}
        sx={{ mt: "50px", mb: "50px" }}
      >
        <Stack className={"order_left"}>
          <TabContext value={value}>
            <Box className={"order_nev_frame"}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  // value={value}
                  aria-label="basic tabs example"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Tab label="Buyurtmalarim" value={"1"} />
                  <Tab label="Jarayon" value={"2"} />
                  <Tab label="Yakunlangan" value={"3"} />
                </TabList>
              </Box>
            </Box>
            <Stack className={"order_main_content"}>
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className={"order_right"}>
          <Box className={"order_info_box"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <div className={"order_user_img"}>
                <img
                  src={"/image/john.jpg"}
                  className={"order_user_avatar"}
                />
                <div className={"order_user_icon_box"}>
                  <img
                    src={"/icons/odamcha.svg"}
                    className={"order_user_prof_ing"}
                    style={{ marginLeft: "100px" }}
                  />
                </div>
              </div>
              <span className={"order_user_name"}>
                John
              </span>
              <span className={"order_user_prof"}>
                User
              </span>
            </Box>
            <Box
              style={{ border: "1px solid #A1A1A1" }}
              width={"100%"}
              sx={{ mt: "40px", mb: "8px" }}
            ></Box>
            <Box className={"order_user_address"}>
              <div style={{ display: "flex" }}>
                <LocationOnIcon />
              </div>
              <div className={"spec_address_txt"}>
                Pusan, South Korea
              </div>
            </Box>
          </Box>
          <Box className={"order_info_box"} sx={{ mt: "15px" }}>
            <input
              type={"text"}
              name={"card_creator"}
              placeholder={"card_number: 000 00 0000 00"}
              className={"card_input"}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <input
                type={"text"}
                name={"card_period"}
                placeholder={"07 / 24"}
                className={"card_half_input"}
              />

              <input
                type={"text"}
                name={"card_cvv"}
                placeholder={"CVV : 010"}
                className={"card_half_input"}
              />
            </div>
            <input
              type={"text"}
              name={"card_creator"}
              placeholder={"John"}
              className={"card_input"}
            />

            <div className={"card_box"}>
              <img src={"/icons/Western-union.png"} />
              <img src={"/icons/Paypal.png"} />
              <img src={"/icons/Western-union.png"} />
              <img src={"/icons/Paypal.png"} />
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
