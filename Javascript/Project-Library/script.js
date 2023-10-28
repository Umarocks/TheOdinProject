const library = [];

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
    console.log(clickedbtn.parentElement.id);
    // library.splice(1,clickedbtn.id);
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
            <button onclick="removeBook(this)">Delete</button>
          </div>
        </div>
      `;
    insertionDiv.innerHTML += entryHTML;
  });

}




// deleteBtn.forEach((button,index)=>{
//     addEventListener('click',function(){
//         const indice = this.document.getElementsByClassName('delete')
//         console.log()
//     })
// })
