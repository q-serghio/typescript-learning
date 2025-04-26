type ValueType = string | number | boolean;

//challenge

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;

function checkValue(vaule: ValueType): void {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
    return;
  } else if (typeof value === "number") {
    console.log(value.toFixed(2));
    return;
  } else {
    console.log("boolean: ", value);
    return;
  }
}

checkValue(value);

//challenge

type Dog = { type: "dog"; name: string; bark: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };
type Animal = Dog | Cat;

function makeASound(animal: Animal) {
  if (animal.type === "dog") {
    animal.bark();
  } else {
    animal.meow();
  }
}

//second option

// function makeSound(animal:Animal){
//     if('bark' in animal){
//         animal.bark();
//     }else{
//         animal.meow();
//     }
// }
const lessie: Dog = {
  name: "Lessie",
  type: "dog",
  bark: () => {
    console.log("barked");
  },
};
makeASound(lessie);
//console.log(lessie);

//checking for value in string
function printLength(str: string | null | undefined) {
  if (str) {
    console.log(str.length);
  } else {
    console.log("no string provided");
  }
}

printLength("hello");
printLength("");
printLength(null);
printLength(undefined);
//printLength();

//checking types
try {
  throw "some error";
  //throw new Error("This is an error");
} catch (error) {
  if (error instanceof Error) {
    console.log(`Caught an Error object : ${error.message}`);
  } else {
    console.log("unknown error");
  }
}

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

const year = checkInput(new Date());
const randomDate = checkInput("2020-05-06");

console.log(year);
console.log(randomDate);

//challenge
type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

//if you hardcode person as only a student typescript won't allow it and else will be of type never
const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: "john", study: () => console.log("Studying") }
    : { name: "mary", login: () => console.log("Logging in") };
};

const person = randomPerson();

//this is hardcoded
// const person: Person = {
//   name: "someName",
//   study: () => console.log("this won't work");
// }

//type predicate (with is keyword)
function isStudent(person: Person): person is Student {
  return (person as Student).study !== undefined;
}

function isStudent2(person: Person): person is Student {
  return "study" in person;
}

if (isStudent(person)) {
  person.study();
} else {
  person.login();
}

//challenge

type IncrementAction = {
  type: "increment";
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: "decrement";
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

//discriminated unions
function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment":
      return state + action.amount;
    case "decrement":
      return state - action.amount;
    //without type never in below we are not sure if it won't fail
    default:
      const unexpectedAction: never = action;
      throw new Error(`unexpected action ${action}`);
  }
}

const invalidAction: any = {
  type: "unknown", // Not 'increment' or 'decrement'
  value: 100,
};

const newState = reducer(15, {
  user: "john",
  type: "increment",
  amount: 5,
  timestamp: 123456,
});

reducer(10, invalidAction);
