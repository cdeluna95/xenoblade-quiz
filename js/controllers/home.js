(function() {
  
  var app = angular.module("AngularQuiz");
  
  app.controller("HomeController", homeCtrl);
  
  homeCtrl.$inject = ['QuizMetrics'];
  
  // homeCtrl
  function homeCtrl(quizMetrics) {
    var home = this;
    
    home.activateQuiz = activateQuiz;
    home.quizMetrics = quizMetrics;
    
    // Activate quiz
    function activateQuiz() {
      quizMetrics.changeState("quiz", true);
    }
  }
  
})();
