import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { CartContext } from "../../../context/CartContext";
import Rating from "@mui/material/Rating";

const productDetail = ({ product }) => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const totalQuantity = getQuantityById(product.id);

  return (
    <div key={product.id} style={{ width: "80%" }}>
      <Card>
        <img
          src={`${product.img}`}
          style={{ height: { xs: "1rem" }, width: "15rem" }}
        />
        <CardContent sx={{ marginLeft: "1rem" }}>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ${product.price}
          </Typography>
          {product.stock === 0 && (
            <Typography variant="h5" color="text.secondary">
              Este articulo se encuentra agotado
            </Typography>
          )}
          {product.stock !== 0 && (
            <Typography variant="body2" color="text.secondary">
              {totalQuantity !== undefined
                ? product.stock - totalQuantity
                : product.stock}
              Unidades disponibles
            </Typography>
          )}

          <Typography variant="body1" color="text.primary">
            {product.detail}
          </Typography>
          <Rating name="half-rating" defaultValue={4.7} precision={0.5} />
        </CardContent>

        {(typeof totalQuantity === "undefined" ||
          product.stock > totalQuantity) &&
          product.stock > 0 && (
            <Slider
              sx={{ maxWidth: "13rem", marginLeft: "2rem", marginTop: "1rem" }}
              marks={false}
              max={
                totalQuantity !== undefined
                  ? product.stock - totalQuantity
                  : product.stock
              }
              min={1}
              onChange={(e) => setQuantity(e.target.value)}
              size="medium"
              valueLabelDisplay="on"
            />
          )}
        <CardActions sx={{ justifyContent: "center" }}>
          {(typeof totalQuantity === "undefined" ||
            product.stock > totalQuantity) &&
            product.stock > 0 && (
              <Button
                sx={{
                  backgroundColor: "green",
                  "&:hover": {
                    backgroundColor: "rgb(106,159,30,0.7)",
                  },
                }}
                variant="contained"
                onClick={() => addToCart(product, quantity)}
              >
                Add to cart
              </Button>
            )}

          {totalQuantity === product.stock && (
            <Typography variant="h5" color="text.primary">
              Todas las unidades disponibles estan en tu carrito
            </Typography>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default productDetail;
