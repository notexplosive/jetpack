import * as PIXI from "pixi.js";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

document.body.style.margin = "0";
document.body.tabIndex = 1;
document.body.style.background = "rgb(0, 0, 50)";

let sprite = PIXI.Sprite.from("assets/sample.png");

let app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
});

app.stage.addChild(sprite);
document.body.appendChild(app.view);
