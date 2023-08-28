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

//library exercise

function bookInformation(title, author, pages, alreadyRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.alreadyRead = alreadyRead;
  this.showInformation = function () {
    let resultString = `The book ${title} by ${author} has ${pages} and it is ${alreadyRead} that you already read the book.`; //best pratice to return the function and cosnole log it after calling the function

    return resultString;
    /*  console.log(
      `The book ${title} by ${author} has ${pages} and it is ${alreadyRead} that you already read the book.`
    );*/
  };
}

const info = new bookInformation("Harry Potter", "J.K Rowling", "500", "true"); // calling the object constructor with new keyword
info.showInformation(); //callling the fucntion defined inside the constructor by using the object
console.log(info.showInformation()); //logging

//info.bookInformation();//totally wrong. bookInformation is not a function because it is an object constructor, i need to define a function inside the constructor and call it
