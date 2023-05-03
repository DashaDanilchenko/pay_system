import {configureStore} from '@reduxjs/toolkit';
import cardsReducer from './cardsSlice';
import counterAgentReducer from './counterAgentSlice'

export default configureStore ({
    reducer: {
        cards: cardsReducer,
        counterAgent: counterAgentReducer,
    }
})