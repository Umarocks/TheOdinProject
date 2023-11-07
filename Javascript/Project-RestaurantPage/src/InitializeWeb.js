import loadHome from "./home";

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

  const menuButton = document.createElement("button");
  menuButton.classList.add("menuButton");
  menuButton.textContent = "Menu";

  const contactButton = document.createElement("button");
  contactButton.classList.add("contactButton");
  contactButton.textContent = "CONTACT";
  navBar.appendChild(homeButton);
  navBar.appendChild(menuButton);
  navBar.appendChild(contactButton);

  return navBar;
}
function initializeWebsite() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  loadHome();
}
export default initializeWebsite;
