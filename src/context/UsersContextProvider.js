import React, { useState, useEffect, createContext } from "react";

// API
import { getUsers } from "../services/api";

export const UsersContext = createContext();

const UsersContextProvider = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setUsers(await getUsers());
    };

    fetchApi();
  }, []);

  const usersData = users?.data;

  return (
    <UsersContext.Provider value={usersData}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
