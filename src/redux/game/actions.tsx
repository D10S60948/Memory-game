import {
    GameActionsTypes,
    SET_SELECTED_CARD_VALUE,
    RESET_SELECTED_CARD_VALUE,
    ADD_TO_DISCOVERD_PAIRS,
    RESET_GAME
} from './types'

export function setSelectedCard(cardValue: number): GameActionsTypes {
    return {
        type: SET_SELECTED_CARD_VALUE,
        payload: cardValue
    }
}

export function resetSelectedCards(): GameActionsTypes {
    return {
        type: RESET_SELECTED_CARD_VALUE
    }
}

export function addToDiscovoredPairs(value: number): GameActionsTypes {
    return {
        type: ADD_TO_DISCOVERD_PAIRS,
        payload: value
    }
}

export function resetGame(): GameActionsTypes {
    return {
        type: RESET_GAME
    }
}