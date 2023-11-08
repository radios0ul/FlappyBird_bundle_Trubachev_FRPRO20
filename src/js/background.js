class Background {

   constructor(canvasGraphics, config) {


      this._bgX = 0// начальная позиция фона
      this._canvasGraphics = canvasGraphics;
      this._config = config
   }


   drawBackground(floorFallFlag) {

      this._canvasGraphics.drawSky()

      if (floorFallFlag == false) { this._bgX -= this._config.backgroundSpeed } //останавливает движение фона, если столкнулся

      if (this._bgX == -this._config.canvasWidth) { this._bgX = 0 } // заново запускает фон, когда он проедет через кадр

      this._canvasGraphics.draw(this._config.bgSize.sx, this._config.bgSize.sy, this._config.bgSize.sw, this._config.bgSize.sh, this._bgX, this._config.canvasHeight - this._config.bgSize.height, this._config.canvasWidth, this._config.bgSize.height)
      this._canvasGraphics.draw(this._config.bgSize.sx, this._config.bgSize.sy, this._config.bgSize.sw, this._config.bgSize.sh, this._bgX + this._config.canvasWidth, this._config.canvasHeight - this._config.bgSize.height, this._config.canvasWidth, this._config.bgSize.height)

   }

}

export default Background;