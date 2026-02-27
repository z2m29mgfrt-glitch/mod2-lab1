let myFavoriteBook = {
    title: 'Проклятие желтого императора',
    pages: 542
};

console.log (myFavoriteBook);

myFavoriteBook.quotes = [
    'Как мы можем знать, что такое смерть, когда мы не знаем еще, что такое жизнь?',
    'Не полагаться на письмена и священные тексты, а учиться от сердца к сердцу, только так можно прозреть.'
];

console.log (myFavoriteBook.quotes);

let author = {
    firstName: 'Юнь',
    lastName: 'Хуянь'
};

myFavoriteBook.author = author;
console.log (myFavoriteBook.author.firstName + " " + myFavoriteBook.author.lastName);

let title1 = myFavoriteBook.title;
console.log (title1);

let title2 = myFavoriteBook ['title'];
console.log (title2);

myFavoriteBook.pages = 539;
console.log (myFavoriteBook.pages);

let text = JSON.stringify(myFavoriteBook);
console.log('JSON-строка:', text);

let restoredBook = JSON.parse (text);
console.log("Восстановленный объект:", restoredBook);

for (let key in restoredBook) {
    console.log ('Свойство:', key);
}