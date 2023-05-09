import { createSlice } from "@reduxjs/toolkit";
import { cards } from "../data";

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: cards,

    },
    reducers: {

        minusBalance(state, action) {
            state.cards = state.cards.map(card => {
                if (card.id !== action.payload.idFrom.id) {
                  return card;
                }
                return { ...card, balance: card.balance - action.payload.summa }
              })
        },

        plusBalance(state, action) {
            state.cards = state.cards.map(card => {
                          if (card.id !== action.payload.idOn.id) {
                            return card;
                          }
                          return { ...card, balance: card.balance + action.payload.summa }
                        })
        },
        
        delCard(state, action) {
          state.cards = state.cards.filter(card => card.id !== action.payload)
        },
    }
})


export const { plusBalance, minusBalance, delCard } = cardsSlice.actions

export default cardsSlice.reducer