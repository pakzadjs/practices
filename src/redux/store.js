import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { save, load } from "redux-localstorage-simple";

const createStoreWithMiddleware = applyMiddleware(save(), thunk)(createStore);

const store = createStoreWithMiddleware(rootReducer, load());

export default store;
