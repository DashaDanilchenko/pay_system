import { createSlice } from "@reduxjs/toolkit";
import { genTime, genData } from "../helpers"

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
                appointment: action.payload.appointment,
                time: genTime(),
                date: genData(),
            })
        },  
    }
})


export const { newItemHistory } = historySlice.actions

export default historySlice.reducer