class Banner {


   constructor(canvasgraphics, config) {

      this.canvasgraphics = canvasgraphics;
      this.config = config;

      this.restartButton = document.querySelector('.btn')
      this.infobanner = document.querySelector('.anykey')

   }


   drawGameOver() {

      this.canvasgraphics.draw(this.config.bannerSize.sx, this.config.bannerSize.sy, this.config.bannerSize.sw, this.config.bannerSize.sh, this.config.bannerSize.dx, this.config.bannerSize.dy, this.config.bannerSize.width, this.config.bannerSize.height);

   }

   drawGetReady() {

      this.canvasgraphics.draw(this.config.grbannerSize.sx, this.config.grbannerSize.sy, this.config.grbannerSize.sw, this.config.grbannerSize.sh, this.config.grbannerSize.dx, this.config.grbannerSize.dy, this.config.grbannerSize.width, this.config.grbannerSize.height);
   }

   hideRestart() {

      this.restartButton.classList.add('hidden')
      this.infobanner.classList.remove('hidden')

   }

   showRestart() {

      this.restartButton.classList.remove('hidden')
      this.infobanner.classList.add('hidden')

   }

}

export default Banner;