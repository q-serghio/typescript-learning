//interface
//either lower or upper
interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  //method
  printAuthor(): void;
  printTitle(message: string): string;
  //some less popular syntax
  printSmth: (someValue: number) => number;
}

const deepWork: Book = {
  isbn: 123,
  title: "deep work",
  author: "Cal Newport",
  genre: "self-help",

  printAuthor() {
    //using this
    console.log(this.author);
  },
  printTitle(value) {
    return `${this.title} ${value} `;
  },
  //first option
  printSmth: function (someValue) {
    console.log(this);
    return someValue;
  },
  //second option
  //   printSmth: (someValue) => {
  //     console.log(this);
  //     return someValue;
  //   },
  //third option
  // printSmth(someValue){
  //   return someValue;
  // }
};

deepWork.printAuthor();

const result = deepWork.printTitle("is a great book to read");

console.log(deepWork.printSmth(52));

console.log(result);
