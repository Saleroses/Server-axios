import React, {useEffect, useState} from 'react'

import {TaskAPI} from "../api/task-api";


export const GetTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        TaskAPI.getTasks('')
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
        const todolistId = ''
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
        const todolistId = 'ffwwwfw'
        const taskId = ''
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
        const taskId = 'First'
        TaskAPI.updateTasks(todolistId, taskId)
            .then((res)=>{
                setState(res.data)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}

