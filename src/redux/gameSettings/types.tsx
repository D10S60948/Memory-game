import { GameType } from '../../shared/types';
export const SET_GAME_TYPE = 'SET_GAME_TYPE';
export const SET_NICKNAMES = 'SET_NICKNAMES';
export const SET_NUMBER_OF_CARD_PAIRS = 'SET_NUMBER_OF__CARD_PAIRS';
export const SET_CATEGORY = 'SET_CATEGORY';

interface Nicknames {
    player1: string;
    player2: string;
}

// state 
interface GameSettingsState {
    gameType: GameType;
    nicknames: Nicknames;
    numberOfPairs: number;
    category: 'animals' | 'sport' | 'transportation' | 'food' | 'cartoons';
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

// category
interface SetCategory {
    type: typeof SET_CATEGORY;
    category: 'animals' | 'sport' | 'transportation' | 'food' | 'cartoons';
}
type CategoryActions = SetCategory;


export type GameSettingsActionsTypes = GameTypeActions | NicknamesActions | CardPairsActions | CategoryActions;
export type GameSettingsStateTypes = GameSettingsState;
