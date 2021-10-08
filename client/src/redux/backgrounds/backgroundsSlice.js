import { createSlice } from '@reduxjs/toolkit';

export const backgroundsSlice = createSlice({
    name: 'backgrounds',
    initialState: {
        activeBackground: 'tytayt',
        activeBackgroundHeight: '47rem',
    },
    reducers: {
        changeActiveBackground: (state, action) => {
            //all bg types = tytayt, egitim, yks2022, yks2021
            const bgType = action.payload;
            state.activeBackground = bgType;
        },
        changeBackgroundHeightForMobile: (state, action) => {
            // console.log('şu anki bg height => ', state.activeBackgroundHeight);
            const bgHeight = action.payload;
            if (state.activeBackgroundHeight === '47rem') {
                state.activeBackgroundHeight = bgHeight;
            } else {
                state.activeBackgroundHeight = '47rem';
            }
            // console.log('bg height değişti => ', state.activeBackgroundHeight);
        }
    }
})

export const { changeActiveBackground, changeBackgroundHeightForMobile } = backgroundsSlice.actions;
export default backgroundsSlice.reducer;