import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: {},
    status: null,
    error: null,
  },
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = {
        password: action.payload.password,
        email: action.payload.email,
      };
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
    removeCurrentUser(state, action) {
      state.currentUser = {};
    },
  },
});

export const { setCurrentUser, removeCurrentUser } =
  userSlice.actions;

export default userSlice.reducer;
