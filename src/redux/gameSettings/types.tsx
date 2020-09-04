import { GameType } from '../../shared/types';
export const SET_GAME_TYPE = 'SET_GAME_TYPE';
export const SET_NICKNAMES = 'SET_NICKNAMES';
export const SET_NUMBER_OF_CARD_PAIRS = 'SET_NUMBER_OF__CARD_PAIRS';

interface Nicknames {
    player1: string;
    player2: string;
}

// state 
interface GameSettingsState {
    gameType: GameType;
    nicknames: Nicknames;
    numberOfPairs: number;
}

// actions
// game type
interface SetGameTypeAction {
    type: typeof SET_GAME_TYPE;
    payload: GameType;
}
type GameTypeActions = SetGameTypeAction;

// game type
interface SetNicknameAction {
    type: typeof SET_NICKNAMES;
    player: number;
    nickname: string;
}
type NicknamesActions = SetNicknameAction;

// number of card pairs
interface SetNumberOfCardPairs {
    type: typeof SET_NUMBER_OF_CARD_PAIRS;
    pairs: number;
}
type CardPairsActions = SetNumberOfCardPairs;


export type GameSettingsActionsTypes = GameTypeActions | NicknamesActions | CardPairsActions;
export type GameSettingsStateTypes = GameSettingsState;
