# Limbo Game Engine Template

This is the template for the wrapper to run the limbo engine. It's _also_ a convenient getting-started template for people wanting to use pixi.js + typescript + webpack.

I (NotExplosive) made this for myself but it might be useful to other people who don't want to have to learn how webpack and typescript work to get started (it took me 2 days of hairpulling and tutorials to get this far, plus several weeks of tiny adjustment).

## Why

This template gives you the following:

- This is a ready-to-use pixi.js + typescript + webpack setup.
- It also (optionally) includes [limbo](https://github.com/notexplosive/limbo), my pixi.js game engine. If you don't want this you can just delete it after you clone the template. (at time of writing limbo is in _very_ early development, it probably isn't useful to you)
- You can run `npm start` and get a hot-reloaded development environment
- You can run `npm run build` and get a production build ready for itch.io

## How do I use it?

To run this template you'll need the latest version of Node (last confirmed working versions are `npm 8.12.1` and `node 16.15.1`).

- Click the green `Use This Template` above (must be logged into GitHub for this to show up)
- Walk through the flow of creating a repo.
- Run `npm install`
- If you want to use limbo (very optional!): run `git submodule update --init --recursive`
- If you do NOT want to use limbo...
  - delete `.gitmodules` and everything in `src`
  - create a file at `src/index.ts`, this will become your entrypoint
  - change `webpack.common.js`'s `entry` field to point to `src/index.ts`
- Run `npm start` to get a dev environment (this will open a browser tab with hot-reloading and other cool features)
- Start writing code...
  - If using limbo: `src/main.ts`
  - If not: `src/index.ts`
