export const animals = [
    { image: require('../../../assets/images/animals/lion.jpg'), value: 0 },
    { image: require('../../../assets/images/animals/tiger.jpg'), value: 1 },
    { image: require('../../../assets/images/animals/rabit.jpg'), value: 2 },
    { image: require('../../../assets/images/animals/cow.jpg'), value: 3 },
    { image: require('../../../assets/images/animals/deer.jpg'), value: 4 },
    { image: require('../../../assets/images/animals/fish.jpg'), value: 5 },
    { image: require('../../../assets/images/animals/lizard.jpg'), value: 6 },
    { image: require('../../../assets/images/animals/gorilla.jpg'), value: 7 },
    { image: require('../../../assets/images/animals/owl.jpg'), value: 8 },
    { image: require('../../../assets/images/animals/pig.jpg'), value: 9 },
    { image: require('../../../assets/images/animals/snail.jpg'), value: 10 },
    { image: require('../../../assets/images/animals/wolf.jpg'), value: 11 },
    { image: require('../../../assets/images/animals/zebra.jpg'), value: 12 },
    { image: require('../../../assets/images/animals/bear.jpeg'), value: 13 },
    { image: require('../../../assets/images/animals/surikata.jpeg'), value: 14 }
];

export const food = [
    { image: require('../../../assets/images/food/burger.jpg'), value: 0 },
    { image: require('../../../assets/images/food/cake.jpg'), value: 1 },
    { image: require('../../../assets/images/food/cheese.jpg'), value: 2 },
    { image: require('../../../assets/images/food/chips.jpg'), value: 3 },
    { image: require('../../../assets/images/food/cornflakes.jpg'), value: 4 },
    { image: require('../../../assets/images/food/empanadas.jpg'), value: 5 },
    { image: require('../../../assets/images/food/falafel.jpg'), value: 6 },
    { image: require('../../../assets/images/food/hummus.jpg'), value: 7 },
    { image: require('../../../assets/images/food/lasagna.jpg'), value: 8 },
    { image: require('../../../assets/images/food/pasta.jpg'), value: 9 },
    { image: require('../../../assets/images/food/pie.jpg'), value: 10 },
    { image: require('../../../assets/images/food/pizza.jpg'), value: 11 },
    { image: require('../../../assets/images/food/shakshuka.jpg'), value: 12 },
    { image: require('../../../assets/images/food/soup.jpg'), value: 13 },
    { image: require('../../../assets/images/food/wellington.jpg'), value: 14 }
];

export const sport = [
    { image: require('../../../assets/images/sport/basketball.jpg'), value: 0 },
    { image: require('../../../assets/images/sport/boxing.jpg'), value: 1 },
    { image: require('../../../assets/images/sport/car_racing.jpg'), value: 2 },
    { image: require('../../../assets/images/sport/chess.jpg'), value: 3 },
    { image: require('../../../assets/images/sport/cycling.jpg'), value: 4 },
    { image: require('../../../assets/images/sport/football.jpg'), value: 5 },
    { image: require('../../../assets/images/sport/golf.jpg'), value: 6 },
    { image: require('../../../assets/images/sport/height_jump.jpg'), value: 7 },
    { image: require('../../../assets/images/sport/judo.jpg'), value: 8 },
    { image: require('../../../assets/images/sport/rogby.jpg'), value: 9 },
    { image: require('../../../assets/images/sport/running.jpg'), value: 10 },
    { image: require('../../../assets/images/sport/soccer.jpg'), value: 11 },
    { image: require('../../../assets/images/sport/table_tennis.jpg'), value: 12 },
    { image: require('../../../assets/images/sport/tennis.jpg'), value: 13 },
    { image: require('../../../assets/images/sport/volleyball.jpg'), value: 14 }
];

export const transportation = [
    { image: require('../../../assets/images/transportation/transportation1.jpg'), value: 0 },
    { image: require('../../../assets/images/transportation/transportation2.jpg'), value: 1 },
    { image: require('../../../assets/images/transportation/transportation3.jpg'), value: 2 },
    { image: require('../../../assets/images/transportation/transportation4.jpg'), value: 3 },
    { image: require('../../../assets/images/transportation/transportation5.jpg'), value: 4 },
    { image: require('../../../assets/images/transportation/transportation6.jpg'), value: 5 },
    { image: require('../../../assets/images/transportation/transportation7.jpg'), value: 6 },
    { image: require('../../../assets/images/transportation/transportation8.jpg'), value: 7 },
    { image: require('../../../assets/images/transportation/transportation9.jpg'), value: 8 },
    { image: require('../../../assets/images/transportation/transportation10.jpg'), value: 9 },
    { image: require('../../../assets/images/transportation/transportation11.jpg'), value: 10 },
    { image: require('../../../assets/images/transportation/transportation12.jpg'), value: 11 },
    { image: require('../../../assets/images/transportation/transportation13.jpg'), value: 12 },
    { image: require('../../../assets/images/transportation/transportation14.jpg'), value: 13 },
    { image: require('../../../assets/images/transportation/transportation15.jpg'), value: 14 }
];

export const cartoons = [
    { image: require('../../../assets/images/cartoons/cartoon1.jpg'), value: 0 },
    { image: require('../../../assets/images/cartoons/cartoon2.jpg'), value: 1 },
    { image: require('../../../assets/images/cartoons/cartoon3.jpg'), value: 2 },
    { image: require('../../../assets/images/cartoons/cartoon4.jpg'), value: 3 },
    { image: require('../../../assets/images/cartoons/cartoon5.jpg'), value: 4 },
    { image: require('../../../assets/images/cartoons/cartoon6.jpg'), value: 5 },
    { image: require('../../../assets/images/cartoons/cartoon7.jpg'), value: 6 },
    { image: require('../../../assets/images/cartoons/cartoon8.jpg'), value: 7 },
    { image: require('../../../assets/images/cartoons/cartoon9.jpg'), value: 8 },
    { image: require('../../../assets/images/cartoons/cartoon10.jpg'), value: 9 },
    { image: require('../../../assets/images/cartoons/cartoon11.jpg'), value: 10 },
    { image: require('../../../assets/images/cartoons/cartoon12.jpg'), value: 11 },
    { image: require('../../../assets/images/cartoons/cartoon13.jpg'), value: 12 },
    { image: require('../../../assets/images/cartoons/cartoon14.jpg'), value: 13 },
    { image: require('../../../assets/images/cartoons/cartoon15.jpg'), value: 14 }
];

export const mixCards = (cards: Array<object>) => {
    const mixedCards = [...cards, ...cards];
    for (let i = mixedCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mixedCards[i], mixedCards[j]] = [mixedCards[j], mixedCards[i]];
    }
    return mixedCards;
}