import {
    GameSettingsActionsTypes, GameSettingsStateTypes,
    SET_GAME_TYPE,
    SET_NICKNAMES,
    SET_NUMBER_OF_CARD_PAIRS
} from './types';

const initialState: GameSettingsStateTypes = {
    gameType: 0,
    nicknames: {
        player1: '',
        player2: ''
    },
    numberOfPairs: 10
}

export default function (state = initialState, action: GameSettingsActionsTypes): GameSettingsStateTypes {
    switch (action.type) {
        case SET_GAME_TYPE:
            return { ...state, gameType: action.payload };
        case SET_NICKNAMES:
            const { nicknames } = state;
            if (action.player === 1) {
                nicknames.player1 = action.nickname;
            } else {
                nicknames.player2 = action.nickname;
            }
            return { ...state, nicknames };
        case SET_NUMBER_OF_CARD_PAIRS:
            return {...state, numberOfPairs: action.pairs}
        default:
            return state;
    }
}
