import { configureStore } from "@reduxjs/toolkit";
import cardreducer from "./cardslice";

export const store = configureStore({
  reducer: {
    click: cardreducer,  //card name is  state key donot related at name :card 
  },
});