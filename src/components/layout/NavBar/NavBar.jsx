import React, { useContext } from "react";
import CartWidget from "../../common/CartWidget/CartWidget";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";

import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export default function NavBar() {
  const { cart } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
    ></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    ></Menu>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar position="static" sx={{ backgroundColor: "green" }}>
          <Toolbar>
            <Box>
              <Link to={"/"}>
                <img
                  style={{ width: "50px", marginTop: "7px" }}
                  src={`https://res.cloudinary.com/dxb4thu1x/image/upload/v1688784344/logo-removebg-preview_rmfvx0.png`}
                />
              </Link>
            </Box>
            <Box sx={{ display: { xs: "flex" } }}>
              <Link to="/category/Mates">
                <Button sx={{ color: "black" }}>Mates</Button>
              </Link>
              <Link to="/category/Bombillas">
                <Button sx={{ color: "black" }}>Bombillas</Button>
              </Link>
              <Link to="/category/Accesorios">
                <Button sx={{ color: "black" }}>Accesorios</Button>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
              }}
            >
              <CartWidget quantity={cart.length} />
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  );
}
