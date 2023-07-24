import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Cart = ({ cartProduct }) => {
  const { addToCart, deleteAnUnit } = useContext(CartContext);
  return (
    <>
      <div key={cartProduct.id}>
        <Card sx={{ width: { xs: "100%", md: "100%" } }}>
          <CardMedia
            sx={{ height: { xs: "5rem" } }}
            image={cartProduct.img}
            title={cartProduct.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cartProduct.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              ${cartProduct.price}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Quantity {cartProduct.quantity}
            </Typography>
          </CardContent>
          <CardActions sx={{ gap: "0.5rem" }}>
            <Button
              sx={{
                backgroundColor: "green",
                "&:hover": {
                  backgroundColor: "rgb(106,159,30,0.7)",
                },
              }}
              variant="contained"
              onClick={() => addToCart(cartProduct, 1)}
            >
              Add another
            </Button>

            <Button
              onClick={() => deleteAnUnit(cartProduct, 1)}
              variant="outlined"
              color="success"
            >
              Quit an unit
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default Cart;
