function Fruit(fruit, weight, money) {
    console.log(`I need $${((weight / 1000) * money).toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`);
}