import { createSlice } from "@reduxjs/toolkit";

import { COUNT } from "../utils/config";

const appSlice = createSlice({
  name: "app",
  initialState: {
    currentPath: '',
    isLoggedIn: null,
    isPopupOpen: false,
    titlePopup: '',
    count: COUNT,
    status: null,
    error: null,
  },
  reducers: {
    setCurrentPath(state, action) {
      state.currentPath = action.payload;
    },
    loginApp(state, action) {
      state.isLoggedIn = true;
    },
    logoutApp(state, action) {
      state.isLoggedIn = false;
    },
    openPopup(state, action) {
      state.isPopupOpen = true;
    },
    closeAllPopups(state, action) {
      state.isPopupOpen = false;
    },
    setTitlePopup(state, action) {
      state.titlePopup = `Информация по телефону: +${action.payload}`;
    },
    incrementCount(state, action) {
      state.count = state.count + COUNT;
    },
  },
});

export const {
  loginApp,
  logoutApp,
  setCurrentPath,
  openPopup,
  closeAllPopups,
  setTitlePopup,
  incrementCount,
} = appSlice.actions;

export default appSlice.reducer;
