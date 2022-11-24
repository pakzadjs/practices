import React, { useContext } from "react";

import { Grid, Typography } from "@mui/material";

import User from "./User";
import SelectedUsers from "./SelectedUsers";

import { UsersContext } from "../context/UsersContextProvider";
import { CartContext } from "../context/CartContextProvider";

const Users = () => {
  const usersData = useContext(UsersContext);
  const { state } = useContext(CartContext);

  const selectedUser = state?.selectedItems;

  console.log(selectedUser);

  return (
    <>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid",
          margin: "15px",
        }}
        variant="h5"
      >
        All Users
      </Typography>

      <Grid item>
        {usersData?.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </Grid>

      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid",
          margin: "15px",
        }}
        variant="h5"
      >
        Selected Users
      </Typography>

      <Grid container>
        {selectedUser?.map((user) => (
          <SelectedUsers key={user.id} selectedUser={user} />
        ))}
      </Grid>
    </>
  );
};

export default Users;
