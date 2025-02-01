import { contactBuilder } from "./homeContactBuilder.js";
import { heroBuilder } from "./homeHeroBuilder.js";
import { infoBuilder } from "./homeInfoBuilder.js";

export function homeLoader() {
  const contentDiv = document.querySelector("#content");
  heroBuilder(contentDiv);
  infoBuilder(contentDiv);
  contactBuilder(contentDiv);
}
