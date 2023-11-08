import './css/style.css'
import Config from './js/config';
import CanvasGraphics from './js/canvasGraphics';
import Game from './js/game';
import Gravity from './js/gravity';

const config = new Config;
const canvasGraphics = new CanvasGraphics;
const gravity = new Gravity(config);
const game = new Game(canvasGraphics, config, gravity);

const btn = document.querySelector('.btn');

btn.addEventListener('click', game.gameRestart.bind(game));

game.gameRestart();
















