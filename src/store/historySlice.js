import { createSlice } from "@reduxjs/toolkit";
import { randomId, genTime, genData } from "../helpers"

const historySlice = createSlice({
    name: 'history',
    initialState: {
        history: [],

    },
    reducers: {

        newItemHistory(state, action) {
            state.history.push({
                id: randomId(),
                from: action.payload.fromNumberCard,
                on: action.payload.onNumberCard,
                summa: action.payload.summa,
                name: action.payload.name,
                appointment: action.payload.appointment,
                time: genTime(),
                date: genData(),
                balance: action.payload.balance,
            })
        },  
    }
})


export const { newItemHistory } = historySlice.actions

export default historySlice.reducer