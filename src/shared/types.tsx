
export enum GameType {
    COMPUTER = 0,
    SAME_DEVICE,
    ONLINE
}

export enum NavigationDirection {
    BACK, FORWARD
}

export type CategoryListType = {
    title: string,
    image: any,
    value: 'animals' | 'food' | 'sport' | 'transportation' | 'cartoons'
}