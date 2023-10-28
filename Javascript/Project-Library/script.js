const library = [];

const bookInput = document.getElementById("bookInput");
const authorInput = document.getElementById("authorInput");
const statuss = document.getElementById("statusInput");
const submit = document.getElementById("submit");

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

function removeBook(index){
    library.splice(1,index);
    render();
}




function render() {
    const insertionDiv = document.getElementById("entryContainer");
    insertionDiv.innerHTML =' ';
    library.forEach(function (book, index) {
    var entryHTML = `
        <div class="entry">
          <div class="bookName" id="${book.index}">
            <h4>${book.book}</h4>
          </div>
          <div class="authorName">
            <h4>${book.author}</h4>
          </div>
          <div class="read">
            <button>${book.status}</button>
          </div>
          <div class="delete" id="${book.index}">
            <button>Delete</button>
          </div>
        </div>
      `;
    insertionDiv.innerHTML += entryHTML;
  });
}


