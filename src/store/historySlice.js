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
                appointment: action.payload.appointment,
                time: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`,
                date: `${new Date().getDay()} / ${new Date().getMonth()} / ${new Date().getFullYear()} `,
            })
        },  
    }
})


export const { newItemHistory } = historySlice.actions

export default historySlice.reducer