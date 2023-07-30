import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Cart = ({ cartProduct }) => {
  const { addToCart, deleteAnUnit } = useContext(CartContext);
  return (
    <>
      <Box key={cartProduct.id} sx={{ display: "flex" }}>
        <Card sx={{ width: { xs: "350px", md: "100%" } }}>
          <CardMedia
            sx={{
              height: { xs: "100px" },
              width: { xs: "100px" },
            }}
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
          <CardActions sx={{ gap: "0.5rem", display: "flex" }}>
            {cartProduct.quantity < cartProduct.stock ? (
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
            ) : (
              <Typography gutterBottom variant="h6" component="div">
                Tienes el maximo de unidades en tu carrito
              </Typography>
            )}

            <Button
              onClick={() => deleteAnUnit(cartProduct, 1)}
              variant="outlined"
              color="success"
            >
              Quit an unit
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default Cart;
