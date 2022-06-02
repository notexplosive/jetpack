import * as _ from "lodash";
import { printMe } from "./print";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack!"], " ");

  printMe();

  return element;
}

document.body.appendChild(component());
