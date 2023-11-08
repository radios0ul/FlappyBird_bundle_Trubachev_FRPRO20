class Score {


   constructor() {

      this.currentScore = 0;
      this.bestScore = localStorage.getItem("bestScoreBird");
   }



   scorePlus() {

      this.currentScore++;
      document.getElementById('current-score').innerText = this.currentScore;

   }


   currentScoreZero() {

      this.currentScore = 0;
      document.getElementById('current-score').innerText = 0;

   }


   bestScoreRenew() {

      if (this.currentScore > this.bestScore) {
         document.getElementById('best-score').innerText = this.currentScore;
         localStorage.setItem("bestScoreBird", this.currentScore)

      }
   }


   bestScoreGet() {

      this.bestScore = localStorage.getItem("bestScoreBird");

      if (!this.bestScore) {
         this.bestScore = 0
         document.getElementById('best-score').innerText = this.bestScore
      }

      else {
         document.getElementById('best-score').innerText = this.bestScore
      }
   }



   scoreReset() {

      localStorage.clear();
      this.bestScore = 0;
   }


}

export default Score;