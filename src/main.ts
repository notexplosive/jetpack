import { Circle, Container, Point, Rectangle, Text, TextStyle } from 'pixi.js';
import { game } from "./limbo/index";
import { CirclePrimitive, OmniPrimitive, LinePrimitive, RectanglePrimitive } from './limbo/render/primitive';


let circle = new CirclePrimitive(true, 10, {})
circle.position.set(50, 50)

let line = new LinePrimitive(new Point(0, 0), new Point(122, 122), {})
let childCircle = new CirclePrimitive(false, 15, {})
let rectChild = new RectanglePrimitive(false, 20, 20, {})

export function main() {
    const plantRoot = game.world.addChild(new Container());
    plantRoot.x = 300;
    plantRoot.y = 200;

    let text = new Text("Hello world", { fontFamily: "Roboto", fill: 0xffffff })

    game.app.stage.addChild(text)

    game.world.addChild(circle)
    circle.addChild(line)

    line.addChild(childCircle)
    childCircle.position = line.end

    line.addChild(rectChild)

    rectChild.offset = new Point(10, 10)

    rectChild.position = new Point(200, 0)
}

let totalTime = 0
export function update(dt: number) {
    totalTime += dt * 60

    circle.x = Math.sin(totalTime / 100) * 100

    circle.rotation += dt
}