import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type TaskType = {
    taskId: string
    task: string
    isCompleted: boolean
}

type TaskState = {
    tasksList: TaskType[]
}

const initialState: TaskState = {
    tasksList: []
}

const taskSlice = createSlice({
    name: "tasksReducer",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TaskType>) => {
            state.tasksList.push(action.payload)
        },
        toggleTaskComplete: (state, action: PayloadAction<string>) => {
            const selectedIndex = state.tasksList.findIndex(
                (task) => task.taskId === action.payload
            )

            if (selectedIndex) {
                state.tasksList[selectedIndex] = {
                    ...state.tasksList[selectedIndex],
                    isCompleted: !state.tasksList[selectedIndex].isCompleted
                }
            }
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasksList = state.tasksList.filter(
                (task) => task.taskId !== action.payload
            )
        },
        clearCompleted: (state) => {
            state.tasksList = state.tasksList.filter(
                (task) => task.isCompleted === false
            )
        }
    }
})

export const { addTask, toggleTaskComplete, deleteTask, clearCompleted } =
    taskSlice.actions
export default taskSlice.reducer
