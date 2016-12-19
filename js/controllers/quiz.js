(function() {
  
  var app = angular.module("AngularQuiz");
  
  app.controller("QuizController", quizCtrl);
  
  quizCtrl.$inject = ['QuizMetrics', 'DataService'];
  
  // quizCtrl
  function quizCtrl(quizMetrics, dataSvc) {
    var quiz = this;
    
    quiz.quizMetrics = quizMetrics;
    quiz.dataService = dataSvc;
    quiz.setActiveQuestion = setActiveQuestion;
    quiz.selectAnswer = selectAnswer;
    quiz.questionAnswered = questionAnswered;
    quiz.finalizeAnswers = finalizeAnswers;
    quiz.activeQuestion = 0;
    quiz.error = false;
    quiz.finalize = false;
    
    // Go back to first unanswered question
    function setActiveQuestion(index) {
      if(index === undefined) {
        var breakOut = false;
        var quizLength = dataSvc.quizQuestions.length - 1;
        
        while(!breakOut) {
          quiz.activeQuestion = quiz.activeQuestion < quizLength ? ++quiz.activeQuestion : 0;
          
          if(quiz.activeQuestion === 0) {
            quiz.error = true;
          }
          
          if(dataSvc.quizQuestions[quiz.activeQuestion].selected === null) {
            breakOut = true;
          }
        }
      } 
      
      else {
        quiz.activeQuestion = index;
      }
    }
    
    // Activate selected answer upon click
    function selectAnswer(index) {
      dataSvc.quizQuestions[quiz.activeQuestion].selected = index;
    }
    
    // Continue through each unanswered question
    function questionAnswered() {
      var numQuestionsAnswered = 0;
      var quizLength = dataSvc.quizQuestions.length;
      
      for(var i = 0; i < quizLength; i++) {
        if(dataSvc.quizQuestions[quiz.activeQuestion].selected !== null) {
          numQuestionsAnswered++;
          if(numQuestionsAnswered >= quizLength) {
            for(var j = 0; j < quizLength; j++) {
              if(dataSvc.quizQuestions[j].selected === null) {
                setActiveQuestion(j);
              
                return;
              }
            }
          
            quiz.error = false;
            quiz.finalize = true;
            return;
          }
        }
      }
      
      quiz.setActiveQuestion();
    }
    
    // Finalize quiz
    function finalizeAnswers() {
      quiz.finalize = false;
      numQuestionsAnswered = 0;
      quiz.activeQuestion = 0;
      quizMetrics.markQuiz();
      quizMetrics.changeState("results", true);
      quizMetrics.changeState("quiz", false);
    }
    
  }
  
})();
