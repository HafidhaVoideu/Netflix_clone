import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type userType = {
  id: string | null;
  email: string | null;
};

const initialState: userType = {
  id: null,
  email: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (state, action) => {
      state.email = action.payload?.email;
      state.id = action.payload?.id;
    },

    logout: (state) => {
      state.email = null;
      state.id = null;
    },
  },
});
export const getUser = (state: RootState) => state.user;
export default userSlice.reducer;
export const { login, logout } = userSlice.actions;
