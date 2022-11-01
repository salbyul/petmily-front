import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
    name: 'pages',
    initialState: {
        value: 'main',
    },
    reducers: {
        changePage: (state, action) => {
            switch (action.payload) {
                case '내 포스트':
                    state.value = 'myPost';
                    break;
                case '알림':
                    state.value = 'notification';
                    break;
                case '메시지':
                    state.value = 'message';
                    break;
                case '내 프로필':
                    state.value = 'myProfile';
                    break;
                case '친구':
                    state.value = 'friend';
                    break;
                case '로그아웃':
                    state.value = 'main';
                    break;
                default:
            }
        },
    },
});

export const { changePage } = pageSlice.actions;

export const getPage = (state) => state.pages.value;

export default pageSlice.reducer;
