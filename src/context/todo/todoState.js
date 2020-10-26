import React, { useReducer } from 'react'

import todoContext from './todoContext'
import todoReducer from './todoReducer'

import {
    TODO_FORM,
    GET_TODOS,
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    TODO_ERROR
} from '../../types'

const TodoState = props => {
    const initialState = {
        todos: [],
        form: false,
        message: null
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const showForm = () => {
        dispatch({
            type: TODO_FORM
        })
    }

    const getTodos = () => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/todos`)
            .then(res => res.json)
            .catch(err => {
                dispatch({
                    type: TODO_ERROR,
                    payload: err
                })
            })
            .then(resParsed => {
                dispatch({
                    type: GET_TODOS,
                    payload: resParsed.todos 
                })
            })
            .catch(err => {
                dispatch({
                    type: TODO_ERROR,
                    payload: err
                })
            })
    }

    return (
        <todoContext.Provider
            value={{
                todos: state.todos,
                form: state.form,
                message: state.message,
                showForm,
                getTodos
            }}>
                {props.children}
        </todoContext.Provider>
    )
}

export default TodoState