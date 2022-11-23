import React, { useContext } from "react";

import { Grid } from "@mui/material";

import User from "./User";

import { UsersContext } from "../context/UsersContextProvider";

const Users = () => {
  const usersData = useContext(UsersContext);
  console.log(usersData);

  return (
    <Grid item >
      {usersData?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </Grid>
  );
};

export default Users;
