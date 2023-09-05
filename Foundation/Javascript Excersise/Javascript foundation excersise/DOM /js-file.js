const parentOfPtag = document.querySelector('.content')
const ptag = document.createElement("p");
ptag.classList.add('paragraphInRed');
ptag.textContent = "Hey! I'm Red!"
ptag.style.color = 'red';

parentOfPtag.appendChild(ptag);

const parentOfH3Tag = document.querySelector('.content');
const h3Tag = document.createElement("h3");
h3Tag.classList.add('h3BlueTag');
h3Tag.textContent = "I’m a blue h3!";
h3Tag.style.color = 'blue';

parentOfH3Tag.appendChild(h3Tag);

const divCreation = document.querySelector('#container');
const divTag = document.createElement("div");
divTag.className="BlackPinkDiv";
divTag.style.backgroundColor = 'pink';
divTag.style.border = 'black 2px solid';



const parentOfh1Tag = document.querySelector('.BlackPinkDiv');
const h1Tag = document.createElement('h1');
h1Tag.textContent = "I'm in a div";
const p1Tag = document.createElement('p');
p1Tag.textContent="ME TOO!";

divTag.appendChild(h1Tag);
divTag.appendChild(p1Tag);

divCreation.appendChild(divTag);



// Step 1: Create a new <div> element
// var newDiv = document.createElement("div");

// Step 2: Set CSS styles for the <div>
// newDiv.style.border = "2px solid black";
// newDiv.style.backgroundColor = "pink";

// Step 3: Create an <h1> element and a <p> element
// var h1Element = document.createElement("h1");
// var pElement = document.createElement("p");

// Step 4: Set text content for the <h1> and <p> elements
// h1Element.textContent = "I'm in a div";
// pElement.textContent = "ME TOO!";

// Step 5: Append the <h1> and <p> elements as children to the <div>
// newDiv.appendChild(h1Element);
// newDiv.appendChild(pElement);

// Step 6: Append the <div> to the DOM
// var parentElement = document.getElementById("parentElement"); // Replace "parentElement" with the ID of the element where you want to append the new <div>.
// parentElement.appendChild(newDiv);

