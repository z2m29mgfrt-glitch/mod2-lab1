const users = [
  { firstName: 'John', lastName: 'Doe', age: 25 },
  { firstName: 'Jane', lastName: 'Smith', age: 30 },
  { firstName: 'Bob', lastName: 'Johnson', age: 35 }
];

const users2 = [];

for (let i = 0; i < users.length; i++) {
    const newUser = {
        fullName: users[i].firstName + ' ' + users[i].lastName,
        age: users[i].age + ' лет',
        id: i + 1
    };

    users2.push(newUser);
}

console.log("Трансформация списка пользователей:", users2);


const products = [
  { name: 'Ноутбук', price: 75000, category: 'электроника', inStock: true },
  { name: 'Книга', price: 500, category: 'книги', inStock: true },
  { name: 'Телефон', price: 45000, category: 'электроника', inStock: false },
  { name: 'Футболка', price: 1500, category: 'одежда', inStock: true },
  { name: 'Планшет', price: 35000, category: 'электроника', inStock: true },
];

const electronics = products.filter (product => {
    return product.category === 'электроника' && product.inStock === true;
});

console.log ('Электроника в наличии: ', electronics);


const cart = [
  { name: 'Футболка', price: 1500, quantity: 2 },
  { name: 'Джинсы', price: 3500, quantity: 1 },
  { name: 'Кроссовки', price: 4500, quantity: 1 },
  { name: 'Кепка', price: 800, quantity: 3 }
];

let clothes = cart[0].name;
let lowprice = cart[0].price;

for (let i = 1; i < cart.length; i++) {
    if (cart[i].price < lowprice) {
    lowprice = cart[i].price;
    clothes = cart[i].name;
    }
}

console.log('Самый дешевый товар: ', clothes);

