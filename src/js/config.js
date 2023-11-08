class Config {

   constructor() {

      //настройки отрисовки объектов со спрайта


      this.canvasWidth = +document.getElementById('game').getAttribute('width');
      this.canvasHeight = +document.getElementById('game').getAttribute('height');


      // птица

      this.birdSize = {
         sx: 276,
         syframe1: 112,
         swidth: 33,
         sheight: 28,
         width: 33,
         height: 28,
         frames: [

            {
               x: 276,
               y: 112,
               w: 34,
               h: 28,
            },
            {
               x: 276,
               y: 138,
               w: 34,
               h: 28,
            },
            {
               x: 276,
               y: 164,
               w: 34,
               h: 28,
            },
            {
               x: 276,
               y: 138,
               w: 34,
               h: 28,
            },]
      }


      //труба

      this.tubeSize = {
         upSx: 554,
         downSx: 501,
         sy: 0,
         width: 55,
         height: 401,
         gameWidth: this.birdSize.width * 2,

      }


      //земля

      this.floorSize = {
         sx: 276,
         sy: 0,
         sw: 225,
         sh: 50,
         width: 350,
         height: 50,
      }


      //фон

      this.bgSize = {
         sx: 0,
         sy: 0,
         sw: 275,
         sh: 230,
         width: 350,
         height: 230,
      }


      //баннер Геймовер

      this.bannerSize = {

         sx: 194,
         sy: 230,
         sw: 188,
         sh: 38,
         dx: 52,
         dy: 220,
         width: 250,
         height: 50,

      }


      //баннер GetReady

      this.grbannerSize = {

         sx: 2,
         sy: 230,
         sw: 188,
         sh: 40,
         dx: 59,
         dy: 100,
         width: 250,
         height: 50,

      }


      // настройки игры

      this.birdXpos = 60; //начальная позиция птицы на поле Х

      this.birdYpos = 200; //начальная позиция птицы на поле У

      this.gateHeight = 0.25 * (this.canvasHeight - this.floorSize.height); // высота прохода между трубами

      this.jumpHeight = this.gateHeight / 2;  //высота подпрыгивания птицы

      this.initialTubesCreateTime = 1000; //частота появления труб, начальная - 1секунда по ТЗ

      this.speed = Math.round((this.tubeSize.width * 4) / 60); // скорость движения труб исходя из 60fps

      this.gravityAccelerate = 0.04; //ускорение гравитации при свободном падении птицы

      this.initialGravity = 1; // начальная гравитация (без ускорения)

      this.upTubeYMax = -175; // минимальная высота потолка прохода между трубами ( мах У верхней трубы)

      this.upTubeYMin = -325; // максимальная высота потолка прохода между трубами ( мин У верхней трубы)

      this.initialTubeGap = 200 // расстояние до первой трубы в начале игры



      // настройки анимации, не влияющие на игру

      this.backgroundSpeed = 1; // своя скорость фона, для красоты, как бы перспектива
      this.birdAnimationSpeedCoeff = 10; // коэфф-т во сколько раз частота взмахов крыльями меньше скорости движения
      this.jumpRotateTime = 15; // время нахождения в повернутом состоянии при прыжке
      this.upRotateAngle = -30; // угол поворота птицы при прыжке
      this.downRotateAngle = 30; // угол поворота птицы при свободном падении
      this.fallRotateAngle = 90; // угол поворота птицы при падении после удара


      /*  // чекпоинт прохода середины трубы, чтобы Х примерно середины трубы был кратным кол-ву кадров перемещения (чтобы проверять на преодоление)
       this.pathSpeedX = Math.floor((this.canvasWidth + this.tubeSize.width / 2 - this.birdXpos) / this.speed)
       this.checkpointX = this.canvasWidth + this.tubeSize.width / 2 - (Math.floor(this.pathSpeedX * this.speed)) */

   }

}



export default Config;