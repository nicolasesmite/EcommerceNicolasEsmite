import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CartWidget from "../../common/CartWidget/CartWidget";
import { Link } from "react-router-dom";

const productDetail = ({ product }) => {
  return (
    <div key={product.id}>
      <Card sx={{ width: "300px" }}>
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
          >
            Add to cart
            <CartWidget quantity={"+"} />
          </Button>
          <Link to={`/ProductDetail/${product.id}`}>
            <Button variant="outlined" color="success">
              More Details
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default productDetail;