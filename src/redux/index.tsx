import GameReducer from './game/reducers';
import GameSettingsReducer from './gameSettings/reducers';
import { combineReducers } from 'redux';
import { GameStateTypes } from './game/types';
import { GameSettingsStateTypes } from './gameSettings/types';
import { createStore } from 'redux';

export interface RootState {
    game: GameStateTypes;
    gameSettings: GameSettingsStateTypes;
}

 const combinedReducers = combineReducers({
    game: GameReducer,
    gameSettings: GameSettingsReducer
})

export default createStore(combinedReducers);
