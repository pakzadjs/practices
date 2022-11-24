import { combineReducers } from "redux";

// Reducers
import usersReducer from "./users/usersReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  usersState: usersReducer,
  cartState: cartReducer,
});

export default rootReducer;
