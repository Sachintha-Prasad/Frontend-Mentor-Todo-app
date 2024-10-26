import { createSlice } from "@reduxjs/toolkit"

type ThemeState = {
    themeMode: "light" | "dark"
}

const initialState: ThemeState = {
    themeMode: "light"
}

const themeSlice = createSlice({
    name: "themeReducer",
    initialState,
    reducers: {
        switchThemeMode: (state) => {
            state.themeMode === "light"
                ? (state.themeMode = "dark")
                : (state.themeMode = "light")
        }
    }
})

export const { switchThemeMode } = themeSlice.actions
export default themeSlice.reducer
