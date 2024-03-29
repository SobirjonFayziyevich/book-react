import { Restaurant } from "@mui/icons-material";
import { TabPanel } from "@mui/lab";
import { Box, Button, Stack } from "@mui/material";



const pausedOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function PausedOrders(props: any) {
  return (
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders?.map((order) => {
          return (
            <Box className="order_main_box">
              <Box className="order_box_scroll">
              {order.map((item) => {
                const image_path = `/book/chaos.png`;
                return (
                    <Box className="ordersName_price">
                      <img src={image_path} className={"orderDishImg"} />
                      <p className="titleDish">History</p>
                      <Box className="priceBox">
                        <p>$14</p>
                        <img src="/icons/Close.svg" />
                        <p>2</p>
                        <img src="/icons/Pause.svg" />
                        <p style={{ marginLeft: "15px" }}>$16</p>
                      </Box>
                    </Box>
                  );
                })}
              

              <Box className="total_price_box black_solid">
                <Box className="boxTotal">
                  <p>mahsulot narxi</p>
                  <p>$15</p>
                  <img src="/icons/Plus.svg" style={{ marginLeft: "20px" }} />
                  <p>Yetkazish hizmati</p>
                  <p>$2</p>
                  <img src="/icons/Pause.svg" style={{ marginLeft: "20px" }} />
                  <p>jami narxi</p>
                  <p>$17</p>
                </Box>
                <Button 
                  variant="contained"
                  color={"secondary"}
                  style={{ borderRadius: "10px" }}
                >
                  BEKOR QILISH
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    background: "rgb(2, 136, 209)",
                    color: "rgb(255, 255, 255)",
                    borderRadius: "10px",
                  }}
                >
                  TO'LASH
                </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}