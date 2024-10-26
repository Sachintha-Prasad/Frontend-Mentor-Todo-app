import { useDispatch } from "react-redux"
import { AppDispach } from "../app/store"

export const useAppDispatch = useDispatch.withTypes<AppDispach>()
