export function setActiveState(e) {
  const btn = e.target;
  const navBtnsNodeList = document.querySelectorAll(".nav__btn");
  navBtnsNodeList.forEach((item) => item.classList.remove("active"));
  btn.classList.toggle("active");
}
