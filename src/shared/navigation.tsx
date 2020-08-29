import { ParamListBase, RouteProp, Route } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export interface StackNavigationProps<
    ParamList extends ParamListBase,
    RouteName extends keyof ParamList = string
    > {
    navigation: StackNavigationProp<ParamList, RouteName>;
    route: RouteProp<ParamList, RouteName>;
}

export type RootStackParamList = {
    Home: undefined;
    GameType: undefined;
    CategorySelect: undefined;
    Game: undefined;
};


