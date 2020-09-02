export const colors = {
    BLUE: '#56CCF2',
    RED: '#EB5757',
    PURPLE: '#924FD1',
    DARK_GREY: 'rgb(70,70,70)',
    VERY_DARK_GREY: 'rgb(30,30,30)',
    LIGHT_GREY: 'rgb(180,180,180)',
    VERY_LIGHT_GREY: 'rgb(220,220,220)',
    OFFWHITE: 'rgb(240,240,240)'
}

export function shadowStyle(elevation: number) : object {
    return {
        elevation,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 0.5 * elevation },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * elevation
    };
}
