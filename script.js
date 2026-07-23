const about = document.getElementById("about");
const bookshelf = document.getElementById("bookshelf");

document.getElementById("aboutLink").addEventListener("click", function (event) {

    event.preventDefault();

    about.style.display = "block";
    bookshelf.style.display = "none";

});

document.getElementById("booksLink").addEventListener("click", function (event) {

    event.preventDefault();

    about.style.display = "none";
    bookshelf.style.display = "block";

});