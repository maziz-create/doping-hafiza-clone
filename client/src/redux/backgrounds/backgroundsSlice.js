import { createSlice } from '@reduxjs/toolkit';

const winWidth = window.innerWidth;

const mobileBackgroundHeight = '38.5rem'
const desktopBackgroundHeight = '47rem'

export const backgroundsSlice = createSlice({
    name: 'backgrounds',
    initialState: {
        activeBackground: 'tytayt',
        activeBackgroundHeight: `${winWidth > 991 ? mobileBackgroundHeight : desktopBackgroundHeight}`,
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
            if (state.activeBackgroundHeight === desktopBackgroundHeight) {
                state.activeBackgroundHeight = bgHeight;
            } else {
                state.activeBackgroundHeight = desktopBackgroundHeight;
            }
            // console.log('bg height değişti => ', state.activeBackgroundHeight);
        }
    }
})

export const { changeActiveBackground, changeBackgroundHeightForMobile } = backgroundsSlice.actions;
export default backgroundsSlice.reducer;