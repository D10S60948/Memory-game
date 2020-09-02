import { GameType } from '../../shared/types';
export const SET_GAME_TYPE = 'SET_GAME_TYPE';
export const SET_NICKNAMES = 'SET_NICKNAMES';

interface Nicknames {
    player1: string;
    player2: string;
}

// state 
interface GeneralState {
    gameType: GameType
    nicknames: Nicknames
}

// actions
// game type
interface SetGameTypeAction {
    type: typeof SET_GAME_TYPE
    payload: GameType
}
type GameTypeActions = SetGameTypeAction;

// game type
interface SetNicknameAction {
    type: typeof SET_NICKNAMES
    player: number
    nickname: string
}
type NicknamesActions = SetNicknameAction;


export type GeneralActionsTypes = GameTypeActions | NicknamesActions;
export type GeneralStateTypes = GeneralState;
