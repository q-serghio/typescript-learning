console.log("tutorial");

let someString: string = "someString";

console.log(someString.toLowerCase());

let ten: number = 10;
ten = 10 % 3;
console.log(ten);
let truth: boolean = false;

console.log(true || truth);

const books = ["Sezon burz", "Kwantechizm 2.0", "Teirua muzyki", "1983"];

//how it is supposed to be in future?
let foundBook: string | undefined;

for (let book of books) {
  if (book === "1983") {
    foundBook = book;

    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook?.length);

let discount: number | string = 20;

discount = 20;
console.log("1st", discount);
discount = "20%";

console.log("2nd", discount);

let orderStatus: "processing" | "shipped" | "delivered";

orderStatus = "processing";
console.log("Status 1 " + orderStatus);
orderStatus = "delivered";
console.log("Status 2 " + orderStatus);

orderStatus = "shipped";
console.log("Status 3 " + orderStatus);

///arrays
let columns: string[] = ["DataSource", "ExpireDate", "ProductName"];

for (let index = 0; index < columns.length; index++) {
  //string interpolation
  console.log(`Column ${index}`, columns[index]);
}

let temperatures: number[] = [20, 25, 30];
//temperatures.push('hot');
//temperatures.pop();

//objects
let car: { brand: string; year: number } = { brand: "toyota", year: 2020 };

car.brand = "ford";
console.log("Car: ", car);

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 10 };
let notebook = { title: "notebook" };

//optional property
let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

//readonly
//items[0].title = 'new book'
let bike: { brand: string; year: number } = { brand: "yamaha", year: 2010 };

let laptop: { brand: string; year: number } = { brand: "Dell", year: 2020 };

let product1 = { title: "shirt", price: 20 };
let product2 = { title: "pants" };

let products: { title: string; price?: number }[] = [product1, product2];
products.push({ title: "shoes", price: 300 });
console.log(products);

//tsconfig in .netframework?

//basic functions
function printSomething(name: string) {
  console.log(`Something ${car.brand.toLocaleUpperCase()}  ${name}`);
}

function calculateSomething(price: number): number {
  return price * 0.666;
}

printSomething("jakis name ");

console.log(calculateSomething(4.2));

//challenge

const namez: string[] = ["John", "Josh", "Michael"];

//two ways
function checkIfIsInArray(name: string, names: string[]): boolean {
  let isInArray: boolean = false;
  //return names.includes(name);
  for (let index = 0; index < names.length; index++) {
    if (names[index] === name) {
      isInArray = true;
    }
  }
  return isInArray;
}
let checkName = "Josh";
console.log(
  `Is ${checkName} in the namez array? ${checkIfIsInArray(checkName, namez)}`
);

//optional and default

//optional parameter when undefined
//undefined, null, 0 "" are falsy
function calculatePrice(price: number, discount?: number): number {
  //return price - (discount || 0);
  return price - (discount ?? 0);
}

//a function with optional parameters must work when they are not supplied!!

let priceAfterDiscount = calculatePrice(100, 2);
console.log(priceAfterDiscount);

//optional parameter
function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);

//rest parameter
function sum(message: string, ...numbers: number[]): string {
  //lambda expression
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);
  let total = numbers.reduce((previous, current) => {
    return previous + current;
    //0 is initial value of the previous on 1st iteration
  }, 0);
  return `${message} ${total}`;
}

let result = sum("The total is: ", 2, 5, 6, 10);
console.log(result);

function someVoid(textToPrint: string): void {
  console.log("Printing some text: ", textToPrint);
}

someVoid("Some interesting text");

function processInput(param: string | number): void {
  //intellisense
  if (typeof param === "number") {
    console.log(param * 2);
  } else if (typeof param === "string") {
    console.log(param.toUpperCase());
  }
}

processInput(20);
processInput("Lalala");

//functions with objects

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });

console.log(first, second);

//objects as parameters and excess property checks
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome Itpedia devs! ${student.name.toLocaleUpperCase()} !!!`);
}

const newStudent = {
  id: 5,
  name: "radek",
  email: "rczaj@gmail.com",
};

//two different things!!
createStudent(newStudent);
//createStudent({id:1, name: 'klaudia', email:'klaks@gmail.com'});

//challenge

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input ** 2;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
}

console.log(processData(10));
console.log(processData("Hey"));
console.log(processData("Hey", { reverse: true }));

//type alias and intersection type

//without types we need to write it all over
const john: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: "john",
  isActive: true,
};
const susan: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: { id: number; name: string; isActive: boolean }): {
  id: number;
  name: string;
  isActive: boolean;
} {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

type User = { id: number; name: string; isActive: boolean };

const Joanna: User = { id: 5, name: "Joanna", isActive: false };

type Theme = "light" | "dark";
let theme: Theme;
theme = "dark";
//intelisense theme

function setTheme(t: Theme) {
  theme = t;
}

setTheme("dark");

//challenge

type Employee = { id: number; name: string; department: string };
const Susan: Employee = { id: 8, name: "Susan", department: "HR" };

type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

const John: Employee = { id: 4, name: "John", department: "HR" };

const Steve: Manager = { id: 8, name: "Steve", employees: [John, Susan] };

//must be a union type to check that
//
function printStaffDetails(staff: Staff): void {
  if ("employees" in staff) {
    //we can use property
    let count = staff.employees.length;
    console.log(
      `The person ${staff.name} is a manager. They manage ${count} employees.`
    );
  } else {
    console.log(
      `The person ${staff.name} is an employee. They belong to department ${staff.department}`
    );
  }
}

printStaffDetails(Steve);
printStaffDetails(John);

//intersection union
//upgrading object with discount or changing the object
type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };

const book1: Book = {
  id: 1,
  name: "how to cook a dragon",
  price: 15,
};

const book2: Book = {
  id: 2,
  name: "how to cook a keyboard",
  price: 18,
};

// const discountedBook: Book & {discount: number} = {
//   id: 2,
//   name: "how to cook a keyboard",
//   price: 25,
//   discount:0.15
// };

const discountedBook: DiscountedBook = {
  id: 2,
  name: "how to cook a keyboard",
  price: 25,
  discount: 0.15,
};

//compute on the fly
const propName = "age";

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 6 };

console.log(tiger);
