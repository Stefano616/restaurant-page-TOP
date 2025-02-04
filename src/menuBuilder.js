import "./menu-styles.css";
import focacciaImg from "../assets/focacciaPesto.jpg";
import pastaImg from "../assets/pastaAlPestoMenu2.jpg";
import pizzaImg from "../assets/pizzaMenu.jpg";

export function myMenu(contentDiv) {
  const menuItems = [
    {
      title: "Focaccia e panini farciti",
      description: "Focaccia and sanwiches stuffed with pesto and other mediterranean delices.",
      price: "26 PLN",
      srcImg: focacciaImg,
      altImg: "stuffed focaccia and sandwiches",
    },
    {
      title: "Pasta al pesto",
      description: "Italian pasta with pesto and parmesan.",
      price: "45 PLN",
      srcImg: pastaImg,
      altImg: "Pasta dish with pesto",
    },
    {
      title: "Pizza pesto e stracchino",
      description: "Italian pizza with pesto and stracchino cheese.",
      price: "38 PLN",
      srcImg: pizzaImg,
      altImg: "pizza bianca",
    },
  ];

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  menuItems.map((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("menu__item");

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("menu__item__img-container", "img-container");
    const itemImg = document.createElement("img");
    itemImg.src = item.srcImg;
    console.log(itemImg.src);
    itemImg.alt = item.altImg;
    imgDiv.appendChild(itemImg);

    const itemInfoDiv = document.createElement("div");
    itemInfoDiv.classList.add("menu__item__info");
    const itemTitle = document.createElement("h2");
    itemTitle.classList.add("item-title");
    itemTitle.textContent = item.title;
    const itemDescription = document.createElement("p");
    itemDescription.classList.add("item-description");
    itemDescription.textContent = item.description;
    const itemPrice = document.createElement("p");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = item.price;
    itemInfoDiv.append(itemTitle, itemDescription, itemPrice);

    index % 2 ? itemDiv.append(itemInfoDiv, imgDiv) : itemDiv.append(imgDiv, itemInfoDiv);
    menuDiv.appendChild(itemDiv);
  });
  contentDiv.appendChild(menuDiv);
}

// photo credits:
// Photo by Gabriela Osinska: https://www.pexels.com/photo/delicious-italian-sub-sandwiches-on-rustic-board-30461847/
// Image by <a href="https://pixabay.com/users/hans-2/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=186338">Hans</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=186338">Pixabay</a>
// Image by <a href="https://pixabay.com/users/il-luminatore-11050487/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4818728">Il-Luminatore</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4818728">Pixabay</a>
