export const ADD_TO_DISCOVERD_PAIRS = 'ADD_TO_DISCOVERD_PAIR';
export const INCREMENT_SCORE = 'INCREMENT_SCORE';
export const SET_SELECTED_CARD_VALUE = 'SET_SELECTED_CARD_VALUE';
export const SET_TURN = 'SET_TURN';
export const RESET_SELECTED_CARD_VALUE = 'RESET_SELECTED_CARD_VALUE';
export const RESET_GAME = 'RESET_GAME';

// state 
interface GameState {
    score: Array<number>;
    discoveredPairs: number;
    selectedCardValues: Array<number>;
    currentTurn: number;
    unselectedCardsIndex: Array<number>;
    firstFlippedIndex: number;
}

// score
interface IncrementScoreAction {
    type: typeof INCREMENT_SCORE;
    payload: number;
}
type ScoreActions = IncrementScoreAction;

// selected card
interface SetSelectedCardAction {
    type: typeof SET_SELECTED_CARD_VALUE;
    value: number;
    index: number;
}
interface ResetSelectedCardAction {
    type: typeof RESET_SELECTED_CARD_VALUE;
}
type SelectedCardActions = SetSelectedCardAction | ResetSelectedCardAction;

// game
interface ResetGame {
    type: typeof RESET_GAME;
    pairs: number;
}
type GameActions = ResetGame;

interface SetTurn {
    type: typeof SET_TURN;
    turn: number;
}

export type GameActionsTypes = ScoreActions | SelectedCardActions | GameActions | SetTurn;
export type GameStateTypes = GameState;
