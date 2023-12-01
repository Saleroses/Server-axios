import React, {useEffect, useState} from 'react'
import axios from "axios";
import {TodoListAPI} from "../api/todoList-api";

export default {
    title: 'API'
}

const config = {withCredentials: true} // переменная с доп параметрами запроса

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        TodoListAPI.getTodolists()
            .then((res)=>{
                setState(res.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'React'
            TodoListAPI.createTodolist(title)
                .then((res)=>{
                    setState(res.data)
                })
        }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = 'ffwwwfw'
        TodoListAPI.deleteTodolist(todoId)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = 'e71871fb-0a8e-4b40-88a4-ce5ea64722cc'
        const title = 'First'
        TodoListAPI.updateTodoList(todoId, title)
            .then((res)=>{
                setState(res.data)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}

