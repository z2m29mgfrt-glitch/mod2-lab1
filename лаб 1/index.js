let name = 'Екатерина';
console.log(myname);

let surname = 'Лысова';
console.log(mysurname);

let bachelor = true;
console.log(bachelor);

let age = 23;
console.log(age);

let fullname = myname + ' ' + mysurname;
fullname = fullname + ' возраст: ' + age;
console.log(fullname);


let hour = 14;
let work = hour >= 9 && hour <= 18;
let today = 'пятница';
let holiday = today === 'суббота' || today === 'воскресенье';
let canwork = work && !holiday;
console.log(canwork);


let celsius = prompt("введите температуру в Цельсиях:");
celsius = Number(celsius);

const fahrenheit = celsius * 9/5 + 32;
alert(fahrenheit);