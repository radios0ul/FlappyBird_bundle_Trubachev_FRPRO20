
import Background from './background';
import Floor from './floor';
import Tube from './tube';
import Score from './score';
import Banner from './banner';
import Bird from './bird';

class Game {

   constructor(canvasGraphics, config, gravity) {

      this.canvasGraphics = canvasGraphics;
      this.config = config;
      this.gravity = gravity;

      this.crashFlag = false; // флаг столкновения с трубой или полом
      this.floorFallFlag = false; // флаг касания пола, для остановки анимации
      this.id = null // id анимации
      this.playMode = false  // режим игры - GetReady или Play
      this.firstClickFlag = true  // флажок, чтобы игра начиналась по клику на поле

      this.screen = document.getElementById('game_container')
      this.gameField = document.getElementById('game_container')
   }


   fallToFloorCheck() {  // если птица упала на пол - останавливаем анимацию и геймовер

      if (this.bird.birdYpos + this.config.birdSize.height >= this.config.canvasHeight - this.config.floorSize.sh) {

         this.bird.birdYpos = this.config.canvasHeight - this.config.floorSize.sh - this.config.birdSize.height
         this.floorFallFlag = true
         this.score.bestScoreRenew()
         this.banner.drawGameOver()
         this.banner.showRestart()
      }

      if (this.bird.birdYpos <= 1) {
         this.bird.birdYpos = 1
      }
   }


   animationStart() {  // запуск анимации

      if (this.floorFallFlag == false) {

         this.id = requestAnimationFrame(this.drawGame.bind(this))
      }
      else { cancelAnimationFrame(this.id) }

      if (this.playMode == false) {
         this.banner.drawGetReady()
      }

   }


   gameStartListener() {  //запуск игры по клику, после заставки GetReady

      this.screen.addEventListener('click', this.setPlayMode.bind(this))

      document.addEventListener('keydown', this.setPlayMode.bind(this))

      document.addEventListener('keydown', this.bird.birdJump.bind(this.bird))

      this.gameField.addEventListener("click", this.bird.birdJump.bind(this.bird))

   }


   setPlayMode() {    //запуск игры по клику, после заставки GetReady

      if (this.firstClickFlag) {
         this.firstClickFlag = false
         this.tube.speed = this.config.speed
         this.gravity.gravity = this.config.initialGravity
         this.gravity.gravityAccelerate = this.config.gravityAccelerate
         this.playMode = true
      }

   }


   crashAndOvercomeCheck() {  // проверка на столкновение с трубой или прохождения центра трубы

      for (let i = 0; i < this.tube.tubes.length; i++) {

         if (
            (this.bird.birdXpos + this.config.birdSize.width >= this.tube.tubes[i].x) &&
            (this.bird.birdXpos <= this.tube.tubes[i].x + this.config.tubeSize.width / 2) &&
            ((this.bird.birdYpos <= this.tube.tubes[i].y + this.config.tubeSize.height) ||
               (this.bird.birdYpos + this.config.birdSize.height >= this.tube.tubes[i].y + this.config.tubeSize.height + this.config.gateHeight))
         ) {

            this.tube.speed = 0;
            this.crashFlag = true

         }

         else if (this.crashFlag == true) {

            this.bird.birdFall()

         }

         if (this.tube.tubes[i].x + this.config.tubeSize.width / 2 == this.checkpointX) {

            this.score.scorePlus()
         }
      }
   }



   drawGame() {   // отрисовка кадра игры

      this.background.drawBackground(this.floorFallFlag)
      this.bird.birdFramesControl()
      this.bird.drawBird(this.crashFlag)

      this.animationStart()

      this.tube.drawTubes(this.crashFlag)
      this.tube.tubesTimeCheck()
      this.tube.createNextTube()
      this.crashAndOvercomeCheck()

      this.floor.drawFloor()
      this.fallToFloorCheck()

   }


   gameRestart() {  // запуск заставки GetReady и игры

      this.floor = new Floor(this.canvasGraphics, this.config);
      this.background = new Background(this.canvasGraphics, this.config);
      this.score = new Score;
      this.tube = new Tube(this.canvasGraphics, this.config, this.bird);
      this.banner = new Banner(this.canvasGraphics, this.config);
      this.bird = new Bird(this.canvasGraphics, this.config, this.gravity);

      //чекпоинт прохода середины трубы, чтобы Х примерно середины трубы был кратным кол-ву кадров перемещения (чтобы проверять на преодоление)
      this.pathSpeedX = Math.floor((this.config.canvasWidth + this.config.tubeSize.width / 2 - this.config.birdXpos) / this.tube.speed)
      this.checkpointX = this.config.canvasWidth + this.config.tubeSize.width / 2 - (Math.floor(this.pathSpeedX * this.tube.speed))

      //this.score.scoreReset()

      this.gameStartListener()
      this.bird.birdReset()
      this.canvasGraphics.clear()

      this.floorFallFlag = false
      this.crashFlag = false
      this.playMode = false
      this.firstClickFlag = true

      this.banner.hideRestart()
      this.score.bestScoreGet()
      this.score.currentScoreZero()

      this.tube.speed = 0  // чтобы на заставке GetReady не было труб и гравитации
      this.gravity.gravity = 0
      this.gravity.gravityAccelerate = 0

      this.drawGame()

   }

}


export default Game; 