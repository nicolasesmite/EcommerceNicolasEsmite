import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CartWidget from "../../common/CartWidget/CartWidget";
import Slider from "@mui/material/Slider";
import { CartContext } from "../../../context/CartContext";

const productDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  return (
    <div key={product.id}>
      <Card
        sx={{
          width: { xs: "70%", sm: "300px" },
        }}
      >
        <CardMedia
          sx={{ height: "300px" }}
          image={product.img}
          title={product.name}
        />
        <CardContent>
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
        </CardContent>
        <CardActions>
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
            <Slider
              marks={false}
              max={product.stock}
              min={1}
              onChange={(e) => setQuantity(e.target.value)}
              size="medium"
              valueLabelDisplay="on"
            />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default productDetail;
