export const ADD_TO_DISCOVERD_PAIRS = 'ADD_TO_DISCOVERD_PAIR';
export const RESET_DISCOVERD_PAIRS = 'RESET_DISCOVERD_PAIR';
export const INCREMENT_SCORE = 'INCREMENT_SCORE';
export const RESET_SCORE = 'RESET_SCORE';
export const SET_SELECTED_CARD_VALUE = 'SET_SELECTED_CARD_VALUE';
export const RESET_SELECTED_CARD_VALUE = 'RESET_SELECTED_CARD_VALUE';
export const RESET_GAME = 'RESET_GAME';
export const REMOVE_DISCOVERD_CARD_INDEX = 'REMOVE_DISCOVERD_CARD_INDEX';

// state 
interface GameState {
    score: Array<number>;
    discoveredPairs: number;
    selectedCardValues: Array<number>;
    currentTurn: number;
    unselectedCardsIndex: Array<number>;
}

// actions
// discovered pairs
interface AddToDiscoveredPairsAction {
    type: typeof ADD_TO_DISCOVERD_PAIRS
    payload: number
}
interface ResetDiscoveredPairsAction {
    type: typeof RESET_DISCOVERD_PAIRS
}
interface RemoveDiscoveredCardIndexAction {
    type: typeof REMOVE_DISCOVERD_CARD_INDEX
    selectedIndex: number
}
type DiscoveredPairsAction = AddToDiscoveredPairsAction | ResetDiscoveredPairsAction | RemoveDiscoveredCardIndexAction;

// score
interface IncrementScoreAction {
    type: typeof INCREMENT_SCORE
    payload: number
}
interface ResetScoreAction {
    type: typeof RESET_SCORE
}
type ScoreActions = ResetScoreAction | IncrementScoreAction;

// selected card
interface SetSelectedCardAction {
    type: typeof SET_SELECTED_CARD_VALUE
    payload: number
}
interface ResetSelectedCardAction {
    type: typeof RESET_SELECTED_CARD_VALUE
}
type SelectedCardActions = SetSelectedCardAction | ResetSelectedCardAction;

// game
interface ResetGame {
    type: typeof RESET_GAME
}
type GameActions = ResetGame;

export type GameActionsTypes = DiscoveredPairsAction | ScoreActions | SelectedCardActions | GameActions;
export type GameStateTypes = GameState;
