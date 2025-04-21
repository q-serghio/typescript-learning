interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

//merge , now person has two attributes
interface Person {
  age: number;
}

const person: Person = {
  name: "jobn",
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

//extending
interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: "jack",
  age: 52,
  employeeId: 332,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Empolyee id: ${this.employeeId}`;
  },
};

console.log(employee.getDetails());

interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager = {
  name: "Bob",
  age: 36,
  dogName: "Lessie",
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Name: ${this.dogName}`;
  },
  managePeople() {
    console.log(`${this.name} manages people`);
  },
};

manager.managePeople();

//challenge
