import { createSlice } from "@reduxjs/toolkit";
import { counterAgent } from "../data";

const counterAgentSlice = createSlice({
    name: 'counterAgent',
    initialState: {
        counterAgent: counterAgent,

    },
    reducers: {
        
        delCard(state, action) {
          state.counterAgent = state.counterAgent.filter(card => card.id !== action.payload.id)
        },
    }
})


export const { delCard } = counterAgentSlice.actions

export default counterAgentSlice.reducer