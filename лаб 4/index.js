let gifts = ['Книга', 'Игрушка', 'Шоколад'];

function printGifts (gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log ("Подарок #" + (i + 1) + ": " + gifts[i]);
    }
}

printGifts (gifts);

gifts.push ('Конфеты');
printGifts (gifts);

gifts [1] = 'Наушники';
printGifts (gifts);

gifts.shift();
printGifts(gifts);