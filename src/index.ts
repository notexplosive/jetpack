import * as PIXI from "pixi.js";

if (process.env.NODE_ENV !== "production") {
  console.log("💻🤖 DEVELOPMENT BUILD DETECTED 🤖💻");
}

document.body.style.margin = "0";
document.body.tabIndex = 1;
document.body.style.background = "rgb(0, 0, 50)";

let app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
});

document.body.appendChild(app.view);