import {
    GeneralActionsTypes, GeneralStateTypes,
    SET_GAME_TYPE,
    SET_NICKNAMES
} from './types';

const initialState: GeneralStateTypes = {
    gameType: 0,
    nicknames: {
        player1: '',
        player2: ''
    }
}

export default function (state = initialState, action: GeneralActionsTypes): GeneralStateTypes {
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
        default:
            return state;
    }
}
