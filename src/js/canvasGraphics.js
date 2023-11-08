class CanvasGraphics {

   constructor() {

      this.img = new Image();
      this.img.src = 'sprite.png';

      this.canvas = document.getElementById('game');
      this.ctx = this.canvas.getContext('2d');

   }


   drawSky() {    //закраска неба голубеньким

      this.ctx.fillStyle = '#4ec8ed'
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

   }


   draw(sx, sy, sw, sh, dx, dy, dw, dh) {   //отрисовка компонентов на канвасе

      this.ctx.drawImage(this.img, sx, sy, sw, sh, dx, dy, dw, dh)

   }


   drawRotated(degrees, imageCenter, imageRotatedPosition) {   //отрисовка повернутых компонентов на канвасе

      this.ctx.save(); //запоминание состояния канваса
      this.ctx.translate(imageCenter.bcXpos, imageCenter.bcYpos); //установка центра поворота в нужную точку
      this.ctx.rotate(degrees * Math.PI / 180); // поворот всего канваса, отрисовка элемента
      this.draw(imageRotatedPosition.sx, imageRotatedPosition.sy, imageRotatedPosition.sw, imageRotatedPosition.sh, imageRotatedPosition.dx, imageRotatedPosition.dy, imageRotatedPosition.dw, imageRotatedPosition.dh);
      this.ctx.restore();  //восстановление ранее запомненного состояния канваса

   }


   clear() {

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
   }

}

export default CanvasGraphics;

