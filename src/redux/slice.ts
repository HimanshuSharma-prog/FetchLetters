import { createSlice } from "@reduxjs/toolkit"

export type letters = {
    id: string;
    letter: string;
}

export type card = {
    id: string;
    letter: letters[]
}

export type CardState = {
    cards: card[]
}

const initialState: CardState = {
    cards: []
}

const counterReducer = createSlice({
    name: 'CounterReducer',
    initialState,
    reducers: {
        addCard: (state, action) => {
            state.cards.push(action.payload)
        },
        UpdateCard: (state, action) => {
            const { id, letter } = action.payload
            const cardArray = state.cards.map((elem) => {
                if (elem.id === id) {
                    const letters = elem.letter
                    letters.push(letter)
                    return {
                        ...elem,
                        letter: letters
                    }
                }
                return elem
            })
            state.cards = cardArray
        }
    },
})

export const { addCard, UpdateCard } = counterReducer.actions
export default counterReducer.reducer