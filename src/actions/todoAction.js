export const addTodo = (title, text) => {
    return {
        type: 'ADD_TODO',
        title,
        text
    }
};

export const removeTodo = (todo) => {
    return {
        type: 'REMOVE_TODO',
        todo
    }
};