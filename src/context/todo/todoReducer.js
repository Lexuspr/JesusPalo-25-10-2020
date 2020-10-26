import {
    TODO_FORM,
    GET_TODOS,
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    TODO_ERROR
} from '../../types'

const todoReducer = (state, action) => {
    switch (action.type) {
        case TODO_FORM:
            return {
                ...state,
                form: true
            }
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                form: false,
                errorForm: false
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo._id === action.payload._id ? action.payload : todo)
            }
        case DELETE_TODO:
            return {
                ...state,
                todo: state.todos.filter(todo => todo._id !== action.payload._id )
            }
        case TODO_ERROR:
            return {
                ...state,
                message: action.payload
            }
        default:
            break;
    }
}

export default todoReducer
