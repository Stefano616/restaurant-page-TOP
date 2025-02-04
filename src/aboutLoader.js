import { aboutBuilder } from "./aboutBuilder";

export function aboutLoader() {
  const contentDiv = document.querySelector("#content");
  aboutBuilder(contentDiv);
}
