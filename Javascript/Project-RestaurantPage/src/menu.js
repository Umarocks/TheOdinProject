function MenuItems() {
  const item = document.createElement("div");
  item.classList.add("menuItem");

  item.appendChild(
    createMenuItem(
      "Salsiccia",
      "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
    )
  );
  item.appendChild(
    createMenuItem(
      "Gamberi",
      "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
    )
  );
  item.appendChild(
    createMenuItem(
      "Pepe",
      "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"
    )
  );
  item.appendChild(
    createMenuItem(
      "Disgustoso",
      "Tomato sauce, Bacon, Pineapple, Olives, Basil"
    )
  );
  item.appendChild(
    createMenuItem(
      "Colorato",
      "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
    )
  );
  item.appendChild(
    createMenuItem(
      "Pomodoro",
      "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
    )
  );
  item.appendChild(
    createMenuItem(
      "Crema",
      "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil"
    )
  );
  item.appendChild(
    createMenuItem(
      "Carne",
      "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"
    )
  );

  return item;
}

function createMenuItem(name, description) {
  const menuItemItem = document.createElement("div");
  menuItemItem.classList.add("menuItem-item");

  const dishName = document.createElement("h2");
  dishName.textContent = name;

  const dishDescription = document.createElement("p");
  dishDescription.textContent = description;

  const dishImage = document.createElement("img");
  dishImage.src = `./images/pizza/${name.toLowerCase()}.png`;
  dishImage.alt = `${name}`;

  menuItemItem.appendChild(dishImage);
  menuItemItem.appendChild(dishName);
  menuItemItem.appendChild(dishDescription);

  return menuItemItem;
}

function loadMenuItem() {
  const content = document.querySelector(".homeContainer");
  content.textContent = "";
  content.appendChild(MenuItems());
}

export default loadMenuItem;
