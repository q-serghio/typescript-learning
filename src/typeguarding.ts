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
