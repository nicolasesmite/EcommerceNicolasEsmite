import React, { useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Skeleton from "@mui/material/Skeleton";

const ItemList = ({ products }) => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  let arr = [1, 2, 3, 4];

  const [quantity, setQuantity] = useState(1);

  return products.length > 0
    ? products.map((element) => {
        const totalQuantity = getQuantityById(element.id);
        return (
          <div key={element.id}>
            <Card sx={{ width: "300px", height: "600px" }}>
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
                {element.stock === 0 && (
                  <Typography variant="h5" color="text.secondary">
                    Este articulo se encuentra agotado
                  </Typography>
                )}
                {element.stock !== 0 && (
                  <Typography variant="body2" color="text.secondary">
                    {totalQuantity !== undefined
                      ? element.stock - totalQuantity
                      : element.stock}
                    Unidades disponibles
                  </Typography>
                )}
                {totalQuantity === element.stock && (
                  <Typography variant="body1" color="text.primary">
                    Todas las unidades disponibles estan en tu carrito
                  </Typography>
                )}
              </CardContent>
              {(typeof totalQuantity === "undefined" ||
                element.stock > totalQuantity) &&
                element.stock > 0 && (
                  <Slider
                    sx={{
                      display: "flex",
                      width: "70%",
                      margin: "2rem",
                    }}
                    marks={false}
                    max={
                      totalQuantity !== undefined
                        ? element.stock - totalQuantity
                        : element.stock
                    }
                    min={1}
                    onChange={(e) => setQuantity(e.target.value)}
                    size="medium"
                    valueLabelDisplay="on"
                  />
                )}
              <CardActions sx={{ gap: "0.5rem" }}>
                {(typeof totalQuantity === "undefined" ||
                  element.stock > totalQuantity) &&
                  element.stock > 0 && (
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
                  )}

                <Link to={`/ProductDetail/${element.id}`}>
                  <Button variant="outlined" color="success">
                    More Details
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
        );
      })
    : arr.map((e) => {
        return (
          <div key={e}>
            <Skeleton variant="rectangular" width={"300px"} height={"400px"} />
            <Skeleton variant="text" sx={{ fontSize: "1.3rem" }} width={100} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={200} />
          </div>
        );
      });
};

export default ItemList;
