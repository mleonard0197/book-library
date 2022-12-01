const addButton = document.createElement('button');
addButton.innerHTML = "ADD BOOK";
addButton.id = 'add';

let x = 0;

//create a break line element
var br = document.createElement("br");


//On click, creates the form. On form submit, calls addBookToLibrary
addButton.addEventListener("click", () => {

    if (document.getElementById('book-form')) {
        return;
    }
    
    //Create form dynamically
    var form = document.createElement('form');
    form.setAttribute('id', 'book-form');

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

    //Function to create list of genres that can be easily added to and formatted correctly
    function genreMenu() { 
        //list of genres
        var values = ['fantasy', 'mystery', 'sci-fi', 'thriller', 'romance', 'health', 'motivational'];

        //goes through each value of values array and capitalizes and appends the genre to the list of options
        for (const val of values) {
            var option = document.createElement("option");
            option.setAttribute('id','genre-option')
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
   
    var readList = ['read','not read', 'wishlist'];

    //Add wishlist options for dropdown
    for (let i =0; i < 3; i++) {
        var readOption = document.createElement("option");
        readOption.value = readList[i];
        readOption.text = readList[i].charAt(0).toUpperCase() + readList[i].slice(1);
        readOption.setAttribute('id', 'wishlist-option');
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
            var bookPages = document.getElementById('pages').value;

            var bookGenre = BG.options[BG.selectedIndex].value;
            var bookWish = BW.options[BW.selectedIndex].value;

            addBookToLibrary(bookTitle, bookAuth, bookPages, bookGenre, bookWish);
            
            //remove form from page after submitting
            form.remove();
        })


        //Append the form to document body
        //document.getElementsByTagName("body")[0].appendChild(form);
        document.getElementById('submit-container').appendChild(form);


});



document.getElementById('submit-container').appendChild(addButton);


const displayButton = document.createElement('button');
displayButton.innerHTML = 'DISPLAY ALL BOOKS';

displayButton.addEventListener("click", displayAllBooks);


document.body.appendChild(displayButton);




//Array to store Book objects to be displayed on screen when called
let myLibrary = [];

function Book(title,author,pages,genre, wishlist, indices) {
    //sets up title(STRING), author(STRING), pages(INT), genre(STRING), and wishlist(STRING)
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.wishlist = wishlist;
    this.indices = indices;
}


Book.prototype.changeReadStatus = function() {
    if (this.wishlist == 'read') {
        this.wishlist = 'not read';
    }
    else if (this.wishlist == 'not read') {
        this.wishlist = 'read';
    }
    else if (this.wishlist == 'wishlist') {
        this.wishlist = 'not read';
    }
}



function addBookToLibrary(title, author, pages, genre, wishlist) {
    console.log(x);

    myLibrary[x] = new Book(title,author,pages,genre, wishlist);
    console.log(myLibrary[x]);
    x +=1;
}

let numB = 0;

function displayAllBooks() {
    //checks to see if library-container
    if (document.getElementById('library-container').hasChildNodes()) {
        while (document.getElementById('library-container').firstChild) {
            document.getElementById('library-container').removeChild(document.getElementById('library-container').firstChild);
        }
    }
    for (book in myLibrary) {
       //Append each book in myLibrary to the div 'library-container'
        const bookInfo = document.createElement('div');
        bookInfo.setAttribute('id','book-info');
        //Used for remove to remove parent data index from myLibrary
        bookInfo.setAttribute('data-index-number', book);
        //Displays book info in div HTML
        bookInfo.innerHTML = 
        'Title: ' + myLibrary[book].title + "Author: " + myLibrary[book].author + " Pages: " + myLibrary[book].pages + 
        " Genre: " + myLibrary[book].genre + " Read Status: " + myLibrary[book].wishlist;
        
        //Adding remove button to bookInfo div
        const removeButton = document.createElement('button');
        removeButton.setAttribute('id', 'remove-button');
        removeButton.innerHTML = "REMOVE";
        removeButton.addEventListener('click', () => {
            console.log(book);
            myLibrary.splice(removeButton.parentElement.getAttribute('data-index-number'),1);
            removeButton.parentElement.remove();
           
        });

        //Adding read status button to change wishlist options from 'wishlist to read then to not read'
        const readStatus = document.createElement('button');
        readStatus.setAttribute('id','read-status');
        readStatus.innerHTML = "READ/NOT READ";
        readStatus.addEventListener('click', () => {
            myLibrary[readStatus.parentElement.getAttribute('data-index-number')].changeReadStatus();
            displayAllBooks();
        });
        bookInfo.appendChild(readStatus);
        bookInfo.appendChild(removeButton);


        document.getElementById('library-container').appendChild(bookInfo);
        //console.log(book);
    }
}
