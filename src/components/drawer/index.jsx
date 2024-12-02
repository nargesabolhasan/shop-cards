import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import * as React from "react";
import { useSelector } from "react-redux";
import CardComponent from "../cards";

export default function DrawerComponent({ openDrawer, toggleDrawer }) {
  const shopList = useSelector((state) => state.shopList.item);

  const DrawerList = (
    <Box
      sx={{ width: 250, padding: 2 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {shopList.length !== 0 ? (
        shopList.map((item) => (
          <Box key={item.id}>
            <Typography>shop list :</Typography>
            <List>
              <CardComponent info={item}>
                <Typography sx={{ padding: 2 }}>count: {item.count}</Typography>
              </CardComponent>
            </List>
            <Divider />
          </Box>
        ))
      ) : (
        <Typography>empty basket!</Typography>
      )}
    </Box>
  );

  return (
    <Drawer open={openDrawer} onClose={toggleDrawer(false)} anchor="right">
      {DrawerList}
    </Drawer>
  );
}
