import * as React from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { LivingOutlined } from "@mui/icons-material";

export default function BadgeCompoenet({ toggleDrawer }) {
  const shopList = useSelector((state) => state.shopList.item);
  const handleShopCount = () => {
    return shopList.reduce((acc, cur) => {
      acc += cur.count;
      return acc;
    }, 0);
  };

  return (
    <IconButton aria-label="cart" onClick={toggleDrawer(true)}>
      <Badge badgeContent={handleShopCount()} color="warning">
        <ShoppingCartIcon sx={{ color: "black" }} />
      </Badge>
    </IconButton>
  );
}
