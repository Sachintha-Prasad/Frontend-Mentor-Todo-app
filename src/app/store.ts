import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "../features/theme/themeSlice"

export const store = configureStore({
    reducer: {
        themeReducer: themeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispach = typeof store.dispatch
