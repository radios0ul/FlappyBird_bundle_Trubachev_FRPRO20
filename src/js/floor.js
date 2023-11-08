class Floor {

   constructor(canvasGraphics, config) {


      this.canvasGraphics = canvasGraphics;
      this.config = config
   }


   drawFloor() {

      this.canvasGraphics.draw(this.config.floorSize.sx, this.config.floorSize.sy, this.config.floorSize.sw, this.config.floorSize.sh, 0, this.config.canvasHeight - this.config.floorSize.sh, this.config.floorSize.width, this.config.floorSize.height)

   }

}

export default Floor; 