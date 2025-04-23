interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

/**
 * Generates a random double between min 0 and max 1.
 * @returns A random double.
 */
function generateRandomNumber(): number {
  const randNumber: number = Math.random();
  return randNumber;
}

/**
 * It returns employee based on the number provided
 * @param randNumber number to compare
 * @returns One of the 3 types of objects.
 */
export function getEmployee(randNumber: number): Person | DogOwner | Manager {
  let mainName = "James";
  let mainDoggy: string = "Doggy";
  console.log(randNumber);

  if (randNumber <= 0.33) {
    let somePerson: Person = {
      name: mainName,
    };
    return somePerson;
  } else if (randNumber > 0.33 && randNumber < 0.66) {
    let someDogOwner: DogOwner = {
      dogName: mainDoggy,
      name: mainName,
    };
    return someDogOwner;
  } else {
    let someManager: Manager = {
      name: "Josh",
      managePeople() {
        console.log("Manages people");
      },
      delegateTasks() {
        console.log("delegates tasks");
      },
    };
    return someManager;
  }
}

//const book2 = 'sds'
let someNumber = generateRandomNumber();
export const employee: Person | DogOwner | Manager = getEmployee(someNumber);

console.log(employee);

function isManager(obj: Person | DogOwner | Manager): boolean {
  //how to compare objects
  return "managePeople" in obj;
}

//how to access methods of manager
function isManagerWithAccess(obj: Person | DogOwner | Manager): obj is Manager {
  //how to compare objects
  return "managePeople" in obj;
}

if (isManager(employee)) {
  //can't do
  //employee.delegateTasks()
}

if (isManagerWithAccess(employee)) {
  employee.delegateTasks();
}

console.log(isManager(employee));

//interface Test  = number;

//type aliases cannot be merged like interfaces!
type Score = number;
type SomeStrings = number | string;
