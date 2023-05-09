import { createSlice } from "@reduxjs/toolkit";
import { counterAgent } from "../data";

const counterAgentSlice = createSlice({
    name: 'counterAgent',
    initialState: {
        counterAgent: counterAgent,
    },
    reducers: {
        
        delCardCA(state, action) {
            console.log(action.payload)
            state.counterAgent = state.counterAgent.filter(card => card.id !== action.payload)
        },
    }
})


export const { delCardCA } = counterAgentSlice.actions

export default counterAgentSlice.reducer