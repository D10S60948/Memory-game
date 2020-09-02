import {
    GeneralActionsTypes,
    SET_GAME_TYPE,
    SET_NICKNAMES
} from './types';
import { GameType } from '../../shared/types';

export function setGameType(gameType: GameType): GeneralActionsTypes {
    return {
        type: SET_GAME_TYPE,
        payload: gameType
    }
}

export function setNickname(player: number, nickname: string): GeneralActionsTypes {
    return {
        type: SET_NICKNAMES,
        nickname,
        player
    }
}
