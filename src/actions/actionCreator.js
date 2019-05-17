export const addTask = (id, text, isComplete) => ({
    type: 'ADD_TASK',
    id,
    text,
    isComplete
})

export const removeTask = id => ({
    type: 'REMOVE_TASK',
    id
})

export const completeTask = id => ({
    type: 'COMPLETE_TASK',
    id
})

export const changeList = category => ({
    type: 'CHANGE_LIST',
    category
})