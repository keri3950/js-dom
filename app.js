const list = document.querySelector("#book-list ul");

//delete books
list.addEventListener("click", (e) => {
  if (e.target.className === "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

// add books
const addBook = document.forms["add-book"];

addBook.addEventListener("submit", (e) => {
  e.preventDefault();
  const textValue = addBook.querySelector('input[type="text"]').value;

  // create elements
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("button");

  // add content
  bookName.textContent = textValue;
  deleteBtn.textContent = "delete";

  //add classes
  bookName.classList.add("name");
  deleteBtn.classList.add("delete");

  // append elements (order matters)
  list.appendChild(li);
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
});

// hide books
const hideBox = document.querySelector("#hide");

hideBox.addEventListener("change", (e) => {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

//search books
const searchBooks = document.forms["search-books"].querySelector("input");

searchBooks.addEventListener("keyup", (e) => {
  const searchText = e.target.value;
  const books = list.getElementsByTagName("li");
  for (const book of books) {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(searchText) !== -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  }
});
