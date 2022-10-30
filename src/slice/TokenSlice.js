import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
    name: 'tokenController',
    initialState: {
        value: '',
    },
    reducers: {
        changeToken: (state, action) => {
            state.value = action.payload;
        },
        removeToken: (state) => {
            state.value = '';
        },
    },
});

export const { changeToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;

export const selectToken = (state) => state.value;
