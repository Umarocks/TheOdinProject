function createHome() {
  const home = document.createElement("div");
  home.classList.add("homeContainer");
  const homeImage = document.createElement("img");
  homeImage.src="images/chef.png";
  home.appendChild(Paragraph("Best pizza in your country"));
  home.appendChild(Paragraph("Made with passion since 1908"));
  home.appendChild(homeImage);
  home.appendChild(Paragraph("Order online or visit us!"));
  return home;
}


function Paragraph(string){
    const paragraphText = document.createElement("p");
    paragraphText.textContent=string;
    return paragraphText;
}

function loadHome() {
    const content = document.querySelector(".content");
    if(document.querySelector(".menuItem")){
        const removeMenuContent = document.querySelector(".menuItem");
        removeMenuContent.textContent="";
    }
    content.appendChild(createHome());
}

export default loadHome;
