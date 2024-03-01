// Task - 1

// class Car {
//   constructor(make, model, year, color) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.speed = 0;
//     this.isStarted = false;
//   }

//   start() {
//     if (!this.isStarted) {
//       this.isStarted = true;
//       console.log("Maşın işə başladı");
//     } else {
//       console.log("Maşın artıq işə salınıb");
//     }
//   }

//   stop() {
//     if (this.isStarted) {
//       this.isStarted = false;
//       this.speed = 0;
//       console.log("Maşın dayandı");
//     } else {
//       console.log("Maşın artıq dayanıb");
//     }
//   }

//   accelerate(speedChange) {
//     if (this.isStarted) {
//       this.speed += speedChange;
//       console.log(`Maşın indi ${this.speed} km/saat sürətlə gedir.`);
//     } else {
//       console.log("Sürətləndirmək mümkün deyil. Əvvəlcə maşını işə salın");
//     }
//   }

//   decelerate(speedChange) {
//     if (this.isStarted) {
//       if (this.speed - speedChange >= 0) {
//         this.speed -= speedChange;
//         console.log(`Maşın indi ${this.speed} km/saat sürətlə gedir..`);
//       } else {
//         console.log("0 km/saatdan aşağı yavaşlatmaq mümkün deyil");
//       }
//     } else {
//       console.log("Yavaşlatmaq mümkün deyil. Əvvəlcə maşını işə salın.");
//     }
//   }
// }

// const myCar = new Car("Volkswagen", "Passat", 2006, "Black");
// myCar.start();
// myCar.accelerate(50);
// myCar.decelerate(20);
// myCar.stop();


// Task-2

// const login = {
//     username: "Name",
//     password: "12345"
// }
// Object.seal(login)

// login.username = 'AD'
// console.log(login)
// console.log(Object.isSealed(login))


// Task-3

// const car_recipe = {
//     color: "red",
//     wheels: 4,
//     engine: { cylinders: 4, size: 2.2 },
// }
// Object.preventExtensions(car_recipe)

// car_recipe.door = '2'

// console.log(car_recipe)
// console.log(Object.isExtensible(car_recipe))



// Task-4

// const obj = {
//     orderId: "123456", 
//     customerName: "John Doe",
//     items: [{ itemId: 1, name: "T-shirt", quantity: 2, price: 20 }, { itemId: 2, name: "Jeans", quantity: 1, price: 50 }],
//     shippingAddress: { street: "123 Main St", city: "Anytown", state: "CA", zip: "12345" },

// }

// const obj2 = {
//     items: [ { itemId: 1, name: "T-shirt", quantity: 2, price: 20 }, { itemId: 2, name: "Jeans", quantity: 1, price: 50 } ], 
//     shippingAddress: { street: "123 Main St", city: "Anytown", state: "CA", zip: "12345" },    
// }

// Object.freeze(obj)

// obj.items.push ('Color: White');

// console.log(obj)

// Object.seal(obj2);

// obj2.items.push('1235');

// console.log(obj2)


// Object.preventExtensions(obj)

// console.log(Object.isExtensible(obj))



