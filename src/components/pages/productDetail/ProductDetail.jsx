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
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
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
          <Typography variant="body2" color="text.secondary">
            {product.stock} unidades disponibles
          </Typography>
          <Typography variant="body1" color="text.primary">
            {product.detail}
          </Typography>
          <Rating name="half-rating" defaultValue={4.7} precision={0.5} />
        </CardContent>

        <Slider
          sx={{ maxWidth: "13rem", marginLeft: "2rem", marginTop: "1rem" }}
          marks={false}
          max={product.stock}
          min={1}
          onChange={(e) => setQuantity(e.target.value)}
          size="medium"
          valueLabelDisplay="on"
        />
        <CardActions sx={{ justifyContent: "center" }}>
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
        </CardActions>
      </Card>
    </div>
  );
};

export default productDetail;
