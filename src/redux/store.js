import { configureStore } from '@reduxjs/toolkit'

import backgroundsSlice from './backgrounds/backgroundsSlice'

export const store = configureStore({
    reducer: {
        backgrounds: backgroundsSlice,
    },
});