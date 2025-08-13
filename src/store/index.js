import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user";

const store = configureStore({
  //根reducer
  reducer: {
    user: userReducer,
  },
});

export default store;
