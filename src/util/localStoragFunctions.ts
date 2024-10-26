export const saveToLocalStorage = (name: string, item: unknown) => {
    localStorage.setItem(name, JSON.stringify(item))
}

export const getFromLocalStorage = (name: string): unknown => {
    const item = localStorage.getItem(name)
    return item ? JSON.parse(item) : null
}
