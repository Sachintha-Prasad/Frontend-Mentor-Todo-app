import ThemeToggler from "./features/theme/ThemeToggler"
import { useAppSelector } from "./hooks/useAppSelector"

const App = () => {
    const themeMode = useAppSelector((state) => state.themeReducer.themeMode)

    return (
        <div className="h-screen bg-bg-background">
            <div
                className={`w-screen h-[40%]  ${
                    themeMode === "light"
                        ? "bg-[url(./assets/images/bg-mobile-light.jpg)]"
                        : "bg-[url(./assets/images/bg-mobile-dark.jpg)]"
                } ${
                    themeMode === "light"
                        ? "sm:bg-[url(./assets/images/bg-desktop-light.jpg)]"
                        : "sm:bg-[url(./assets/images/bg-desktop-dark.jpg)]"
                } bg-cover`}
            >
                <div className="w-full max-w-[750px] container flex flex-col gap-6 items-center justify-between absolute top-[144px] left-1/2 -translate-x-1/2">
                    <div className="w-full flex items-center justify-between">
                        <p className="text-[#fff] text-5xl font-semibold leading-none tracking-[8px] mt-3">
                            TODO
                        </p>
                        <ThemeToggler />
                    </div>
                    <div className="w-full flex flex-col gap-3">
                        <div className="w-full bg-bg-content min-h-[50px] rounded-md"></div>
                        <div className="w-full bg-bg-content min-h-[300px] rounded-md shadow-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
