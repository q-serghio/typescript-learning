//cannot swap
//let person: [string, number] = [25, 'john'];

let dateArray: [number, number, number][] = [
  [12, 17, 2001],
  [15, 8, 2020],
];
let date: [number, number, number] = [12, 17, 2001];

//cant use that when readonly
//date.push(34);
//date.push(34);
//date.push(34);

let lessStrictDates: number[][] = [
  [12, 17, 2001],
  [15, 8, 1999],
  [5, 20], //only two numbers!
];

console.log(date);

//indexing out of bonds!
console.log(dateArray);
console.log(dateArray[0][2]);

function getPerson(): [string, number] {
  return ["john", 25];
}

let randomPerson = getPerson();

console.log(randomPerson[0]);
console.log(randomPerson[1]);

let susan: [string, number?] = ["susan"];

//enums

//back and forth conversion (with numbers)
enum ServerResponseStatus {
  Success = 200,
  Error = 500,
}

//calling enums
Object.values(ServerResponseStatus).forEach((value) => {
  if (typeof value === "number") {
    console.log(value);
  }
});

enum NumericEnum {
  Member = 1,
}

enum StringEnum {
  Member = "Value",
}

let numericEnumValue: NumericEnum = 1; // This is allowed
console.log(numericEnumValue); // 1

//let stringEnumValue: StringEnum = "Value"; // This is not allowed

//console.log(stringEnumValue);

//console.log(ServerResponseStatus);

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ["first item", "second item"],
  };
}

const response: ServerResponse = getServerResponse();

//console.log(`Response: ${response}`);
//console.log(response);

//challenge

enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUser(user: User): User {
  return user;
}

const newUser: User = {
  id: 3,
  name: "Zbyszko",
  role: 2,
  contact: ["a@wp.pl", "123455"],
};

console.log(createUser(newUser));
