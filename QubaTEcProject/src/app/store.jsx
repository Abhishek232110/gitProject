import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import teamSlice from "../gitProject/teamSlice";
import storage from "redux-persist/lib/storage";
import cryptonetSlice from "../cryptonetProject/cryptonetSlice";
import userSlice from "../invoPrivateLimited/userSlice";
// import { persistReducer } from "redux-persist/es/persistReducer";
// const persistCongig = {
//   key: "persist -key",
//   storage,
// };
// const persistReducers = persistReducer({ persistCongig });
const store = configureStore({
  reducer: {
    team: teamSlice,
    cryptonet: cryptonetSlice,
    user: userSlice,
  },
});

export default store;
