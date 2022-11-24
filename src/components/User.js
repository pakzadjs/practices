import React, { useContext } from "react";

import { isInCart, quantityCount } from "../helper/functions";

import { CartContext } from "../store/CartContextProvider";

import { useSelector, useDispatch } from "react-redux";

import { addItem, removeItem } from "../redux/cart/cartAction";

import {
  Box,
  // Grid,
  Card,
  Button,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Container from "@mui/material/Container";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const theme = createTheme();

const User = ({ user }) => {
  // const { state, dispatch } = useContext(CartContext);

  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  // console.log(state)

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Container sx={{ py: 2 }} maxWidth="md">
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flexGrow: 3 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {user.name}
              </Typography>
              <Typography>{user.email}</Typography>
            </CardContent>
            <CardActions>
              {quantityCount(state, user.id) < 1 && (
                <Button size="small" onClick={() => dispatch(addItem(user))}>
                  Select
                </Button>
              )}

              {quantityCount(state, user.id) === 1 && (
                <Button size="small" onClick={() => dispatch(removeItem(user))}>
                  Remove
                </Button>
              )}
            </CardActions>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default User;
