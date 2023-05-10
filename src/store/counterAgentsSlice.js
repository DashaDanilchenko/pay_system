import { createSlice } from "@reduxjs/toolkit";
import { counterAgent } from "../data";
import { randomId, genNumber, genData } from "../helpers"

const counterAgentSlice = createSlice({
    name: 'counterAgent',
    initialState: {
        counterAgent: counterAgent,
    },
    reducers: {
        
        delCardCA(state, action) {
            state.counterAgent = state.counterAgent.filter(card => card.id !== action.payload)
        },
        addCardCA(state, action) {
            state.counterAgent.push({
              id: randomId(),
              number: genNumber(),
              data: genData(),
              name: action.payload.name,
            })
          }
    }
})


export const { delCardCA, addCardCA } = counterAgentSlice.actions

export default counterAgentSlice.reducer