class Tube {

   constructor(canvasGraphics, config, bird) {

      this.canvasGraphics = canvasGraphics;
      this.config = config;
      this.bird = bird;

      this.tubes = []; // массив с трубами
      this.crashFlag = false; // флаг столкновения с трубой или полом
      this.floorFallFlag = false; // флаг касания пола, для остановки анимации
      this.tubesCreateTime = this.config.initialTubesCreateTime // отступ до появления первой трубы
      this.interval = 0 // отсчет времени от создания очередной трубы
      this.tubeTimeMarker = false // маркер, показывающий, что пора бы уже создать новую трубу
      this.speed = this.config.speed // скорость движения труб, исходя из 60 кадров/сек

      // самая первая труба
      this.tubes[0] = {
         x: (this.config.canvasWidth + Math.floor(this.config.initialTubeGap / this.speed) * this.speed),
         y: Math.floor(Math.random() * (this.config.upTubeYMax - this.config.upTubeYMin) + this.config.upTubeYMin),
      }

   }


   drawTubes(crashFlag) {

      for (let i = 0; i < this.tubes.length; i++) {

         this.canvasGraphics.draw(this.config.tubeSize.upSx, this.config.tubeSize.sy, this.config.tubeSize.width, this.config.tubeSize.height, this.tubes[i].x, this.tubes[i].y, this.config.tubeSize.gameWidth, this.config.tubeSize.height)
         this.canvasGraphics.draw(this.config.tubeSize.downSx, this.config.tubeSize.sy, this.config.tubeSize.width, this.config.tubeSize.height, this.tubes[i].x, this.tubes[i].y + this.config.tubeSize.height + this.config.gateHeight, this.config.tubeSize.gameWidth, this.config.tubeSize.height)

         if (crashFlag == false) { this.tubes[i].x = this.tubes[i].x - this.speed }

      }

      if (this.tubes[0].x == this.config.canvasWidth) {

         this.now = new Date(); // как только появилась первая труба, начинаем отсчёт времени

      }

   }


   tubesTimeCheck() {

      let now1 = new Date();
      this.interval = now1 - this.now;
      if (Math.floor(this.interval / this.tubesCreateTime) == 1) { // проверяем, не прошла ли секунда

         this.tubeTimeMarker = true;
         this.now = new Date() // обнуляем таймер
      }

      else { this.tubeTimeMarker = false } // если ещё не прошла секунда, значит ещё не время
   }


   createNextTube() {

      if (this.tubeTimeMarker == true && this.crashFlag == false) {  // если уже пора, добавляем ещё трубу в массив

         this.tubes.push({

            x: this.config.canvasWidth,
            y: Math.floor(Math.random() * (this.config.upTubeYMax - this.config.upTubeYMin) + this.config.upTubeYMin)
         })
      }

   }


}

export default Tube;