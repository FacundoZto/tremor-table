import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/users";
import { Middleware } from '@reduxjs/toolkit';

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("stateUsers", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    users: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistanceLocalStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 