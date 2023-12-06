import React, {useEffect, useState} from 'react'
import axios from "axios";
import {TodoListAPI} from "../api/todoList-api";
import {TaskAPI} from "../api/task-api";

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



export const GetTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        TaskAPI.getTasks('e71871fb-0a8e-4b40-88a4-ce5ea64722cc')
            .then((res)=>{
                setState(res.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}


export const CreateTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'React'
        const todolistId = 'e71871fb-0a8e-4b40-88a4-ce5ea64722cc'
        TaskAPI.createTasks(todolistId ,title)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}


export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'e71871fb-0a8e-4b40-88a4-ce5ea64722cc'
        const taskId = '36bbfbd2-181f-4cb6-ad9d-f461ebe60cae'
        TaskAPI.deleteTasks(todolistId, taskId)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}


export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'e71871fb-0a8e-4b40-88a4-ce5ea64722cc'
        const taskId = '4de441f4-d497-46df-af6c-602497b92ecd'
        TaskAPI.updateTasks(todolistId, taskId)
            .then((res)=>{
                setState(res.data)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}
