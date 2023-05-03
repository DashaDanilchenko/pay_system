import { createSlice } from "@reduxjs/toolkit";
import { cards } from "../data";

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: cards,

    },
    reducers: {
        plusBalance(state, action) {
          console.log(action)
            state.cards = state.cards.map(card => {
                          if (card.id !== action.payload.id) {
                            return card;
                          }
                          return { ...card, balance: 200 }
                        })
        },

        minusBalance(state, action) {
          console.log(action)
            state.cards = state.cards.map(card => {
                if (card.id !== action.payload.id) {
                  return card;
                }
                return { ...card, balance: 300 }
              })
        },  
    }
})


export const { plusBalance, minusBalance } = cardsSlice.actions

export default cardsSlice.reducer