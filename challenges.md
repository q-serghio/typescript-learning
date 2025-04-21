## Challenge

- Create a variable of type string and try to invoke a string method on it.
- Create a variable of type number and try to perform a mathematical operation on it.
- Create a variable of type boolean and try to perform a logical operation on it.
- Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
- You can use type annotation or inference

## Challenge

- Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
- Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.

## Challenge

- Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
- Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.
- Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.

## Syntax testing and others

## Challenge

- Create a new array of names.
- Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
- Use this function to check if various names are in your array and log the results.

### Challenge

Your task is to create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:

- If the input is of type number, the function should multiply the number by 2 and log the result to the console.
- If the input is of type string, the function should convert the string to uppercase and log the result to the console.

## Challenge

Your task is to create a function named processData that accepts two parameters:

- The first parameter, input, should be a union type that can be either a string or a number.
- The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false

The function should behave as follows:

- If input is of type number, the function should return the square of the number.
- If input is of type string, the function should return the string in uppercase.
- If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.

## Challenge

- Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).

- Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).

- Create a Union Type: Define a type Staff that is a union of Employee and Manager.

- Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.

- Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.

- Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.

## @ Challenge

- Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.
- Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.
- Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
- Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.
- Also inside the interface, define any methods that the object should have. In this case, we have upgradeRam, which is a function that takes a number and returns a number.
- Now that we have our interface, we can create an object that adheres to this interface. This object should have all the properties defined in the interface (except for optional ones, which are... optional), and the methods should be implemented.
- Finally, we can use our object. We can call its upgradeRam method to increase its RAM.

## Challenge - Part 1

- Define the Person interface Start by defining a Person interface with a name property of type string.
- Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.
- Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.
- Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager. Inside this function, generate a random number and use it to decide which type of object to return. If the number is less than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
- Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee. Then, log employee to the console.

## Challenge - Part 2

A type predicate in TypeScript is a special kind of return type for a function that not only returns a boolean, but also asserts that the argument is of a specific type if the function returns true. It's typically used in user-defined type guard functions to narrow down the type of a variable within a certain scope. The syntax is arg is Type, where arg is the function argument and Type is the type you're checking for.

- Define the isManager function Define a function called isManager that takes an object of type Person | DogOwner | Manager and returns a boolean. This function should check if the managePeople method exists on the object, and return true if it does and false if it doesn't. The return type of this function should be a type predicate: obj is Manager.
- Run your code to see if it works as expected. If employee is a Manager, you should see the output of the delegateTasks method in the console. If employee is a Person or DogOwner, there should be no output.

## Challenge

- Define an enum named UserRole with members Admin, Manager, and Employee.
- Define a type alias named User with properties id (number), name (string), role (UserRole), and contact (a tuple with two elements: email as string and phone as string).
- Define a function named createUser that takes a User object as its parameter and returns a User object.
- Call the createUser function with an object that matches the User type, store the result in a variable, and log the variable to the console.
