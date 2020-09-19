import {
    GameActionsTypes,
    SET_SELECTED_CARD_VALUE,
    RESET_SELECTED_CARD_VALUE,
    RESET_GAME,
    SET_TURN
} from './types'

export function setSelectedCard(value: number, index: number): GameActionsTypes {
    return {
        type: SET_SELECTED_CARD_VALUE,
        value,
        index
    }
}

export function resetSelectedCards(): GameActionsTypes {
    return {
        type: RESET_SELECTED_CARD_VALUE
    }
}

export function resetGame(pairs: number): GameActionsTypes {
    return {
        type: RESET_GAME,
        pairs
    }
}

export function setTurn(turn: number): GameActionsTypes {
    return {
        type: SET_TURN,
        turn
    }
}
