// redux/aboutSlice.js
import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => {
  const stored = localStorage.getItem('userData');
  return stored ? JSON.parse(stored) : [];
};

const aboutSlice = createSlice({
  name: 'about',
  initialState: getInitialState(),
  reducers: {
    addUser: (state, action) => {
      const newState = [...state, action.payload];
      localStorage.setItem('userData', JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addUser } = aboutSlice.actions;
export default aboutSlice.reducer;
