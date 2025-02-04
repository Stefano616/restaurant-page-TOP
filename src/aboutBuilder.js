import "./about-styles.css";
import pestoImg from "../assets/pestoAbout.jpg";

export function aboutBuilder(contentDiv) {
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about");
  const aboutTitle = document.createElement("h2");
  aboutTitle.classList.add("about-title");
  aboutTitle.textContent = "This is our story";

  const aboutImgDiv = document.createElement("div");
  aboutImgDiv.classList.add("img-container", "img-container--about");
  const aboutImg = document.createElement("img");
  aboutImg.src = pestoImg;
  aboutImg.alt = "Pesto parmesan and garlic";
  aboutImgDiv.appendChild(aboutImg);

  const articleDiv = document.createElement("div");
  articleDiv.classList.add("article-container");
  const aboutArticle = document.createElement("article");
  aboutArticle.textContent = `Belonging to a family with roots in Genova, Liguria, we are keeper of the old traditional and original pesto recipe. 
  Made with selected ingredients including pecorino cheese, pine nuts, and olive oil, the full body taste of pesto comes from the basil leaves, which are collected young and tender, and are cultivated on the coastal hill where Iodine rich air permeate the greenhouses.`;
  articleDiv.appendChild(aboutArticle);
  aboutDiv.append(aboutTitle, aboutImgDiv, articleDiv);
  contentDiv.appendChild(aboutDiv);
}

// photo credit
// Image by <a href="https://pixabay.com/users/ippikiookami-1553739/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1002838">Peter Biela</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1002838">Pixabay</a>
