import * as PIXI from "pixi.js";
import { PrimitiveRenderer } from "./limbo/render/primitive";
import { Rectangle, LineStyle, Graphics } from 'pixi.js';
import { Vector2 } from "./limbo/data/vector2";
import { colorToLineStyle } from "./limbo/util/linestyle";

if (process.env.NODE_ENV !== "production") {
  console.log("💻🤖 DEVELOPMENT BUILD DETECTED 🤖💻");
}

document.body.style.margin = "0";
document.body.tabIndex = 1;
document.body.style.background = "rgb(0, 0, 50)";

let app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x111111,
});

document.body.appendChild(app.view);

var primitiveRenderer = new PrimitiveRenderer(app.stage);

var filled = false;

primitiveRenderer.rectangle(filled, new Rectangle(100, 100, 50, 50), colorToLineStyle(0xFFAAFF));

primitiveRenderer.rectangle(filled, new Rectangle(500, 500, 50, 50), colorToLineStyle(0xFFFFAA));

var lineStyle = new PIXI.LineStyle();
lineStyle.color = 0xFF0000;
lineStyle.width = 1;
lineStyle.join = PIXI.LINE_JOIN.ROUND;

primitiveRenderer.line(new Vector2(300, 300), new Vector2(500, 200), lineStyle)

primitiveRenderer.circle(filled, new Vector2(200, 200), 50, lineStyle);