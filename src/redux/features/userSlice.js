// redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Ali', email: 'ali@mail.com' },
  { id: 2, name: 'Vali', email: 'vali@mail.com' },
  { id: 3, name: 'Nemat', email: 'nemat@mail.com' },
  { id: 4, name: 'Boltavoy', email: 'boltavoy@mail.com' },
  { id: 5, name: 'Teshavoy', email: 'teshavoy@mail.com' },
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const { deleteUser } = userSlice.actions;
export default userSlice.reducer;
