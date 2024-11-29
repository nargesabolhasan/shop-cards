import * as React from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function BadgeCompoenet() {
  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={4} color="warning">
        <ShoppingCartIcon sx={{ color: "black" }} />
      </Badge>
    </IconButton>
  );
}
