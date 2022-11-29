
const addButton = document.createElement('button');
addButton.innerHTML = "ADD BOOK";
addButton.id = 'add';

let x = 0;

//create a break line element
var br = document.createElement("br");


//On click, creates the form. On form submit, calls addBookToLibrary
addButton.addEventListener("click", () => {

    //Create form dynamically
    var form = document.createElement('form');

    //Create input for title
    var BT = document.createElement('input');
    BT.setAttribute("type", "text");
    BT.setAttribute("id", "title");
    BT.setAttribute("name", "BookTitle");
    BT.setAttribute("placeholder", "Book Title");
    BT.setAttribute('required', '');

    //Create input for author
    var BA = document.createElement('input');
    BA.setAttribute("id", "author");
    BA.setAttribute("type", "text");
    BA.setAttribute("name", "BookAuthor");
    BA.setAttribute("placeholder", "Book Author");
    BA.setAttribute('required', '');

    //Create input for pages
    var BP = document.createElement('input');
    BP.setAttribute("id", "pages");
    BP.setAttribute("type", "number");
    BP.setAttribute("name", "BookPages");
    BP.setAttribute("placeholder", "Book Pages");
    BP.setAttribute('required', '');

    //Create select drop down for genre
    var BG = document.createElement('select');
    BG.setAttribute("id", "genres");
    BG.setAttribute("type", "text");
    BG.setAttribute("name", "BookGenres");
    BG.setAttribute("placeholder", "Book Genres");

    function genreMenu() { 
        //list of genres
        var values = ['fantasy', 'mystery', 'sci-fi', 'thriller', 'romance', 'health', 'motivational'];

        //goes through each value of values array and capitalizes and appends the genre to the list of options
        for (const val of values) {
            var option = document.createElement("option");
            option.value = val;
            option.text = val.charAt(0).toUpperCase() + val.slice(1);
            BG.appendChild(option);
        }
    }

    genreMenu();
    
    //Create drop down for read/not read
    var BW = document.createElement('select');
    BW.setAttribute("id", "wishlist");
    BW.setAttribute("type", "text");
    BW.setAttribute("name", "BookWishlist");
    BW.setAttribute("placeholder", "Book Wishlist");
    var readList = ['Read','Not read', 'Wishlist'];

    for (let i =0; i < 3; i++) {
        var readOption = document.createElement("option");
        readOption.value = i;
        readOption.text = readList[i];
        BW.appendChild(readOption);
    }



        //Create submit button
        var sub = document.createElement("input");
        sub.setAttribute('type', 'submit');
        sub.setAttribute('value','Submit');

        //Append the book title to the form
        form.appendChild(BT);
        form.appendChild(br.cloneNode());

        //Append the book author to the form
        form.appendChild(BA);
        form.appendChild(br.cloneNode());

        //Append the book pages to the form
        form.appendChild(BP);
        form.appendChild(br.cloneNode());

        //Append the book genre dropdown menu to the form
        form.appendChild(BG);
        //form.appendChild(br.cloneNode());

        //Append the book wishlist options menu to the form
        form.appendChild(BW);
        form.appendChild(br.cloneNode());

    
        //Append submit button to form
        form.appendChild(sub);



        //add function to the form submit button to run addBookToLibrary
        form.addEventListener('submit', function(event) {
            event.preventDefault(); //prevent default from autosubmitting

            var bookTitle = document.getElementById('title').value;
            var bookAuth = document.getElementById('author').value;
            console.log(bookTitle,bookAuth);
            
            //remove form from page after submitting
            form.remove();
        })


        //Append the form to document body
        document.getElementsByTagName("body")[0].appendChild(form);


});
document.body.appendChild(addButton);

let myLibrary = [];

function Book(title,author,pages,genre) {
    //sets up title(STRING), author(STRING), pages(INT), and genre(STRING)
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
}



function addBookToLibrary() {


    console.log(x);

    // let title = "";
    // let author = "";
    // let pages = 0;
    // let genre = "";

    // title = prompt("Enter book title.", title);
    // author = prompt("Enter book author.", author);
    // pages = prompt("Enter book pages (in numbers)", pages);
    // genre = prompt("Enter book genre.", genre);

    //myLibrary[x] = new Book(title,author,pages,genre);
    //console.log(myLibrary[x]);
    x +=1;
}