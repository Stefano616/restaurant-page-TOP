import { myMenu } from "./menuBuilder";

export function menuLoader() {
  const contentDiv = document.querySelector("#content");
  myMenu(contentDiv);
}
