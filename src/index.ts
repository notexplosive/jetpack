import * as _ from "lodash";
import { printMe } from "./print";
import { cube } from "./math";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

function component() {
  const element = document.createElement("pre");

  // element.innerHTML = _.join(["Hello", "webpack!"], " ");
  element.innerHTML = ["Hello webpack!", "5 cubed is " + cube(5)].join("\n\n");

  printMe();

  return element;
}

document.body.appendChild(component());
