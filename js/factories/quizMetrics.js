(function() {
  
  var app = angular.module("AngularQuiz");
  
  app.factory("QuizMetrics", quizMetrics);
  
  quizMetrics.$inject = ['DataService'];
  
  // quizMetrics
  function quizMetrics(dataSvc) {
    var quizObj = {
      quizActive: false,
      resultsActive: false,
      changeState: changeState,
      correctAnswers: [],
      markQuiz: markQuiz,
      numCorrect: 0
    };
    
    return quizObj;
    
    // Change state to quiz or results page
    function changeState(metric, state) {
      if(metric === "quiz") {
        quizObj.quizActive = state;
      }
      
      else if (metric === "results") {
        quizObj.resultsActive = state;
      }
      
      else {
        return false;
      }
    }
    
    // Corrects answers
    function markQuiz() {
      quizObj.correctAnswers = dataSvc.correctAnswers;
      for(var i = 0; i < dataSvc.quizQuestions.length; i++) {
        if (dataSvc.quizQuestions[i].selected === dataSvc.correctAnswers[i]) {
          dataSvc.quizQuestions[i].correct = true;
          quizObj.numCorrect++;
        }
        
        else {
          dataSvc.quizQuestions[i].correct = false;
        }
      }
    }
    
  }
  
})();
