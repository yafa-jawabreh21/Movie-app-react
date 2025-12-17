import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./MovieSlice"
const store = configureStore({reducer:{movietv:MovieSlice}})
export default store