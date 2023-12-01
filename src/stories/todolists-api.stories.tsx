import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
    title: 'API'
}

const config = {withCredentials: true} // переменная с доп параметрами запроса

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

       const promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', config)
           promise.then((res)=> {
               setState(res.data)
           })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists',{title: 'First'}, config)
            .then((res)=>{
                setState(res.data)
            })
        }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '15d3435f-7419-4f08-b1ef-5f6d845ebf8e'
        axios.delete(`https://social-network.samuraijs.com/api/1.1//todo-lists/${todoId}`, config)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '1d660dd6-0bd1-46ba-a503-47533c82e11d'
        axios.put(`https://social-network.samuraijs.com/api/1.1//todo-lists/${todoId}`, {title: 'React'},config)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

