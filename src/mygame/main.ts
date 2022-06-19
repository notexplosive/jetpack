import { Container, Point, Rectangle, Text, TextStyle } from 'pixi.js';
import { game } from "../index";
import { PrimitiveRenderer } from '../limbo/render/primitive';


// game().updaters.push(new Updater((dt: number) => { console.log(dt) }));

export function main() {
    const plantRoot = game.world.addChild(new Container());
    plantRoot.x = 300;
    plantRoot.y = 200;

    var plantRenderer = new PrimitiveRenderer(plantRoot);
    plantRenderer.circle(true, new Point(0, 0), 25, { color: 0x00ff00 })

    var primitiveRenderer = new PrimitiveRenderer(game.app.stage);

    var filled = false;

    primitiveRenderer.rectangle(filled, new Rectangle(100, 100, 50, 50), { width: 1, color: 0xFFAAFF });

    primitiveRenderer.rectangle(filled, new Rectangle(500, 500, 50, 50), { width: 1, color: 0xFFFFAA });

    var lineStyle = { color: 0xFF0000, width: 1 }

    primitiveRenderer.line(new Point(300, 300), new Point(500, 200), lineStyle)

    primitiveRenderer.circle(filled, new Point(200, 200), 50, lineStyle);

    let text = new Text("Hello world", { fontFamily: "Roboto", fill: 0xffffff })

    game.app.stage.addChild(text)
}