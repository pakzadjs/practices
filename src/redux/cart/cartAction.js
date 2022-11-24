const addItem = (user) => {
  return {
    type: "ADD_ITEM",
    payload: user,
  };
};

const removeItem = (user) => {
  return {
    type: "REMOVE_ITEM",
    payload: user,
  };
};

export { addItem, removeItem };
