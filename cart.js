'use strict';


const cart = {
  items: [], // это товары

  get totalPrice() { // общая стоимость корзины получается через геттер
    return this.calculateItemPrice();
  },

  count: 0, // количество товаров

  add(productName, price, currentCount = 1) { // добавить товар
    // метод формирует объект из параметров и добавляет его в свойство items
    this.items.push({productName, price, currentCount});
    // вызывает все методы чтобы свойства count и totalPrice были актуальные
    this.increaseCount(currentCount);
    // this.calculateItemPrice();
  },

  calculateItemPrice() { // посчитать общую стоимость товаров.
    return this.items.reduce((acc, item) => {
    // пересчитывает стоимость всей корзины reduce и записывает в totalPrice
      const total = acc + item.price * item.currentCount;
      return total;
    }, 0);
  },

  // увеличить количество товаров (count) на параметр.
  increaseCount(number) {
    this.count += number;
    return this.count;
  },

  clear() {// Очищает полностью корзину, возвращает все значения в изначальные
    this.items = [];

    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(JSON.stringify(this.totalPrice));
  },
};

cart.add('Огурец', 200);
console.log(cart.totalPrice);
console.log(cart.count);

cart.add('помидор', 280, 3);
console.log(cart.totalPrice);
console.log(cart.count);

cart.add('Перец', 300, 2);
console.log(cart.totalPrice);
console.log(cart.count);

cart.clear();
// console.log(cart);
console.log(cart.totalPrice);

cart.print();
console.log(cart);

// можно обозначить объект еще так

// add() Принимает три параметра: название, цену, количество  по умол. 1 товар)
// const objName = {
//     price,
//     currentCount,
// };
// this.items.push(objName);
