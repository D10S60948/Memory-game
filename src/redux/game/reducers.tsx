import {
    GameStateTypes, GameActionsTypes,
    SET_SELECTED_CARD_VALUE,
    RESET_SELECTED_CARD_VALUE,
    RESET_GAME,
    REMOVE_DISCOVERD_CARD_INDEX
} from './types';

const initialState: GameStateTypes = {
    score: [0, 0],
    discoveredPairs: 0,
    selectedCardValues: [],
    currentTurn: 0,
    unselectedCardsIndex: []
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
            const unselectedCardsIndex: Array<number> = [];
            for (let i = 0; i < 30; i++) {
                unselectedCardsIndex.push(i);
            }
            return { score: [0, 0], discoveredPairs: 0, selectedCardValues: [], currentTurn: 0, unselectedCardsIndex };
        case REMOVE_DISCOVERD_CARD_INDEX:
            const unselectedIndexes = [...state.unselectedCardsIndex];
            unselectedIndexes.splice(unselectedIndexes.indexOf(action.selectedIndex), 1);
            return { ...state, unselectedCardsIndex: [...unselectedIndexes] };
        default:
            return state;
    }
}
