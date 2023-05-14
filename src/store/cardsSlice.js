import { createSlice } from "@reduxjs/toolkit";
import { cards } from "../data";
import { randomId, genNumber, genData } from "../helpers"

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
                return { ...card, balance: card.balance - Number(action.payload.summa) }
              })
        },

        plusBalance(state, action) {
            state.cards = state.cards.map(card => {
                          if (card.id !== action.payload.idOn.id) {
                            return card;
                          }
                          return { ...card, balance: card.balance + Number(action.payload.summa) }
                        })
        },
        
        delCard(state, action) {
          state.cards = state.cards.filter(card => card.id !== action.payload)
        },

        selectedCardFrom(state, action) {
          // console.log(action)
          state.cards = state.cards.map(card => { return {...card, colorFrom: false}})
          state.cards = state.cards.map(card => {
            if (card.id !== action.payload.id) {
              return card;
            }
            return { ...card, colorFrom: !card.colorFrom}
          })
        },

        selectedCardOn(state, action) {
          // console.log(action)
          state.cards = state.cards.map(card => { return {...card, colorOn: false}})
          state.cards = state.cards.map(card => {
            if (card.id !== action.payload.id) {
              return card;
            }
            return { ...card, colorOn: !card.colorOn}
          })
        },

        addCard(state) {
          state.cards.push({
            id: randomId(),
            number: genNumber(),
            data: genData(),
            balance: 100,
          })
        }
    }
})


export const { plusBalance, minusBalance, selectedCardFrom, selectedCardOn , delCard, addCard } = cardsSlice.actions

export default cardsSlice.reducer