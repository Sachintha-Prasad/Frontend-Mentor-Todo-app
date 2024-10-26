import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import sunIcon from "../../assets/images/icon-sun.svg"
import moonIcon from "../../assets/images/icon-moon.svg"
import { switchThemeMode } from "./themeSlice"
import { useEffect } from "react"

const ThemeToggler = () => {
    const themeMode = useAppSelector((state) => state.themeReducer.themeMode)
    const dispatch = useAppDispatch()
    const root = document.getElementById("root")

    useEffect(() => {
        root?.setAttribute("data-theme", themeMode)
    }, [root, themeMode])

    return (
        <button onClick={() => dispatch(switchThemeMode())}>
            <img src={themeMode === "light" ? moonIcon : sunIcon} />
        </button>
    )
}

export default ThemeToggler
