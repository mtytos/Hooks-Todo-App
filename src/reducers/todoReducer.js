import uuid from 'uuid/dist/v1';

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                title: action.title,
                text: action.text,
                id: uuid()
            }]
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.todo.id)
        default:
            return state
    }
}