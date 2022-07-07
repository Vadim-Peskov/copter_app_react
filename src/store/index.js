import { configureStore } from "@reduxjs/toolkit";
import copterReducer from './copterSlice';

export default configureStore({
  reducer: {
    copterReducer
  }
})