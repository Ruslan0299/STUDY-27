//перше завдання

//1.1)
let car = {
  type: "electric",
  wheels: 4,
};
let sportCar = {
  doors: 2,
};
Object.setPrototypeOf(sportCar, car);
console.log(car.isPrototypeOf(sportCar)); //true
console.log(Object.getPrototypeOf(sportCar) === car); //true

//1.2)
let passengerCar = Object.create(car, {
  doors: { value: 4 },
});
console.log(passengerCar); //{doors: 4}
console.log(car.isPrototypeOf(passengerCar)); //true

//1.3)
let toyCar = Object.create(Object.assign(sportCar, car, { type: "toy" }));

//друге завдання
let employees = {
  pay(munth, sum) {
    this.wallet = this.wallet || {};
    this.wallet[munth] = sum;
  },
};
let frontendDeveloper = {
  name: "Mike",
};
Object.setPrototypeOf(frontendDeveloper, employees);

let backendDeveloper = {
  name: "Bob",
};
Object.setPrototypeOf(backendDeveloper, employees);
backendDeveloper.pay("june", 1500);

console.log(backendDeveloper.wallet.june); //1500
console.log(frontendDeveloper.wallet.june); //undefined

//третє завдання
function User(name, age) {
  this.name = name;
  this.age = age;
}
let user_1 = new User("Mike", 18);
let user_2 = new user_1.constructor("Bob", 25);
console.log(user_2); //{name: 'Bob', age: 25}
console.log(user_1); //{ name: 'Mike', age: 18 }

//четверте завдання
function UserType(name) {
  for (let i = 0; i < name.length; i++) {
    this[i] = name[i];
    if (i + 1 == name.length) {
      Object.defineProperty(this, "length", {
        enumerable: true,
        writable: false,
        configurable: true,
        value: i + 1,
      });
    }
  }
  this.join = function (separator) {
    return Array.prototype.join.call(this, separator);
  };
}
let admins = new UserType(["Mike", "Bob", "Nikola"]);
console.log(admins.join("; ")); //Mike, Bob, Nikola
