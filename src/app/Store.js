import { configureStore } from '@reduxjs/toolkit';
import pageReducer from '../slice/PageSlice';

const Store = configureStore({
    reducer: {
        pages: pageReducer,
    },
});

export default Store;
