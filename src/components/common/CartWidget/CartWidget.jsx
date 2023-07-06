import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import { Badge } from "@mui/material"; //importamos bagde que es el contador
import { Link } from "react-router-dom";

function CartWidget({ quantity }) {
  return (
    <Link to="/cart">
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
    </Link>
  );
}

export default CartWidget;
