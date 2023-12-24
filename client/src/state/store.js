import { configureStore } from "@reduxjs/toolkit";
import thunk  from "redux-thunk";
import middleware from "./middleware";


const store = configureStore({
    reducer: {
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk).concat(middleware)
  });
  
  export default store;