import * as _ from "lodash";
import * as PIXI from "pixi.js";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

let sprite = PIXI.Sprite.from("assets/sample.png");

// Create the application helper and add its render target to the page
let app = new PIXI.Application({ width: 640, height: 360 });
app.stage.addChild(sprite);
document.body.appendChild(app.view);
