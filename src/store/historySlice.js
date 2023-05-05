import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name: 'history',
    initialState: {
        history: [],

    },
    reducers: {

        newItemHistory(state, action) {
            state.history.push({
                id: new Date().toISOString(),
                from: action.payload.fromNumberCard,
                on: action.payload.onNumberCard,
                summa: action.payload.summa,
                name: action.payload.name,
                date: new Date().getDate(),
            })
        },  
    }
})


export const { newItemHistory } = historySlice.actions

export default historySlice.reducer