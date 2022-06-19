import { AssetLoader, prepareLoad } from '../limbo/core/assets';
import { gridBasedSpriteSheetData } from '../limbo/data/grid-based-sprite-sheet-data';
import WebFont from 'webfontloader';

export function preload() {
    prepareLoad(AssetLoader.Sound, "ouch", "ouch.ogg")
    WebFont.load({
        google: {
            families: ['Concert One']
        }
    });
}