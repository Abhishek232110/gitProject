import { configureStore } from "@reduxjs/toolkit";

import teamSlice from "../gitProject/teamSlice";
import cryptonetSlice from "../cryptonetProject/cryptonetSlice";
const store = configureStore({
  reducer: {
    team: teamSlice,
    cryptonet: cryptonetSlice,
  },
});

export default store;
