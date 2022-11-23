import React from "react";
import {
  Box,
  Grid,
  Card,
  Button,
  CardMedia,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Container from "@mui/material/Container";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const theme = createTheme();

const User = ({ user }) => {
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
              <Typography>
                {user.email}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Select</Button>
              <Button size="small">Remove</Button>
            </CardActions>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default User;
