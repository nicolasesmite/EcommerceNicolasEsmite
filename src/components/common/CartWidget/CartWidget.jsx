import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import { Badge } from "@mui/material"; //importamos bagde que es el contador

function CartWidget({ quantity }) {
  return (
    <IconButton
      size="large"
      aria-label="show more"
      aria-haspopup="true"
      color="black"
    >
      <Badge badgeContent={quantity} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}

export default CartWidget;
