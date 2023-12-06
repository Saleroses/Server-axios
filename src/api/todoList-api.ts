import axios from "axios";

const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.1/',
        withCredentials: true,
    }
)

type UpdateAndDeleteTodoListResponseType = {
    data: {}
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}

type AddTodoListResponseType = {
    data: {
        item: TodoListType
    }
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}

type TodoListType = {
    addedDate: Date
    id: string
    order: number
    title: string
}

export const TodoListAPI = {
    getTodolists() {
        return instance.get<TodoListType[]>('todo-lists')
    },

    createTodolist(title: string) {
        return instance.post<AddTodoListResponseType>('todo-lists', {title})
    },

    deleteTodolist(todoId: string) {
        return instance.put<UpdateAndDeleteTodoListResponseType>(`todo-lists/${todoId}`)
    },

    updateTodoList(todoId: string, title: string) {
        return instance.put<UpdateAndDeleteTodoListResponseType>(`todo-lists/${todoId}`,
            {title})
    }

};

