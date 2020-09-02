import GameReducer from './game/reducers';
import GeneralReducer from './general/reducers';
import { combineReducers } from 'redux';

export default combineReducers({
    game: GameReducer,
    general: GeneralReducer
})
