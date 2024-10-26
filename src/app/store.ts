import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "../features/theme/themeSlice"
import tasksReducer from "../features/tasks/taskSlice"

export const store = configureStore({
    reducer: {
        themeReducer: themeReducer,
        tasksReducer: tasksReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispach = typeof store.dispatch
