import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user";

const store = configureStore({
  //根reducer
  reducer: {
    user: userReducer,
  },
  devTools: import.meta.env.DEV, // 或 true
});

export default store;
