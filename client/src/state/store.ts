import { configureStore } from "@reduxjs/toolkit";

import middleware from "./middleware";
import { thunk } from "redux-thunk";


const store = configureStore({
  reducer: {
  
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, middleware)
});
  
export default store;