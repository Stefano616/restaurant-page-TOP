export function infoBuilder(contentDiv) {
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info");

  const infoParaLink = document.createElement("a");
  infoParaLink.href = "https://en.wikipedia.org/wiki/Pesto";
  infoParaLink.target = "_blank";
  infoParaLink.textContent = "click here";

  const infoBtn = document.createElement("button");
  infoBtn.classList.add("info__btn", "about-btn");
  infoBtn.type = "button";
  infoBtn.textContent = "Read our story";

  const infoData = [
    `The origins of Pesto can be related to the ancient romans, although in the Roman Age the paste was based on smashed garlic, salt, cheese, herbs, olive oil and vinegar.`,
    `The modern Pesto, which features as main ingredient basil leaves, is reported for the first time in "La Vera Cucineria Genovese" from Emanuele Rossi in 1852.`,
    "To read more about the history of Pesto ",
    infoBtn,
  ];
  infoData.map((info, index) => {
    const infoDataDiv = document.createElement("div");
    infoDataDiv.classList.add("info__container");
    if (index != 2 && index != 3) {
      const infoPara = document.createElement("p");
      infoPara.textContent = info;
      infoDataDiv.appendChild(infoPara);
    } else if (index === 3) {
      infoDataDiv.appendChild(infoBtn);
    } else {
      const infoPara = document.createElement("p");
      infoPara.textContent = info;
      infoPara.appendChild(infoParaLink);
      infoDataDiv.appendChild(infoPara);
    }
    infoDiv.appendChild(infoDataDiv);
  });
  contentDiv.appendChild(infoDiv);
}
