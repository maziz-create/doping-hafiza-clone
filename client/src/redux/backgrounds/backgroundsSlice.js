import { createSlice } from '@reduxjs/toolkit';

export const backgroundsSlice = createSlice({
    name: 'backgrounds',
    initialState: {
        activeBackground: 'tytayt'
    },
    reducers: {
        changeActiveBackground: (state, action) => {
            //all bg types = tytayt, egitim, yks2022, yks2021
            const bgType = action.payload;
            state.activeBackground = bgType;
        }
    }
})

export const { changeActiveBackground } = backgroundsSlice.actions;
export default backgroundsSlice.reducer;