import {
    GameSettingsActionsTypes,
    SET_GAME_TYPE,
    SET_NICKNAMES,
    SET_NUMBER_OF_CARD_PAIRS,
    SET_CATEGORY
} from './types';
import { GameType } from '../../shared/types';

export function setGameType(gameType: GameType): GameSettingsActionsTypes {
    return {
        type: SET_GAME_TYPE,
        payload: gameType
    }
}

export function setNickname(player: number, nickname: string): GameSettingsActionsTypes {
    return {
        type: SET_NICKNAMES,
        nickname,
        player
    }
}

export function setNumberOfCardPairs(pairs: number): GameSettingsActionsTypes {
    return {
        type: SET_NUMBER_OF_CARD_PAIRS,
        pairs
    }
}

export function setCategory(category: "animals" | "sport" | "transportation" | "food" | "cartoons"): GameSettingsActionsTypes {
    return {
        type: SET_CATEGORY,
        category
    }
}
