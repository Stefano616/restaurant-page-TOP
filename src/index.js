import "./styles.css";
import { homeLoader } from "./homeLoader";
import { menuLoader } from "./menuLoader";
import { aboutLoader } from "./aboutLoader";
import { clearContent } from "./clearContent";
import { setActiveState } from "./setActiveState";

const navBtnsNodeList = document.querySelectorAll(".nav__btn");

function loadContent(e) {
  const btnClass = e.target.classList;
  if (btnClass.contains("home-btn")) {
    homeLoader();
  } else if (btnClass.contains("menu-btn")) {
    menuLoader();
  } else if (btnClass.contains("about-btn")) {
    aboutLoader();
  } else {
    alert("ooops, there was a problem");
  }
}

navBtnsNodeList.forEach((btn) => {
  btn.addEventListener("click", clearContent);
  btn.addEventListener("click", loadContent);
  btn.addEventListener("click", setActiveState);
});

homeLoader();
