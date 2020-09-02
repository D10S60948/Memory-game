import {
    GameStateTypes, GameActionsTypes,
    SET_SELECTED_CARD_VALUE,
    RESET_SELECTED_CARD_VALUE,
    RESET_GAME,
} from './types';

const initialState: GameStateTypes = {
    score: [0, 0],
    discoveredPairs: 0,
    selectedCardValues: [],
    currentTurn: 0
}

export default function (state = initialState, action: GameActionsTypes): GameStateTypes {
    switch (action.type) {
        case SET_SELECTED_CARD_VALUE:
            let { currentTurn, selectedCardValues, score, discoveredPairs } = state;
            const twoCardsFlipped = selectedCardValues.length === 1;
            const goodGuess = selectedCardValues[0] === action.payload;
            if (twoCardsFlipped) {
                if (goodGuess) {
                    discoveredPairs++;
                    score[currentTurn]++;
                }
                else {
                    currentTurn = 1 - state.currentTurn;
                }
            }
            return { ...state, selectedCardValues: [...state.selectedCardValues, action.payload], currentTurn, score, discoveredPairs };
        case RESET_SELECTED_CARD_VALUE:
            return { ...state, selectedCardValues: [] };
        case RESET_GAME:
            return { score: [0, 0], discoveredPairs: 0, selectedCardValues: [], currentTurn: 0 };
        default:
            return state;
    }
}
