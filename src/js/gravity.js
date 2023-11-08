class Gravity {

   constructor(config) {

      this.config = config;

      this.initialGravity = this.config.initialGravity
      this.gravity = this.initialGravity
      this.gravityAccelerate = this.config.gravityAccelerate
   }

   gravityReset() {

      this.gravity = this.initialGravity
      this.gravityAccelerate = this.config.gravityAccelerate

   }


   gravityAction(y) {

      y = y + this.gravity

      this.gravity += this.gravityAccelerate

      return y;

   }


   gravityAccelerateAction() {

      this.gravity += this.gravityAccelerate

   }


   gravityReset() {

      this.gravity = this.initialGravity

   }

   gravityFallAction() {

      this.gravity = this.initialGravity + 8;

   }


}

export default Gravity;