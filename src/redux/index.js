import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/features/userSlice';
import aboutReducer from '../redux/features/aboutSlice';

export default configureStore({
  reducer: {
    users: userReducer,
    about: aboutReducer,
  }
})