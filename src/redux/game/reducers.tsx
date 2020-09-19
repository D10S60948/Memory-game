import {
    GameStateTypes, GameActionsTypes,
    SET_SELECTED_CARD_VALUE,
    RESET_SELECTED_CARD_VALUE,
    RESET_GAME,
    SET_TURN
} from './types';

const initialState: GameStateTypes = {
    score: [0, 0],
    discoveredPairs: 0,
    selectedCardValues: [],
    currentTurn: 0,
    unselectedCardsIndex: [],
    firstFlippedIndex: -1
}

export default function (state = initialState, action: GameActionsTypes): GameStateTypes {
    switch (action.type) {
        case SET_SELECTED_CARD_VALUE:
            let { firstFlippedIndex, currentTurn, selectedCardValues, score, discoveredPairs } = state;
            var unselectedIndexes = [...state.unselectedCardsIndex];
            const twoCardsFlipped = selectedCardValues.length === 1;
            if (twoCardsFlipped) {
                const goodGuess = selectedCardValues[0] === action.value;
                if (goodGuess) {
                    unselectedIndexes.splice(unselectedIndexes.indexOf(action.index), 1);
                    unselectedIndexes.splice(unselectedIndexes.indexOf(state.firstFlippedIndex), 1);
                    discoveredPairs++;
                    score[currentTurn]++;

                }
                else {
                    currentTurn = 1 - state.currentTurn;
                }
            }
            else {
                firstFlippedIndex = action.index;
            }
            return { ...state, selectedCardValues: [...state.selectedCardValues, action.value], currentTurn, score, discoveredPairs, unselectedCardsIndex: [...unselectedIndexes], firstFlippedIndex };
        case RESET_SELECTED_CARD_VALUE:
            return { ...state, selectedCardValues: [] };
        case RESET_GAME:
            const unselectedCardsIndex: Array<number> = [];
            for (let i = 0; i < action.pairs * 2; i++) {
                unselectedCardsIndex.push(i);
            }
            return { score: [0, 0], discoveredPairs: 0, selectedCardValues: [], currentTurn: 0, unselectedCardsIndex, firstFlippedIndex: 0 };
        case SET_TURN:
            return { ...state, currentTurn: action.turn };
        default:
            return state;
    }
}
