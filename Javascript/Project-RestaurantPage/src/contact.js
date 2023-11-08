
function createContact(){
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');
    const phone = document.createElement('p');
    phone.textContent="📞 123 456 789"
    const address = document.createElement('p');
    address.classList.add("address");
    address.textContent="🏠 louetta road 42, houston, USA"
    contactContainer.appendChild(phone);
    contactContainer.appendChild(address);
    const mapImage = document.createElement('img');
    mapImage.src="./images/restaurant-location.png";
    contactContainer.appendChild(mapImage);
    return contactContainer;
}


function loadContact(){
    const content = document.querySelector(".container");
    content.textContent = "";
    content.appendChild(createContact());
}

export default loadContact;