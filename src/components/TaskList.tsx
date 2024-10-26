import { FaCheck, FaX } from "react-icons/fa6"
import { useAppSelector } from "../hooks/useAppSelector"
import { useAppDispatch } from "../hooks/useAppDispatch"
import {
    clearCompleted,
    deleteTask,
    toggleTaskComplete
} from "../features/tasks/taskSlice"
import { useMemo, useState } from "react"

const TaskList = () => {
    const [listType, setListType] = useState<"all" | "active" | "completed">(
        "all"
    )
    const taskList = useAppSelector((state) => state.tasksReducer.tasksList)
    const dispatch = useAppDispatch()

    const activeList = useMemo(
        () => taskList.filter((task) => !task.isCompleted),
        [taskList]
    )
    const completedList = useMemo(
        () => taskList.filter((task) => task.isCompleted),
        [taskList]
    )

    const filterredList = useMemo(() => {
        switch (listType) {
            case "all":
                return taskList
            case "active":
                return activeList
            case "completed":
                return completedList
        }
    }, [listType, taskList, activeList, completedList])

    const handleTaskToggle = (taskId: string) =>
        dispatch(toggleTaskComplete(taskId))
    const handleDeleteTask = (taskId: string) => dispatch(deleteTask(taskId))
    const handleClearCompleted = () => dispatch(clearCompleted())

    return (
        <div className="w-full bg-bg-content rounded-md shadow-lg  relative">
            <div className="tasklist min-h-[0px] max-h-[300px] sm:max-h-[400px]  overflow-y-scroll">
                {filterredList.map((task) => (
                    <div
                        key={task.taskId}
                        className="group w-full  flex items-center gap-4 px-4 py-3 justify-between text-text-primary border-b border-gray-400/20 "
                    >
                        <div className="flex items-center gap-3">
                            <button
                                className={`w-4 h-4 p-1 flex-shrink-0 rounded-full 
                                    ${
                                        task.isCompleted
                                            ? "bg-gradient-to-tr from-primary-gradient-accent-1 to-primary-gradient-accent-2"
                                            : "border-[1px] hover:border-text-hover"
                                    }
                                `}
                                onClick={() => handleTaskToggle(task.taskId)}
                            >
                                <FaCheck
                                    className={`text-[9px] ${
                                        task.isCompleted
                                            ? "text-white"
                                            : "text-transparent"
                                    }`}
                                />
                            </button>
                            <p
                                className={`${
                                    task.isCompleted &&
                                    "line-through text-text-secondary"
                                } cursor-pointer`}
                            >
                                {task.task}
                            </p>
                        </div>
                        <FaX
                            className="cursor-pointer flex-shrink-0 sm:hidden group-hover:block text-text-secondary hover:text-text-hover"
                            onClick={() => handleDeleteTask(task.taskId)}
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-between px-4 py-3 text-text-secondary">
                <p>
                    {activeList.filter((task) => !task.isCompleted).length}{" "}
                    items left
                </p>
                <div
                    className={`flex gap-3 justify-center max-sm:left-0 max-sm:absolute max-sm:-bottom-[72px] max-sm:z-50 max-sm:w-full  max-sm:px-4 max-sm:py-3 text-text-secondary max-sm:bg-bg-content max-sm:shadow-lg max-sm:rounded-md`}
                >
                    <button
                        onClick={() => setListType("all")}
                        className={`${
                            listType === "all" &&
                            "text-primary hover:text-primary"
                        } hover:text-text-hover`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setListType("active")}
                        className={`${
                            listType === "active" &&
                            "text-primary hover:text-primary"
                        } hover:text-text-hover`}
                    >
                        Active
                    </button>
                    <button
                        onClick={() => setListType("completed")}
                        className={`${
                            listType === "completed" &&
                            "text-primary hover:text-primary"
                        } hover:text-text-hover`}
                    >
                        Completed
                    </button>
                </div>
                <button
                    onClick={() => handleClearCompleted()}
                    className="hover:text-text-hover"
                >
                    Clear Completed
                </button>
            </div>
        </div>
    )
}

export default TaskList
