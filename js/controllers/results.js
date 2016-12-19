(function() {
  
  var app = angular.module("AngularQuiz");
  
  resultsCtrl.$inject = ['QuizMetrics', 'DataService'];
  
  app.controller("ResultsController", resultsCtrl);
  
  // resultsCtrl
  function resultsCtrl(quizMetrics, dataSvc) {
    var results = this;
    
    results.quizMetrics = quizMetrics;
    results.dataService = dataSvc;
    results.getAnswerClass = getAnswerClass;
    results.setActiveQuestion = setActiveQuestion;
    results.calculatePerc = calculatePerc;
    results.reset = reset;
    results.activeQuestion = 0;
    
    // Apply style to correct text answers
    function getAnswerClass(index) {
      if(index === quizMetrics.correctAnswers[results.activeQuestion]) {
        return "correct-img-answer";
      }
      
      else if(index === dataSvc.quizQuestions[results.activeQuestion].selected) {
        return "incorrect-img-answer";
      }
    }
    
    // Set active question from current loop
    function setActiveQuestion(index) {
      results.activeQuestion = index;
    }
    
    // Calculate number of correct answers out of total
    function calculatePerc() {
      return quizMetrics.numCorrect / dataSvc.quizQuestions.length * 100;
    }
    
    // Reset everything after quiz is finished
    function reset() {
      quizMetrics.changeState("results", false);
      quizMetrics.numCorrect = 0;
      
      for(var i = 0; i < dataSvc.quizQuestions.length; i++) {
        var data = dataSvc.quizQuestions[i];
        
        data.selected = null;
        data.correct = null;
      }
    }
    
  }
  
})();
