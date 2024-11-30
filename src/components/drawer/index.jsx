import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CardComponent from "../cards";
import { useSelector } from "react-redux";

export default function DrawerComponent({ openDrawer, toggleDrawer }) {
  const shopList = useSelector((state) => state.shopList.item);
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      {shopList.reverse().map((item) => (
        <React.Fragment key={item.id}>
          <List>
            <CardComponent info={item} />
          </List>
          <Divider />
        </React.Fragment>
      ))}
    </Box>
  );

  return (
    <Drawer open={openDrawer} onClose={toggleDrawer(false)} anchor="right">
      {DrawerList}
    </Drawer>
  );
}
