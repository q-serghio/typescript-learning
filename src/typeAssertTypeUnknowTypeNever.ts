let someValue: any = "some string";

let strLength: number = (someValue as string).length;

type Bird = {
  name: string;
};

let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name);

//error
console.log(dog.name);

enum Status {
  Pending = "pending",
  Declined = "declined",
}

type User = {
  name: string;
  status: Status;
};

// save Status.Pending in the DB as a string
// retrieve string from the DB
const statusValue = "pending";

//cannot do that:
//const user: User = {name:'john', status:statusValue}

const user: User = { name: "john", status: statusValue as Status };

//unknowns

let unknownValue: unknown;

unknownValue = "hello world";
unknownValue = [1, 2, 3];
unknownValue = 42.3345;

//unknownValue.toFixed(2);

if (typeof unknownValue === "number") {
  unknownValue.toFixed();
}

function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error("some message");
  } else {
    throw "some error";
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}

//never type
//no assignments
//let someValue : never = 0;

type Theme = "light" | "dark";

function checkTheme(theme: Theme): void {
  if (theme === "light") {
    console.log("light theme");
    return;
  }
  if (theme === "dark") {
    console.log("dark theme");
    return;
  }
  //values are resolved
  theme;
}

enum Color {
  Red,
  Blue,
  Green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return "Red";
    case Color.Blue:
      return "Blue";
    case Color.Green:
      return "Green";
    default:
      //this is an issue
      //build time also when there are not all cases defined
      let unexpectedColor: never = color;
      //earlier js
      throw new Error(`Unexpected color value: ${color}`);
  }
}

console.log(getColorName(Color.Blue));
console.log(getColorName(Color.Red));
//this is an issue
console.log(getColorName(Color.Green));
