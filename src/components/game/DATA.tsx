export const animals = [
    { image: require('../../../assets/images/animals/lion.jpg'), value: 0 },
    { image: require('../../../assets/images/animals/bunny.jpg'), value: 1 },
    { image: require('../../../assets/images/animals/cat.jpg'), value: 2 },
    { image: require('../../../assets/images/animals/cow.jpg'), value: 3 },
    { image: require('../../../assets/images/animals/deer.jpg'), value: 4 },
    { image: require('../../../assets/images/animals/fish.jpg'), value: 5 },
    { image: require('../../../assets/images/animals/lizard.jpg'), value: 6 },
    { image: require('../../../assets/images/animals/monkey.jpg'), value: 7 },
    { image: require('../../../assets/images/animals/owl.jpg'), value: 8 },
    { image: require('../../../assets/images/animals/pig.jpg'), value: 9 },
    { image: require('../../../assets/images/animals/snail.jpg'), value: 10 },
    { image: require('../../../assets/images/animals/wolf.jpg'), value: 11 },
    { image: require('../../../assets/images/animals/zebra.jpg'), value: 12 },
    { image: require('../../../assets/images/animals/bear.jpeg'), value: 13 },
    { image: require('../../../assets/images/animals/surikata.jpeg'), value: 14 }
]

export const mixCards = (cards: Array<object>) => {
    const mixedCards = [...cards, ...cards];
    for (let i = mixedCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mixedCards[i], mixedCards[j]] = [mixedCards[j], mixedCards[i]];
    }
    return mixedCards;
}