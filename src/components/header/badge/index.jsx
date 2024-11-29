import * as React from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

export default function BadgeCompoenet() {
  const shopList = useSelector((state) => state.shopList.items);

  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={shopList?.length} color="warning">
        <ShoppingCartIcon sx={{ color: "black" }} />
      </Badge>
    </IconButton>
  );
}
