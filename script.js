/** @format */

/*learning the concept of object constructors and prototypal inheritance */

/*Created an object construtor named perosn */

function Person(name) {
  this.name = name;
}

/*here the function sayName is being defined in the prototype of the Person which is an object constructor */

Person.prototype.sayName = function () {
  console.log(`Hi , I'm ${this.name}`);
};

/*Here we create another object constructor named Player */

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

/*here we define a funtion called getMarker in the prototype of the Player object constructor */

Player.prototype.getMarker = function () {
  console.log(`My marker is ${this.marker}`);
};

Object.getPrototypeOf(Player.prototype);

/*Now make the player object inherit from person */

Object.setPrototypeOf(Player.prototype, Person.prototype);

/*now if we get the prototype of player  */

Object.getPrototypeOf(Player.prototype);

/*creating instance for the object */

const player1 = new Player("steve", "X");
const Player2 = new Player("also steve", "O");

player1.sayName();
Player2.sayName();

player1.getMarker();
Player2.getMarker();
