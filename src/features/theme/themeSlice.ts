import { createSlice } from "@reduxjs/toolkit"
import {
    getFromLocalStorage,
    saveToLocalStorage
} from "../../util/localStoragFunctions"

type ThemeType = "light" | "dark"

type ThemeState = {
    themeMode: ThemeType
}

// to save the system theme to local storage
const systemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

const theme =
    (getFromLocalStorage("theme") as ThemeType) || (systemTheme() as ThemeType)

const initialState: ThemeState = {
    themeMode: theme
}

const themeSlice = createSlice({
    name: "themeReducer",
    initialState,
    reducers: {
        switchThemeMode: (state) => {
            if (state.themeMode === "light") {
                state.themeMode = "dark"
                saveToLocalStorage("theme", "dark")
            } else {
                state.themeMode = "light"
                saveToLocalStorage("theme", "light")
            }
        }
    }
})

export const { switchThemeMode } = themeSlice.actions
export default themeSlice.reducer
