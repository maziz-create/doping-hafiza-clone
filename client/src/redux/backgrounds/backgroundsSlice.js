import { createSlice } from '@reduxjs/toolkit';

export const backgroundsSlice = createSlice({
    name: 'backgrounds',
    initialState: {
        activeBackground: 'egitim'
    },
    reducers: {
        changeActiveBackground: (state, action) => {
            //all bg types = tytayt, egitim, 2022yks, 2021yks
            const bgType = action.payload;
            state.activeBackground = bgType;
        }
    }
})

export default backgroundsSlice.reducer;