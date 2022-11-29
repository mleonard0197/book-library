
const addButton = document.createElement('button');
addButton.innerHTML = "ADD BOOK";
addButton.id = 'add';


addButton.addEventListener("click", addBookToLibrary);
document.body.appendChild(addButton);

let myLibrary = [];

function Book(title,author,pages,genre) {
    //sets up title(STRING), author(STRING), pages(INT), and genre(STRING)
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
}

let x = 0;

function addBookToLibrary() {

    console.log(x);

    let title = "";
    let author = "";
    let pages = 0;
    let genre = "";

    title = prompt("Enter book title.", title);
    author = prompt("Enter book author.", author);
    pages = prompt("Enter book pages (in numbers)", pages);
    genre = prompt("Enter book genre.", genre);

    myLibrary[x] = new Book(title,author,pages,genre);
    console.log(myLibrary[x]);
    x +=1;
}