import React, { useContext } from "react";

import { CartContext } from "../context/CartContextProvider";
import { isInCart, quantityCount } from "../helper/functions";

import {
  Box,
  Grid,
  Card,
  Button,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme();

const SelectedUsers = ({ selectedUser }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Container sx={{ padding: 2 }} maxWidth="md">
          <Card sx={{ padding: 5 }}>
            <Typography
              component="h5"
              variant="h7"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Name
            </Typography>
            <Typography
              gutterBottom
              component="h2"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {selectedUser.name}
            </Typography>
            <Typography
              component="h5"
              variant="h7"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Email
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {selectedUser.email}
            </Typography>

            <Grid item sx={{ display: "flex", justifyContent: "center" }}>
              {quantityCount(state, selectedUser.id) === 1 && (
                <Button
                  size="small"
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: selectedUser })
                  }
                >
                  Remove
                </Button>
              )}
            </Grid>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default SelectedUsers;
