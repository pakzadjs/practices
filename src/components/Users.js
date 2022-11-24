import React, { useContext, useEffect } from "react";

import { Grid, Typography } from "@mui/material";

import User from "./User";
import SelectedUsers from "./SelectedUser";

import { fetchUsers } from "../redux/users/usersAction";

import { UsersContext } from "../store/UsersContextProvider";
import { CartContext } from "../store/CartContextProvider";

import { useSelector, useDispatch } from "react-redux";

const Users = () => {
  const usersData = useContext(UsersContext);
  const { state } = useContext(CartContext);

  // const selectedUser = state?.selectedItems;

  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.usersState);
  const selectedUser = useSelector((state) => state.cartState);

  useEffect(() => {
    if (!usersState.users.length) dispatch(fetchUsers());
  }, []);

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

      {usersState.loading ? (
        <h2>Loading...</h2>
      ) : usersState.error ? (
        <h2>Somthing went wrong</h2>
      ) : (
        <Grid item>
          {usersState.users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </Grid>
      )}

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
        {selectedUser?.selectedItems?.map((user) => (
          <SelectedUsers key={user.id} selectedUser={user} />
        ))}
      </Grid>
    </>
  );
};

export default Users;
