import { GameStateTypes } from './game/types';
import { GeneralStateTypes } from './general/types';

export interface RootState {
    game: GameStateTypes;
    general: GeneralStateTypes;
}