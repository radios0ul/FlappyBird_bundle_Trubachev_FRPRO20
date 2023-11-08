class Bird {

   constructor(canvasGraphics, config, gravity) {

      this.canvasGraphics = canvasGraphics;
      this.config = config;
      this.gravity = gravity;


      this.currentFrame = 0; // счетчик кадров крыльев
      this.z = 0; // счетчик кадров анимации для взмахов крыльями
      this.jumpTimer = 16 // счетчик кадров для прыжка, чтобы сначала птица летела прямо

      this.birdXpos = this.config.birdXpos
      this.birdYpos = this.config.birdYpos

      this.birdCenter = {}
      this.jumpHeight = this.config.jumpHeight

   }

   birdFramesControl() {  // контроль взмахов крыльями

      this.z++;
      if (this.z >= this.config.birdAnimationSpeedCoeff * this.config.birdSize.frames.length) { this.z = 0 }
      this.currentFrame = Math.trunc(this.z / this.config.birdAnimationSpeedCoeff)

   }


   birdDrawStraight() { // отрисовка птицы в прямом полете

      this.birdYpos = this.gravity.gravityAction(this.birdYpos)

      this.canvasGraphics.draw(this.config.birdSize.sx, this.config.birdSize.frames[this.currentFrame].y, this.config.birdSize.swidth, this.config.birdSize.sheight, this.birdXpos, this.birdYpos, this.config.birdSize.width, this.config.birdSize.height)

   }


   birdDrawRotated(degrees, currentFrame) {  // отрисовка птицы под углом

      this.birdYpos = this.gravity.gravityAction(this.birdYpos)

      this.birdCenter = {

         bcXpos: this.birdXpos + this.config.birdSize.width / 2,
         bcYpos: this.birdYpos + this.config.birdSize.height / 2,

      }

      this.birdRotatedPosition = {

         sx: this.config.birdSize.sx,
         sy: this.config.birdSize.frames[currentFrame].y,
         sw: this.config.birdSize.swidth,
         sh: this.config.birdSize.sheight,
         dx: -this.config.birdSize.width / 2,
         dy: -this.config.birdSize.width / 2,
         dw: this.config.birdSize.width,
         dh: this.config.birdSize.height,

      }

      this.canvasGraphics.drawRotated(degrees, this.birdCenter, this.birdRotatedPosition)

   }


   birdJump() {  // прыжок

      this.birdYpos = this.birdYpos - 25;

      this.jumpTimer = 0

      this.gravity.gravityReset()

   }


   birdFall() {  // при столкновении с трубой птичка падает вниз головой

      this.crashFlag = true;

      this.gravity.gravityFallAction()

      this.birdDrawRotated(this.config.fallRotateAngle, 1)

   }


   drawBird(crashFlag) {  // отрисовка кадра птицы под нужным углом


      if (this.jumpTimer < this.config.jumpRotateTime && crashFlag == false) {
         this.birdDrawRotated(this.config.upRotateAngle, this.currentFrame)
         this.jumpTimer++
      }
      else if (this.jumpTimer == this.config.jumpRotateTime && crashFlag == false) {
         this.birdDrawRotated(this.config.downRotateAngle, this.currentFrame)
      }
      else if (crashFlag == false) {
         this.birdDrawStraight()
      }

   }

   birdReset() {  // сброс позиции прицы на начальные значения

      this.birdXpos = this.config.birdXpos
      this.birdYpos = this.config.birdYpos
      this.currentFrame = 0;
      this.z = 0;
      this.jumpTimer = 16
      this.birdDrawStraight()
   }

}


export default Bird;