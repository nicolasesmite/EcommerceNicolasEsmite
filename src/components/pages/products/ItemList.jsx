import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { Link } from "react-router-dom";

const ItemList = ({ products, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  return products.map((element) => {
    return (
      <div key={element.id}>
        <Card sx={{ width: "300px" }}>
          <CardMedia
            sx={{ height: "300px" }}
            image={element.img}
            title={element.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {element.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              ${element.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {element.stock} unidades disponibles
            </Typography>
          </CardContent>
          <Slider
            sx={{
              display: "flex",
              width: "70%",
              margin: "2rem",
            }}
            marks={false}
            max={element.stock}
            min={1}
            onChange={(e) => setQuantity(e.target.value)}
            size="medium"
            valueLabelDisplay="on"
          />
          <CardActions sx={{ gap: "0.5rem" }}>
            <Button
              sx={{
                backgroundColor: "green",
                "&:hover": {
                  backgroundColor: "rgb(106,159,30,0.7)",
                },
              }}
              variant="contained"
              onClick={() => addToCart(element, quantity)}
            >
              Add to cart
            </Button>

            <Link to={`/ProductDetail/${element.id}`}>
              <Button variant="outlined" color="success">
                More Details
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  });
};

export default ItemList;
