import { configureStore } from "@reduxjs/toolkit";

import middleware from "./middleware";
import { thunk } from "redux-thunk";
import citiesReducer from "./cities/citiesReducer";


const store = configureStore({
  reducer: {
    cities: citiesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, middleware)
});
  
export default store;