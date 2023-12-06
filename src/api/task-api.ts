import axios from "axios";

const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.1/',
        withCredentials: true,
    }
)

type UpdateAndDeleteTaskResponseType = {
    data: {
        item: TaskType
    }
    resultCode: number
    messages: string[]
}

type AddTaskResponseType = {
    data: {
        item: TaskType
    }
    resultCode: number
    messages: string[]
}

type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: Date
    deadline: Date
    id: string
    todoListId: string
    order: number
    addedDate: Date
}

export const TaskAPI = {
    getTasks(todolistId: string) {
        return instance.get(`todo-lists/${todolistId}/tasks`)
    },

    createTasks(todolistId: string, title: string) {
        return instance.post(`todo-lists/${todolistId}/tasks`, {todolistId, title})
    },

    deleteTasks(todolistId: string, taskId: string) {
        return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
    },

    updateTasks(todolistId: string, taskId: string) {
        return instance.put(`todo-lists/${todolistId}/tasks/${taskId}`, {todolistId, taskId})
    }

};

