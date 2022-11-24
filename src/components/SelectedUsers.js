import React from "react";

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
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Container sx={{ padding: 2 }} maxWidth="md">
          <Card sx={{ padding: 5 }}>
            <Typography component="h5" variant="h7">
              Name
            </Typography>
            <Typography gutterBottom component="h2">
              {selectedUser.name}
            </Typography>
            <Typography component="h5" variant="h7">
              Email
            </Typography>
            <Typography>{selectedUser.email}</Typography>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default SelectedUsers;
