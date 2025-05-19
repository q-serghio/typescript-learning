class Book {
  private title: string;
  private author: string;
  checkedOut: boolean = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  checkOut() {
    this.checkedOut = true;
  }
}

const deepWork = new Book("Deep Work", "Cal Newport");
console.log(deepWork);
deepWork.checkOut();
console.log(deepWork);

var fieldValue = "two spaces ";
var hasSpaces = fieldValue.includes("");

console.log(hasSpaces);
