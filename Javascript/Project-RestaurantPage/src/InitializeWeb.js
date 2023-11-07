import loadHome from "./home";
import loadMenuitem from "./menu";
import loadContact from "./contact"

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");
  const restaurantName = document.createElement("h1");
  restaurantName.textContent = "Pizza Factory";
  restaurantName.classList.add("restaurantName");
  header.appendChild(restaurantName);
  header.appendChild(createNavbar());
  return header;
}

function createNavbar() {
  const navBar = document.createElement("nav");

  const homeButton = document.createElement("button");
  homeButton.classList.add("homeButton");
  homeButton.textContent = "HOME";
  homeButton.addEventListener("click", () => {
    loadHome();
  });

  const menuButton = document.createElement("button");
  menuButton.classList.add("menuButton");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", () => {
    loadMenuitem();
  });

  const contactButton = document.createElement("button");
  contactButton.classList.add("contactButton");
  contactButton.textContent = "CONTACT";
  contactButton.addEventListener("click", () => {
    loadContact();
  });



  navBar.appendChild(homeButton);
  navBar.appendChild(menuButton);
  navBar.appendChild(contactButton);

  return navBar;
}
function initializeWebsite() {
  const content = document.querySelector(".content");
  content.appendChild(createHeader());
  const container = document.querySelector(".content");
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");
  container.appendChild(containerDiv);
  loadHome();
}
export default initializeWebsite;
