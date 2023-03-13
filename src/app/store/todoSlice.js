import { createSlice } from "@reduxjs/toolkit";
// import api from "../api";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        tasks: []
        // api.tasks.fetchAll()
    },
    reducers: {
        addTask(state, action){
            state.tasks.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false
            })
        },
        removeTask(state, action){
                state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
        },
        completeTask(state, action){
            const completedTask = state.tasks.find(task => task.id === action.payload.id)
            completedTask.completed = !completedTask.completed
        }
    }
})

export const {addTask, removeTask, completeTask} = todoSlice.actions

export default todoSlice.reducer