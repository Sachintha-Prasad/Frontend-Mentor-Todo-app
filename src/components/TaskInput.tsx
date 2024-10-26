import { FormEvent, useEffect, useState } from "react"
import { addTask, TaskType } from "../features/tasks/taskSlice"
import { nanoid } from "@reduxjs/toolkit"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { toast } from "react-toastify"

const TaskInput = () => {
    const [taskText, setTaskText] = useState<string>("")
    const [showError, setShowError] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault()

        try {
            if (taskText.length > 0) {
                const newTask: TaskType = {
                    taskId: nanoid(),
                    task: taskText,
                    isCompleted: false
                }

                dispatch(addTask(newTask))
                setTaskText("")
                toast.success(`Great! your task added successfully 🎉`)
            } else {
                setShowError(true)
            }
        } catch (error) {
            console.error("Error occured: ", error)
        }
    }

    useEffect(() => {
        setShowError(false)
    }, [taskText])

    return (
        <form
            onSubmit={handleFormSubmit}
            className="w-full bg-bg-content min-h-[60px] rounded-md flex items-center gap-4 px-4 py-3 text-text-primary"
        >
            <button
                className="w-4 h-4 border rounded-full hover:border-text-hover"
                type="submit"
            ></button>

            <div className="flex flex-col relative w-full">
                <input
                    value={taskText}
                    onChange={(e) => setTaskText(e.currentTarget.value)}
                    placeholder="Create a new todo.."
                    className="bg-transparent outline-none text-lg placeholder:text-base w-full"
                />

                {showError && (
                    <div className="text-red-500 text-sm absolute -bottom-5">
                        Please add a task!
                    </div>
                )}
            </div>
        </form>
    )
}

export default TaskInput
