import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  userEmail: null,
  isVerified: false,
  token:null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.userEmail = action.payload.userEmail;
      state.token = action.payload.token;

    },
    setVerified(state, action) {
      state.isVerified = action.payload.isVerified;
    },
    clearUser(state) {
      state.id = null;
      state.userEmail = null;
      state.isVerified = false;
    },
  },
});

export const { setUser, setVerified, clearUser } = userSlice.actions;
export default userSlice.reducer;
