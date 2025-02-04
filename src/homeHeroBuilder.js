import myHeroImg from "../assets/pastaAlPestoHome.jpg";
import { clearContent } from "./clearContent";
import { menuLoader } from "./menuLoader";
import { setActiveState } from "./setActiveState";

export function heroBuilder(contentDiv) {
  const heroDiv = document.createElement("div");
  heroDiv.classList.add("hero");

  const heroImgDiv = document.createElement("div");
  heroImgDiv.classList.add("hero__img-container", "img-container");

  const heroImg = document.createElement("img");
  heroImg.src = myHeroImg;
  heroImg.alt = "pesto image";

  heroImgDiv.appendChild(heroImg);

  const heroTextDiv = document.createElement("div");
  heroTextDiv.classList.add("hero__text-container");

  const heroTitle = document.createElement("h1");
  heroTitle.classList.add("hero__text-container__title");
  heroTitle.textContent = "The real essence of Genova";

  const heroPara = document.createElement("p");
  heroPara.classList.add("hero__text-container__para");
  heroPara.textContent = "Come and try out our specialties based on Pesto Genovese, the original recipe from 1850s!";

  const heroBtn = document.createElement("button");
  heroBtn.classList.add("hero__text-container__btn", "menu-btn");
  heroBtn.textContent = "menu";
  heroBtn.type = "button";
  heroBtn.addEventListener("click", clearContent);
  heroBtn.addEventListener("click", menuLoader);
  heroBtn.addEventListener("click", setActiveState);

  heroTextDiv.append(heroTitle, heroPara, heroBtn);

  heroDiv.append(heroImgDiv, heroTextDiv);

  contentDiv.appendChild(heroDiv);
}
