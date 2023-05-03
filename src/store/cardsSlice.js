import { createSlice } from "@reduxjs/toolkit";
import { cards } from "../data";

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: cards,

    },
    reducers: {
        // addTodo(state, action){
        //     console.log(state)
        //     console.log(action)
        //     state.todos.push(
        //         {id: new Date().toISOString(),
        //         text: action.payload.text,
        //         complete:false,}
        //     )
        // },
        // delTodo(state, action){
        //     state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        // },
        // toggleTodoCompleted(state, action){
        //     state.todos = state.todos.map(todo => {
        //           if (todo.id !== action.payload.id) {
        //             return todo;
        //           }
            
        //           return { ...todo, completed: !todo.completed }
        //         })
        // },
    }
})


// export const {addTodo, delTodo, toggleTodoCompleted} = todoSlice.actions

export default cardsSlice.reducer