const library = [{
    book: "Book Name Book Name Book Name Book Name Book Name Book Name Book Name Book Name Book Name",
    author: "Author Name",
    status: "Read",
    index: 0,
  },{
    book: "Book Name Book Name Book Name Book Name Book Name Book Name Book Name Book Name Book Name",
    author: "Author Name",
    status: "Read",
    index: 0,
  },{
    book: "Book Name Book Name Book Name Book Name Book Name Book Name Book Name Book Name Book Name",
    author: "Author Name",
    status: "Read",
    index: 0,
  }];

const bookInput = document.getElementById("bookInput");
const authorInput = document.getElementById("authorInput");
const statuss = document.getElementById("statusInput");
const submit = document.getElementById("submit");
var deleteBtn = document.querySelectorAll('.delete');
submit.addEventListener("click", function () {
  addBook();
  console.log(library);
});

function addBook() {
  const newBook = {
    book: bookInput.value,
    author: authorInput.value,
    status: statuss.value,
    index:library.length+1,
  };
  library.push(newBook);
  render();
}




function removeBook(clickedbtn){
    const findIndx = (name) => {
        return library.findIndex(obj => obj.book === name)
    }
    const indexInLibrary = findIndx(clickedbtn.parentElement.id)
    console.log(indexInLibrary);
    library.splice(indexInLibrary,1);
    render();
}

function render() {
    const insertionDiv = document.getElementById("entryContainer");
    insertionDiv.innerHTML =' ';
    library.forEach(function (book, index) {
    var entryHTML = `
        <div class="entry">
          <div class="bookName" id="${book.index}">
            <h4>${book.book.charAt(0).toUpperCase()+book.book.slice(1)}</h4>
          </div>
          <div class="authorName">
            <h4>${book.author.charAt(0).toUpperCase()+book.author.slice(1)}</h4>
          </div>
          <div class="read">
            <button>${book.status.charAt(0).toUpperCase()+book.status.slice(1)}</button>
          </div>
          <div class="delete" id="${book.book}">
            <button onclick="removeBook(this)">Delete</button>
          </div>
        </div>
      `;
    insertionDiv.innerHTML += entryHTML;
  });

}

render();