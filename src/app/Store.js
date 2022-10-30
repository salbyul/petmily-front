import { configureStore } from '@reduxjs/toolkit';
import { tokenSlice } from '../slice/TokenSlice';

const Store = configureStore({
    reducer: {
        token: tokenSlice,
    },
});

export default Store;
