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
            console.log(action)
            state.counterAgent.push({
              id: randomId(),
              number: genNumber(),
              data: genData(),
              surname: action.payload.surname,
              name: action.payload.name,
              patronymic: action.payload.patronymic,
            })
          }
    }
})


export const { delCardCA, addCardCA } = counterAgentSlice.actions

export default counterAgentSlice.reducer